// assets/js/video-auto.js
(function () {
  "use strict";

  const SELECTOR   = "video";           // manage all videos
  const ENTER_VIS  = 0.25;              // play when 25% visible
  const LEAVE_VIS  = 0.10;              // pause when 10% visible
  const IO_OPTIONS = { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] };
  const MAX_RETRY  = 6, RETRY_MS = 250;

  function log(){ /* console.debug('[VIDAUTO]', ...arguments); */ }

  function ensureAttrs(v) {
    if (!v.hasAttribute("muted")) v.muted = true;
    if (!v.hasAttribute("playsinline")) v.playsInline = true;
  }

  function findM3u8Src(v) {
    let src = v.currentSrc || v.getAttribute('src');
    if (!src) {
      const s = v.querySelector('source[type="application/x-mpegURL"], source[type="application/vnd.apple.mpegurl"]');
      if (s) src = s.src || s.getAttribute('src');
    }
    return (src && /\.m3u8(\?|$)/i.test(src)) ? src : null;
  }

  function attachHlsIfNeeded(v) {
    // If browser can play HLS natively (Safari), do nothing special
    const native = v.canPlayType && v.canPlayType('application/vnd.apple.mpegurl') === 'probably';
    const needsHls = !!findM3u8Src(v);
    if (!needsHls) return;                 // no HLS source
    if (native) { log('native HLS', v); return; } // let native handle it

    // If Hls lib not present, we can't attach, but native may still play
    if (!window.Hls) { log('Hls.js missing'); return; }

    // Already attached
    if (v._hls) return;

    const src = findM3u8Src(v);
    if (!src) return;

    const hls = new Hls({ enableWorker: true, lowLatencyMode: true });
    hls.attachMedia(v);
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
      hls.loadSource(src);
      v._hls = hls;
      v.dataset.hls = "1";
      v.dispatchEvent(new CustomEvent('hls:attached', { bubbles: true }));
      log('HLS attached', src);
    });

    v.addEventListener('emptied', function () {
      if (v._hls) {
        try { v._hls.destroy(); } catch(_) {}
        v._hls = null;
        delete v.dataset.hls;
      }
    }, { once: true });
  }

  function whenReady(v, cb) {
    if (v.readyState >= 2) { cb(); return; }
    const onReady = () => { v.removeEventListener('canplay', onReady); v.removeEventListener('loadeddata', onReady); cb(); };
    v.addEventListener('canplay', onReady, { once: true });
    v.addEventListener('loadeddata', onReady, { once: true });
  }

  function startStream(v) { if (v._hls?.startLoad) { try { v._hls.startLoad(); } catch(_) {} } }
  function stopStream(v)  { if (v._hls?.stopLoad)  { try { v._hls.stopLoad();  } catch(_) {} } }

  function safePlay(v, attempt = 0) {
    if (!v.__shouldPlay) return;
    ensureAttrs(v);

    const needsHls = !!findM3u8Src(v);
    if (needsHls && !v._hls && !v.canPlayType('application/vnd.apple.mpegurl')) {
      // Wait for attach to finish if HLS is necessary and not native
      const onAttached = () => { v.removeEventListener('hls:attached', onAttached); startStream(v); reallyPlay(); };
      v.addEventListener('hls:attached', onAttached, { once: true });
      attachHlsIfNeeded(v);
      return;
    }

    startStream(v);
    reallyPlay();

    function reallyPlay() {
      whenReady(v, () => {
        const p = v.play();
        if (p && typeof p.catch === 'function') {
          p.catch(() => {
            if (!v.__shouldPlay) return;
            if (attempt < MAX_RETRY) setTimeout(() => safePlay(v, attempt + 1), RETRY_MS);
          });
        } else {
          v.__wasPlaying = true;
        }
      });
    }
  }

  function safePause(v) { if (!v.paused) { try { v.pause(); } catch(_) {} } v.__wasPlaying = false; }

  function enter(v) { v.__shouldPlay = true; attachHlsIfNeeded(v); safePlay(v, 0); }
  function leave(v) { v.__shouldPlay = false; safePause(v); stopStream(v); if (v.dataset.resetOnLeave === "true") { try { v.currentTime = 0; } catch(_) {} } }

  function initIO(videos) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const v = e.target, r = e.intersectionRatio;
        if (!v.__inView && r >= ENTER_VIS) { v.__inView = true;  enter(v); }
        else if (v.__inView && r <= LEAVE_VIS) { v.__inView = false; leave(v); }
      });
    }, IO_OPTIONS);

    videos.forEach((v) => { ensureAttrs(v); attachHlsIfNeeded(v); io.observe(v); });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) videos.forEach(leave);
      else videos.forEach(v => { if (v.__inView) enter(v); });
    });

    // Kick any video already in view after layout settles
    window.addEventListener('load', () => {
      videos.forEach((v) => {
        const rect = v.getBoundingClientRect();
        const visiblePx = Math.max(0, Math.min(rect.bottom, innerHeight) - Math.max(rect.top, 0));
        const ratio = visiblePx / Math.max(1, rect.height);
        if (ratio >= ENTER_VIS) { v.__inView = true; enter(v); }
      });
    }, { once: true });
  }

  function init(rootDoc) {
    const scope = rootDoc || document;
    const videos = Array.from(scope.querySelectorAll(SELECTOR));
    if (!videos.length) return;

    // Minimalist click UX: pause if playing; if paused → reset + play
    scope.addEventListener('click', (e) => {
      const v = e.target.closest(SELECTOR);
      if (!v) return;
      if (v.paused) {
        try { v.currentTime = 0; } catch(_) {}
        v.__shouldPlay = true;
        enter(v); // will attach HLS if needed then play
      } else {
        v.__shouldPlay = false;
        leave(v);
      }
    });

    initIO(videos);
  }

  // Classic pages (front-end) or classic admin screens
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init(document), { once: true });
  } else {
    init(document);
  }

  // Gutenberg/Site Editor: also try to hook child iframes
  new MutationObserver(() => {
    document.querySelectorAll('iframe').forEach((f) => {
      try {
        const idoc = f.contentDocument || f.contentWindow?.document;
        if (idoc && !idoc.__videoAutoInit) {
          idoc.__videoAutoInit = true;
          if (idoc.readyState === 'loading') idoc.addEventListener('DOMContentLoaded', () => init(idoc), { once: true });
          else init(idoc);
        }
      } catch(_) {}
    });
  }).observe(document.documentElement, { childList: true, subtree: true });
})();