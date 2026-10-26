/*
  Template demos - website group (part 1):
  food landing page, company profile, fashion catalogue.
*/
(function () {
  "use strict";

  var frame = window.cannesTemplateFrame;
  var list = window.CANNES_TEMPLATES;

  /* ------------------------------------------------------------------ */
  /* 1. Food & beverage landing page                                     */
  /* ------------------------------------------------------------------ */

  list.push({
    id: "landing-kopi",
    group: "web",
    demo: "kopisenja.id",
    price: 750000,
    days: { id: "1-3 hari", en: "1-3 days" },
    category: { id: "Kuliner & kafe", en: "Food & beverage" },
    name: { id: "Landing page kuliner", en: "Food & beverage landing page" },
    summary: {
      id: "Satu halaman fokus untuk kafe, katering, atau produk makanan. Hero foto, menu singkat, dan tombol WhatsApp yang susah dilewatkan.",
      en: "One focused page for a cafe, caterer, or food product. A photo hero, a short menu, and a WhatsApp button people cannot miss."
    },
    tags: {
      id: ["WhatsApp CTA", "Menu", "Google Maps"],
      en: ["WhatsApp CTA", "Menu", "Google Maps"]
    },
    features: {
      id: ["Hero foto dan jam buka", "3 kartu menu dengan harga", "Testimoni dan lokasi", "Tombol WhatsApp di semua layar"],
      en: ["Photo hero and opening hours", "3 menu cards with prices", "Review and location block", "WhatsApp button on every screen"]
    },
    build: function (lang) {
      var en = lang === "en";
      var t = {
        open: en ? "Open daily · 7am–10pm" : "Buka setiap hari · 07.00–22.00",
        place: en ? "Kemang, South Jakarta" : "Kemang, Jakarta Selatan",
        nav1: en ? "Menu" : "Menu",
        nav2: en ? "Our story" : "Cerita",
        nav3: en ? "Find us" : "Lokasi",
        order: en ? "Order on WhatsApp" : "Pesan via WhatsApp",
        pill: en ? "Fresh beans roasted every Tuesday" : "Biji baru dipanggang setiap Selasa",
        h1a: en ? "Coffee that makes the morning" : "Kopi yang bikin pagi",
        h1b: en ? "slow down." : "nggak buru-buru.",
        sub: en
          ? "Single-origin beans from Sumatra, brewed by hand. A calm corner for work, meetings, or doing nothing at all."
          : "Biji single origin Sumatra, diseduh manual. Sudut tenang untuk kerja, meeting, atau sekadar menunda pulang.",
        cta1: en ? "Order now" : "Pesan sekarang",
        cta2: en ? "See the menu" : "Lihat menu",
        proof: en ? "4.9 from 320 Google reviews" : "4,9 dari 320 ulasan Google",
        badge: en ? "Local<br>Sumatra beans" : "Biji lokal<br>Sumatra",
        ticker: en
          ? ["Free delivery within 3 km", "Roasted weekly", "QRIS & GoPay", "Laptop friendly"]
          : ["Gratis ongkir 3 km", "Dipanggang tiap minggu", "QRIS & GoPay", "Nyaman buat kerja"],
        menuTitle: en ? "Favourite menu" : "Menu favorit",
        menuAll: en ? "See all" : "Lihat semua",
        items: en
          ? [
              ["Senja Milk Coffee", "Espresso, fresh milk, palm sugar.", "Rp24.000"],
              ["Pandan Iced Coffee", "Pandan aroma, a hint of coconut.", "Rp27.000"],
              ["Butter Croissant", "Baked in-house every morning.", "Rp22.000"]
            ]
          : [
              ["Kopi Susu Senja", "Espresso, susu segar, gula aren.", "Rp24.000"],
              ["Es Kopi Pandan", "Aroma pandan, sedikit kelapa.", "Rp27.000"],
              ["Croissant Butter", "Dipanggang sendiri tiap pagi.", "Rp22.000"]
            ],
        storyKick: en ? "Our story" : "Cerita kami",
        storyTitle: en ? "Brewed slowly, from beans we know by name." : "Diseduh perlahan, dari biji yang kami kenal.",
        storyBody: en
          ? "Senja started as a two-table cart in 2019. We still roast in small batches and still write the origin on every bag. No shortcuts, no syrup to hide behind."
          : "Senja mulai dari gerobak dua meja pada 2019. Sampai sekarang kami tetap memanggang dalam batch kecil dan menulis asal biji di setiap kemasan. Tanpa jalan pintas, tanpa sirup untuk menutupi rasa.",
        ticks: en
          ? ["Single-origin Sumatra beans", "Pastries baked in-house", "Power outlets at every table"]
          : ["Biji single origin Sumatra", "Roti dipanggang sendiri", "Colokan di setiap meja"],
        quote: en
          ? "“The calmest spot for an early work session. Consistent coffee and wifi that actually works.”"
          : "“Tempat paling tenang buat kerja pagi-pagi. Kopinya konsisten, wifi-nya benar-benar kencang.”",
        quoteBy: en ? "Rani · regular since 2020" : "Rani · pelanggan sejak 2020",
        visitTitle: en ? "Come by Senja" : "Mampir ke Senja",
        visitBody: en
          ? "Walk in, or message us first if you are ordering for the office. We open early and close late."
          : "Langsung datang, atau chat dulu kalau mau pesan untuk kantor. Kami buka pagi dan tutup malam.",
        address: en ? "Jl. Kemang Raya No. 18, South Jakarta" : "Jl. Kemang Raya No. 18, Jakarta Selatan",
        hours: en
          ? [["Mon–Fri", "07.00–22.00"], ["Sat–Sun", "08.00–23.00"], ["Kitchen", "until 21.00"]]
          : [["Sen–Jum", "07.00–22.00"], ["Sab–Min", "08.00–23.00"], ["Dapur", "sampai 21.00"]],
        map: en ? "Open Google Maps" : "Buka Google Maps",
        foot: en ? "Kopi Senja · a demo template by Cannes" : "Kopi Senja · template demo oleh Cannes",
        rights: en ? "Prices include tax. Photos are illustrations." : "Harga sudah termasuk pajak. Foto ilustrasi."
      };

      var css = `
        :root{--ink:#2a190f;--cream:#fbf4ea;--brand:#b45309;--gold:#f0b93b;--muted:#7d6858;--line:rgba(42,25,15,.14)}
        body{background:var(--cream);color:var(--ink)}
        .top{background:var(--ink);color:#fff3df;font-size:11px;letter-spacing:.1em;text-transform:uppercase}
        .top .wrap{display:flex;justify-content:space-between;gap:14px;padding-top:8px;padding-bottom:8px;flex-wrap:wrap}
        .nav{position:sticky;top:0;z-index:5;background:rgba(251,244,234,.95);border-bottom:1px solid var(--line)}
        .navin{display:flex;align-items:center;justify-content:space-between;gap:22px;padding-top:14px;padding-bottom:14px}
        .logo{font-family:Georgia,"Times New Roman",serif;font-size:24px;letter-spacing:-.03em}
        .logo em{color:var(--brand);font-style:italic}
        .links{display:flex;gap:26px;font-size:13px;font-weight:600;color:#4a372a}
        .btn-dark{background:var(--ink);color:#fff7ea}
        .btn-brand{background:var(--brand);color:#fff}
        .btn-line{border:1.5px solid var(--ink)}
        .btn-gold{background:var(--gold);color:var(--ink)}
        .heroin{display:grid;grid-template-columns:1.04fr .96fr;align-items:center;gap:46px;padding-top:34px;padding-bottom:52px}
        .pill{display:inline-flex;align-items:center;gap:8px;background:#fff;border:1px solid var(--line);padding:7px 13px;border-radius:999px;font-size:11.5px;font-weight:700}
        .pill i{width:7px;height:7px;border-radius:50%;background:#2f9e44;display:inline-block}
        h1{font-family:Georgia,"Times New Roman",serif;font-weight:400;font-size:clamp(38px,5.2vw,64px);line-height:1.02;letter-spacing:-.035em;margin:20px 0 18px}
        h1 em{font-style:italic;color:var(--brand)}
        .hero p{max-width:46ch;color:var(--muted);font-size:15.5px;line-height:1.7}
        .buttons{display:flex;gap:10px;flex-wrap:wrap;margin-top:24px}
        .heroimg{position:relative;border-radius:26px;overflow:hidden;border:1px solid var(--line);box-shadow:0 26px 50px rgba(42,25,15,.18)}
        .heroimg img{width:100%;height:400px;object-fit:cover}
        .badge{position:absolute;right:18px;bottom:18px;background:var(--gold);padding:11px 15px;border-radius:14px;font-size:11.5px;font-weight:800;line-height:1.3;box-shadow:0 8px 20px rgba(0,0,0,.18)}
        .proof{display:flex;align-items:center;gap:10px;margin-top:22px;font-size:12.5px;color:var(--muted)}
        .stars{color:#d9930d;letter-spacing:2px;font-size:13px}
        .ticker{background:var(--ink);color:#fff3df;overflow:hidden;white-space:nowrap;font-size:11px;letter-spacing:.12em;text-transform:uppercase;padding:11px 0}
        .ticker span{margin:0 20px;opacity:.86}
        .ticker b{color:var(--gold);margin:0 20px}
        .block{padding:54px 0}
        .head{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:22px}
        h2{font-family:Georgia,"Times New Roman",serif;font-size:clamp(26px,3vw,36px);font-weight:400;letter-spacing:-.03em;line-height:1.1}
        .link{font-size:12.5px;font-weight:700;color:var(--brand)}
        .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        .card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:14px;box-shadow:0 10px 24px rgba(42,25,15,.06)}
        .thumb{height:148px;border-radius:12px;margin-bottom:13px;position:relative;overflow:hidden}
        .thumb:after{content:"";position:absolute;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,.22);right:-28px;bottom:-38px}
        .t1{background:linear-gradient(150deg,#f0c98c,#b97832)}
        .t2{background:linear-gradient(150deg,#b6cb9b,#5f7d43)}
        .t3{background:linear-gradient(150deg,#f3d9b4,#c69658)}
        .card h3{font-size:15px;font-weight:800}
        .card p{font-size:12px;color:var(--muted);margin-top:3px;line-height:1.5}
        .cardfoot{display:flex;align-items:center;justify-content:space-between;margin-top:13px}
        .price{font-size:15px;font-weight:800}
        .add{width:31px;height:31px;border-radius:50%;background:var(--ink);color:#fff;display:grid;place-items:center;font-size:17px;line-height:1}
        .split{display:grid;grid-template-columns:.92fr 1.08fr;gap:40px;align-items:center}
        .story p{color:var(--muted);font-size:14.5px;line-height:1.75;margin-top:13px}
        .ticks{margin-top:18px;display:grid;gap:9px;font-size:13px;font-weight:600}
        .ticks li::before{content:"✓";display:inline-grid;place-items:center;width:18px;height:18px;margin-right:9px;border-radius:50%;background:var(--gold);font-size:10px}
        .quote{background:#fff;border:1px solid var(--line);border-radius:22px;padding:30px;box-shadow:0 16px 34px rgba(42,25,15,.07)}
        .quote p{font-family:Georgia,"Times New Roman",serif;font-size:21px;line-height:1.45}
        .quote footer{display:flex;align-items:center;gap:11px;margin-top:18px;font-size:12px;color:var(--muted)}
        .avatar{width:36px;height:36px;border-radius:50%;background:linear-gradient(140deg,#d29a5c,#7c4a22)}
        .visit{background:var(--ink);color:#fff6e8;border-radius:26px;padding:34px;display:grid;grid-template-columns:1.1fr .9fr;gap:30px;align-items:center;margin-bottom:54px}
        .visit h2{color:#fff6e8}
        .visit p{color:rgba(255,246,232,.68);font-size:13.5px;margin-top:10px;line-height:1.7;max-width:42ch}
        .hours{display:grid;gap:7px;font-size:13px;margin-top:16px}
        .hours div{display:flex;justify-content:space-between;gap:16px;border-bottom:1px dashed rgba(255,246,232,.24);padding-bottom:7px}
        .visit .buttons{margin-top:20px}
        .sitefoot{border-top:1px solid var(--line);padding:20px 0;font-size:11.5px;color:var(--muted)}
        .sitefoot .wrap{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}
        @media(max-width:900px){
          .heroin{grid-template-columns:1fr;gap:26px}
          .heroimg img{height:300px}
          .cards{grid-template-columns:1fr 1fr}
          .split{grid-template-columns:1fr;gap:24px}
          .visit{grid-template-columns:1fr}
        }
        @media(max-width:620px){
          .links{display:none}
          .navin{gap:12px}
          .navin .btn-dark{padding:10px 14px;font-size:12px}
          .heroin{padding-top:20px;padding-bottom:34px}
          h1{font-size:37px}
          .cards{grid-template-columns:1fr}
          .thumb{height:168px}
          .visit{padding:24px;border-radius:20px}
          .heroimg img{height:232px}
          .top .wrap{justify-content:center}
        }
      `;

      var menu = t.items
        .map(function (item, i) {
          return (
            '<article class="card">' +
            '<div class="thumb t' + (i + 1) + '"></div>' +
            "<h3>" + item[0] + "</h3><p>" + item[1] + "</p>" +
            '<div class="cardfoot"><span class="price">' + item[2] + '</span><span class="add">+</span></div>' +
            "</article>"
          );
        })
        .join("");

      var body = `
        <div class="top"><div class="wrap"><span>${t.open}</span><span>${t.place}</span></div></div>
        <nav class="nav"><div class="wrap navin">
          <div class="logo">Kopi <em>Senja</em></div>
          <div class="links"><span>${t.nav1}</span><span>${t.nav2}</span><span>${t.nav3}</span></div>
          <span class="btn btn-dark">${t.order}</span>
        </div></nav>

        <section class="hero"><div class="wrap heroin">
          <div>
            <span class="pill"><i></i>${t.pill}</span>
            <h1>${t.h1a} <em>${t.h1b}</em></h1>
            <p>${t.sub}</p>
            <div class="buttons">
              <span class="btn btn-brand">${t.cta1}</span>
              <span class="btn btn-line">${t.cta2}</span>
            </div>
            <div class="proof"><span class="stars">★★★★★</span><span>${t.proof}</span></div>
          </div>
          <div class="heroimg">
            <img src="assets/img/bisnis-kuliner.webp" alt="" width="900" height="675">
            <span class="badge">${t.badge}</span>
          </div>
        </div></section>

        <div class="ticker">
          ${t.ticker.map(function (x) { return "<span>" + x + "</span><b>·</b>"; }).join("")}
        </div>

        <section class="block"><div class="wrap">
          <div class="head"><h2>${t.menuTitle}</h2><span class="link">${t.menuAll} →</span></div>
          <div class="cards">${menu}</div>
        </div></section>

        <section class="block"><div class="wrap split">
          <div class="story">
            <span class="link">${t.storyKick}</span>
            <h2 style="margin-top:10px">${t.storyTitle}</h2>
            <p>${t.storyBody}</p>
            <ul class="ticks">${t.ticks.map(function (x) { return "<li>" + x + "</li>"; }).join("")}</ul>
          </div>
          <blockquote class="quote">
            <p>${t.quote}</p>
            <footer><span class="avatar"></span><span>${t.quoteBy}</span></footer>
          </blockquote>
        </div></section>

        <section class="wrap"><div class="visit">
          <div>
            <h2>${t.visitTitle}</h2>
            <p>${t.visitBody}</p>
            <div class="hours">${t.hours.map(function (h) { return "<div><span>" + h[0] + "</span><b>" + h[1] + "</b></div>"; }).join("")}</div>
          </div>
          <div>
            <p style="font-weight:700;color:#fff6e8;font-size:14px">${t.address}</p>
            <div class="buttons">
              <span class="btn btn-gold">${t.map}</span>
              <span class="btn" style="border:1.5px solid rgba(255,246,232,.35)">${t.order}</span>
            </div>
          </div>
        </div></section>

        <footer class="sitefoot"><div class="wrap"><span>${t.foot}</span><span>${t.rights}</span></div></footer>
      `;

      return frame(lang, css, body);
    }
  });

  /* ------------------------------------------------------------------ */
  /* 2. Company profile                                                  */
  /* ------------------------------------------------------------------ */

  list.push({
    id: "company-karya",
    group: "web",
    demo: "karyanusantara.id",
    price: 1500000,
    days: { id: "3-7 hari", en: "3-7 days" },
    category: { id: "Jasa & kontraktor", en: "Services & contractors" },
    name: { id: "Company profile jasa", en: "Service company profile" },
    summary: {
      id: "Profil perusahaan untuk kontraktor, konsultan, atau agensi. Enam halaman rapi dengan portofolio, proses kerja, dan penawaran langsung ke WhatsApp.",
      en: "A company profile for contractors, consultants, or agencies. Six tidy pages with portfolio, process, and a quote request straight to WhatsApp."
    },
    tags: {
      id: ["6 halaman", "Portofolio", "Form kontak"],
      en: ["6 pages", "Portfolio", "Contact form"]
    },
    features: {
      id: ["Enam halaman siap isi", "Halaman layanan dan proyek", "Profil tim dan legalitas", "Form penawaran ke WhatsApp"],
      en: ["Six ready-to-fill pages", "Service and project pages", "Team and legal profile", "Quote form to WhatsApp"]
    },
    build: function (lang) {
      var en = lang === "en";
      var t = {
        top1: en ? "Jakarta · Bandung · Surabaya" : "Jakarta · Bandung · Surabaya",
        top2: en ? "+62 812 3456 7890" : "+62 812 3456 7890",
        nav: en ? ["Services", "Projects", "Process", "Contact"] : ["Layanan", "Proyek", "Proses", "Kontak"],
        cta: en ? "Request a quote" : "Minta penawaran",
        kick: en ? "Since 2016 · 120+ projects" : "Sejak 2016 · 120+ proyek",
        h1: en ? ["Spaces that look sharp,", "businesses that feel", "more trusted."] : ["Ruang yang rapi,", "bisnis yang lebih", "dipercaya."],
        sub: en
          ? "We design and renovate commercial spaces — cafes, offices, and shops — so they are comfortable to use and easy to trust."
          : "Kami merancang dan merenovasi ruang usaha—kafe, kantor, dan toko—supaya nyaman dipakai dan bikin pelanggan lebih percaya.",
        b1: en ? "Free consultation" : "Konsultasi gratis",
        b2: en ? "See projects" : "Lihat proyek",
        stats: en
          ? [["120+", "projects delivered"], ["8", "years in business"], ["94%", "clients return"]]
          : [["120+", "proyek selesai"], ["8", "tahun berjalan"], ["94%", "klien kembali"]],
        cardKick: en ? "This month" : "Proyek bulan ini",
        cardTitle: en ? "Kemang cafe" : "Kafe Kemang",
        cardMeta: en ? "86 m² · finished in 6 weeks" : "86 m² · selesai 6 minggu",
        cardTag: en ? "On schedule" : "Tepat waktu",
        logos: en ? "Trusted by growing businesses" : "Dipercaya bisnis yang tumbuh",
        servicesKick: en ? "What we do" : "Yang kami kerjakan",
        servicesTitle: en ? "One team from sketch to handover." : "Satu tim dari sketsa sampai serah terima.",
        services: en
          ? [
              ["01", "Interior design", "Layout, material, lighting, and a 3D preview before anything is built."],
              ["02", "Build & renovation", "One accountable contractor, a clear schedule, and weekly photo updates."],
              ["03", "Custom furniture", "Tables, counters, and shelving made to fit the room, not the other way around."]
            ]
          : [
              ["01", "Desain interior", "Layout, material, pencahayaan, dan preview 3D sebelum dibangun."],
              ["02", "Renovasi & build", "Satu kontraktor yang bertanggung jawab, jadwal jelas, update foto tiap minggu."],
              ["03", "Furniture custom", "Meja, counter, dan rak dibuat mengikuti ruang, bukan sebaliknya."]
            ],
        processKick: en ? "How it works" : "Cara kerja",
        processTitle: en ? "No surprises after the deposit." : "Nggak ada kejutan setelah DP.",
        steps: en
          ? [["Brief & survey", "We visit, measure, and listen."], ["Concept & budget", "3D preview plus a line-item RAB."], ["Build", "Weekly progress, one contact person."], ["Handover", "Walkthrough, warranty, and files."]]
          : [["Brief & survei", "Kami datang, ukur, dan dengarkan."], ["Konsep & RAB", "Preview 3D plus rincian biaya."], ["Pengerjaan", "Update mingguan, satu narahubung."], ["Serah terima", "Walkthrough, garansi, dan file."]],
        workKick: en ? "Selected work" : "Proyek pilihan",
        workTitle: en ? "Rooms we are proud of." : "Ruang yang kami banggakan.",
        projects: en
          ? [["Kemang Cafe", "F&B · 86 m²", "2026"], ["Senayan Office", "Workspace · 240 m²", "2025"], ["Bandung Shop", "Retail · 64 m²", "2025"]]
          : [["Kafe Kemang", "F&B · 86 m²", "2026"], ["Kantor Senayan", "Kantor · 240 m²", "2025"], ["Toko Bandung", "Retail · 64 m²", "2025"]],
        ctaTitle: en ? "Have a space that needs sorting out?" : "Punya ruang yang mau dirapikan?",
        ctaBody: en ? "Send a photo and the size. You will get a rough estimate within one business day." : "Kirim foto dan ukurannya. Kamu dapat estimasi kasar dalam satu hari kerja.",
        ctaBtn: en ? "Chat on WhatsApp" : "Chat WhatsApp",
        footAddr: en ? "Jl. Cikini Raya 42, Jakarta" : "Jl. Cikini Raya 42, Jakarta",
        foot: en ? "Karya Nusantara · demo template by Cannes" : "Karya Nusantara · template demo oleh Cannes"
      };

      var css = `
        :root{--ink:#0d1b2a;--navy:#122335;--gold:#c8a45c;--cream:#f6f2ea;--muted:#61707f;--line:rgba(13,27,42,.13)}
        body{background:var(--cream);color:var(--ink)}
        .top{background:#08131e;color:rgba(246,242,234,.62);font-size:11px}
        .top .wrap{display:flex;justify-content:space-between;gap:14px;padding-top:8px;padding-bottom:8px;flex-wrap:wrap}
        .nav{background:var(--cream);border-bottom:1px solid var(--line);position:sticky;top:0;z-index:5}
        .navin{display:flex;align-items:center;justify-content:space-between;gap:22px;padding-top:14px;padding-bottom:14px}
        .brand{display:flex;align-items:center;gap:10px}
        .mark{width:34px;height:34px;border:1px solid var(--gold);display:grid;place-items:center;color:var(--gold);font-family:Georgia,serif;font-size:17px}
        .brand b{font-family:Georgia,"Times New Roman",serif;font-size:19px;font-weight:400;letter-spacing:.01em;line-height:1.1}
        .brand small{display:block;font-family:-apple-system,"Segoe UI",sans-serif;font-size:8.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-top:2px}
        .links{display:flex;gap:24px;font-size:12.5px;font-weight:600;color:#33465a}
        .btn-gold{background:var(--gold);color:#122335}
        .btn-line{border:1px solid rgba(246,242,234,.35);color:#f6f2ea}
        .hero{background:var(--navy);color:var(--cream);position:relative;overflow:hidden}
        .hero:before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(200,164,92,.55) 1px,transparent 1px);background-size:26px 26px;opacity:.16}
        .heroin{position:relative;display:grid;grid-template-columns:1.12fr .88fr;align-items:center;gap:48px;padding-top:54px;padding-bottom:58px}
        .kick{display:inline-flex;align-items:center;gap:9px;color:var(--gold);font-size:10px;font-weight:800;letter-spacing:.18em;text-transform:uppercase}
        .kick:before{content:"";width:26px;height:1px;background:var(--gold)}
        h1{font-family:Georgia,"Times New Roman",serif;font-weight:400;font-size:clamp(38px,4.9vw,62px);line-height:1.04;letter-spacing:-.035em;margin:20px 0 18px}
        h1 span{display:block}
        h1 em{color:var(--gold);font-style:italic}
        .hero p{max-width:48ch;color:rgba(246,242,234,.66);font-size:14.5px;line-height:1.75}
        .buttons{display:flex;gap:10px;flex-wrap:wrap;margin-top:24px}
        .stats{display:flex;gap:30px;margin-top:34px;padding-top:22px;border-top:1px solid rgba(246,242,234,.16);flex-wrap:wrap}
        .stat b{font-family:Georgia,serif;font-size:25px;font-weight:400;color:var(--gold);display:block;line-height:1}
        .stat span{display:block;margin-top:5px;font-size:10px;letter-spacing:.09em;text-transform:uppercase;color:rgba(246,242,234,.52)}
        .visual{position:relative;min-height:330px;display:grid;place-items:center}
        .orb{width:290px;height:290px;border-radius:50%;background:conic-gradient(from 210deg,#c8a45c,#6e5527,#c8a45c,#3a2e18,#c8a45c);box-shadow:0 0 0 1px rgba(200,164,92,.25),0 30px 60px rgba(0,0,0,.35);position:relative}
        .orb:after{content:"";position:absolute;inset:52px;border-radius:50%;background:var(--navy);border:1px solid rgba(200,164,92,.4)}
        .orb span{position:absolute;inset:0;display:grid;place-items:center;color:var(--gold);font-family:Georgia,serif;font-size:52px;letter-spacing:-.04em;z-index:1}
        .minicard{position:absolute;right:-6px;bottom:4px;width:232px;background:var(--cream);color:var(--ink);border-radius:14px;padding:15px 16px;box-shadow:0 18px 40px rgba(0,0,0,.3)}
        .minicard small{display:block;font-size:9px;letter-spacing:.13em;text-transform:uppercase;color:var(--muted);font-weight:800}
        .minicard b{display:block;font-size:15px;margin-top:5px}
        .minicard p{font-size:11px;color:var(--muted);margin-top:2px}
        .minicard i{display:inline-block;margin-top:10px;background:#dff0e2;color:#246b35;border-radius:999px;padding:4px 9px;font-size:9px;font-weight:800;font-style:normal}
        .logos{padding:24px 0;border-bottom:1px solid var(--line)}
        .logos p{text-align:center;font-size:9px;letter-spacing:.17em;text-transform:uppercase;color:var(--muted);font-weight:800;margin-bottom:14px}
        .logogrid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}
        .logogrid span{border:1px solid var(--line);border-radius:8px;padding:9px 6px;text-align:center;font-size:9px;letter-spacing:.12em;color:#98a2ab;font-weight:700}
        .block{padding:56px 0}
        .kicker{font-size:9.5px;letter-spacing:.17em;text-transform:uppercase;color:#9a7b3c;font-weight:800}
        h2{font-family:Georgia,"Times New Roman",serif;font-weight:400;font-size:clamp(27px,3.3vw,40px);line-height:1.12;letter-spacing:-.03em;margin-top:12px}
        .split{display:grid;grid-template-columns:.85fr 1.15fr;gap:44px;align-items:start}
        .lead{color:var(--muted);font-size:14px;line-height:1.75;margin-top:12px;max-width:38ch}
        .services{display:grid;gap:0;border-top:1px solid var(--line)}
        .service{display:grid;grid-template-columns:58px 1fr;gap:18px;padding:22px 0;border-bottom:1px solid var(--line)}
        .service b{font-family:Georgia,serif;font-weight:400;color:#a8874a;font-size:15px}
        .service h3{font-size:16px;font-weight:800}
        .service p{color:var(--muted);font-size:13px;line-height:1.65;margin-top:5px;max-width:52ch}
        .process{background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
        .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;margin-top:34px}
        .step{border-top:2px solid var(--ink);padding-top:14px}
        .step b{font-family:Georgia,serif;font-size:13px;color:#a8874a;font-weight:400}
        .step h3{font-size:14px;font-weight:800;margin-top:8px}
        .step p{color:var(--muted);font-size:12px;line-height:1.6;margin-top:4px}
        .workgrid{display:grid;grid-template-columns:1.4fr 1fr;grid-template-rows:auto auto;gap:18px;margin-top:30px}
        .project{position:relative;border-radius:14px;overflow:hidden;min-height:180px;color:#fff;display:flex;align-items:flex-end;padding:20px}
        .project:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.55),transparent 65%)}
        .project > div{position:relative;z-index:1}
        .project h3{font-size:16px;font-weight:800}
        .project p{font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.7);margin-top:3px}
        .projectA{grid-row:span 2;min-height:378px;background:linear-gradient(150deg,#8d6a3f,#2d2117)}
        .projectB{background:linear-gradient(150deg,#3d5366,#12222f)}
        .projectC{background:linear-gradient(150deg,#7e5a49,#2c1e18)}
        .cta{background:var(--gold);color:#122335}
        .ctain{display:flex;align-items:center;justify-content:space-between;gap:26px;padding-top:40px;padding-bottom:40px;flex-wrap:wrap}
        .ctain h2{color:#122335;max-width:22ch}
        .ctain p{font-size:13px;margin-top:8px;max-width:52ch;color:rgba(18,35,53,.7)}
        .btn-ink{background:#122335;color:var(--cream)}
        .sitefoot{background:#08131e;color:rgba(246,242,234,.55);padding:26px 0;font-size:11.5px}
        .sitefoot .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
        @media(max-width:900px){
          .heroin{grid-template-columns:1fr;padding-top:38px}
          .visual{min-height:280px;margin-top:8px}
          .orb{width:240px;height:240px}
          .minicard{right:4px;bottom:-6px}
          .split{grid-template-columns:1fr;gap:24px}
          .steps{grid-template-columns:1fr 1fr}
          .workgrid{grid-template-columns:1fr}
          .projectA{grid-row:auto;min-height:240px}
          .logos .logogrid{grid-template-columns:repeat(3,1fr)}
        }
        @media(max-width:620px){
          .links{display:none}
          h1{font-size:35px}
          .stats{gap:22px}
          .heroin{padding-bottom:40px}
          .visual{min-height:250px}
          .orb{width:200px;height:200px}
          .orb span{font-size:38px}
          .minicard{width:205px;right:0;bottom:-16px}
          .steps{grid-template-columns:1fr}
          .logogrid{grid-template-columns:1fr 1fr !important}
          .ctain .btn{width:100%}
        }
      `;

      var body = `
        <div class="top"><div class="wrap"><span>${t.top1}</span><span>${t.top2}</span></div></div>
        <nav class="nav"><div class="wrap navin">
          <div class="brand"><span class="mark">KN</span><b>Karya Nusantara<small>Design & build</small></b></div>
          <div class="links">${t.nav.map(function (x) { return "<span>" + x + "</span>"; }).join("")}</div>
          <span class="btn btn-gold">${t.cta}</span>
        </div></nav>

        <section class="hero"><div class="wrap heroin">
          <div>
            <span class="kick">${t.kick}</span>
            <h1>${t.h1.map(function (x) { return "<span>" + x + "</span>"; }).join("")}</h1>
            <p>${t.sub}</p>
            <div class="buttons">
              <span class="btn btn-gold">${t.b1}</span>
              <span class="btn btn-line">${t.b2}</span>
            </div>
            <div class="stats">
              ${t.stats.map(function (s) { return '<div class="stat"><b>' + s[0] + "</b><span>" + s[1] + "</span></div>"; }).join("")}
            </div>
          </div>
          <div class="visual">
            <div class="orb"><span>KN</span></div>
            <div class="minicard">
              <small>${t.cardKick}</small>
              <b>${t.cardTitle}</b>
              <p>${t.cardMeta}</p>
              <i>${t.cardTag}</i>
            </div>
          </div>
        </div></section>

        <div class="logos"><div class="wrap">
          <p>${t.logos}</p>
          <div class="logogrid"><span>LOGO KLIEN</span><span>LOGO KLIEN</span><span>LOGO KLIEN</span><span>LOGO KLIEN</span><span>LOGO KLIEN</span></div>
        </div></div>

        <section class="block"><div class="wrap split">
          <div>
            <span class="kicker">${t.servicesKick}</span>
            <h2>${t.servicesTitle}</h2>
            <p class="lead">${t.processTitle}</p>
          </div>
          <div class="services">
            ${t.services.map(function (s) {
              return '<article class="service"><b>' + s[0] + "</b><div><h3>" + s[1] + "</h3><p>" + s[2] + "</p></div></article>";
            }).join("")}
          </div>
        </div></section>

        <section class="process"><div class="wrap block">
          <span class="kicker">${t.processKick}</span>
          <h2>${t.processTitle}</h2>
          <div class="steps">
            ${t.steps.map(function (s, i) {
              return '<div class="step"><b>0' + (i + 1) + "</b><h3>" + s[0] + "</h3><p>" + s[1] + "</p></div>";
            }).join("")}
          </div>
        </div></section>

        <section class="block"><div class="wrap">
          <span class="kicker">${t.workKick}</span>
          <h2>${t.workTitle}</h2>
          <div class="workgrid">
            ${t.projects.map(function (p, i) {
              return '<div class="project project' + ["A", "B", "C"][i] + '"><div><h3>' + p[0] + "</h3><p>" + p[1] + " · " + p[2] + "</p></div></div>";
            }).join("")}
          </div>
        </div></section>

        <section class="cta"><div class="wrap ctain">
          <div><h2>${t.ctaTitle}</h2><p>${t.ctaBody}</p></div>
          <span class="btn btn-ink">${t.ctaBtn}</span>
        </div></section>

        <footer class="sitefoot"><div class="wrap"><span>${t.foot}</span><span>${t.footAddr} · karyanusantara.id</span></div></footer>
      `;

      return frame(lang, css, body);
    }
  });

  /* ------------------------------------------------------------------ */
  /* 3. Fashion catalogue                                                */
  /* ------------------------------------------------------------------ */

  list.push({
    id: "katalog-batik",
    group: "web",
    demo: "batiklaras.id",
    price: 1500000,
    days: { id: "3-7 hari", en: "3-7 days" },
    category: { id: "Fashion & kriya", en: "Fashion & craft" },
    name: { id: "Katalog toko online", en: "Online store catalogue" },
    summary: {
      id: "Etalase produk yang enak dilihat untuk fashion, kriya, dan skincare. Filter kategori, keranjang, checkout WhatsApp, plus link ke marketplace.",
      en: "A storefront that makes fashion, craft, and skincare look good. Category filters, cart, WhatsApp checkout, and marketplace links."
    },
    tags: {
      id: ["Katalog", "Keranjang", "Marketplace"],
      en: ["Catalogue", "Cart", "Marketplace"]
    },
    features: {
      id: ["Grid 20 produk", "Filter kategori dan pencarian", "Keranjang dan checkout WhatsApp", "Link Shopee dan Tokopedia"],
      en: ["20-product grid", "Category filter and search", "Cart and WhatsApp checkout", "Shopee and Tokopedia links"]
    },
    build: function (lang) {
      var en = lang === "en";
      var t = {
        promo: en ? "Free shipping over IDR 300k · COD available · QRIS accepted" : "Gratis ongkir di atas Rp300rb · Bisa COD · Terima QRIS",
        nav: en ? ["New in", "Women", "Men", "About"] : ["Baru", "Wanita", "Pria", "Tentang"],
        heroKick: en ? "Hand-drawn in Solo" : "Batik tulis dari Solo",
        h1a: en ? "Batik made slowly," : "Batik tulis,",
        h1b: en ? "worn for years." : "dibuat perlahan.",
        sub: en
          ? "Small-batch pieces from our own workshop. Natural dyes, honest prices, and sizes that actually fit."
          : "Koleksi batch kecil dari workshop sendiri. Pewarna alami, harga jujur, dan ukuran yang benar-benar pas.",
        cta1: en ? "Shop the collection" : "Belanja sekarang",
        cta2: en ? "Our story" : "Cerita kami",
        floating: en ? "New batch<br>Parang Sogan" : "Batch baru<br>Parang Sogan",
        trust: en
          ? [["Free shipping", "Orders over IDR 300k"], ["Easy returns", "7 days, no questions"], ["Made in Solo", "Hand-drawn, small batch"]]
          : [["Gratis ongkir", "Pesanan di atas Rp300rb"], ["Mudah tukar", "7 hari, tanpa ribet"], ["Made in Solo", "Ditulis tangan, batch kecil"]],
        shopKick: en ? "The collection" : "Koleksi",
        shopTitle: en ? "Pick your pattern." : "Pilih motifmu.",
        filters: en ? ["All", "Hand-drawn", "Stamped", "Accessories"] : ["Semua", "Tulis", "Cap", "Aksesoris"],
        products: en
          ? [
              ["Parang Hand-drawn Batik", "2 m · cotton primisima", "Rp485.000", "NEW", "image"],
              ["Kawung Batik Shirt", "S–XL · relaxed fit", "Rp325.000", "BEST SELLER", "kid"],
              ["Sogan Shawl", "180 × 55 cm · silk blend", "Rp275.000", "", "kid"],
              ["Mega Print Blouse", "S–XL · viscose", "Rp295.000", "", "kid"],
              ["Lasem Hand-drawn Fabric", "2 m · natural dye", "Rp650.000", "LIMITED", "kid"],
              ["Mini Batik Bag", "20 × 15 cm · cotton", "Rp185.000", "", "kid"]
            ]
          : [
              ["Batik Tulis Parang", "2 m · katun primisima", "Rp485.000", "BARU", "image"],
              ["Kemeja Batik Kawung", "S–XL · potongan relaxed", "Rp325.000", "BEST SELLER", "kid"],
              ["Selendang Sogan", "180 × 55 cm · campuran sutra", "Rp275.000", "", "kid"],
              ["Blouse Cap Mega", "S–XL · viscose", "Rp295.000", "", "kid"],
              ["Kain Tulis Lasem", "2 m · pewarna alami", "Rp650.000", "TERBATAS", "kid"],
              ["Tas Batik Mini", "20 × 15 cm · katun", "Rp185.000", "", "kid"]
            ],
        add: en ? "Add" : "Tambah",
        storyKick: en ? "From our workshop" : "Dari workshop kami",
        storyTitle: en ? "One motif can take three weeks." : "Satu motif bisa makan tiga minggu.",
        storyBody: en
          ? "Every hand-drawn piece starts with a pencil on cotton. We keep the workshop small on purpose: six artisans, natural dyes, and no deadline that forces a shortcut."
          : "Setiap kain tulis dimulai dari pensil di atas katun. Workshop kami sengaja tetap kecil: enam perajin, pewarna alami, dan tidak ada tenggat yang memaksa jalan pintas.",
        marketplace: en ? "Also on" : "Juga di",
        foot: en ? "Batik Laras · demo template by Cannes" : "Batik Laras · template demo oleh Cannes",
        note: en ? "Colours may vary slightly between batches." : "Warna bisa sedikit berbeda antar batch."
      };

      var css = `
        :root{--ink:#241a16;--cream:#fbf8f2;--brand:#8f2d22;--soft:#f1e9db;--muted:#7b6a5f;--line:#e2d9c9}
        body{background:var(--cream);color:var(--ink)}
        .promo{background:var(--brand);color:#fff4e8;text-align:center;font-size:10.5px;letter-spacing:.07em;padding:8px 14px}
        .nav{position:sticky;top:0;z-index:5;background:rgba(251,248,242,.96);border-bottom:1px solid var(--line)}
        .navin{display:flex;align-items:center;justify-content:space-between;gap:22px;padding-top:15px;padding-bottom:15px}
        .brand{font-family:Georgia,"Times New Roman",serif;font-size:24px;letter-spacing:.04em}
        .brand span{color:var(--brand)}
        .links{display:flex;gap:24px;font-size:12.5px;font-weight:600;color:#4a3c34}
        .tools{display:flex;align-items:center;gap:13px;font-size:12px;font-weight:600}
        .bag{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--ink);border-radius:999px;padding:7px 12px;font-size:11.5px}
        .bag b{display:grid;place-items:center;width:17px;height:17px;border-radius:50%;background:var(--brand);color:#fff;font-size:9px}
        .hero{padding:26px 0 44px}
        .heroin{display:grid;grid-template-columns:1fr .9fr;gap:44px;align-items:center}
        .kick{font-size:9.5px;letter-spacing:.17em;text-transform:uppercase;color:var(--brand);font-weight:800}
        h1{font-family:Georgia,"Times New Roman",serif;font-weight:400;font-size:clamp(38px,5vw,62px);line-height:1.02;letter-spacing:-.035em;margin:16px 0 16px}
        h1 em{font-style:italic;color:var(--brand)}
        .hero p{max-width:43ch;color:var(--muted);font-size:14px;line-height:1.75}
        .buttons{display:flex;gap:10px;margin-top:24px;flex-wrap:wrap}
        .btn-brand{background:var(--brand);color:#fff4e8}
        .btn-line{border:1px solid var(--ink)}
        .heroimg{position:relative}
        .heroimg img{width:100%;height:400px;object-fit:cover;border-radius:170px 170px 16px 16px}
        .float{position:absolute;left:-18px;bottom:26px;background:var(--cream);border:1px solid var(--line);border-radius:12px;padding:12px 15px;font-size:11px;font-weight:700;line-height:1.35;box-shadow:0 14px 30px rgba(36,26,22,.14)}
        .float b{display:block;font-family:Georgia,serif;font-size:17px;font-weight:400;margin-top:3px;color:var(--brand)}
        .trust{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff}
        .trustin{display:grid;grid-template-columns:repeat(3,1fr)}
        .trustitem{padding:15px 20px;border-left:1px solid var(--line);display:flex;gap:10px;align-items:center}
        .trustitem:first-child{border-left:0;padding-left:0}
        .trustitem b{font-size:12px;display:block}
        .trustitem span{font-size:10.5px;color:var(--muted);display:block;margin-top:1px}
        .dot{width:26px;height:26px;border-radius:50%;background:var(--soft);display:grid;place-items:center;color:var(--brand);font-size:11px;flex:none}
        .block{padding:48px 0 56px}
        .head{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:20px}
        h2{font-family:Georgia,"Times New Roman",serif;font-weight:400;font-size:clamp(26px,3vw,36px);letter-spacing:-.03em;line-height:1.1;margin-top:8px}
        .chips{display:flex;gap:7px;flex-wrap:wrap}
        .chip{padding:7px 13px;border:1px solid var(--line);border-radius:999px;font-size:11px;font-weight:700;color:#5b4a3f;background:#fff}
        .chip.on{background:var(--ink);border-color:var(--ink);color:var(--cream)}
        .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px 18px;margin-top:24px}
        .product{position:relative}
        .pimg{position:relative;aspect-ratio:4/5;border-radius:10px;overflow:hidden;border:1px solid var(--line)}
        .pimg img{width:100%;height:100%;object-fit:cover}
        .pattern{width:100%;height:100%}
        .p1{background:radial-gradient(circle at 25% 25%,rgba(255,255,255,.4) 1.5px,transparent 2px) 0 0/16px 16px,repeating-linear-gradient(45deg,#6d2c1f 0 9px,#833f2a 9px 18px)}
        .p2{background:radial-gradient(circle at 50% 50%,#e6cfa9 0 6px,transparent 7px) 0 0/26px 26px,repeating-linear-gradient(-30deg,#3f4a2e 0 10px,#55603c 10px 20px)}
        .p3{background:radial-gradient(circle at 30% 30%,#e7d3b3 0 5px,transparent 6px) 0 0/24px 24px,linear-gradient(140deg,#7d3b2c,#4a241c)}
        .p4{background:repeating-linear-gradient(75deg,#2f3e46 0 8px,#4d606a 8px 16px),radial-gradient(circle at 50% 50%,#d9b382 0 3px,transparent 4px) 0 0/20px 20px}
        .p5{background:radial-gradient(circle at 20% 30%,#d9a86c 0 8px,transparent 9px) 0 0/34px 34px,linear-gradient(160deg,#4e2a20,#8b4a31)}
        .p6{background:repeating-conic-gradient(from 15deg at 50% 50%,#eadcc2 0 12deg,#b98a5e 12deg 24deg);opacity:.9}
        .badge{position:absolute;top:9px;left:9px;background:var(--cream);border-radius:999px;padding:4px 8px;font-size:8.5px;font-weight:800;letter-spacing:.06em;border:1px solid rgba(36,26,22,.15)}
        .wish{position:absolute;top:8px;right:8px;width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,.9);display:grid;place-items:center;font-size:12px}
        .pinfo{display:flex;justify-content:space-between;gap:10px;padding-top:10px}
        .pinfo h3{font-size:12.5px;font-weight:700;line-height:1.4}
        .pinfo p{font-size:10.5px;color:var(--muted);margin-top:2px}
        .pinfo b{font-size:12.5px;white-space:nowrap}
        .padd{margin-top:8px;border:1px solid var(--line);border-radius:999px;padding:6px 11px;font-size:10px;font-weight:700;color:#5b4a3f;display:inline-block}
        .story{background:var(--soft);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
        .storyin{display:grid;grid-template-columns:.9fr 1.1fr;gap:40px;align-items:center;padding-top:44px;padding-bottom:44px}
        .story p{color:#6a574a;font-size:13.5px;line-height:1.75;margin-top:10px}
        .swatches{display:flex;gap:8px;margin-top:18px}
        .swatches span{width:30px;height:30px;border-radius:50%;border:2px solid var(--cream);box-shadow:0 0 0 1px var(--line)}
        .market{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}
        .market span{border:1px solid #cfc2ae;border-radius:999px;padding:6px 11px;font-size:10.5px;font-weight:700;background:#fffaf1}
        .sitefoot{border-top:1px solid var(--line);padding:22px 0;font-size:11px;color:var(--muted)}
        .sitefoot .wrap{display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap}
        @media(max-width:900px){
          .heroin{grid-template-columns:1fr;gap:24px}
          .heroimg img{height:320px}
          .float{left:12px}
          .grid{grid-template-columns:1fr 1fr}
          .storyin{grid-template-columns:1fr}
          .trustitem{padding:12px 12px}
        }
        @media(max-width:620px){
          .links{display:none}
          .brand{font-size:21px}
          h1{font-size:36px}
          .heroimg img{height:260px;border-radius:120px 120px 12px 12px}
          .grid{gap:18px 12px}
          .pinfo{display:block}
          .pinfo b{display:block;margin-top:3px}
          .trustin{grid-template-columns:1fr}
          .trustitem{border-left:0;border-top:1px solid var(--line);padding:11px 0}
          .trustitem:first-child{border-top:0}
          .head{display:block}
          .chips{margin-top:12px}
          .head .chips{margin-top:14px}
        }
      `;

      var products = t.products
        .map(function (p, i) {
          var media =
            p[4] === "image"
              ? '<img src="assets/img/bisnis-fashion.webp" alt="" width="900" height="675">'
              : '<div class="pattern p' + (i + 1) + '"></div>';
          return (
            '<article class="product">' +
            '<div class="pimg">' + media +
            (p[3] ? '<span class="badge">' + p[3] + "</span>" : "") +
            '<span class="wish">♡</span></div>' +
            '<div class="pinfo"><div><h3>' + p[0] + "</h3><p>" + p[1] + "</p></div><b>" + p[2] + "</b></div>" +
            '<span class="padd">+ ' + t.add + "</span>" +
            "</article>"
          );
        })
        .join("");

      var body = `
        <div class="promo">${t.promo}</div>
        <nav class="nav"><div class="wrap navin">
          <div class="brand">Batik <span>Laras</span></div>
          <div class="links">${t.nav.map(function (x) { return "<span>" + x + "</span>"; }).join("")}</div>
          <div class="tools"><span>⌕</span><span>${en ? "Account" : "Akun"}</span><span class="bag">${en ? "Bag" : "Tas"} <b>2</b></span></div>
        </div></nav>

        <section class="hero"><div class="wrap heroin">
          <div>
            <span class="kick">${t.heroKick}</span>
            <h1>${t.h1a}<br><em>${t.h1b}</em></h1>
            <p>${t.sub}</p>
            <div class="buttons">
              <span class="btn btn-brand">${t.cta1}</span>
              <span class="btn btn-line">${t.cta2}</span>
            </div>
          </div>
          <div class="heroimg">
            <img src="assets/img/bisnis-fashion.webp" alt="" width="900" height="675">
            <div class="float">${t.floating}<b>Rp485.000</b></div>
          </div>
        </div></section>

        <div class="trust"><div class="wrap trustin">
          ${t.trust.map(function (x, i) {
            return '<div class="trustitem"><span class="dot">' + ["✦", "↺", "◎"][i] + "</span><div><b>" + x[0] + "</b><span>" + x[1] + "</span></div></div>";
          }).join("")}
        </div></div>

        <section class="block"><div class="wrap">
          <div class="head">
            <div><span class="kick">${t.shopKick}</span><h2>${t.shopTitle}</h2></div>
            <div class="chips">${t.filters.map(function (f, i) { return '<span class="chip' + (i === 0 ? " on" : "") + '">' + f + "</span>"; }).join("")}</div>
          </div>
          <div class="grid">${products}</div>
        </div></section>

        <section class="story"><div class="wrap storyin">
          <div>
            <span class="kick">${t.storyKick}</span>
            <h2>${t.storyTitle}</h2>
            <p>${t.storyBody}</p>
            <div class="swatches"><span style="background:#6d2c1f"></span><span style="background:#3f4a2e"></span><span style="background:#d9a86c"></span><span style="background:#2f3e46"></span></div>
          </div>
          <div>
            <span class="kick">${t.marketplace}</span>
            <div class="market"><span>Shopee</span><span>Tokopedia</span><span>TikTok Shop</span><span>Instagram</span></div>
            <p style="margin-top:18px;font-size:11px;color:var(--muted)">${t.note}</p>
          </div>
        </div></section>

        <footer class="sitefoot"><div class="wrap"><span>${t.foot}</span><span>batiklaras.id · Solo, Indonesia</span></div></footer>
      `;

      return frame(lang, css, body);
    }
  });
})();
