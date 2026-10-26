/*
  Cannes templates page:
  gallery filters, live demo thumbnails, and the full-screen preview dialog.
  No dependencies, no build step.
*/
(function () {
  "use strict";

  var ALL = (window.CANNES_TEMPLATES || []).slice();
  var byId = {};
  ALL.forEach(function (tpl) {
    byId[tpl.id] = tpl;
  });

  var PHONE = "6287877250304";
  var WA_BASE = "https://wa.me/" + PHONE;

  var COPY = {
    id: {
      metaTitle: "Template Website & Aplikasi UMKM - Cannes",
      metaDesc:
        "Sembilan template website dan aplikasi siap pakai untuk UMKM: landing page, profil perusahaan, katalog, menu digital, booking, portofolio, CRM, admin toko, dan kasir. Bisa dicoba langsung.",
      back: "Kembali ke beranda",
      langAria: "Ganti ke bahasa Inggris",
      wa: "Chat WhatsApp",
      eyebrow: "Template siap pakai",
      title: "Mulai dari tampilan yang <span>sudah jualan.</span>",
      lead: "Sembilan template untuk kebutuhan UMKM paling umum. Buka demonya, pilih yang paling dekat dengan bisnismu, lalu kami ganti warna, foto, dan teksnya jadi milikmu.",
      heroCta1: "Lihat 9 template",
      heroCta2: "Tanya dulu",
      stat1: "template siap pakai",
      stat1v: "9",
      stat2: "hari pengerjaan",
      stat2v: "1-14",
      floatOne: "1-14 hari",
      floatTwo: "Demo bisa dicoba",
      strip1: "WhatsApp",
      strip2: "QRIS & e-wallet",
      strip3: "Mobile-first",
      strip4: "SEO lokal",
      strip5: "Google Maps",
      strip6: "Google Analytics",
      galleryEyebrow: "Galeri template",
      galleryTitle: "Pilih yang paling dekat dengan bisnismu.",
      gallerySub:
        "Semua demo bisa dibuka dan dicoba. Warna, foto, dan teks bisa diganti tanpa mengubah struktur yang sudah terbukti enak dipakai.",
      filterAria: "Filter template",
      filterAll: "Semua",
      filterWeb: "Website",
      filterApp: "Aplikasi",
      searchAria: "Cari template",
      searchPh: "Cari template, misal: menu, kasir, katalog…",
      emptyTitle: "Belum ada yang cocok.",
      emptyBody: "Coba kata kunci lain, atau lihat semua template yang tersedia.",
      emptyReset: "Reset filter",
      demoNote:
        "Semua template di atas adalah demo. Isi, foto, dan nama bisnis akan diganti dengan milikmu. Buka demo untuk melihat versi desktop dan mobile.",
      stepsEyebrow: "Cara kerja",
      stepsTitle: "Dari pilih template sampai online.",
      stepsSub: "Rata-rata 1-14 hari kerja. Kamu tidak perlu menyiapkan apa pun kecuali foto dan info bisnis.",
      step1t: "Pilih template",
      step1b: "Buka demo, cek di HP dan desktop. Simpan link template yang paling cocok, atau tanya kami kalau ragu.",
      step2t: "Kirim materi",
      step2b: "Kirim logo, foto, daftar produk, dan nomor WhatsApp. Belum punya logo? Kami bantu buatkan yang simpel.",
      step3t: "Kami bangun & luncurkan",
      step3b: "Kami ganti warna dan isi, pasang domain, lalu serahkan akses penuh. Ada panduan video untuk update sendiri.",
      ctaKicker: "Tidak ada yang pas?",
      ctaTitle: "Kami bisa buat dari nol.",
      ctaBody:
        "Template mempercepat kerja, tapi bisnismu mungkin butuh alur sendiri. Ceritakan kebutuhannya, kami bantu pilih yang paling masuk akal untuk budget dan waktu.",
      ctaBtn: "Diskusi via WhatsApp",
      ctaNote: "Konsultasi gratis. Balasan di jam kerja 09.00-20.00 WIB.",
      footTag: "Bikin web untuk bisnismu.",
      footDesc: "Jasa pembuatan website untuk UMKM Indonesia. Cepat, jujur, dan siap jualan.",
      footPages: "Halaman",
      footHome: "Beranda",
      footTemplates: "Template",
      footSla: "SLA layanan",
      footCredits: "Kredit foto",
      footContact: "Kontak",
      footWa: "WhatsApp",
      contactHours: "Senin-Sabtu, 09.00-20.00 WIB",
      rights: "Semua hak dilindungi.",
      made: "Dibuat di Indonesia.",
      viewerBack: "Kembali ke galeri",
      viewerBackShort: "Kembali",
      viewerDevice: "Ukuran pratinjau",
      viewerPager: "Navigasi template",
      viewerDesktop: "Desktop",
      viewerMobile: "Mobile",
      viewerPrev: "Template sebelumnya",
      viewerNext: "Template berikutnya",
      viewerClose: "Tutup pratinjau",
      viewerDays: "Pengerjaan",
      viewerNote: "Sudah termasuk domain, hosting 1 tahun, dan revisi.",
      viewerCta: "Minta template ini",
      openDemo: "Lihat demo",
      webLabel: "Website",
      appLabel: "Aplikasi",
      countOne: "template",
      countMany: "template",
      waMsg: "Halo Cannes! Saya mau tanya soal template website untuk UMKM.",
      viewerWa: 'Halo Cannes! Saya tertarik dengan template "{name}". Bisa dibantu?'
    },
    en: {
      metaTitle: "Website & App Templates for Small Business - Cannes",
      metaDesc:
        "Nine ready-to-use website and app templates for small businesses: landing page, company profile, catalogue, digital menu, booking, portfolio, CRM, store admin, and point of sale. Try the live demos.",
      back: "Back to home",
      langAria: "Switch to Indonesian",
      wa: "Chat on WhatsApp",
      eyebrow: "Ready-made templates",
      title: "Start from a layout that is <span>already selling.</span>",
      lead: "Nine templates for the most common small business needs. Open a demo, pick the one closest to your business, and we swap in your colours, photos, and copy.",
      heroCta1: "See all 9 templates",
      heroCta2: "Ask first",
      stat1: "ready-made templates",
      stat1v: "9",
      stat2: "days to launch",
      stat2v: "1-14",
      floatOne: "1-14 days",
      floatTwo: "Try the demo",
      strip1: "WhatsApp",
      strip2: "QRIS & e-wallets",
      strip3: "Mobile-first",
      strip4: "Local SEO",
      strip5: "Google Maps",
      strip6: "Google Analytics",
      galleryEyebrow: "Template gallery",
      galleryTitle: "Pick the one closest to your business.",
      gallerySub:
        "Every demo opens and works. Colours, photos, and copy can all change without touching the structure that already works.",
      filterAria: "Filter templates",
      filterAll: "All",
      filterWeb: "Websites",
      filterApp: "Apps",
      searchAria: "Search templates",
      searchPh: "Search templates, e.g. menu, POS, catalogue…",
      emptyTitle: "Nothing matches yet.",
      emptyBody: "Try another keyword, or look at every template we have.",
      emptyReset: "Reset filters",
      demoNote:
        "Everything above is a demo. The content, photos, and business name will be replaced with yours. Open a demo to see the desktop and mobile versions.",
      stepsEyebrow: "How it works",
      stepsTitle: "From picking a template to going live.",
      stepsSub: "Usually 1-14 working days. You only need to prepare photos and business details.",
      step1t: "Pick a template",
      step1b: "Open the demo on your phone and desktop. Save the one that fits, or ask us if you are unsure.",
      step2t: "Send your material",
      step2b: "Send your logo, photos, product list, and WhatsApp number. No logo yet? We can make a simple one.",
      step3t: "We build and launch",
      step3b: "We replace the colours and content, connect your domain, and hand over full access. Video guides included.",
      ctaKicker: "Nothing fits?",
      ctaTitle: "We can build from scratch.",
      ctaBody:
        "Templates speed things up, but your business may need its own flow. Tell us what you need and we will suggest what makes sense for your budget and timeline.",
      ctaBtn: "Talk on WhatsApp",
      ctaNote: "Free consultation. Replies during working hours, 9am-8pm Jakarta time.",
      footTag: "A website for your business.",
      footDesc: "Website design and development for Indonesian small businesses. Fast, honest, ready to sell.",
      footPages: "Pages",
      footHome: "Home",
      footTemplates: "Templates",
      footSla: "Service SLA",
      footCredits: "Photo credits",
      footContact: "Contact",
      footWa: "WhatsApp",
      contactHours: "Mon-Sat, 9am-8pm Jakarta time",
      rights: "All rights reserved.",
      made: "Made in Indonesia.",
      viewerBack: "Back to gallery",
      viewerBackShort: "Back",
      viewerDevice: "Preview size",
      viewerPager: "Template navigation",
      viewerDesktop: "Desktop",
      viewerMobile: "Mobile",
      viewerPrev: "Previous template",
      viewerNext: "Next template",
      viewerClose: "Close preview",
      viewerDays: "Timeline",
      viewerNote: "Domain, one year of hosting, and revisions included.",
      viewerCta: "Request this template",
      openDemo: "View demo",
      webLabel: "Website",
      appLabel: "App",
      countOne: "template",
      countMany: "templates",
      waMsg: "Hi Cannes! I would like to ask about website templates for a small business.",
      viewerWa: 'Hi Cannes! I am interested in the "{name}" template. Could you help me?'
    }
  };

  var state = {
    lang: "id",
    filter: "all",
    q: "",
    device: window.innerWidth < 820 ? "mobile" : "desktop",
    id: null
  };

  var docCache = {};
  var searchTimer = null;
  var devicePinned = false;

  var grid = document.getElementById("tpl-grid");
  var empty = document.getElementById("tpl-empty");
  var countEl = document.getElementById("tpl-count");
  var searchInput = document.getElementById("tpl-search");
  var viewer = document.getElementById("viewer");
  var stage = viewer ? viewer.querySelector("[data-stage]") : null;
  var viewerFrame = document.getElementById("viewer-frame");
  var viewerTitle = viewer ? viewer.querySelector("[data-viewer-title]") : null;
  var viewerCat = viewer ? viewer.querySelector("[data-viewer-cat]") : null;
  var viewerUrl = viewer ? viewer.querySelector("[data-viewer-url]") : null;
  var viewerCount = viewer ? viewer.querySelectorAll("[data-viewer-count]") : [];
  var viewerDays = viewer ? viewer.querySelector("[data-viewer-days]") : null;
  var viewerNote = viewer ? viewer.querySelector("[data-viewer-note]") : null;
  var viewerWa = viewer ? viewer.querySelector("[data-viewer-wa]") : null;

  function copy() {
    return COPY[state.lang];
  }

  function t(key, vars) {
    var value = copy()[key];
    if (value == null) return "";
    if (vars) {
      Object.keys(vars).forEach(function (name) {
        value = value.split("{" + name + "}").join(vars[name]);
      });
    }
    return value;
  }

  function waHref(message) {
    return WA_BASE + "?text=" + encodeURIComponent(message);
  }

  function frameDoc(tpl, lang) {
    var key = lang + "|" + tpl.id;
    if (!docCache[key]) docCache[key] = tpl.build(lang);
    return docCache[key];
  }

  function countLabel(n) {
    return n + " " + (n === 1 ? t("countOne") : t("countMany"));
  }

  function filtered() {
    var lang = state.lang;
    var q = state.q.trim().toLowerCase();
    return ALL.filter(function (tpl) {
      if (state.filter !== "all" && tpl.group !== state.filter) return false;
      if (!q) return true;
      var hay = [tpl.name[lang], tpl.summary[lang], tpl.category[lang], tpl.demo]
        .concat(tpl.tags[lang])
        .join(" ")
        .toLowerCase();
      return hay.indexOf(q) !== -1;
    });
  }

  function applyCopy() {
    document.querySelectorAll("[data-t]").forEach(function (el) {
      var value = copy()[el.getAttribute("data-t")];
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll("[data-t-html]").forEach(function (el) {
      var value = copy()[el.getAttribute("data-t-html")];
      if (value != null) el.innerHTML = value;
    });

    document.querySelectorAll("[data-t-ph]").forEach(function (el) {
      var value = copy()[el.getAttribute("data-t-ph")];
      if (value != null) el.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-t-aria]").forEach(function (el) {
      var value = copy()[el.getAttribute("data-t-aria")];
      if (value != null) el.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-lang-label]").forEach(function (el) {
      el.textContent = state.lang === "en" ? "ID" : "EN";
    });

    document.querySelectorAll("[data-count]").forEach(function (el) {
      var group = el.getAttribute("data-count");
      var n =
        group === "all"
          ? ALL.length
          : ALL.filter(function (tpl) {
              return tpl.group === group;
            }).length;
      el.textContent = n;
    });

    document.querySelectorAll("[data-wa]").forEach(function (link) {
      link.href = waHref(t("waMsg"));
      link.target = "_blank";
      link.rel = "noopener";
    });

    document.title = t("metaTitle");
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("metaDesc"));

    [
      ['meta[property="og:title"]', t("metaTitle")],
      ['meta[property="og:description"]', t("metaDesc")],
      ['meta[name="twitter:title"]', t("metaTitle")],
      ['meta[name="twitter:description"]', t("metaDesc")]
    ].forEach(function (pair) {
      var el = document.querySelector(pair[0]);
      if (el) el.setAttribute("content", pair[1]);
    });

    document.documentElement.lang = state.lang;
  }

  function renderGallery() {
    if (!grid) return;
    var list = filtered();

    grid.innerHTML = list
      .map(function (tpl) {
        var lang = state.lang;
        var groupLabel = tpl.group === "app" ? t("appLabel") : t("webLabel");
        var tags = tpl.tags[lang]
          .slice(0, 3)
          .map(function (tag) {
            return "<li>" + tag + "</li>";
          })
          .join("");

        return (
          '<article class="tpl-card" data-id="' + tpl.id + '" data-group="' + tpl.group + '">' +
          '<button class="tpl-card__hit" type="button" data-open="' + tpl.id + '" aria-label="' +
          t("openDemo") + ": " + tpl.name[lang] + '"></button>' +
          '<div class="tpl-card__chrome">' +
          '<span class="tpl-dots" aria-hidden="true"><i></i><i></i><i></i></span>' +
          '<span class="tpl-card__url">' + tpl.demo + "</span>" +
          '<span class="tpl-card__badge' + (tpl.group === "app" ? " is-app" : "") + '">' + groupLabel + "</span>" +
          "</div>" +
          '<div class="tpl-card__thumb" data-thumb="' + tpl.id + '">' +
          '<div class="tpl-card__fallback" aria-hidden="true"><b>' + tpl.name[lang].charAt(0) + "</b><span>" + tpl.demo + "</span></div>" +
          "</div>" +
          '<div class="tpl-card__body">' +
          '<p class="tpl-card__cat">' + tpl.category[lang] + "</p>" +
          "<h3>" + tpl.name[lang] + "</h3>" +
          '<p class="tpl-card__sum">' + tpl.summary[lang] + "</p>" +
          '<ul class="tpl-card__tags">' + tags + "</ul>" +
          '<div class="tpl-card__foot">' +
          '<span class="tpl-card__days"><svg class="icon" aria-hidden="true"><use href="#t-clock"></use></svg>' + tpl.days[lang] + "</span>" +
          '<span class="tpl-card__go">' + t("openDemo") + '<svg class="icon" aria-hidden="true"><use href="#t-arrow"></use></svg></span>' +
          "</div>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");

    if (empty) empty.hidden = list.length !== 0;
    if (countEl) countEl.textContent = countLabel(list.length);

    document.querySelectorAll(".tpl-chip").forEach(function (chip) {
      var on = chip.getAttribute("data-filter") === state.filter;
      chip.classList.toggle("is-on", on);
      chip.setAttribute("aria-pressed", on ? "true" : "false");
    });

    observeThumbs();
  }

  var thumbObserver = null;

  function loadThumb(wrap) {
    var tpl = byId[wrap.getAttribute("data-thumb")];
    if (!tpl || wrap.getAttribute("data-loaded") === "1") return;

    var iframe = document.createElement("iframe");
    iframe.setAttribute("tabindex", "-1");
    iframe.setAttribute("aria-hidden", "true");
    iframe.setAttribute("title", tpl.name[state.lang]);
    iframe.width = "1280";
    iframe.height = "800";
    iframe.srcdoc = frameDoc(tpl, state.lang);

    wrap.appendChild(iframe);
    wrap.setAttribute("data-loaded", "1");
    fitThumb(wrap);
  }

  function fitThumb(wrap) {
    var iframe = wrap.querySelector("iframe");
    if (!iframe) return;
    var width = wrap.clientWidth || 0;
    if (!width) return;
    iframe.style.transform = "scale(" + width / 1280 + ")";
  }

  function fitAllThumbs() {
    document.querySelectorAll("[data-thumb]").forEach(fitThumb);
  }

  function observeThumbs() {
    var wraps = document.querySelectorAll("[data-thumb]");

    if (!("IntersectionObserver" in window)) {
      wraps.forEach(loadThumb);
      return;
    }

    if (thumbObserver) thumbObserver.disconnect();
    else {
      thumbObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              thumbObserver.unobserve(entry.target);
              loadThumb(entry.target);
            }
          });
        },
        { rootMargin: "700px 0px" }
      );
    }

    wraps.forEach(function (wrap) {
      if (wrap.getAttribute("data-loaded") === "1") {
        fitThumb(wrap);
      } else {
        thumbObserver.observe(wrap);
      }
    });

    window.requestAnimationFrame(fitAllThumbs);
  }

  function indexOf(id) {
    for (var i = 0; i < ALL.length; i++) {
      if (ALL[i].id === id) return i;
    }
    return -1;
  }

  function syncDevice() {
    if (!stage) return;
    stage.setAttribute("data-device", state.device);
    viewer.querySelectorAll("[data-device]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-device") === state.device ? "true" : "false");
    });
  }

  function syncViewer() {
    var tpl = byId[state.id];
    if (!tpl || !viewerFrame) return;
    var lang = state.lang;

    if (viewerTitle) viewerTitle.textContent = tpl.name[lang];
    if (viewerCat) viewerCat.textContent = tpl.category[lang];
    if (viewerUrl) viewerUrl.textContent = tpl.demo;
    if (viewerDays) viewerDays.textContent = tpl.days[lang];
    if (viewerNote) viewerNote.textContent = t("viewerNote");
    if (viewerCount.length) {
      var position = indexOf(tpl.id) + 1 + " / " + ALL.length;
      viewerCount.forEach(function (el) {
        el.textContent = position;
      });
    }

    if (viewerWa) {
      var msg = t("viewerWa").split("{name}").join(tpl.name[lang]);
      viewerWa.href = waHref(msg);
    }

    viewerFrame.title = tpl.name[lang] + " - Cannes";
    viewerFrame.srcdoc = frameDoc(tpl, lang);
    syncDevice();
  }

  function preferredDevice() {
    var width = viewer && viewer.open ? viewer.clientWidth : 0;
    if (!width) width = window.innerWidth;
    return width < 820 ? "mobile" : "desktop";
  }

  function syncAutoDevice() {
    if (!viewer || !viewer.open || devicePinned) return;
    state.device = preferredDevice();
    syncDevice();
  }

  function openPreview(id, mode) {
    if (!byId[id] || !viewer) return;
    var wasOpen = viewer.open;

    state.id = id;
    syncViewer();

    if (!wasOpen) {
      devicePinned = false;
      viewer.showModal();
      document.body.classList.add("viewer-open");
      var back = viewer.querySelector(".viewer__back");
      if (back) back.focus();

      window.requestAnimationFrame(syncAutoDevice);
    }

    var hash = "#preview-" + id;
    if (mode === "push") {
      if (window.location.hash !== hash) window.history.pushState({ preview: id }, "", hash);
    } else if (mode === "replace") {
      if (window.location.hash !== hash) window.history.replaceState({ preview: id }, "", hash);
    }
  }

  function closePreview() {
    if (!viewer || !viewer.open) return;
    viewer.close();
  }

  function stepPreview(dir) {
    var i = indexOf(state.id);
    if (i < 0) return;
    var next = ALL[(i + dir + ALL.length) % ALL.length];
    openPreview(next.id, "replace");
  }

  function routeFromHash() {
    var match = window.location.hash.match(/^#preview-(.+)$/);
    var id = match && byId[match[1]] ? match[1] : null;

    if (id) {
      if (!viewer.open) openPreview(id, "none");
      else if (state.id !== id) openPreview(id, "none");
    } else if (viewer && viewer.open) {
      viewer.close();
    }
  }

  function setLanguage(lang, save) {
    state.lang = lang === "en" ? "en" : "id";
    applyCopy();
    renderGallery();

    if (viewer && viewer.open) syncViewer();

    if (save) {
      try {
        localStorage.setItem("cannes-lang", state.lang);
      } catch (e) {}

      var url = new URL(window.location.href);
      url.searchParams.set("lang", state.lang);
      try {
        window.history.replaceState(null, "", url.pathname + url.search + url.hash);
      } catch (e) {}
    }
  }

  function initialLanguage() {
    var params = new URLSearchParams(window.location.search);
    var fromUrl = params.get("lang");
    if (fromUrl === "en" || fromUrl === "id") return fromUrl;

    try {
      var saved = localStorage.getItem("cannes-lang");
      if (saved === "en" || saved === "id") return saved;
    } catch (e) {}

    return "id";
  }

  /* Events ---------------------------------------------------------- */

  if (grid) {
    grid.addEventListener("click", function (event) {
      var trigger = event.target.closest("[data-open]");
      if (!trigger) return;
      openPreview(trigger.getAttribute("data-open"), "push");
    });
  }

  document.querySelectorAll(".tpl-chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      state.filter = chip.getAttribute("data-filter");
      renderGallery();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      state.q = searchInput.value;
      window.clearTimeout(searchTimer);
      searchTimer = window.setTimeout(renderGallery, 140);
    });
  }

  var reset = document.querySelector("[data-reset]");
  if (reset) {
    reset.addEventListener("click", function () {
      state.filter = "all";
      state.q = "";
      if (searchInput) searchInput.value = "";
      renderGallery();
    });
  }

  document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLanguage(state.lang === "en" ? "id" : "en", true);
    });
  });

  if (viewer) {
    viewer.querySelectorAll("[data-viewer-close]").forEach(function (btn) {
      btn.addEventListener("click", closePreview);
    });

    var prev = viewer.querySelectorAll("[data-viewer-prev]");
    var next = viewer.querySelectorAll("[data-viewer-next]");
    prev.forEach(function (btn) {
      btn.addEventListener("click", function () { stepPreview(-1); });
    });
    next.forEach(function (btn) {
      btn.addEventListener("click", function () { stepPreview(1); });
    });

    viewer.querySelectorAll("[data-device]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.device = btn.getAttribute("data-device");
        devicePinned = true;
        syncDevice();
      });
    });

    viewer.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        stepPreview(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        stepPreview(-1);
      }
    });

    viewer.addEventListener("close", function () {
      document.body.classList.remove("viewer-open");
      state.id = null;
      devicePinned = false;
      if (window.location.hash.indexOf("#preview-") === 0) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    });
  }

  window.addEventListener("popstate", routeFromHash);
  window.addEventListener("hashchange", routeFromHash);

  window.addEventListener("resize", function () {
    window.requestAnimationFrame(function () {
      fitAllThumbs();
      syncAutoDevice();
    });
  });

  var year = document.getElementById("tpl-year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* Start ----------------------------------------------------------- */

  setLanguage(initialLanguage(), false);
  routeFromHash();
})();
