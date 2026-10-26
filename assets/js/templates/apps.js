/*
  Template demos - app group:
  sales CRM, store admin panel, point of sale.
*/
(function () {
  "use strict";

  var frame = window.cannesTemplateFrame;
  var list = window.CANNES_TEMPLATES;

  /* ------------------------------------------------------------------ */
  /* 7. Sales CRM                                                        */
  /* ------------------------------------------------------------------ */

  list.push({
    id: "crm-nipu",
    group: "app",
    demo: "app.nipu.id",
    price: 3000000,
    days: { id: "7-14 hari", en: "7-14 days" },
    category: { id: "Sistem & dashboard", en: "Systems & dashboards" },
    name: { id: "CRM penjualan", en: "Sales CRM" },
    summary: {
      id: "Papan pipeline untuk tim sales: lead masuk, follow-up terjadwal, dan nilai deal terlihat dalam satu layar.",
      en: "A pipeline board for sales teams: incoming leads, scheduled follow-ups, and deal value visible on one screen."
    },
    tags: {
      id: ["Pipeline", "Follow-up", "Laporan"],
      en: ["Pipeline", "Follow-ups", "Reports"]
    },
    features: {
      id: ["Papan pipeline 4 tahap", "Kartu lead dan nilai deal", "Daftar tugas hari ini", "Ringkasan performa tim"],
      en: ["Four-stage pipeline board", "Lead cards with deal value", "Today's task list", "Team performance summary"]
    },
    build: function (lang) {
      var en = lang === "en";
      var t = {
        brand: "Nipu",
        brandSub: en ? "Sales workspace" : "Ruang kerja sales",
        nav: en
          ? ["Overview", "Pipeline", "Contacts", "Reports", "Settings"]
          : ["Ringkasan", "Pipeline", "Kontak", "Laporan", "Pengaturan"],
        search: en ? "Search leads, companies…" : "Cari lead, perusahaan…",
        add: en ? "New lead" : "Lead baru",
        hello: en ? "Good morning, Rani" : "Selamat pagi, Rani",
        sub: en
          ? "You have 6 follow-ups today. Two deals are close to closing."
          : "Ada 6 follow-up hari ini. Dua deal sudah dekat closing.",
        kpi1: en ? "Open pipeline" : "Pipeline terbuka",
        kpi2: en ? "Won this month" : "Menang bulan ini",
        kpi3: en ? "Avg. reply time" : "Rata-rata respons",
        kpi4: en ? "New leads" : "Lead baru",
        kpi1v: "Rp 486 jt",
        kpi2v: "Rp 124 jt",
        kpi3v: en ? "38 min" : "38 menit",
        kpi4v: "42",
        kpi1d: en ? "+12% vs last month" : "+12% dari bulan lalu",
        kpi2d: en ? "8 deals closed" : "8 deal selesai",
        kpi3d: en ? "Within target" : "Sesuai target",
        kpi4d: en ? "18 from Instagram" : "18 dari Instagram",
        pipeTitle: en ? "Sales pipeline" : "Pipeline penjualan",
        pipeSub: en ? "This quarter · 24 active deals" : "Kuartal ini · 24 deal aktif",
        filter: en ? "All owners" : "Semua owner",
        today: en ? "Today's follow-ups" : "Follow-up hari ini",
        todayCount: en ? "6 tasks" : "6 tugas",
        activity: en ? "Recent activity" : "Aktivitas terbaru",
        viewAll: en ? "View all" : "Lihat semua",
        foot: en ? "Nipu CRM · Demo workspace" : "Nipu CRM · Ruang kerja demo",
        stages: en
          ? [
              ["New lead", "#5b4bf5", [["Rasa Kitchen", "Rp 12,5 jt", "Lina · 2h ago", "Instagram"], ["Bumi Ceramics", "Rp 8,2 jt", "Adi · 5h ago", "Referral"], ["Kopi Senja", "Rp 6,4 jt", "Rani · 1d ago", "Website"]]],
              ["Contacted", "#2f80ed", [["Batik Laras", "Rp 24 jt", "Rani · 1h ago", "WhatsApp"], ["Studio Tujuh", "Rp 15 jt", "Adi · 4h ago", "Cold call"], ["Dapur Kita", "Rp 9,8 jt", "Lina · 1d ago", "Instagram"]]],
              ["Proposal", "#f2994a", [["Karya Nusantara", "Rp 38 jt", "Rani · 3h ago", "Referral"], ["Rapih Barbershop", "Rp 11 jt", "Adi · 1d ago", "Website"]]],
              ["Closing", "#1f9d6b", [["Toko Laras", "Rp 42 jt", "Rani · 30m ago", "Repeat client"], ["Kedai Utara", "Rp 18 jt", "Lina · 2h ago", "WhatsApp"]]]
            ]
          : [
              ["Lead baru", "#5b4bf5", [["Rasa Kitchen", "Rp 12,5 jt", "Lina · 2 jam lalu", "Instagram"], ["Bumi Ceramics", "Rp 8,2 jt", "Adi · 5 jam lalu", "Referensi"], ["Kopi Senja", "Rp 6,4 jt", "Rani · 1 hari lalu", "Website"]]],
              ["Dihubungi", "#2f80ed", [["Batik Laras", "Rp 24 jt", "Rani · 1 jam lalu", "WhatsApp"], ["Studio Tujuh", "Rp 15 jt", "Adi · 4 jam lalu", "Telepon"], ["Dapur Kita", "Rp 9,8 jt", "Lina · 1 hari lalu", "Instagram"]]],
              ["Proposal", "#f2994a", [["Karya Nusantara", "Rp 38 jt", "Rani · 3 jam lalu", "Referensi"], ["Rapih Barbershop", "Rp 11 jt", "Adi · 1 hari lalu", "Website"]]],
              ["Closing", "#1f9d6b", [["Toko Laras", "Rp 42 jt", "Rani · 30 mnt lalu", "Klien lama"], ["Kedai Utara", "Rp 18 jt", "Lina · 2 jam lalu", "WhatsApp"]]]
            ],
        tasks: en
          ? [["08:30", "Call back Batik Laras", "Proposal revision", "High"], ["10:00", "Send invoice to Toko Laras", "Closing step", "High"], ["13:30", "Follow up Karya Nusantara", "Waiting on owner", "Medium"], ["16:00", "Weekly pipeline review", "Team", "Low"]]
          : [["08.30", "Telepon balik Batik Laras", "Revisi proposal", "Tinggi"], ["10.00", "Kirim invoice Toko Laras", "Tahap closing", "Tinggi"], ["13.30", "Follow up Karya Nusantara", "Menunggu owner", "Sedang"], ["16.00", "Review pipeline mingguan", "Tim", "Rendah"]],
        acts: en
          ? [["Rani", "moved Toko Laras to Closing", "30m"], ["Adi", "added a note to Studio Tujuh", "1h"], ["Lina", "created lead Bumi Ceramics", "2h"], ["Rani", "won deal Kedai Utara · Rp 18 jt", "4h"]]
          : [["Rani", "memindahkan Toko Laras ke Closing", "30 mnt"], ["Adi", "menambah catatan di Studio Tujuh", "1 jam"], ["Lina", "membuat lead Bumi Ceramics", "2 jam"], ["Rani", "menang deal Kedai Utara · Rp 18 jt", "4 jam"]]
      };

      var navIcons = ["home", "chart", "users", "trend", "settings"];
      var navHtml = t.nav
        .map(function (n, i) {
          return '<a href="#" class="' + (i === 1 ? "on" : "") + '"><svg class="ic"><use href="#ic-' + navIcons[i] + '"></use></svg><span>' + n + "</span>" + (i === 2 ? '<span class="badge">24</span>' : "") + "</a>";
        })
        .join("");

      var pipeHtml = t.stages
        .map(function (s) {
          var cards = s[2]
            .map(function (d) {
              return (
                '<article class="deal"><div class="dealtop"><b>' + d[0] + "</b><span>" + d[1] + "</span></div>" +
                '<div class="dealmeta"><span class="who">' + d[2] + '</span><span class="src">' + d[3] + "</span></div></article>"
              );
            })
            .join("");
          return (
            '<div class="col"><div class="colhead"><span class="dot" style="background:' + s[1] + '"></span><b>' + s[0] +
            '</b><span class="count">' + s[2].length + '</span><button class="mini" aria-label="' + (en ? "Add deal" : "Tambah deal") + '">+</button></div>' +
            cards + '<div class="colfoot">' + s[2].length + (en ? " deals" : " deal") + "</div></div>"
          );
        })
        .join("");

      var taskHtml = t.tasks
        .map(function (x) {
          return (
            '<li><span class="time">' + x[0] + '</span><span class="task"><b>' + x[1] + "</b><small>" + x[2] +
            '</small></span><span class="pri ' + (x[3] === "High" || x[3] === "Tinggi" ? "hi" : x[3] === "Low" || x[3] === "Rendah" ? "lo" : "md") + '">' + x[3] + "</span></li>"
          );
        })
        .join("");

      var actHtml = t.acts
        .map(function (a) {
          return (
            '<li><span class="avatar sm">' + a[0].charAt(0) + '</span><p><b>' + a[0] + "</b> " + a[1] +
            '</p><time>' + a[2] + "</time></li>"
          );
        })
        .join("");

      var css = `
        :root{--ink:#141223;--muted:#726d85;--line:#e6e2f2;--violet:#5b4bf5;--soft:#eeecff;--bg:#f6f5fb;--card:#fff}
        body{background:var(--bg);color:var(--ink);font-size:12.5px}
        .app{display:flex;min-height:100vh}
        .side{width:214px;flex:none;background:#171428;color:#cdc7e6;padding:20px 13px;display:flex;flex-direction:column;gap:22px;position:sticky;top:0;height:100vh}
        .brand{display:flex;align-items:center;gap:10px;padding:0 7px;color:#fff}
        .brandmark{width:32px;height:32px;border-radius:10px;background:linear-gradient(135deg,#8b7bff,#4b3ae0);display:grid;place-items:center;font-weight:800;font-size:14px}
        .brand b{display:block;font-size:15px;letter-spacing:.01em}
        .brand small{display:block;font-size:8px;letter-spacing:.15em;text-transform:uppercase;color:#8b84a8;font-weight:700;margin-top:2px}
        .side nav{display:grid;gap:2px}
        .side nav a{display:flex;align-items:center;gap:10px;padding:9px 11px;border-radius:9px;font-size:12px;font-weight:600;color:#a9a2c4}
        .side nav a .ic{width:15px;height:15px}
        .side nav a.on{background:rgba(124,107,255,.18);color:#fff}
        .side nav a .badge{margin-left:auto;background:#ffcf02;color:#171428;font-size:9px;font-weight:800;padding:1px 6px;border-radius:999px}
        .sidefoot{margin-top:auto;border-top:1px solid rgba(255,255,255,.08);padding:14px 7px 0;display:flex;align-items:center;gap:9px}
        .avatar{width:30px;height:30px;border-radius:50%;background:#ffcf02;color:#171428;display:grid;place-items:center;font-weight:800;font-size:11px;flex:none}
        .avatar.sm{width:22px;height:22px;font-size:9px}
        .sidefoot b{display:block;font-size:11px;color:#fff}
        .sidefoot span{font-size:9.5px;color:#8b84a8}
        .main{flex:1;min-width:0}
        .top{display:flex;align-items:center;gap:12px;padding:13px 24px;background:#fff;border-bottom:1px solid var(--line);position:sticky;top:0;z-index:3}
        .search{display:flex;align-items:center;gap:8px;background:var(--bg);border:1px solid var(--line);border-radius:9px;padding:8px 10px;width:280px;max-width:100%;color:var(--muted);font-size:11px}
        .search .ic{width:13px;height:13px}
        .top .grow{flex:1}
        .iconbtn{width:31px;height:31px;border:1px solid var(--line);border-radius:9px;display:grid;place-items:center;color:var(--muted);position:relative;background:#fff;flex:none}
        .iconbtn .ic{width:14px;height:14px}
        .iconbtn i{position:absolute;top:6px;right:7px;width:5px;height:5px;border-radius:50%;background:#f04438}
        .cta{background:var(--violet);color:#fff;border-radius:9px;padding:8px 11px;font-size:11px;font-weight:700;display:inline-flex;gap:6px;align-items:center;white-space:nowrap}
        .cta .ic{width:13px;height:13px}
        .mobilenav{display:none}
        .content{padding:22px 24px 30px}
        .head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:18px}
        .head h1{font-size:23px;letter-spacing:-.03em;margin-bottom:4px}
        .head p{color:var(--muted);font-size:11.5px}
        .ghost{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);background:#fff;border-radius:9px;padding:8px 11px;font-size:11px;font-weight:700;color:#4a4560}
        .ghost .ic{width:13px;height:13px}
        .kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:18px}
        .kpi{background:var(--card);border:1px solid var(--line);border-radius:13px;padding:14px}
        .kpi span{display:block;color:var(--muted);font-size:10px;font-weight:700;letter-spacing:.04em;text-transform:uppercase}
        .kpi b{display:block;font-size:21px;letter-spacing:-.035em;margin:7px 0 4px}
        .kpi small{font-size:9.5px;color:#1f9d6b;font-weight:700}
        .kpi small.warn{color:#d97706}
        .panel{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px}
        .panelhead{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px;flex-wrap:wrap}
        .panelhead h2{font-size:13.5px;letter-spacing:-.01em}
        .panelhead p{font-size:10px;color:var(--muted);margin-top:2px}
        .select{border:1px solid var(--line);border-radius:8px;padding:6px 9px;font-size:10px;font-weight:600;color:#4a4560;background:#fff}
        .pipe{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-bottom:18px}
        .col{background:#fbfaff;border:1px solid var(--line);border-radius:11px;padding:9px;min-width:0}
        .colhead{display:flex;align-items:center;gap:6px;margin-bottom:8px;padding:0 1px}
        .colhead b{font-size:10.5px;font-weight:800}
        .colhead .dot{width:6px;height:6px;border-radius:50%;flex:none}
        .colhead .count{margin-left:auto;font-size:9px;color:var(--muted);font-weight:700;background:#eeecf7;border-radius:999px;padding:1px 6px}
        .colhead .mini{width:17px;height:17px;border-radius:5px;background:#fff;border:1px solid var(--line);font-size:11px;line-height:1;color:var(--muted);margin-left:3px}
        .deal{background:#fff;border:1px solid var(--line);border-radius:9px;padding:8px 9px;margin-bottom:6px;box-shadow:0 1px 0 rgba(20,18,35,.03)}
        .dealtop{display:flex;justify-content:space-between;gap:6px;align-items:baseline}
        .dealtop b{font-size:10.5px;letter-spacing:-.01em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        .dealtop span{font-size:9px;font-weight:800;color:var(--violet);white-space:nowrap}
        .dealmeta{display:flex;justify-content:space-between;gap:6px;margin-top:5px;font-size:8.5px;color:var(--muted)}
        .dealmeta .src{background:var(--soft);color:#4b3ae0;border-radius:999px;padding:1px 5px;font-weight:700;white-space:nowrap}
        .colfoot{font-size:8.5px;color:var(--muted);font-weight:700;padding:5px 2px 0}
        .lower{display:grid;grid-template-columns:1.15fr .85fr;gap:12px}
        .tasks{display:grid}
        .tasks li{display:flex;align-items:center;gap:9px;padding:8px 0;border-bottom:1px solid #f1eef8}
        .tasks li:last-child{border-bottom:0}
        .tasks .time{width:37px;font-size:9.5px;font-weight:800;color:var(--violet);flex:none}
        .tasks .task{min-width:0;flex:1}
        .tasks .task b{display:block;font-size:10.5px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        .tasks .task small{display:block;font-size:9px;color:var(--muted)}
        .pri{font-size:8px;font-weight:800;letter-spacing:.03em;text-transform:uppercase;border-radius:999px;padding:2px 6px;flex:none}
        .pri.hi{background:#fdecec;color:#c62828}
        .pri.md{background:#fff5e5;color:#b45309}
        .pri.lo{background:#eaf7f0;color:#1f9d6b}
        .acts{display:grid;gap:2px}
        .acts li{display:flex;align-items:flex-start;gap:8px;padding:7px 0;border-bottom:1px solid #f1eef8}
        .acts li:last-child{border-bottom:0}
        .acts p{flex:1;font-size:10px;color:#57516b;line-height:1.45;min-width:0}
        .acts b{color:var(--ink)}
        .acts time{font-size:8.5px;color:var(--muted);flex:none}
        .linkmore{font-size:9.5px;font-weight:800;color:var(--violet)}
        .foot{padding:14px 24px 20px;font-size:9px;color:#9a94ae;display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}
        @media(max-width:1050px){
          .kpis{grid-template-columns:repeat(2,1fr)}
          .lower{grid-template-columns:1fr}
        }
        @media(max-width:880px){
          .app{display:block}
          .side{width:auto;height:auto;position:static;flex-direction:row;align-items:center;gap:10px;padding:10px 16px}
          .side nav,.sidefoot{display:none}
          .brand{padding:0}
          .brandmark{width:28px;height:28px;border-radius:8px;font-size:12px}
          .mobilenav{display:flex;gap:5px;overflow:auto;background:#fff;border-bottom:1px solid var(--line);padding:8px 16px}
          .mobilenav a{font-size:10px;font-weight:700;color:var(--muted);padding:5px 9px;border-radius:999px;white-space:nowrap}
          .mobilenav a.on{background:var(--soft);color:#4b3ae0}
          .top{padding:10px 16px}
          .search{width:auto;flex:1}
          .content{padding:18px 16px 26px}
          .pipe{grid-template-columns:repeat(2,minmax(0,1fr))}
        }
        @media(max-width:560px){
          .search{display:none}
          .head h1{font-size:20px}
          .kpis{grid-template-columns:1fr 1fr;gap:8px}
          .kpi{padding:11px}
          .kpi b{font-size:18px}
          .pipe{display:flex;overflow-x:auto;padding-bottom:4px;scroll-snap-type:x mandatory}
          .col{flex:0 0 78%;scroll-snap-align:start}
          .panel{padding:13px}
          .foot{padding:12px 16px 18px}
        }
      `;

      var body = `
        <div class="app">
          <aside class="side">
            <div class="brand"><span class="brandmark">N</span><span><b>${t.brand}</b><small>${t.brandSub}</small></span></div>
            <nav>${navHtml}</nav>
            <div class="sidefoot"><span class="avatar">RA</span><span><b>Rani Alifah</b><span>Sales lead</span></span></div>
          </aside>

          <div class="main">
            <div class="top">
              <div class="search"><svg class="ic"><use href="#ic-search"></use></svg><span>${t.search}</span></div>
              <div class="grow"></div>
              <button class="iconbtn" aria-label="${en ? "Notifications" : "Notifikasi"}"><svg class="ic"><use href="#ic-bell"></use></svg><i></i></button>
              <button class="cta"><svg class="ic"><use href="#ic-plus"></use></svg>${t.add}</button>
            </div>

            <div class="mobilenav">${t.nav.map(function (n, i) { return '<a href="#" class="' + (i === 1 ? "on" : "") + '">' + n + "</a>"; }).join("")}</div>

            <div class="content">
              <div class="head">
                <div><h1>${t.hello}</h1><p>${t.sub}</p></div>
                <button class="ghost"><svg class="ic"><use href="#ic-calendar"></use></svg>${en ? "This quarter" : "Kuartal ini"}</button>
              </div>

              <div class="kpis">
                <div class="kpi"><span>${t.kpi1}</span><b>${t.kpi1v}</b><small>${t.kpi1d}</small></div>
                <div class="kpi"><span>${t.kpi2}</span><b>${t.kpi2v}</b><small>${t.kpi2d}</small></div>
                <div class="kpi"><span>${t.kpi3}</span><b>${t.kpi3v}</b><small class="warn">${t.kpi3d}</small></div>
                <div class="kpi"><span>${t.kpi4}</span><b>${t.kpi4v}</b><small>${t.kpi4d}</small></div>
              </div>

              <div class="panel" style="margin-bottom:18px">
                <div class="panelhead">
                  <div><h2>${t.pipeTitle}</h2><p>${t.pipeSub}</p></div>
                  <span class="select">${t.filter}</span>
                </div>
                <div class="pipe">${pipeHtml}</div>
              </div>

              <div class="lower">
                <div class="panel">
                  <div class="panelhead"><div><h2>${t.today}</h2><p>${t.todayCount}</p></div><span class="linkmore">${t.viewAll}</span></div>
                  <ul class="tasks">${taskHtml}</ul>
                </div>
                <div class="panel">
                  <div class="panelhead"><h2>${t.activity}</h2><span class="linkmore">${t.viewAll}</span></div>
                  <ul class="acts">${actHtml}</ul>
                </div>
              </div>
            </div>

            <div class="foot"><span>${t.foot}</span><span>nipu.id</span></div>
          </div>
        </div>
      `;

      return frame(lang, css, body);
    }
  });

  /* ------------------------------------------------------------------ */
  /* 8. Store admin panel                                                */
  /* ------------------------------------------------------------------ */

  list.push({
    id: "admin-toko",
    group: "app",
    demo: "admin.batiklaras.id",
    price: 3500000,
    days: { id: "7-14 hari", en: "7-14 days" },
    category: { id: "Sistem toko", en: "Store systems" },
    name: { id: "Admin panel toko", en: "Store admin panel" },
    summary: {
      id: "Kelola produk, stok, dan pesanan dari satu panel. Tim toko bisa update tanpa takut merusak tampilan.",
      en: "Manage products, stock, and orders from one panel. The shop team can update things without breaking the storefront."
    },
    tags: {
      id: ["Produk", "Stok", "Pesanan"],
      en: ["Products", "Stock", "Orders"]
    },
    features: {
      id: ["Tabel produk dan stok", "Status pesanan masuk", "Grafik penjualan mingguan", "Peran admin dan staf"],
      en: ["Product and stock table", "Incoming order statuses", "Weekly sales chart", "Admin and staff roles"]
    },
    build: function (lang) {
      var en = lang === "en";
      var t = {
        brand: "Laras",
        brandSub: "admin",
        search: en ? "Search products, orders…" : "Cari produk, pesanan…",
        nav: en
          ? ["Dashboard", "Products", "Orders", "Customers", "Discounts", "Settings"]
          : ["Dashboard", "Produk", "Pesanan", "Pelanggan", "Diskon", "Pengaturan"],
        store: en ? "Batik Laras" : "Batik Laras",
        storeSub: "batiklaras.id",
        live: en ? "Store live" : "Toko aktif",
        greet: en ? "Products" : "Produk",
        greetSub: en ? "128 products · 6 low on stock" : "128 produk · 6 stok menipis",
        add: en ? "Add product" : "Tambah produk",
        exportT: en ? "Export" : "Ekspor",
        k1: en ? "Revenue this month" : "Omzet bulan ini",
        k1v: "Rp 84,2 jt",
        k1d: en ? "+18,4% vs last month" : "+18,4% dari bulan lalu",
        k2: en ? "Orders to pack" : "Pesanan siap kirim",
        k2v: "23",
        k2d: en ? "7 need today" : "7 harus hari ini",
        k3: en ? "Low stock" : "Stok menipis",
        k3v: "6",
        k3d: en ? "Reorder soon" : "Segera restock",
        chartTitle: en ? "Weekly sales" : "Penjualan mingguan",
        chartSub: en ? "Last 7 days · gross" : "7 hari terakhir · bruto",
        chartTotal: "Rp 21,6 jt",
        days: en ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] : ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
        bars: [42, 58, 49, 72, 64, 92, 78],
        alertTitle: en ? "Stock alerts" : "Peringatan stok",
        restock: en ? "Restock" : "Restock",
        alerts: en
          ? [["Parang Sogan", "2 left", 12], ["Kawung Indigo", "4 left", 24], ["Mega Mendung", "5 left", 30]]
          : [["Parang Sogan", "Sisa 2", 12], ["Kawung Indigo", "Sisa 4", 24], ["Mega Mendung", "Sisa 5", 30]],
        tableTitle: en ? "Product list" : "Daftar produk",
        tableSub: en ? "Updated 4 minutes ago" : "Diperbarui 4 menit lalu",
        filter: en ? "All categories" : "Semua kategori",
        cols: en ? ["Product", "SKU", "Stock", "Price", "Status"] : ["Produk", "SKU", "Stok", "Harga", "Status"],
        products: en
          ? [["Parang Sogan Shirt", "BTM-014", "2", "Rp 385.000", "Low stock"], ["Kawung Indigo Scarf", "BTM-022", "4", "Rp 245.000", "Low stock"], ["Mega Mendung Dress", "BTM-031", "5", "Rp 520.000", "Low stock"], ["Sogan Pleated Skirt", "BTM-009", "18", "Rp 310.000", "Active"], ["Tulis Batik Shirt", "BTM-027", "24", "Rp 365.000", "Active"]]
          : [["Kemeja Parang Sogan", "BTM-014", "2", "Rp 385.000", "Stok menipis"], ["Selendang Kawung Indigo", "BTM-022", "4", "Rp 245.000", "Stok menipis"], ["Dress Mega Mendung", "BTM-031", "5", "Rp 520.000", "Stok menipis"], ["Rok Plisket Sogan", "BTM-009", "18", "Rp 310.000", "Aktif"], ["Kemeja Batik Tulis", "BTM-027", "24", "Rp 365.000", "Aktif"]],
        orderTitle: en ? "Latest orders" : "Pesanan terbaru",
        orderSub: en ? "Synced with the storefront" : "Tersinkron dengan toko",
        orders: en
          ? [["#LR-1042", "Ayu P.", "Rp 630.000", "Paid"], ["#LR-1041", "Dimas R.", "Rp 385.000", "Packing"], ["#LR-1040", "Sari W.", "Rp 245.000", "Shipped"]]
          : [["#LR-1042", "Ayu P.", "Rp 630.000", "Lunas"], ["#LR-1041", "Dimas R.", "Rp 385.000", "Dikemas"], ["#LR-1040", "Sari W.", "Rp 245.000", "Dikirim"]],
        seeOrders: en ? "View all orders" : "Lihat semua pesanan",
        foot: en ? "Laras Admin · Demo store" : "Laras Admin · Toko demo"
      };

      var navIcons = ["grid", "box", "cart", "users", "trend", "settings"];
      var navHtml = t.nav
        .map(function (n, i) {
          return '<a href="#" class="' + (i === 1 ? "on" : "") + '"><svg class="ic"><use href="#ic-' + navIcons[i] + '"></use></svg><span>' + n + "</span>" + (i === 2 ? '<span class="badge">23</span>' : "") + "</a>";
        })
        .join("");

      var barHtml = t.bars
        .map(function (v, i) {
          return '<div class="barcol"><div class="bar' + (i === 5 ? " hi" : "") + '" style="height:' + v + '%"></div><span>' + t.days[i] + "</span></div>";
        })
        .join("");

      var alertHtml = t.alerts
        .map(function (a) {
          return (
            '<div class="alert"><div class="alerttop"><b>' + a[0] + '</b><span>' + a[1] + '</span></div>' +
            '<div class="track"><i style="width:' + a[2] + '%"></i></div></div>'
          );
        })
        .join("");

      var productHtml = t.products
        .map(function (p, i) {
          var tone = ["#8a4b2f", "#2f4668", "#3f4a2e", "#a96f43", "#6d3a55"][i];
          return (
            '<tr><td><div class="prodcell"><span class="thumb" style="background:' + tone + '">' + p[0].charAt(0) + "</span><span><b>" + p[0] + "</b><small>" + (en ? "Batik collection" : "Koleksi batik") + "</small></span></div></td>" +
            '<td class="mono">' + p[1] + '</td><td>' + p[2] + '</td><td class="mono">' + p[3] + '</td>' +
            '<td><span class="pill ' + (p[4] === "Low stock" || p[4] === "Stok menipis" ? "low" : "ok") + '">' + p[4] + "</span></td>" +
            '<td><button class="dots" aria-label="' + (en ? "Row actions" : "Aksi baris") + '">•••</button></td></tr>'
          );
        })
        .join("");

      var orderHtml = t.orders
        .map(function (o) {
          return (
            '<li><span class="ocode">' + o[0] + '</span><span class="oname">' + o[1] + '</span><b>' + o[2] +
            '</b><span class="pill ' + (o[3] === "Paid" || o[3] === "Lunas" ? "ok" : o[3] === "Packing" || o[3] === "Dikemas" ? "wait" : "ship") + '">' + o[3] + "</span></li>"
          );
        })
        .join("");

      var css = `
        :root{--ink:#101828;--muted:#667085;--line:#e4e7ec;--teal:#0d9488;--teal-soft:#e6f7f4;--navy:#0f172a;--orange:#f97316;--bg:#f2f5f8;--card:#fff}
        body{background:var(--bg);color:var(--ink);font-size:12.5px}
        .top{background:var(--navy);color:#fff;display:flex;align-items:center;gap:16px;padding:0 22px;height:56px;position:sticky;top:0;z-index:5}
        .brand{display:flex;align-items:baseline;gap:7px;font-weight:800;font-size:17px;letter-spacing:-.02em;flex:none}
        .brand span{font-size:9px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#7dd3c7;background:rgba(13,148,136,.22);padding:3px 6px;border-radius:4px}
        .tsearch{display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1);border-radius:7px;padding:7px 10px;flex:1;max-width:330px;color:#98a2b3;font-size:11px}
        .tsearch .ic{width:13px;height:13px}
        .top .grow{flex:1}
        .storepill{display:inline-flex;align-items:center;gap:6px;font-size:9.5px;font-weight:700;color:#a7f3d0;background:rgba(16,185,129,.12);border:1px solid rgba(16,185,129,.25);padding:4px 8px;border-radius:999px;white-space:nowrap}
        .storepill:before{content:"";width:5px;height:5px;border-radius:50%;background:#34d399}
        .avatar{width:30px;height:30px;border-radius:50%;background:#f97316;color:#fff;display:grid;place-items:center;font-size:10px;font-weight:800;flex:none}
        .shell{display:flex;min-height:calc(100vh - 56px)}
        .side{width:208px;flex:none;background:#fff;border-right:1px solid var(--line);padding:16px 12px;display:flex;flex-direction:column;gap:18px;position:sticky;top:56px;height:calc(100vh - 56px)}
        .storecard{display:flex;align-items:center;gap:9px;padding:9px;border:1px solid var(--line);border-radius:9px}
        .storelogo{width:30px;height:30px;border-radius:7px;background:linear-gradient(135deg,#0f766e,#115e59);color:#d1fae5;display:grid;place-items:center;font-weight:800;font-size:12px;flex:none}
        .storecard b{display:block;font-size:11px}
        .storecard small{font-size:9px;color:var(--muted)}
        .side nav{display:grid;gap:1px}
        .side nav a{display:flex;align-items:center;gap:9px;padding:8px 10px;border-radius:7px;font-size:11.5px;font-weight:600;color:#475467}
        .side nav a .ic{width:14px;height:14px;color:#98a2b3}
        .side nav a.on{background:var(--teal-soft);color:#0f766e}
        .side nav a.on .ic{color:#0d9488}
        .side nav a .badge{margin-left:auto;background:#ffedd5;color:#c2410c;font-size:8.5px;font-weight:800;padding:1px 5px;border-radius:999px}
        .help{margin-top:auto;background:#f8fafc;border:1px dashed #cbd5e1;border-radius:9px;padding:10px}
        .help b{display:block;font-size:10px;margin-bottom:2px}
        .help p{font-size:9px;color:var(--muted);line-height:1.5}
        .help a{display:inline-block;margin-top:6px;font-size:9px;font-weight:800;color:var(--teal)}
        .mobilenav{display:none}
        .content{flex:1;min-width:0;padding:20px 22px 30px}
        .head{display:flex;align-items:flex-end;justify-content:space-between;gap:14px;flex-wrap:wrap;margin-bottom:16px}
        .head h1{font-size:22px;letter-spacing:-.03em;margin-bottom:3px}
        .head p{font-size:11px;color:var(--muted)}
        .headact{display:flex;gap:7px;flex-wrap:wrap}
        .btn2{display:inline-flex;align-items:center;gap:6px;border-radius:7px;padding:8px 11px;font-size:10.5px;font-weight:700;border:1px solid var(--line);background:#fff;color:#344054}
        .btn2 .ic{width:12px;height:12px}
        .btn2.primary{background:var(--teal);border-color:var(--teal);color:#fff}
        .kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:11px;margin-bottom:13px}
        .kpi{background:#fff;border:1px solid var(--line);border-radius:11px;padding:13px}
        .kpi span{display:block;font-size:9.5px;font-weight:700;color:var(--muted);letter-spacing:.04em;text-transform:uppercase}
        .kpi b{display:block;font-size:20px;letter-spacing:-.035em;margin:6px 0 3px}
        .kpi small{font-size:9px;font-weight:700;color:#0f766e}
        .kpi small.warn{color:#c2410c}
        .mid{display:grid;grid-template-columns:1.5fr .85fr;gap:11px;margin-bottom:13px}
        .panel{background:#fff;border:1px solid var(--line);border-radius:11px;padding:14px;min-width:0}
        .panelhead{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:12px;flex-wrap:wrap}
        .panelhead h2{font-size:12.5px;letter-spacing:-.01em}
        .panelhead p{font-size:9.5px;color:var(--muted);margin-top:2px}
        .bigval{font-size:16px;font-weight:800;letter-spacing:-.03em;margin-top:3px}
        .chart{display:flex;align-items:flex-end;gap:7px;height:108px;padding-top:8px}
        .barcol{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:5px;height:100%}
        .bar{width:100%;max-width:26px;border-radius:4px 4px 2px 2px;background:#ccfbf1;min-height:6px}
        .bar.hi{background:var(--teal)}
        .barcol span{font-size:8px;color:var(--muted);font-weight:600}
        .alerts{display:grid;gap:10px}
        .alerttop{display:flex;justify-content:space-between;gap:8px;font-size:9.5px;margin-bottom:5px}
        .alerttop b{font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        .alerttop span{color:#c2410c;font-weight:800;white-space:nowrap}
        .track{height:5px;border-radius:999px;background:#f1f5f9;overflow:hidden}
        .track i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#fb923c,#f97316)}
        .restock{display:block;margin-top:9px;font-size:9px;font-weight:800;color:var(--teal)}
        .tablewrap{overflow-x:auto;margin:0 -14px;padding:0 14px}
        table{width:100%;border-collapse:collapse;min-width:560px}
        th{text-align:left;font-size:8.5px;letter-spacing:.05em;text-transform:uppercase;color:#98a2b3;font-weight:800;padding:0 8px 7px;border-bottom:1px solid var(--line)}
        td{padding:8px;border-bottom:1px solid #f1f5f9;font-size:10.5px;vertical-align:middle}
        tr:last-child td{border-bottom:0}
        .prodcell{display:flex;align-items:center;gap:8px;min-width:150px}
        .thumb{width:27px;height:27px;border-radius:6px;display:grid;place-items:center;color:#fff;font-size:9px;font-weight:800;flex:none}
        .prodcell b{display:block;font-size:10px;font-weight:700;line-height:1.3}
        .prodcell small{display:block;font-size:8.5px;color:var(--muted)}
        .mono{font-variant-numeric:tabular-nums;color:#475467}
        .pill{display:inline-block;font-size:8.5px;font-weight:800;padding:2px 6px;border-radius:999px;white-space:nowrap}
        .pill.low{background:#fff7ed;color:#c2410c}
        .pill.ok{background:#ecfdf5;color:#047857}
        .pill.wait{background:#eff6ff;color:#1d4ed8}
        .pill.ship{background:#f5f3ff;color:#6d28d9}
        .dots{color:#98a2b3;font-size:11px;letter-spacing:1px;padding:2px 4px}
        .orders{display:grid}
        .orders li{display:grid;grid-template-columns:1fr auto;gap:2px 8px;padding:8px 0;border-bottom:1px solid #f1f5f9;align-items:center}
        .orders li:last-child{border-bottom:0}
        .ocode{font-size:9px;font-weight:800;color:var(--teal);font-variant-numeric:tabular-nums}
        .oname{font-size:9.5px;color:var(--muted);grid-column:1}
        .orders b{font-size:10px;text-align:right;grid-row:1;grid-column:2}
        .orders .pill{grid-column:2;justify-self:end}
        .seeorders{display:block;margin-top:10px;font-size:9.5px;font-weight:800;color:var(--teal)}
        .foot{padding:14px 22px;font-size:9px;color:#98a2b3;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap}
        @media(max-width:1050px){.mid{grid-template-columns:1fr}.kpis{grid-template-columns:repeat(3,1fr)}}
        @media(max-width:880px){
          .shell{display:block}
          .side{display:none}
          .mobilenav{display:flex;gap:4px;overflow:auto;background:#fff;border-bottom:1px solid var(--line);padding:8px 14px;position:sticky;top:56px;z-index:4}
          .mobilenav a{font-size:10px;font-weight:700;color:var(--muted);padding:5px 9px;border-radius:999px;white-space:nowrap}
          .mobilenav a.on{background:var(--teal-soft);color:#0f766e}
          .content{padding:16px 14px 24px}
          .tsearch{max-width:none}
        }
        @media(max-width:620px){
          .top{gap:10px;padding:0 14px}
          .tsearch{display:none}
          .kpis{grid-template-columns:1fr 1fr}
          .kpi b{font-size:17px}
          .head h1{font-size:19px}
          .headact{width:100%}
          .headact .btn2{flex:1;justify-content:center}
          .foot{padding:12px 14px}
        }
        @media(max-width:420px){.kpis{grid-template-columns:1fr}.chart{height:92px}}
      `;

      var body = `
        <header class="top">
          <div class="brand">${t.brand}<span>${t.brandSub}</span></div>
          <div class="tsearch"><svg class="ic"><use href="#ic-search"></use></svg><span>${t.search}</span></div>
          <div class="grow"></div>
          <span class="storepill">${t.live}</span>
          <button class="iconbtn" style="background:none;border:0;color:#cbd5e1" aria-label="${en ? "Notifications" : "Notifikasi"}"><svg class="ic" style="width:16px;height:16px"><use href="#ic-bell"></use></svg></button>
          <span class="avatar">RA</span>
        </header>

        <div class="shell">
          <aside class="side">
            <div class="storecard"><span class="storelogo">BL</span><span><b>${t.store}</b><small>${t.storeSub}</small></span></div>
            <nav>${navHtml}</nav>
            <div class="help"><b>${en ? "Need a hand?" : "Butuh bantuan?"}</b><p>${en ? "Read the 3-minute guide to adding products." : "Baca panduan 3 menit untuk menambah produk."}</p><a href="#">${en ? "Open guide" : "Buka panduan"}</a></div>
          </aside>

          <div style="min-width:0;flex:1">
            <div class="mobilenav">${t.nav.map(function (n, i) { return '<a href="#" class="' + (i === 1 ? "on" : "") + '">' + n + "</a>"; }).join("")}</div>

            <main class="content">
              <div class="head">
                <div><h1>${t.greet}</h1><p>${t.greetSub}</p></div>
                <div class="headact">
                  <button class="btn2"><svg class="ic"><use href="#ic-box"></use></svg>${t.exportT}</button>
                  <button class="btn2 primary"><svg class="ic"><use href="#ic-plus"></use></svg>${t.add}</button>
                </div>
              </div>

              <div class="kpis">
                <div class="kpi"><span>${t.k1}</span><b>${t.k1v}</b><small>${t.k1d}</small></div>
                <div class="kpi"><span>${t.k2}</span><b>${t.k2v}</b><small class="warn">${t.k2d}</small></div>
                <div class="kpi"><span>${t.k3}</span><b>${t.k3v}</b><small class="warn">${t.k3d}</small></div>
              </div>

              <div class="mid">
                <div class="panel">
                  <div class="panelhead"><div><h2>${t.chartTitle}</h2><p>${t.chartSub}</p><div class="bigval">${t.chartTotal}</div></div><span class="pill ok">+18,4%</span></div>
                  <div class="chart">${barHtml}</div>
                </div>
                <div class="panel">
                  <div class="panelhead"><h2>${t.alertTitle}</h2><span class="pill low">6</span></div>
                  <div class="alerts">${alertHtml}</div>
                  <a class="restock" href="#">${t.restock} →</a>
                </div>
              </div>

              <div class="mid">
                <div class="panel">
                  <div class="panelhead"><div><h2>${t.tableTitle}</h2><p>${t.tableSub}</p></div><span class="pill ok">${t.filter}</span></div>
                  <div class="tablewrap"><table><thead><tr>${t.cols.map(function (c) { return "<th>" + c + "</th>"; }).join("")}<th></th></tr></thead><tbody>${productHtml}</tbody></table></div>
                </div>
                <div class="panel">
                  <div class="panelhead"><div><h2>${t.orderTitle}</h2><p>${t.orderSub}</p></div></div>
                  <ul class="orders">${orderHtml}</ul>
                  <a class="seeorders" href="#">${t.seeOrders} →</a>
                </div>
              </div>
            </main>

            <div class="foot"><span>${t.foot}</span><span>© 2026 Batik Laras</span></div>
          </div>
        </div>
      `;

      return frame(lang, css, body);
    }
  });

  /* ------------------------------------------------------------------ */
  /* 9. Point of sale                                                    */
  /* ------------------------------------------------------------------ */

  list.push({
    id: "pos-kedai",
    group: "app",
    demo: "kasir.dapurkita.id",
    price: 2500000,
    days: { id: "7-14 hari", en: "7-14 days" },
    category: { id: "Kasir & operasional", en: "POS & operations" },
    name: { id: "Kasir / POS", en: "Point of sale" },
    summary: {
      id: "Layar kasir sentuh untuk kafe dan toko: pilih menu, hitung total, terima QRIS atau tunai, cetak struk.",
      en: "A touch-friendly till for cafes and shops: tap items, total the bill, accept QRIS or cash, print the receipt."
    },
    tags: {
      id: ["Kasir", "QRIS", "Struk"],
      en: ["POS", "QRIS", "Receipts"]
    },
    features: {
      id: ["Grid produk sentuh", "Keranjang dan ubah jumlah", "Pembayaran QRIS, tunai, kartu", "Ringkasan shift dan struk"],
      en: ["Touch product grid", "Cart with quantity controls", "QRIS, cash, and card payment", "Shift summary and receipts"]
    },
    build: function (lang) {
      var en = lang === "en";
      var t = {
        brand: "Dapur Kita",
        brandSub: en ? "Kedai & kitchen" : "Kedai & dapur",
        shift: en ? "Shift 1 · Rani" : "Shift 1 · Rani",
        open: en ? "Open since 08:00" : "Buka sejak 08.00",
        title: en ? "New order" : "Pesanan baru",
        sub: en ? "Tap an item to add it to the bill" : "Ketuk menu untuk menambah ke pesanan",
        search: en ? "Search menu…" : "Cari menu…",
        cats: en ? ["All", "Coffee", "Rice", "Snacks", "Drinks"] : ["Semua", "Kopi", "Nasi", "Camilan", "Minuman"],
        cart: en ? "Current order" : "Pesanan sekarang",
        table: en ? "Table 04 · Dine in" : "Meja 04 · Makan di sini",
        note: en ? "Less sugar, no ice" : "Kurang gula, tanpa es",
        subtotal: en ? "Subtotal" : "Subtotal",
        tax: en ? "Tax 10%" : "Pajak 10%",
        total: en ? "Total" : "Total",
        pay: en ? "Charge Rp 84.700" : "Bayar Rp 84.700",
        cash: en ? "Cash" : "Tunai",
        qris: "QRIS",
        card: en ? "Card" : "Kartu",
        clear: en ? "Clear" : "Hapus",
        hold: en ? "Hold" : "Tahan",
        discount: en ? "Discount" : "Diskon",
        products: en
          ? [["Senja Latte", "Coffee", "Rp 28.000", "SL", "#8a5a3b"], ["Pandan Latte", "Coffee", "Rp 30.000", "PL", "#4f7a4a"], ["Americano", "Coffee", "Rp 22.000", "AM", "#3f3a36"], ["Nasi Goreng", "Rice", "Rp 35.000", "NG", "#c05621"], ["Nasi Ayam Sambal", "Rice", "Rp 38.000", "NA", "#a33a2b"], ["Pisang Goreng", "Snacks", "Rp 18.000", "PG", "#b7791f"], ["Kentang Wedges", "Snacks", "Rp 20.000", "KW", "#8a6d1f"], ["Es Teh Manis", "Drinks", "Rp 12.000", "ET", "#7b5a2a"], ["Air Mineral", "Drinks", "Rp 8.000", "AM", "#2f6f8f"]]
          : [["Kopi Senja", "Kopi", "Rp 28.000", "KS", "#8a5a3b"], ["Kopi Pandan", "Kopi", "Rp 30.000", "KP", "#4f7a4a"], ["Americano", "Kopi", "Rp 22.000", "AM", "#3f3a36"], ["Nasi Goreng", "Nasi", "Rp 35.000", "NG", "#c05621"], ["Nasi Ayam Sambal", "Nasi", "Rp 38.000", "NA", "#a33a2b"], ["Pisang Goreng", "Camilan", "Rp 18.000", "PG", "#b7791f"], ["Kentang Wedges", "Camilan", "Rp 20.000", "KW", "#8a6d1f"], ["Es Teh Manis", "Minuman", "Rp 12.000", "ET", "#7b5a2a"], ["Air Mineral", "Minuman", "Rp 8.000", "AM", "#2f6f8f"]],
        lines: en
          ? [["Senja Latte", "Less sugar, no ice", "Rp 28.000", "2", "Rp 56.000"], ["Nasi Ayam Sambal", "Extra sambal", "Rp 38.000", "1", "Rp 38.000"], ["Es Teh Manis", "—", "Rp 12.000", "1", "Rp 12.000"]]
          : [["Kopi Senja", "Kurang gula, tanpa es", "Rp 28.000", "2", "Rp 56.000"], ["Nasi Ayam Sambal", "Sambal ekstra", "Rp 38.000", "1", "Rp 38.000"], ["Es Teh Manis", "—", "Rp 12.000", "1", "Rp 12.000"]],
        foot: en ? "Dapur Kita POS · Demo register" : "Dapur Kita POS · Kasir demo",
        today: en ? "Today: 46 orders · Rp 3,4 jt" : "Hari ini: 46 pesanan · Rp 3,4 jt"
      };

      var catHtml = t.cats
        .map(function (c, i) {
          return '<button class="cat' + (i === 0 ? " on" : "") + '">' + c + "</button>";
        })
        .join("");

      var prodHtml = t.products
        .map(function (p) {
          return (
            '<button class="prod"><span class="thumb" style="background:' + p[4] + '">' + p[3] + '</span>' +
            "<b>" + p[0] + '</b><small>' + p[1] + " · " + p[2] + "</small>" +
            '<span class="add"><svg class="ic"><use href="#ic-plus"></use></svg></span></button>'
          );
        })
        .join("");

      var lineHtml = t.lines
        .map(function (l, i) {
          return (
            '<div class="line"><span class="lthumb" style="background:' + ["#8a5a3b", "#a33a2b", "#7b5a2a"][i] + '">' + l[0].charAt(0) + "</span>" +
            '<div class="lbody"><b>' + l[0] + "</b><small>" + l[1] + "</small><span>" + l[2] + "</span></div>" +
            '<div class="lright"><div class="qty"><button aria-label="' + (en ? "Decrease" : "Kurangi") + '">−</button><b>' + l[3] + '</b><button aria-label="' + (en ? "Increase" : "Tambah") + '">+</button></div><strong>' + l[4] + "</strong></div></div>"
          );
        })
        .join("");

      var css = `
        :root{--green:#0b3b2e;--green-2:#0f4a3a;--cream:#faf6ee;--ink:#14211c;--muted:#6d7a73;--line:#e5ded0;--orange:#ff7a1a;--card:#fff}
        body{background:var(--cream);color:var(--ink);font-size:12.5px}
        .topbar{background:var(--green);color:#e9f1ec;height:58px;display:flex;align-items:center;gap:14px;padding:0 20px;position:sticky;top:0;z-index:6}
        .brand{display:flex;align-items:center;gap:9px;flex:none}
        .logo{width:31px;height:31px;border-radius:8px;background:var(--orange);color:#2b1200;display:grid;place-items:center;font-weight:800;font-size:13px}
        .brand b{display:block;font-size:13px;letter-spacing:-.01em;color:#fff}
        .brand small{display:block;font-size:8px;letter-spacing:.12em;text-transform:uppercase;color:#8fb3a5;font-weight:700}
        .topbar .grow{flex:1}
        .shift{font-size:9.5px;font-weight:700;color:#b8d3c7;display:flex;align-items:center;gap:6px;white-space:nowrap}
        .shift:before{content:"";width:5px;height:5px;border-radius:50%;background:#4ade80}
        .clock{font-size:11px;font-weight:800;color:#fff;font-variant-numeric:tabular-nums;white-space:nowrap}
        .topavatar{width:29px;height:29px;border-radius:50%;background:#d9f99d;color:#1a2e05;display:grid;place-items:center;font-size:10px;font-weight:800;flex:none}
        .pos{display:grid;grid-template-columns:minmax(0,1fr) 372px;min-height:calc(100vh - 58px)}
        .catalog{padding:18px 20px 26px;min-width:0}
        .head h1{font-size:21px;letter-spacing:-.03em;margin-bottom:3px}
        .head p{color:var(--muted);font-size:11px}
        .tools{display:flex;gap:8px;margin:14px 0 12px;flex-wrap:wrap}
        .search{display:flex;align-items:center;gap:7px;background:#fff;border:1px solid var(--line);border-radius:8px;padding:8px 10px;flex:1;min-width:160px;color:#98a29b;font-size:10.5px}
        .search .ic{width:13px;height:13px}
        .cats{display:flex;gap:5px;overflow:auto;padding-bottom:2px}
        .cat{background:#fff;border:1px solid var(--line);border-radius:999px;padding:6px 11px;font-size:10px;font-weight:700;color:#5c6a62;white-space:nowrap}
        .cat.on{background:var(--green);border-color:var(--green);color:#fff}
        .grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px}
        .prod{position:relative;text-align:left;background:#fff;border:1px solid var(--line);border-radius:11px;padding:8px;display:flex;flex-direction:column;gap:5px;box-shadow:0 1px 0 rgba(20,33,28,.04)}
        .thumb{height:64px;border-radius:8px;display:grid;place-items:center;color:#fff;font-size:17px;font-weight:800;letter-spacing:-.03em}
        .prod b{font-size:10.5px;line-height:1.3;font-weight:700;padding-right:16px}
        .prod small{font-size:9px;color:var(--muted)}
        .prod .add{position:absolute;right:8px;bottom:8px;width:18px;height:18px;border-radius:6px;background:#f2efe6;color:var(--green);display:grid;place-items:center}
        .prod .add .ic{width:11px;height:11px}
        .promo{margin-top:14px;background:var(--green);border-radius:12px;padding:14px 16px;color:#fff;display:flex;align-items:center;gap:14px;overflow:hidden;position:relative}
        .promo img{width:64px;height:64px;border-radius:8px;object-fit:cover;flex:none}
        .promo b{display:block;font-size:12px;letter-spacing:-.01em;margin-bottom:3px}
        .promo p{font-size:10px;color:#a9c8ba;line-height:1.5;max-width:34ch}
        .promo .tag{position:absolute;right:14px;top:12px;font-size:8px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#0b3b2e;background:var(--orange);padding:3px 7px;border-radius:999px}
        .cart{background:var(--card);border-left:1px solid var(--line);display:flex;flex-direction:column;position:sticky;top:58px;height:calc(100vh - 58px);overflow:auto}
        .carthead{padding:15px 17px 12px;border-bottom:1px solid var(--line);display:flex;align-items:flex-start;justify-content:space-between;gap:8px}
        .carthead h2{font-size:13.5px;letter-spacing:-.02em}
        .carthead p{font-size:9.5px;color:var(--muted);margin-top:2px}
        .trash{width:26px;height:26px;border:1px solid var(--line);border-radius:7px;display:grid;place-items:center;color:#a8b0aa;background:#fff;flex:none}
        .trash .ic{width:12px;height:12px}
        .lines{padding:4px 17px}
        .line{display:flex;gap:9px;padding:11px 0;border-bottom:1px solid #f1ece1}
        .line:last-child{border-bottom:0}
        .lthumb{width:31px;height:31px;border-radius:7px;display:grid;place-items:center;color:#fff;font-size:11px;font-weight:800;flex:none}
        .lbody{flex:1;min-width:0}
        .lbody b{display:block;font-size:10.5px;line-height:1.3}
        .lbody small{display:block;font-size:8.5px;color:var(--muted);margin:1px 0 2px}
        .lbody span{font-size:9px;color:#8b958e}
        .lright{display:flex;flex-direction:column;align-items:flex-end;gap:5px;flex:none}
        .qty{display:flex;align-items:center;gap:5px;background:#f7f4ec;border-radius:999px;padding:2px}
        .qty button{width:17px;height:17px;border-radius:50%;background:#fff;font-size:11px;line-height:1;display:grid;place-items:center;color:var(--green);box-shadow:0 0 0 1px var(--line)}
        .qty b{font-size:9.5px;min-width:9px;text-align:center;font-variant-numeric:tabular-nums}
        .lright strong{font-size:10px;font-weight:800;font-variant-numeric:tabular-nums}
        .custrow{margin:8px 17px 0;background:#f8f5ee;border:1px dashed #ddd4c2;border-radius:8px;padding:8px 10px;display:flex;justify-content:space-between;gap:8px;font-size:9.5px;color:#5e6b64}
        .custrow b{color:var(--ink)}
        .totals{padding:12px 17px 0;margin-top:auto}
        .trow{display:flex;justify-content:space-between;gap:10px;font-size:10.5px;color:#5f6c65;padding:3px 0}
        .trow.grand{border-top:1px dashed var(--line);margin-top:7px;padding-top:9px;font-size:14px;color:var(--ink);font-weight:800}
        .trow.grand span:last-child{font-size:17px;letter-spacing:-.03em}
        .discount{font-size:9px;font-weight:700;color:var(--orange);white-space:nowrap}
        .paybox{padding:12px 17px 17px}
        .paylabel{font-size:8.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#98a29b;margin-bottom:6px}
        .methods{display:grid;grid-template-columns:repeat(3,1fr);gap:5px;margin-bottom:10px}
        .method{border:1px solid var(--line);border-radius:8px;padding:7px 4px;font-size:9px;font-weight:700;color:#5f6c65;display:flex;flex-direction:column;align-items:center;gap:3px;background:#fff}
        .method .ic{width:13px;height:13px}
        .method.on{background:#eaf4ee;border-color:var(--green);color:var(--green)}
        .pay{width:100%;background:var(--orange);color:#2b1200;border-radius:10px;padding:12px;font-size:12px;font-weight:800;letter-spacing:-.01em}
        .paysmall{display:flex;gap:6px;margin-top:7px}
        .paysmall button{flex:1;border:1px solid var(--line);background:#fff;border-radius:7px;padding:6px;font-size:9px;font-weight:700;color:#6b776f}
        .foot{padding:10px 20px 16px;font-size:8.5px;color:#98a29b;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;border-top:1px solid var(--line)}
        @media(max-width:1080px){
          .pos{grid-template-columns:minmax(0,1fr) 330px}
          .grid{grid-template-columns:repeat(2,minmax(0,1fr))}
        }
        @media(max-width:860px){
          .pos{display:block}
          .cart{position:static;height:auto;border-left:0;border-top:1px solid var(--line)}
          .catalog{padding:16px 16px 18px}
          .totals{margin-top:6px}
          .grid{grid-template-columns:repeat(3,minmax(0,1fr))}
        }
        @media(max-width:620px){
          .topbar{padding:0 14px;gap:9px}
          .shift{display:none}
          .grid{grid-template-columns:repeat(2,minmax(0,1fr))}
          .thumb{height:56px}
          .promo img{display:none}
          .promo .tag{position:static;align-self:flex-start}
          .catalog{padding:14px 14px 16px}
          .carthead,.lines,.totals,.paybox{padding-left:14px;padding-right:14px}
          .custrow{margin-left:14px;margin-right:14px}
        }
      `;

      var body = `
        <header class="topbar">
          <div class="brand"><span class="logo">DK</span><span><b>${t.brand}</b><small>${t.brandSub}</small></span></div>
          <div class="grow"></div>
          <span class="shift">${t.shift}</span>
          <span class="clock">14:32</span>
          <span class="topavatar">RA</span>
        </header>

        <div class="pos">
          <main class="catalog">
            <div class="head"><h1>${t.title}</h1><p>${t.sub}</p></div>

            <div class="tools">
              <div class="search"><svg class="ic"><use href="#ic-search"></use></svg><span>${t.search}</span></div>
              <div class="cats">${catHtml}</div>
            </div>

            <div class="grid">${prodHtml}</div>

            <div class="promo">
              <img src="assets/img/bisnis-kuliner.webp" alt="">
              <div><b>${en ? "Bundle: coffee + snack" : "Paket: kopi + camilan"}</b><p>${en ? "Rp 42.000 instead of Rp 46.000. Applies to all coffee and snacks today." : "Rp 42.000 dari Rp 46.000. Berlaku untuk semua kopi dan camilan hari ini."}</p></div>
              <span class="tag">${en ? "Today" : "Hari ini"}</span>
            </div>
          </main>

          <aside class="cart">
            <div class="carthead">
              <div><h2>${t.cart}</h2><p>${t.table}</p></div>
              <button class="trash" aria-label="${t.clear}"><svg class="ic"><use href="#ic-cart"></use></svg></button>
            </div>

            <div class="lines">${lineHtml}</div>
            <div class="custrow"><span>${en ? "Note:" : "Catatan:"} <b>${t.note}</b></span><span>#1043</span></div>

            <div class="totals">
              <div class="trow"><span>${t.subtotal}</span><span>Rp 106.000</span></div>
              <div class="trow"><span>${t.tax}</span><span>Rp 10.600</span></div>
              <div class="trow"><span>${t.discount} <span class="discount">−Rp 31.900</span></span><span></span></div>
              <div class="trow grand"><span>${t.total}</span><span>Rp 84.700</span></div>
            </div>

            <div class="paybox">
              <div class="paylabel">${en ? "Payment method" : "Metode pembayaran"}</div>
              <div class="methods">
                <button class="method on"><svg class="ic"><use href="#ic-check"></use></svg>QRIS</button>
                <button class="method"><svg class="ic"><use href="#ic-cart"></use></svg>${t.cash}</button>
                <button class="method"><svg class="ic"><use href="#ic-box"></use></svg>${t.card}</button>
              </div>
              <button class="pay">${t.pay}</button>
              <div class="paysmall"><button>${t.hold}</button><button>${t.discount}</button><button>${t.clear}</button></div>
            </div>

            <div class="foot"><span>${t.foot}</span><span>${t.today}</span></div>
          </aside>
        </div>
      `;

      return frame(lang, css, body);
    }
  });
})();
