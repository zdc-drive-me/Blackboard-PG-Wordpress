(function () {
  function updateDate() {
    const now = new Date();

    // ---- Format date (no commas) ----
    const dateStr = new Intl.DateTimeFormat('en-GB', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(now).replace(/,/g, '');

    // ---- Format time (24-hour) ----
    const timeStr = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(now);

    // ---- Update desktop clock (main content area) ----
    const dateEl = document.getElementById('date-text');
    const timeEl = document.getElementById('time-text');

    if (dateEl) dateEl.textContent = dateStr;
    if (timeEl) timeEl.textContent = timeStr;

    // ---- Update mobile clock (sidebar) ----
    const dateElMobile = document.getElementById('date-text-mobile');
    const timeElMobile = document.getElementById('time-text-mobile');

    if (dateElMobile) dateElMobile.textContent = dateStr;
    if (timeElMobile) timeElMobile.textContent = timeStr;
  }

  document.addEventListener('DOMContentLoaded', () => {
    updateDate();
    setInterval(updateDate, 1000);
  });
})();