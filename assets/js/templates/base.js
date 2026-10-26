/*
  Cannes template gallery - shared frame.
  Each template renders as a small standalone HTML document inside a
  script-free iframe: no scripts, no external requests except the site images.
*/
(function () {
  "use strict";

  window.CANNES_TEMPLATES = window.CANNES_TEMPLATES || [];

  var ICONS =
    '<svg class="sprite" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">' +
    '<symbol id="ic-home" viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V21H3z"/><path d="M9 21v-6h6v6"/></symbol>' +
    '<symbol id="ic-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 5.2a3.5 3.5 0 0 1 0 5.6"/><path d="M18 14.2a6.5 6.5 0 0 1 3.5 5.8"/></symbol>' +
    '<symbol id="ic-chart" viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M3 21h18"/></symbol>' +
    '<symbol id="ic-check" viewBox="0 0 24 24"><path d="M4 12.5 9 17.5 20 6.5"/></symbol>' +
    '<symbol id="ic-bell" viewBox="0 0 24 24"><path d="M18 15V9a6 6 0 1 0-12 0v6l-1.5 2.5h15L18 15Z"/><path d="M10 20a2 2 0 0 0 4 0"/></symbol>' +
    '<symbol id="ic-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></symbol>' +
    '<symbol id="ic-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>' +
    '<symbol id="ic-cart" viewBox="0 0 24 24"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2.5 3h2.2l2.4 11.2a1.5 1.5 0 0 0 1.5 1.2h9.2a1.5 1.5 0 0 0 1.5-1.2L21 7H6"/></symbol>' +
    '<symbol id="ic-box" viewBox="0 0 24 24"><path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9L12 3Z"/><path d="m3.5 7.5 8.5 4.5 8.5-4.5M12 12v9"/></symbol>' +
    '<symbol id="ic-calendar" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></symbol>' +
    '<symbol id="ic-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></symbol>' +
    '<symbol id="ic-grid" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></symbol>' +
    '<symbol id="ic-settings" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M18.8 5.2l-2.1 2.1M7.3 16.7l-2.1 2.1"/></symbol>' +
    '<symbol id="ic-trend" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 7-7"/><path d="M14 8h6v6"/></symbol>' +
    '<symbol id="ic-chat" viewBox="0 0 24 24"><path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5Z"/></symbol>' +
    '<symbol id="ic-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>' +
    "</svg>";

  function frame(lang, css, body) {
    return (
      '<!doctype html><html lang="' + lang + '"><head><meta charset="utf-8">' +
      '<meta name="viewport" content="width=device-width, initial-scale=1">' +
      "<style>" +
      "*,*::before,*::after{box-sizing:border-box}" +
      "html{-webkit-text-size-adjust:100%}" +
      'body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:15px;line-height:1.55;color:#191817;background:#fff;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}' +
      "img{display:block;max-width:100%}a{color:inherit;text-decoration:none}" +
      "h1,h2,h3,h4,p,figure,blockquote{margin:0}ul,ol{margin:0;padding:0;list-style:none}" +
      "button{font:inherit;border:0;background:none;color:inherit;cursor:pointer}" +
      "input,select,textarea{font:inherit}" +
      ".wrap{width:100%;max-width:1140px;margin:0 auto;padding-left:32px;padding-right:32px}" +
      ".btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 20px;border-radius:999px;font-size:13px;font-weight:700;line-height:1.1;white-space:nowrap}" +
      ".ic{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;flex:none}" +
      ".sprite{position:absolute;width:0;height:0;overflow:hidden}" +
      "@media(max-width:640px){.wrap{padding-left:18px;padding-right:18px}}" +
      css +
      "</style></head><body>" +
      ICONS +
      body +
      "</body></html>"
    );
  }

  window.cannesTemplateFrame = frame;
})();
