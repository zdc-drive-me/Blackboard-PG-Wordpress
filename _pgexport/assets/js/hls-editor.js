// assets/js/hls-editor.js
(function () {
  "use strict";

  // --- Helpers ---
  function hasM3U8(video) {
    const s = video.querySelector('source[type="application/x-mpegURL"], source[type="application/vnd.apple.mpegurl"]');
    if (s && s.src) return /\.m3u8(\?.*)?$/i.test(s.src) ? s.src : null;
    if (video.currentSrc && /\.m3u8(\?.*)?$/i.test(video.currentSrc)) return video.currentSrc;
    if (video.src && /\.m3u8(\?.*)?$/i.test(video.src)) return video.src;
    return null;
  }

  function disableAutoplay(video) {
    // Hard-disable autoplay in the editor
    video.autoplay = false;
    video.removeAttribute('autoplay');
    // Keep muted/playsinline; they don't force play without autoplay=true
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
  }

  function pauseOnReady(video) {
    const doPause = () => {
      try { video.pause(); } catch (_) {}
      try { if (video.currentTime > 0.05) video.currentTime = 0.001; } catch (_) {}
    };
    // Pause when ready so the first frame is visible but not playing
    video.addEventListener('loadeddata', doPause, { once: true });
    // Also pause if something tries to start it
    video.addEventListener('play', () => { try { video.pause(); } catch (_) {} }, { once: true });
  }

  function attachNative(video, src) {
    video.src = src;
    pauseOnReady(video);
    video.load(); // load metadata/first frame; do NOT call play()
  }

  function attachHls(video, src) {
    if (video.__hlsAttached) return;
    video.__hlsAttached = true;

    pauseOnReady(video);

    // Safari can play HLS natively
    if (video.canPlayType && video.canPlayType('application/vnd.apple.mpegurl') === 'probably') {
      attachNative(video, src);
      return;
    }

    // Hls.js available?
    if (typeof window.Hls !== 'undefined' && window.Hls.isSupported()) {
      try {
        const hls = new Hls({ autoStartLoad: true, enableWorker: true, lowLatencyMode: true });
        hls.attachMedia(video);
        hls.on(Hls.Events.MEDIA_ATTACHED, function () {
          hls.loadSource(src);
        });
        video.__hlsInstance = hls;
      } catch (e) {
        // Fallback to native attempt (some browsers will just show poster)
        attachNative(video, src);
      }
    } else {
      attachNative(video, src);
    }
  }

  function processDoc(doc) {
    if (!doc) return;

    const tryAttach = (root) => {
      root.querySelectorAll('video').forEach((video) => {
        const src = hasM3U8(video);
        if (!src) return;
        disableAutoplay(video);
        attachHls(video, src);
      });
    };

    tryAttach(doc);

    // Re-run on Gutenberg re-renders
    new MutationObserver((muts) => {
      for (const m of muts) {
        m.addedNodes.forEach((n) => {
          if (n.nodeType !== 1) return;
          if (n.tagName === 'VIDEO') { tryAttach(n.ownerDocument); }
          else { tryAttach(n); }
        });
      }
    }).observe(doc.documentElement || doc.body, { childList: true, subtree: true });
  }

  function hookIframes(rootDoc) {
    const arm = (f) => {
      try {
        const idoc = f.contentDocument || f.contentWindow?.document;
        if (idoc && !idoc.__bbHlsEditorBooted) {
          idoc.__bbHlsEditorBooted = true;
          if (idoc.readyState === 'loading') idoc.addEventListener('DOMContentLoaded', () => processDoc(idoc), { once: true });
          else processDoc(idoc);
        }
      } catch (_) {}
    };
    rootDoc.querySelectorAll('iframe').forEach(arm);
    new MutationObserver(() => rootDoc.querySelectorAll('iframe').forEach(arm))
      .observe(rootDoc.documentElement, { childList: true, subtree: true });
  }

  function initHere() {
    processDoc(document);
    hookIframes(document);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHere, { once: true });
  } else {
    initHere();
  }
})();