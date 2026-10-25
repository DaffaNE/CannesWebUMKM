(function () {
  "use strict";

  var PHONE = "6287877250304";
  var WA_BASE = "https://wa.me/" + PHONE;

  


  var EN = {
    "meta.title": "Cannes - Websites for Small Business | Fast, Honest Pricing, Ready to Sell",
    "meta.description": "Website design and development for Indonesian small businesses. From IDR 750k, live in 1-14 days depending on complexity, mobile-first, connected to WhatsApp and QRIS payments. Free consultation.",
    "meta.ogTitle": "Cannes - Websites for Small Business",
    "meta.ogDescription": "Fast websites, honest pricing, ready to sell. From IDR 750k, live in 1-14 days depending on complexity.",

    "a11y.skip": "Skip to content",
    "a11y.langToggle": "Switch to Indonesian",
    "a11y.openMenu": "Open menu",
    "a11y.fab": "Chat on WhatsApp",

    "nav.aria": "Main navigation",
    "nav.ariaMobile": "Mobile navigation",
    "nav.why": "Benefits",
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.cta": "Chat on WhatsApp",

    "contact.hours": "Mon-Sat, 9am-8pm Jakarta time",

    "hero.eyebrow": "Websites for small business",
    "hero.title": "A fast site,<br>honest price,<br><span class='mark'>ready to sell.</span>",
    "hero.sub": "Cannes builds websites for Indonesian small businesses. Live in 1-14 days depending on complexity, from IDR 750k, wired straight to WhatsApp.",
    "hero.cta1": "Chat on WhatsApp",
    "hero.cta2": "See packages",
    "hero.sticker1": "Live in 1-14 days",
    "hero.sticker2": "Mobile-first",
    "hero.sticker3": "Free consultation",
    "hero.alt": "Cannes mascot with a laptop, reading Build a Website for Your Business",

    "marquee.aria": "Why Cannes",
    "marquee.1": "Domain + hosting for 1 year",
    "marquee.2": "Mobile-first",
    "marquee.3": "WhatsApp button",
    "marquee.4": "QRIS & e-wallets",
    "marquee.5": "Local SEO",
    "marquee.6": "Revision warranty",
    "marquee.7": "The site is 100% yours",
    "marquee.8": "Small business, levelled up",
    "marquee.9": "Ready to close",
    "marquee.10": "Online catalogue",
    "marquee.11": "Google Business",
    "marquee.12": "Copy that sells",
    "marquee.13": "Repeat orders",

    "reality.title": "Selling only on WhatsApp? Sure. But it is a waste.",
    "reality.sub": "Chat is for closing. It should not be your only shop window.",
    "reality.statLabel": "of Indonesian internet users browse on their phones. A heavy site makes them leave.",
    "reality.p1t": "Your catalogue vanishes in 24 hours",
    "reality.p1d": "Stories and status updates last a day. New buyers have to ask the price one by one.",
    "reality.p2t": "You do not show up on Google",
    "reality.p2d": "People search for \"catering Jakarta\" or \"batik Solo\". Without a website, your name is not there.",
    "reality.p3t": "They hesitate before paying",
    "reality.p3d": "New buyers check credibility. A clear website, address, and info help them feel safe.",

    "bento.title": "Why Cannes, not someone else?",
    "bento.sub": "Because small businesses need a website that works, not just one that looks good in a portfolio.",
    "bento.aTag": "Speed",
    "bento.aTitle": "Live in <span class='bento-big'>1-14</span> days.",
    "bento.aBody": "It depends on complexity. A clear timeline from day one, so you always know the progress.",
    "bento.bTag": "Price",
    "bento.bTitle": "From <span class='bento-price'>IDR 750k</span>, all-in.",
    "bento.bBody": "Domain, first-year hosting, SSL, and setup are included. No surprise fees halfway through.",
    "bento.cTitle": "Mobile-first",
    "bento.cBody": "Built for phone screens first. Light and comfortable on 3G/4G.",
    "bento.dTitle": "Straight to WhatsApp",
    "bento.dBody": "A chat button on every page. Buyers tap once, no long forms.",
    "bento.eTitle": "Edit it yourself, easily",
    "bento.eBody": "Change prices, stock, or photos in a non-technical editor. A video guide is included.",
    "bento.fTitle": "Found on Google",
    "bento.fBody": "Basic SEO and a Google Business Profile, so nearby customers find you first.",

    "services.title": "What we can build",
    "services.sub": "From a single page to an online store. Pick what fits your stage.",
    "s1.title": "Landing page",
    "s1.body": "One focused page that sells. Great for a campaign, product launch, or service.",
    "s1.tag1": "From IDR 750k",
    "s1.tag2": "1-3 days",
    "s2.title": "Company profile",
    "s2.body": "A tidy business profile: about, services, gallery, and contact. It builds trust with new clients.",
    "s2.tag1": "3-6 pages",
    "s2.tag2": "3-7 days",
    "s3.title": "Catalogue & online store",
    "s3.body": "Show products and prices, take checkout. Connected to QRIS, e-wallets, and shipping rates.",
    "s3.tag1": "Up to 50 products",
    "s3.tag2": "7-14 days",
    "s4.title": "Care & updates",
    "s4.body": "Domain, hosting, backups, content updates, and bug fixes. Peace of mind without the technical side.",
    "s4.tag1": "From IDR 150k/mo",
    "s4.tag2": "Optional",

    "process.title": "A simple process. No headaches.",
    "process.sub": "Four steps, transparent from the first chat to launch.",
    "step1.title": "Free chat",
    "step1.body": "Tell us about your business. We suggest a package and an estimate, with no hard selling.",
    "step2.title": "Fixed price & deposit",
    "step2.body": "The price is locked on the invoice. Pay 50% to start, by QRIS or e-wallet.",
    "step3.title": "We build",
    "step3.body": "Design, copy, and code. You get a preview link for revisions.",
    "step4.title": "Your site goes live",
    "step4.body": "The domain goes live, email works, and you get full access plus an update guide.",
    "process.note": "On average 1-14 working days after the brief and deposit, depending on complexity. 2-4 rounds of revisions depending on the package.",

    "types.title": "Who is it for?",
    "types.sub": "If you sell a product or a service, it is almost certainly a fit.",
    "types.alt1": "A fried rice food stall in Indonesia",
    "types.alt2": "A batik shop in Solo, Indonesia",
    "types.alt3": "A barbershop in Palembang, Indonesia",
    "type1.title": "Food & beverage",
    "type1.examples": "Food stalls, catering, cafes, frozen food, local gifts.",
    "type1.note": "Menu, prices, and a WhatsApp order button.",
    "type2.title": "Fashion & craft",
    "type2.examples": "Batik, hijab, skincare, accessories, handmade goods.",
    "type2.note": "A photo catalogue plus Shopee and Tokopedia links.",
    "type3.title": "Services",
    "type3.examples": "Salons, workshops, clinics, tutoring, events.",
    "type3.note": "Schedule, location, and a booking form.",
    "types.disclaimer": "Illustration photos from Wikimedia Commons, not Cannes clients. <a href='credits.html'>See credits</a>.",

    "pricing.eyebrow": "Transparent pricing",
    "pricing.title": "Clear prices from the start.",
    "pricing.sub": "A one-time fee for the build. No mandatory monthly fee, no surprise invoices.",
    "pkg1.name": "Starter",
    "pkg1.desc": "For getting online, fast.",
    "pkg1.price": "750,000",
    "pkg1.period": "one-time",
    "pkg1.f1": "1 landing page",
    "pkg1.f2": ".com domain + 1 year hosting",
    "pkg1.f3": "Mobile-first design",
    "pkg1.f4": "WhatsApp button + contact form",
    "pkg1.f5": "Basic SEO",
    "pkg1.f6": "2 rounds of revisions",
    "pkg1.f7": "Live in 1-3 working days",
    "pkg1.cta": "Chat about this package",
    "pkg2.badge": "Value+",
    "pkg2.name": "Business",
    "pkg2.desc": "The best balance for a small business ready to level up.",
    "pkg2.price": "1,500,000",
    "pkg2.f1": "Up to 5 pages",
    "pkg2.f2": "20-product catalogue",
    "pkg2.f3": "Indonesian copywriting",
    "pkg2.f4": "Google Business Profile",
    "pkg2.f5": "QRIS integration",
    "pkg2.f6": "Business email",
    "pkg2.f7": "Local SEO",
    "pkg2.f8": "3 rounds of revisions",
    "pkg2.f9": "Live in 3-7 working days",
    "pkg2.cta": "Chat about this package",
    "pkg3.name": "Enterprise",
    "pkg3.desc": "A large store, a complex app, or a custom system.",
    "pkg3.price": "5,000,000",
    "pkg3.f1": "Online store, 50 products",
    "pkg3.f2": "Payment gateway: QRIS, e-wallets, VA",
    "pkg3.f3": "Automatic shipping rates",
    "pkg3.f4": "Vouchers & discounts",
    "pkg3.f5": "Basic API integration",
    "pkg3.f6": "Marketplace links",
    "pkg3.f7": "4 rounds of revisions",
    "pkg3.f8": "Video guide",
    "pkg3.f9": "Live in 7-14 working days",
    "pkg3.cta": "Chat about this package",
    "pkg4.name": "Custom",
    "pkg4.desc": "Need a specific feature or workflow? We design it with you.",
    "pkg4.price": "Consultation",
    "pkg4.period": "priced by scope",
    "pkg4.f1": "Features that match your workflow",
    "pkg4.f2": "System and API integrations",
    "pkg4.f3": "Admin dashboard",
    "pkg4.f4": "Multi-language",
    "pkg4.f5": "Timeline and price by proposal",
    "pkg4.f6": "Support after launch",
    "pkg4.cta": "Free consultation",
    "pkg4.badge": "Something different?",
    "pricing.addonTitle": "Extras if you need them",
    "addon1.name": "Extra page",
    "addon1.price": "IDR 25,000",
    "addon2.name": "Basic logo & branding",
    "addon2.price": "IDR 60,000",
    "addon3.name": "Language customisation",
    "addon3.price": "IDR 70,000",
    "addon4.name": "Copywriting per page",
    "addon4.price": "IDR 25,000",
    "pricing.renewal": "Domain + hosting renewal from year two starts at IDR 400,000/year. Maintenance starts at IDR 150,000/month depending on the plan. Every cost is confirmed before work starts.",
    "pricing.sla": "Every project follows our SLA: response times, uptime target, and the rules that apply.",
    "pricing.slaLink": "Read the SLA",
    "pricing.pay": "Payment: 50% deposit · QRIS · GoPay · OVO · DANA · ShopeePay · Bank transfer",

    "promise.title": "The Cannes promise",
    "promise.sub": "Small things that give you peace of mind.",
    "promise1.t": "The site is 100% yours",
    "promise1.d": "Domain and hosting in your name. All access handed over.",
    "promise2.t": "30-day bug warranty",
    "promise2.d": "If something breaks because of us, we fix it for free.",
    "promise3.t": "Revisions as promised",
    "promise3.d": "2-4 rounds, clear from the start. No drama.",
    "promise4.t": "The invoice is the price",
    "promise4.d": "What we agree at the start is what you pay.",
    "promise5.t": "No-pressure advice",
    "promise5.d": "Ask first, continue only if it fits. No pressure.",

    "faq.title": "Questions people actually ask.",
    "faq.sub": "If yours is not here, just chat. A human answers, not a bot.",
    "faq.cta": "Ask on WhatsApp",
    "q1": "How long until my website is ready?",
    "a1": "It depends on complexity: 1-3 days for a landing page, 3-7 days for a company profile, and 7-14 days for an online store or complex build. The clock starts once the brief and deposit are in.",
    "q2": "I am not technical. Is this complicated?",
    "a2": "Not at all. Just chat, send a logo or some photos, and tell us about your business. We handle domain, hosting, SSL, and email.",
    "q3": "Do I own the website?",
    "a3": "Yes, 100%. The domain and hosting are registered in your name, and you get every access.",
    "q4": "Are there monthly fees?",
    "a4": "Not mandatory. The build is a one-time payment. Only the domain and hosting need renewing, from IDR 400,000/year. Maintenance starts at IDR 150,000/month depending on the plan and is optional.",
    "q5": "Can I pay with QRIS or an e-wallet?",
    "a5": "Yes. A 50% deposit starts the work, the rest is due at launch. We accept QRIS, GoPay, OVO, DANA, ShopeePay, and bank transfer.",
    "q6": "Can I update it myself?",
    "a6": "Yes. We provide a non-technical editor and a short video guide. If you would rather we handle updates, there is a maintenance plan.",
    "q7": "Are photos and copy included?",
    "a7": "Copywriting is included in Business and Enterprise. For photos, send your own stock or we will help pick legal images.",
    "q8": "Can it be bilingual, Indonesian and English?",
    "a8": "Yes. Language customisation is available as an IDR 70,000 add-on. Useful if you want overseas buyers.",
    "q9": "What if I do not have a domain yet?",
    "a9": "We help you check names, register one, and set everything up. A .com domain is included for the first year in every package.",
    "q10": "Is there a warranty?",
    "a10": "Yes. A 30-day bug warranty after launch plus revisions as per your package. If something breaks because of us, we fix it free.",

    "contact.eyebrow": "Contact",
    "contact.title": "Ready to go online? Start with a chat.",
    "contact.sub": "Free consultation. Tell us about your business and we will reply with honest advice, not a template.",
    "contact.wa": "WhatsApp",
    "contact.waValue": "+62 878 7725 0304",
    "contact.email": "Email",
    "contact.area": "Serving all of Indonesia. Our team works remotely, so we can be anywhere.",

    "form.title": "Tell us about your business",
    "form.sub": "Fill this in, then continue on WhatsApp.",
    "form.name": "Name",
    "form.namePh": "Your name",
    "form.business": "Business name",
    "form.businessPh": "Example: Sari's Kitchen",
    "form.phone": "WhatsApp number",
    "form.phonePh": "08xx xxxx xxxx",
    "form.package": "Interested in",
    "form.packageDefault": "Not sure yet, just asking",
    "form.package1": "Starter - IDR 750,000",
    "form.package2": "Business - IDR 1,500,000",
    "form.package3": "Enterprise - IDR 5,000,000",
    "form.package4": "Custom - consult first",
    "form.message": "Tell us briefly",
    "form.messagePh": "Type of business, what you need, and your target date...",
    "form.submit": "Send via WhatsApp",
    "form.note": "This opens WhatsApp with a pre-filled message. Nothing is stored on this website.",
    "form.errorRequired": "Please fill this in.",
    "form.errorPhone": "Enter a valid WhatsApp number, 9-15 digits.",
    "form.opened": "WhatsApp should open in a new tab. If it does not, use this link:",
    "form.openLink": "Open WhatsApp",

    "footer.tagline": "Websites for your business.",
    "footer.desc": "Website design and development for Indonesian small businesses. Fast, honest, and ready to sell.",
    "footer.nav": "Navigation",
    "footer.contact": "Contact",
    "footer.info": "Info",
    "footer.sla": "Service agreement (SLA)",
    "footer.slaKicker": "Clear terms",
    "footer.slaTitle": "Read our SLA before we start.",
    "footer.slaText": "Response times, the 99.5% uptime target, what each side owes, and the rules that apply. No confusing clauses.",
    "footer.slaCta": "View the SLA",
    "footer.credits": "Photo credits",
    "footer.lang": "Bahasa Indonesia",
    "footer.top": "Back to top",
    "footer.rights": "All rights reserved.",
    "footer.made": "Made in Indonesia."
  };

  
  var EXTRA = {
    id: {
      closeMenu: "Tutup menu",
      errorName: "Nama wajib diisi.",
      errorPhone: "Nomor WhatsApp belum benar. Contoh: 081234567890.",
      opened: "WhatsApp dibuka di tab baru. Kalau tidak terbuka, pakai link ini:",
      openLink: "Buka WhatsApp",
      success: "WhatsApp dibuka di tab baru. Selesaikan pengiriman pesan di sana."
    },
    en: {
      closeMenu: "Close menu",
      errorName: "Please enter your name.",
      errorPhone: "Enter a valid WhatsApp number, 9-15 digits.",
      opened: "WhatsApp should open in a new tab. If it does not, use this link:",
      openLink: "Open WhatsApp",
      success: "WhatsApp opened in a new tab. Finish sending the message there."
    }
  };

  
  var WA = {
    id: {
      base: document.body.getAttribute("data-wa-msg") || "Halo Cannes! Saya mau tanya soal pembuatan website untuk usaha saya.",
      plans: {
        plan1: "Halo Cannes! Saya tertarik Paket Mulai (Rp750.000). Bisa minta detail dan estimasi waktunya?",
        plan2: "Halo Cannes! Saya tertarik Paket Bisnis (Rp1.500.000). Bisa minta detail dan estimasi waktunya?",
        plan3: "Halo Cannes! Saya tertarik Paket Enterprise (Rp5.000.000). Bisa minta detail dan estimasi waktunya?",
        plan4: "Halo Cannes! Saya butuh website custom. Bisa konsultasi dulu soal kebutuhan dan kisaran biayanya?"
      },
      compose: function (f) {
        return (
          "Halo Cannes! Saya mau tanya soal pembuatan website.\n\n" +
          "Nama: " + f.name + "\n" +
          "Usaha: " + (f.business || "-") + "\n" +
          "WhatsApp: " + f.phone + "\n" +
          "Paket: " + f.package + "\n" +
          "Kebutuhan: " + (f.message || "-")
        );
      }
    },
    en: {
      base: "Hi Cannes! I would like to ask about a website for my business.",
      plans: {
        plan1: "Hi Cannes! I am interested in the Starter package (IDR 750,000). Could you share the details and timeline?",
        plan2: "Hi Cannes! I am interested in the Business package (IDR 1,500,000). Could you share the details and timeline?",
        plan3: "Hi Cannes! I am interested in the Enterprise package (IDR 5,000,000). Could you share the details and timeline?",
        plan4: "Hi Cannes! I need a custom website. Could we talk through the requirements and a rough budget first?"
      },
      compose: function (f) {
        return (
          "Hi Cannes! I would like to ask about a website.\n\n" +
          "Name: " + f.name + "\n" +
          "Business: " + (f.business || "-") + "\n" +
          "WhatsApp: " + f.phone + "\n" +
          "Package: " + f.package + "\n" +
          "Needs: " + (f.message || "-")
        );
      }
    }
  };

  


  function waHref(message) {
    return WA_BASE + "?text=" + encodeURIComponent(message);
  }

  function stripTags(html) {
    var tmp = document.createElement("div");
    tmp.innerHTML = html;
    return (tmp.textContent || "").trim();
  }

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  


  var htmlEl = document.documentElement;
  var i18nNodes = [];
  var attrItems = [];
  var titleEl = document.querySelector("title");
  var idTitle = document.title;
  var currentLang = "id";

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    if (el.tagName === "TITLE") return;
    i18nNodes.push({ el: el, key: el.getAttribute("data-i18n"), id: el.innerHTML });
  });

  [
    ["data-i18n-placeholder", "placeholder"],
    ["data-i18n-aria", "aria-label"],
    ["data-i18n-alt", "alt"],
    ["data-i18n-content", "content"]
  ].forEach(function (pair) {
    document.querySelectorAll("[" + pair[0] + "]").forEach(function (el) {
      attrItems.push({
        el: el,
        dataAttr: pair[0],
        attr: pair[1],
        key: el.getAttribute(pair[0]),
        id: el.getAttribute(pair[1])
      });
    });
  });

  function applyLanguage(lang) {
    currentLang = lang === "en" ? "en" : "id";
    var isEN = currentLang === "en";

    i18nNodes.forEach(function (item) {
      var value = isEN && EN[item.key] != null ? EN[item.key] : item.id;
      if (value != null) item.el.innerHTML = value;
    });

    attrItems.forEach(function (item) {
      var value = isEN && EN[item.key] != null ? EN[item.key] : item.id;
      if (value != null) item.el.setAttribute(item.attr, value);
    });

    if (titleEl) {
      titleEl.textContent = isEN ? stripTags(EN["meta.title"]) : idTitle;
    } else {
      document.title = isEN ? stripTags(EN["meta.title"]) : idTitle;
    }

    htmlEl.lang = currentLang;

    document.querySelectorAll("[data-lang-label]").forEach(function (el) {
      el.textContent = isEN ? "ID" : "EN";
    });

    var burger = document.getElementById("burger");
    if (burger) {
      var menuOpen = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-label", menuOpen ? EXTRA[currentLang].closeMenu : (isEN ? EN["a11y.openMenu"] : "Buka menu"));
    }

    var status = document.getElementById("form-status");
    if (status) status.hidden = true;

    buildWaLinks();
  }

  function saveLanguage(lang) {
    try {
      localStorage.setItem("cannes-lang", lang);
    } catch (e) {
      
    }
  }

  function initialLanguage() {
    var params = new URLSearchParams(window.location.search);
    var fromUrl = params.get("lang");
    if (fromUrl === "en" || fromUrl === "id") return fromUrl;

    try {
      var saved = localStorage.getItem("cannes-lang");
      if (saved === "en" || saved === "id") return saved;
    } catch (e) {
      
    }
    return "id";
  }

  document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = currentLang === "en" ? "id" : "en";
      saveLanguage(next);
      applyLanguage(next);

      var url = new URL(window.location.href);
      url.searchParams.set("lang", next);
      try {
        window.history.replaceState(null, "", url.pathname + url.search + url.hash);
      } catch (e) {
        
      }
    });
  });

  


  function buildWaLinks() {
    var dict = WA[currentLang];

    document.querySelectorAll("[data-wa]").forEach(function (link) {
      var plan = link.getAttribute("data-wa-plan");
      var message = plan && dict.plans[plan] ? dict.plans[plan] : dict.base;
      link.href = waHref(message);
      link.target = "_blank";
      link.rel = "noopener";
    });
  }

  


  var burger = document.getElementById("burger");
  var mobileMenu = document.getElementById("mobile-menu");

  function setMenu(open) {
    if (!burger || !mobileMenu) return;

    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute(
      "aria-label",
      open ? EXTRA[currentLang].closeMenu : (currentLang === "en" ? EN["a11y.openMenu"] : "Buka menu")
    );
    mobileMenu.classList.toggle("is-open", open);
    mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.classList.toggle("menu-open", open);

    if (open) {
      var first = mobileMenu.querySelector("a");
      if (first) first.focus({ preventScroll: true });
    }
  }

  if (burger && mobileMenu) {
    burger.addEventListener("click", function () {
      setMenu(burger.getAttribute("aria-expanded") !== "true");
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && burger.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        burger.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900 && burger.getAttribute("aria-expanded") === "true") {
        setMenu(false);
      }
    });
  }

  


  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll('a[href="#top"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      if (window.history.replaceState) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    });
  });

  


  var sentinel = document.getElementById("top-sentinel");
  var header = document.querySelector(".site-header");

  if (sentinel && header && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      header.classList.toggle("is-stuck", !entries[0].isIntersecting);
    }, { threshold: 0 }).observe(sentinel);
  }

  


  var faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    var btn = item.querySelector(".faq-q");
    if (!btn) return;

    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");

      faqItems.forEach(function (other) {
        other.classList.remove("is-open");
        var otherBtn = other.querySelector(".faq-q");
        if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  


  var form = document.getElementById("wa-form");

  if (form) {
    var nameInput = document.getElementById("f-name");
    var phoneInput = document.getElementById("f-phone");
    var businessInput = document.getElementById("f-business");
    var packageInput = document.getElementById("f-package");
    var messageInput = document.getElementById("f-message");
    var nameError = document.getElementById("err-name");
    var phoneError = document.getElementById("err-phone");
    var status = document.getElementById("form-status");

    function setFieldError(input, errorEl, message) {
      if (!input || !errorEl) return;
      if (message) {
        input.classList.add("is-invalid");
        input.setAttribute("aria-invalid", "true");
        errorEl.textContent = message;
        errorEl.hidden = false;
      } else {
        input.classList.remove("is-invalid");
        input.removeAttribute("aria-invalid");
        errorEl.textContent = "";
        errorEl.hidden = true;
      }
    }

    function validPhone(value) {
      var digits = value.replace(/[^\d]/g, "");
      if (digits.indexOf("62") === 0) digits = digits.slice(2);
      if (digits.charAt(0) === "0") digits = digits.slice(1);
      return digits.length >= 8 && digits.length <= 13;
    }

    function clearErrorOnInput(input, errorEl) {
      if (!input) return;
      input.addEventListener("input", function () {
        if (input.classList.contains("is-invalid")) setFieldError(input, errorEl, "");
      });
    }

    clearErrorOnInput(nameInput, nameError);
    clearErrorOnInput(phoneInput, phoneError);

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var strings = EXTRA[currentLang];
      var name = nameInput ? nameInput.value.trim() : "";
      var phone = phoneInput ? phoneInput.value.trim() : "";
      var nameOk = name.length >= 2;
      var phoneOk = validPhone(phone);

      setFieldError(nameInput, nameError, nameOk ? "" : strings.errorName);
      setFieldError(phoneInput, phoneError, phoneOk ? "" : strings.errorPhone);

      if (!nameOk) {
        if (nameInput) nameInput.focus();
        return;
      }

      if (!phoneOk) {
        if (phoneInput) phoneInput.focus();
        return;
      }

      var selected = packageInput && packageInput.options[packageInput.selectedIndex]
        ? packageInput.options[packageInput.selectedIndex].text
        : "";

      var text = WA[currentLang].compose({
        name: name,
        business: businessInput ? businessInput.value.trim() : "",
        phone: phone,
        package: selected,
        message: messageInput ? messageInput.value.trim() : ""
      });

      var url = waHref(text);
      var win = window.open(url, "_blank");

      if (status) {
        status.innerHTML = "";
        if (win) {
          win.opener = null;
          status.textContent = strings.success;
        } else {
          status.append(document.createTextNode(strings.opened + " "));
          var fallback = document.createElement("a");
          fallback.href = url;
          fallback.target = "_blank";
          fallback.rel = "noopener";
          fallback.textContent = strings.openLink;
          status.append(fallback);
        }
        status.hidden = false;
      }
    });
  }

  


  var revealTargets = document.querySelectorAll(
    ".section-head, .promises-head, .hero-copy, .hero-art, .reality-stat, .reality-point, " +
    ".bento-cell, .service-row, .step, .type-card, .price-card, .promise, .extras, " +
    ".contact-copy, .contact-form"
  );

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (el) {
      el.classList.add("is-in");
    });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    revealTargets.forEach(function (el) {
      el.classList.add("reveal");
      var siblings = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.transitionDelay = Math.min(siblings * 45, 220) + "ms";
      revealObserver.observe(el);
    });
  }

  


  var counter = document.querySelector("[data-count]");

  if (counter) {
    var target = parseInt(counter.getAttribute("data-count"), 10) || 0;

    if (prefersReducedMotion() || !("IntersectionObserver" in window) || !window.requestAnimationFrame) {
      counter.textContent = String(target);
    } else {
      counter.textContent = "0";
      var counted = false;

      var countObserver = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting || counted) return;
        counted = true;
        countObserver.disconnect();

        var start = null;
        var duration = 1100;

        function tick(now) {
          if (start === null) start = now;
          var progress = Math.min((now - start) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          counter.textContent = String(Math.round(target * eased));
          if (progress < 1) window.requestAnimationFrame(tick);
        }

        window.requestAnimationFrame(tick);
      }, { threshold: 0.6 });

      countObserver.observe(counter);
    }
  }

  


  var navLinks = document.querySelectorAll('.nav a[href^="#"], .mobile-nav a[href^="#"]');
  var spySections = [];

  navLinks.forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    var section = document.getElementById(id);
    if (section && spySections.indexOf(section) === -1) spySections.push(section);
  });

  if (spySections.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    spySections.forEach(function (section) {
      spy.observe(section);
    });
  }

  
  var heroEl = document.querySelector(".hero");
  if (heroEl) {
    var clearSpy = function () {
      if (window.scrollY > heroEl.offsetHeight * 0.6) return;
      if (!document.querySelector(".nav a.is-active, .mobile-nav a.is-active")) return;
      navLinks.forEach(function (link) {
        link.classList.remove("is-active");
      });
    };
    window.addEventListener("scroll", clearSpy, { passive: true });
    clearSpy();
  }

  


  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  


  applyLanguage(initialLanguage());
})();
