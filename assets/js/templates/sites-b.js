/*
  Template demos - website group (part 2):
  digital menu, booking page, creative portfolio.
*/
(function () {
  "use strict";

  var frame = window.cannesTemplateFrame;
  var list = window.CANNES_TEMPLATES;

  /* ------------------------------------------------------------------ */
  /* 4. Restaurant digital menu                                          */
  /* ------------------------------------------------------------------ */

  list.push({
    id: "menu-dapur",
    group: "web",
    demo: "dapurkita.id",
    price: 900000,
    days: { id: "1-3 hari", en: "1-3 days" },
    category: { id: "Kuliner & kafe", en: "Food & beverage" },
    name: { id: "Menu digital restoran", en: "Restaurant digital menu" },
    summary: {
      id: "Menu digital yang ringan dibuka dari QR meja. Susunannya rapi, badge halal, dan pesanan langsung masuk ke WhatsApp dapur.",
      en: "A light digital menu opened from the table QR. Tidy sections, halal badge, and orders that land straight in the kitchen WhatsApp."
    },
    tags: {
      id: ["Menu digital", "Halal", "Order WA"],
      en: ["Digital menu", "Halal", "WhatsApp order"]
    },
    features: {
      id: ["Menu dan harga lengkap", "Filter kategori", "Keranjang pesanan", "QRIS, GoPay, OVO, DANA"],
      en: ["Full menu and prices", "Category filter", "Order cart", "QRIS, GoPay, OVO, DANA"]
    },
    build: function (lang) {
      var en = lang === "en";
      var t = {
        top1: en ? "Halal certified · Since 2009" : "Halal MUI · Sejak 2009",
        top2: en ? "Open 10am–9pm · Bandung" : "Buka 10.00–21.00 · Bandung",
        nav: en ? ["Menu", "Packages", "Location", "Story"] : ["Menu", "Paket", "Lokasi", "Cerita"],
        order: en ? "Order now" : "Pesan sekarang",
        kick: en ? "Home cooking, no shortcuts" : "Masakan rumahan, tanpa jalan pintas",
        h1: en ? "Recipes passed down, cooked every morning." : "Resep turun-temurun, dimasak tiap pagi.",
        sub: en
          ? "A family kitchen in Bandung since 2009. Pick from the menu, send it on WhatsApp, and we start cooking."
          : "Dapur keluarga di Bandung sejak 2009. Pilih menu, kirim lewat WhatsApp, kami langsung masak.",
        b1: en ? "Order on WhatsApp" : "Pesan via WhatsApp",
        b2: en ? "See the menu" : "Lihat menu",
        halal: en ? "Halal MUI" : "Halal MUI",
        rating: en ? "4.8 · 1.2k reviews" : "4,8 · 1,2rb ulasan",
        tabs: en ? ["All", "Favourites", "Food", "Drinks", "Packages"] : ["Semua", "Favorit", "Makanan", "Minuman", "Paket"],
        food: en ? "Food" : "Makanan",
        drinks: en ? "Drinks" : "Minuman",
        foodNote: en ? "Cooked to order, 10–15 minutes." : "Dimasak sesuai pesanan, 10–15 menit.",
        drinkNote: en ? "Fresh every day." : "Segar setiap hari.",
        dishes: en
          ? [
              ["Nasi Goreng Kampung", "Smoked chicken, egg, candlenut sambal.", "Rp28.000"],
              ["Honey Grilled Chicken", "Half chicken, sweet soy glaze, lalapan.", "Rp35.000"],
              ["Soto Betawi", "Beef, coconut broth, emping.", "Rp32.000"],
              ["Gado-Gado", "Vegetables, tofu, peanut dressing.", "Rp25.000"],
              ["Pandan Iced Tea", "Brewed fresh, light palm sugar.", "Rp12.000"],
              ["Fresh Lime", "No syrup, just lime and ice.", "Rp14.000"],
              ["Tubruk Coffee", "Local robusta, ground to order.", "Rp12.000"]
            ]
          : [
              ["Nasi Goreng Kampung", "Ayam asap, telur, sambal kemiri.", "Rp28.000"],
              ["Ayam Bakar Madu", "Setengah ekor, kecap manis, lalapan.", "Rp35.000"],
              ["Soto Betawi", "Daging sapi, kuah santan, emping.", "Rp32.000"],
              ["Gado-Gado", "Sayur, tahu, bumbu kacang.", "Rp25.000"],
              ["Es Teh Pandan", "Diseduh segar, gula aren ringan.", "Rp12.000"],
              ["Jeruk Peras", "Tanpa sirup, jeruk asli dan es.", "Rp14.000"],
              ["Kopi Tubruk", "Robusta lokal, digiling saat dipesan.", "Rp12.000"]
            ],
        packagesKick: en ? "Save more" : "Lebih hemat",
        packagesTitle: en ? "Sharing packages." : "Paket untuk ramai-ramai.",
        packages: en
          ? [
              ["Solo", "1 main · 1 drink", "Rp38.000"],
              ["Family", "4 mains · 4 drinks · rice", "Rp145.000"],
              ["Office", "10 mains · 10 drinks", "Rp350.000"]
            ]
          : [
              ["Solo", "1 makanan · 1 minum", "Rp38.000"],
              ["Keluarga", "4 makanan · 4 minum · nasi", "Rp145.000"],
              ["Kantor", "10 makanan · 10 minum", "Rp350.000"]
            ],
        orderTitle: en ? "Your order" : "Pesanan kamu",
        items: en
          ? [["2× Nasi Goreng Kampung", "Rp56.000"], ["1× Honey Grilled Chicken", "Rp35.000"], ["2× Pandan Iced Tea", "Rp24.000"]]
          : [["2× Nasi Goreng Kampung", "Rp56.000"], ["1× Ayam Bakar Madu", "Rp35.000"], ["2× Es Teh Pandan", "Rp24.000"]],
        count: en ? "3 items" : "3 item",
        subtotal: en ? "Subtotal" : "Subtotal",
        delivery: en ? "Delivery" : "Ongkir",
        total: en ? "Total" : "Total",
        deliveryVal: "Rp10.000",
        subtotalVal: "Rp115.000",
        totalVal: "Rp125.000",
        pay: en ? "Pay with" : "Bayar pakai",
        cta: en ? "Send order on WhatsApp" : "Kirim pesanan via WhatsApp",
        note: en ? "We confirm your order within 5 minutes." : "Kami konfirmasi pesanan dalam 5 menit.",
        mapKick: en ? "Find us" : "Lokasi",
        mapTitle: en ? "Jl. Buah Batu 88, Bandung" : "Jl. Buah Batu 88, Bandung",
        mapSub: en ? "Parking available · 2 min from Buah Batu toll" : "Ada parkir · 2 menit dari tol Buah Batu",
        mapBtn: en ? "Open Google Maps" : "Buka Google Maps",
        hours: en ? "Every day 10.00–21.00" : "Setiap hari 10.00–21.00",
        story: en
          ? "“Our mother still checks the sambal every morning. If it is not right, the kitchen does not open.”"
          : "“Sambalnya masih dicek Ibu setiap pagi. Kalau rasanya belum pas, dapur belum buka.”",
        storyBy: en ? "Dapur Kita · family run since 2009" : "Dapur Kita · dikelola keluarga sejak 2009",
        foot: en ? "Dapur Kita · demo template by Cannes" : "Dapur Kita · template demo oleh Cannes"
      };

      var css = `
        :root{--green:#14342a;--cream:#f7f0e1;--accent:#e0a34a;--ink:#17251f;--muted:#6d7b70;--line:rgba(20,52,42,.15)}
        body{background:var(--cream);color:var(--ink)}
        .top{background:var(--green);color:#f3ead7;font-size:10.5px}
        .top .wrap{display:flex;justify-content:space-between;gap:14px;padding-top:8px;padding-bottom:8px;flex-wrap:wrap}
        .nav{position:sticky;top:0;z-index:6;background:rgba(247,240,225,.96);border-bottom:1px solid var(--line)}
        .navin{display:flex;align-items:center;justify-content:space-between;gap:22px;padding-top:13px;padding-bottom:13px}
        .brand{display:flex;align-items:center;gap:9px}
        .leaf{width:30px;height:30px;border-radius:50%;background:var(--green);display:grid;place-items:center;color:var(--accent);font-size:14px}
        .brand b{font-family:Georgia,"Times New Roman",serif;font-size:21px;font-weight:400;letter-spacing:-.02em}
        .links{display:flex;gap:23px;font-size:12.5px;font-weight:600;color:#40574b}
        .btn-green{background:var(--green);color:#f7f0e1}
        .btn-line{border:1px solid var(--green);color:var(--green)}
        .hero{position:relative;color:#fff;overflow:hidden}
        .hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
        .hero:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(12,32,25,.94) 0%,rgba(12,32,25,.72) 48%,rgba(12,32,25,.25) 100%)}
        .hero .wrap{position:relative;z-index:1;padding-top:58px;padding-bottom:56px}
        .kick{display:inline-block;color:var(--accent);font-size:9.5px;letter-spacing:.17em;text-transform:uppercase;font-weight:800}
        h1{font-family:Georgia,"Times New Roman",serif;font-weight:400;font-size:clamp(37px,4.8vw,58px);line-height:1.05;letter-spacing:-.035em;margin:14px 0 15px;max-width:18ch}
        .hero p{max-width:45ch;color:rgba(255,255,255,.72);font-size:14px;line-height:1.7}
        .buttons{display:flex;gap:10px;margin-top:24px;flex-wrap:wrap}
        .btn-accent{background:var(--accent);color:#17251f}
        .btn-ghost{border:1px solid rgba(255,255,255,.35);color:#fff}
        .badges{display:flex;gap:8px;margin-top:22px;flex-wrap:wrap}
        .badges span{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);border-radius:999px;padding:6px 11px;font-size:10.5px;font-weight:700;color:#fff}
        .tabs{border-bottom:1px solid var(--line);background:#fffdf7}
        .tabsin{display:flex;gap:6px;overflow:auto;padding-top:11px;padding-bottom:11px}
        .tab{padding:7px 14px;border-radius:999px;font-size:11.5px;font-weight:700;white-space:nowrap;color:#5f7166}
        .tab.on{background:var(--green);color:var(--cream)}
        .block{padding:42px 0 54px}
        .layout{display:grid;grid-template-columns:1fr 330px;gap:34px;align-items:start}
        .sechead{display:flex;align-items:baseline;justify-content:space-between;gap:16px;padding-bottom:8px;border-bottom:2px solid var(--green)}
        .sechead h2{font-family:Georgia,"Times New Roman",serif;font-weight:400;font-size:26px;letter-spacing:-.03em}
        .sechead span{font-size:10.5px;color:var(--muted)}
        .dish{display:flex;align-items:flex-end;gap:8px;padding:13px 0;border-bottom:1px dashed rgba(20,52,42,.18)}
        .dish h3{font-size:14px;font-weight:800;line-height:1.35}
        .dish p{font-size:11px;color:var(--muted);margin-top:2px}
        .dish .dots{flex:1;border-bottom:1px dotted rgba(20,52,42,.3);margin-bottom:5px;min-width:14px}
        .dish b{font-size:13px;white-space:nowrap}
        .hot{display:inline-block;margin-left:6px;padding:1px 6px;border-radius:999px;background:#f3e2c0;color:#8a5a14;font-size:8px;font-weight:800;vertical-align:2px;letter-spacing:.03em}
        .sub{margin-top:34px}
        .packages{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:18px}
        .pkg{background:#fffdf7;border:1px solid var(--line);border-radius:14px;padding:15px}
        .pkg h3{font-size:13.5px;font-weight:800}
        .pkg p{font-size:10.5px;color:var(--muted);margin-top:3px;line-height:1.5}
        .pkg b{display:block;margin-top:11px;font-size:15px}
        .order{position:sticky;top:88px;background:var(--green);color:#f7f0e1;border-radius:18px;padding:20px}
        .ohead{display:flex;align-items:center;justify-content:space-between;gap:10px;padding-bottom:12px;border-bottom:1px solid rgba(247,240,225,.18)}
        .ohead b{font-size:13px}
        .ohead span{font-size:9.5px;color:rgba(247,240,225,.55)}
        .olines{margin-top:11px;display:grid;gap:7px;font-size:11.5px}
        .olines li{display:flex;justify-content:space-between;gap:12px;color:rgba(247,240,225,.82)}
        .osum{display:flex;justify-content:space-between;gap:12px;font-size:11.5px;margin-top:12px;color:rgba(247,240,225,.62)}
        .ototal{display:flex;justify-content:space-between;gap:12px;margin-top:10px;padding-top:10px;border-top:1px dashed rgba(247,240,225,.25);font-size:14px;font-weight:800}
        .ototal b{color:var(--accent);font-size:16px}
        .pay{display:flex;gap:5px;flex-wrap:wrap;margin-top:13px}
        .pay span{border:1px solid rgba(247,240,225,.22);border-radius:4px;padding:3px 6px;font-size:8px;font-weight:800;letter-spacing:.03em;color:rgba(247,240,225,.8)}
        .order .btn{width:100%;margin-top:14px;background:var(--accent);color:#17251f}
        .order small{display:block;text-align:center;font-size:9px;color:rgba(247,240,225,.5);margin-top:8px;line-height:1.4}
        .quote{background:#fffdf7;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
        .quotein{padding-top:38px;padding-bottom:38px;display:grid;grid-template-columns:1.3fr .7fr;gap:30px;align-items:center}
        .quote p{font-family:Georgia,"Times New Roman",serif;font-size:clamp(20px,2.5vw,29px);line-height:1.35;letter-spacing:-.02em}
        .quote span{display:block;margin-top:12px;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);font-weight:700}
        .mapbox{background:var(--green);border-radius:14px;padding:18px;color:#f7f0e1}
        .mapbox b{font-size:12.5px;display:block;margin-top:8px}
        .mapbox p{font-size:10.5px;color:rgba(247,240,225,.6);margin-top:3px;line-height:1.5}
        .mapart{height:90px;border-radius:8px;background:repeating-linear-gradient(0deg,rgba(247,240,225,.12) 0 1px,transparent 1px 16px),repeating-linear-gradient(90deg,rgba(247,240,225,.12) 0 1px,transparent 1px 16px),#1d4638;position:relative;overflow:hidden}
        .pin{position:absolute;left:52%;top:40%;width:16px;height:16px;border-radius:50% 50% 50% 0;background:var(--accent);transform:rotate(-45deg);box-shadow:0 2px 6px rgba(0,0,0,.3)}
        .mapbox .btn{margin-top:11px;width:100%;background:transparent;border:1px solid rgba(247,240,225,.3);color:#f7f0e1;font-size:11px;padding:9px}
        .sitefoot{padding:20px 0;font-size:11px;color:var(--muted);border-top:1px solid var(--line)}
        .sitefoot .wrap{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}
        @media(max-width:900px){
          .layout{grid-template-columns:1fr;gap:26px}
          .order{position:static}
          .packages{grid-template-columns:1fr 1fr}
          .quotein{grid-template-columns:1fr}
        }
        @media(max-width:620px){
          .links{display:none}
          .hero .wrap{padding-top:38px;padding-bottom:38px}
          h1{font-size:34px}
          .hero:after{background:linear-gradient(180deg,rgba(12,32,25,.9),rgba(12,32,25,.55))}
          .layout{gap:22px}
          .packages{grid-template-columns:1fr}
          .sechead h2{font-size:22px}
          .block{padding-top:30px}
        }
      `;

      var food = t.dishes.slice(0, 4);
      var drinks = t.dishes.slice(4);
      var dishRows = function (items, hotIndex) {
        return items
          .map(function (d, i) {
            return (
              '<div class="dish"><div><h3>' + d[0] + (hotIndex === i ? '<span class="hot">HOT</span>' : "") + "</h3><p>" + d[1] + '</p></div><span class="dots"></span><b>' + d[2] + "</b></div>"
            );
          })
          .join("");
      };

      var body = `
        <div class="top"><div class="wrap"><span>${t.top1}</span><span>${t.top2}</span></div></div>
        <nav class="nav"><div class="wrap navin">
          <div class="brand"><span class="leaf">✦</span><b>Dapur Kita</b></div>
          <div class="links">${t.nav.map(function (x) { return "<span>" + x + "</span>"; }).join("")}</div>
          <span class="btn btn-green">${t.order}</span>
        </div></nav>

        <section class="hero">
          <img src="assets/img/bisnis-kuliner.webp" alt="" width="900" height="675">
          <div class="wrap">
            <span class="kick">${t.kick}</span>
            <h1>${t.h1}</h1>
            <p>${t.sub}</p>
            <div class="buttons"><span class="btn btn-accent">${t.b1}</span><span class="btn btn-ghost">${t.b2}</span></div>
            <div class="badges"><span>✓ ${t.halal}</span><span>★ ${t.rating}</span></div>
          </div>
        </section>

        <div class="tabs"><div class="wrap tabsin">
          ${t.tabs.map(function (x, i) { return '<span class="tab' + (i === 0 ? " on" : "") + '">' + x + "</span>"; }).join("")}
        </div></div>

        <section class="block"><div class="wrap layout">
          <div>
            <div class="sechead"><h2>${t.food}</h2><span>${t.foodNote}</span></div>
            ${dishRows(food, 0)}
            <div class="sechead sub"><h2>${t.drinks}</h2><span>${t.drinkNote}</span></div>
            ${dishRows(drinks, -1)}

            <div class="sub">
              <span class="kick">${t.packagesKick}</span>
              <h2 style="margin-top:6px;font-size:24px">${t.packagesTitle}</h2>
              <div class="packages">
                ${t.packages.map(function (p) { return '<div class="pkg"><h3>' + p[0] + "</h3><p>" + p[1] + "</p><b>" + p[2] + "</b></div>"; }).join("")}
              </div>
            </div>
          </div>

          <aside class="order">
            <div class="ohead"><b>${t.orderTitle}</b><span>${t.count}</span></div>
            <ul class="olines">${t.items.map(function (i) { return "<li><span>" + i[0] + "</span><b>" + i[1] + "</b></li>"; }).join("")}</ul>
            <div class="osum"><span>${t.subtotal}</span><b>${t.subtotalVal}</b></div>
            <div class="osum"><span>${t.delivery}</span><b>${t.deliveryVal}</b></div>
            <div class="ototal"><span>${t.total}</span><b>${t.totalVal}</b></div>
            <div class="pay">${["QRIS", "GoPay", "OVO", "DANA"].map(function (x) { return "<span>" + x + "</span>"; }).join("")}</div>
            <span class="btn">${t.cta}</span>
            <small>${t.note}</small>
          </aside>
        </div></section>

        <section class="quote"><div class="wrap quotein">
          <div><p>${t.story}</p><span>${t.storyBy}</span></div>
          <div class="mapbox">
            <div class="mapart"><span class="pin"></span></div>
            <b>${t.mapTitle}</b>
            <p>${t.mapSub}<br>${t.hours}</p>
            <span class="btn">${t.mapBtn}</span>
          </div>
        </div></section>

        <footer class="sitefoot"><div class="wrap"><span>${t.foot}</span><span>dapurkita.id · Bandung</span></div></footer>
      `;

      return frame(lang, css, body);
    }
  });

  /* ------------------------------------------------------------------ */
  /* 5. Booking page                                                     */
  /* ------------------------------------------------------------------ */

  list.push({
    id: "booking-rapih",
    group: "web",
    demo: "rapihbarbershop.id",
    price: 1500000,
    days: { id: "3-7 hari", en: "3-7 days" },
    category: { id: "Jasa & layanan", en: "Services" },
    name: { id: "Booking & jadwal", en: "Booking & scheduling" },
    summary: {
      id: "Halaman booking untuk salon, barbershop, klinik, atau studio. Pelanggan pilih layanan, barber, dan jam tanpa perlu chat bolak-balik.",
      en: "A booking page for salons, barbershops, clinics, or studios. Customers pick a service, a barber, and a time without the back-and-forth chat."
    },
    tags: {
      id: ["Booking", "Jadwal", "Reminder WA"],
      en: ["Booking", "Schedule", "WhatsApp reminder"]
    },
    features: {
      id: ["Pilih layanan dan staf", "Slot jadwal per hari", "Konfirmasi via WhatsApp", "Halaman lokasi dan Maps"],
      en: ["Choose a service and staff member", "Time slots by day", "WhatsApp confirmation", "Location and Maps page"]
    },
    build: function (lang) {
      var en = lang === "en";
      var t = {
        top1: en ? "4 outlets in Jakarta" : "4 cabang di Jakarta",
        top2: en ? "Open 10am–9pm" : "Buka 10.00–21.00",
        nav: en ? ["Services", "Barbers", "Location"] : ["Layanan", "Barber", "Lokasi"],
        cta: en ? "Book now" : "Booking sekarang",
        kick: en ? "Walk-ins welcome, but slots go fast" : "Boleh walk-in, tapi slot cepat habis",
        h1a: en ? "Four slots" : "Slot hari ini",
        h1b: en ? "left today." : "tinggal 4.",
        sub: en
          ? "Pick a service, a time, and your favourite barber. We confirm on WhatsApp in a few minutes."
          : "Pilih layanan, jam, dan barber favoritmu. Kami konfirmasi lewat WhatsApp dalam beberapa menit.",
        rating: en ? "4.9 · 860 reviews" : "4,9 · 860 ulasan",
        years: en ? "Since<br>2017" : "Sejak<br>2017",
        step1: en ? "Service" : "Layanan",
        step2: en ? "Date & time" : "Tanggal & jam",
        step3: en ? "Your details" : "Data kamu",
        services: en
          ? [["Haircut", "50k"], ["Haircut + wash", "65k"], ["Shave", "35k"], ["Colouring", "120k"]]
          : [["Haircut", "50rb"], ["Haircut + cuci", "65rb"], ["Cukur jenggot", "35rb"], ["Colouring", "120rb"]],
        days: en
          ? [["Mon", "26"], ["Tue", "27"], ["Wed", "28"], ["Thu", "29"]]
          : [["Sen", "26"], ["Sel", "27"], ["Rab", "28"], ["Kam", "29"]],
        times: en
          ? [["10:00", ""], ["11:30", ""], ["13:00", "full"], ["15:30", ""], ["17:00", ""], ["19:00", "full"]]
          : [["10:00", ""], ["11:30", ""], ["13:00", "penuh"], ["15:30", ""], ["17:00", ""], ["19:00", "penuh"]],
        full: en ? "Full" : "Penuh",
        name: en ? "Name" : "Nama",
        phone: en ? "WhatsApp number" : "Nomor WhatsApp",
        barber: en ? "Barber" : "Barber",
        barberVal: en ? "Any available" : "Siapa saja",
        summary: en ? "Your booking" : "Ringkasan booking",
        summaryService: en ? "Haircut · 45 min" : "Haircut · 45 menit",
        summaryTime: en ? "Mon, 26 Oct · 15.30" : "Sen, 26 Okt · 15.30",
        total: en ? "Total" : "Total",
        price: "Rp50.000",
        confirm: en ? "Confirm booking" : "Konfirmasi booking",
        note: en ? "No payment needed now. Pay at the shop." : "Belum perlu bayar. Bayar di tempat.",
        barbersKick: en ? "The team" : "Tim kami",
        barbersTitle: en ? "Know who is holding the clipper." : "Kenal yang pegang clipper.",
        barbers: en
          ? [["Daffa", "Fades & classic cuts", "8 yrs"], ["Rizky", "Textured crops", "5 yrs"], ["Adi", "Beard sculpting", "6 yrs"]]
          : [["Daffa", "Fade & potongan klasik", "8 thn"], ["Rizky", "Textured crop", "5 thn"], ["Adi", "Cukur jenggot", "6 thn"]],
        findKick: en ? "Find us" : "Lokasi",
        findTitle: en ? "Kemang, above the coffee shop." : "Kemang, di atas kedai kopi.",
        findSub: en ? "Jl. Kemang Raya 21, 2nd floor. Parking behind the building." : "Jl. Kemang Raya 21, lantai 2. Parkir di belakang gedung.",
        open: en ? "Open daily · 10.00–21.00" : "Buka setiap hari · 10.00–21.00",
        maps: en ? "Open Google Maps" : "Buka Google Maps",
        foot: en ? "Rapih Barbershop · demo template by Cannes" : "Rapih Barbershop · template demo oleh Cannes",
        dots: en ? [["Monday", "10–21"], ["Tuesday", "10–21"], ["Wednesday", "10–21"], ["Thursday", "10–21"], ["Friday", "10–22"], ["Saturday", "09–22"], ["Sunday", "10–20"]]
          : [["Senin", "10–21"], ["Selasa", "10–21"], ["Rabu", "10–21"], ["Kamis", "10–21"], ["Jumat", "10–22"], ["Sabtu", "09–22"], ["Minggu", "10–20"]]
      };

      var css = `
        :root{--ink:#111110;--paper:#f6f3ec;--lime:#c9f227;--muted:#68655f;--line:rgba(17,17,16,.16)}
        body{background:var(--paper);color:var(--ink)}
        .top{background:var(--ink);color:rgba(246,243,236,.7);font-size:10.5px}
        .top .wrap{display:flex;justify-content:space-between;gap:14px;padding-top:8px;padding-bottom:8px;flex-wrap:wrap}
        .nav{background:var(--paper);border-bottom:1px solid var(--line);position:sticky;top:0;z-index:6}
        .navin{display:flex;align-items:center;justify-content:space-between;gap:22px;padding-top:13px;padding-bottom:13px}
        .brand{font-weight:900;font-size:23px;letter-spacing:-.045em}
        .brand i{font-style:normal;color:#6f8a00}
        .links{display:flex;gap:24px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em}
        .btn-dark{background:var(--ink);color:var(--paper)}
        .btn-lime{background:var(--lime);color:var(--ink)}
        .btn-line{border:1.5px solid var(--ink)}
        .hero{padding:38px 0 0}
        .heroin{display:grid;grid-template-columns:1.12fr .88fr;gap:42px;align-items:center;padding-bottom:34px}
        .kick{display:inline-flex;align-items:center;gap:8px;font-size:10px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}
        .kick:before{content:"";width:7px;height:7px;background:var(--lime);border:1.5px solid var(--ink);border-radius:50%}
        h1{font-weight:900;font-size:clamp(46px,6.4vw,82px);line-height:.9;letter-spacing:-.06em;text-transform:uppercase;margin:18px 0 20px}
        h1 span{display:block;color:transparent;-webkit-text-stroke:1.6px var(--ink)}
        .hero p{max-width:43ch;color:var(--muted);font-size:14px;line-height:1.7}
        .rating{display:flex;align-items:center;gap:8px;margin-top:22px;font-size:12px;font-weight:700}
        .rating b{background:var(--lime);border:1.5px solid var(--ink);padding:4px 8px;border-radius:6px;font-size:12px}
        .heroimg{position:relative}
        .heroimg img{width:100%;height:360px;object-fit:cover;border:2px solid var(--ink);border-radius:6px;filter:contrast(1.04)}
        .stamp{position:absolute;left:-16px;bottom:22px;background:var(--lime);border:2px solid var(--ink);padding:10px 13px;font-size:19px;font-weight:900;line-height:.95;letter-spacing:-.04em;transform:rotate(-6deg);text-align:center}
        .booking{background:#fff;border:2px solid var(--ink);border-radius:10px;box-shadow:8px 8px 0 var(--ink);margin-bottom:44px;overflow:hidden}
        .bhead{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:12px 18px;border-bottom:2px solid var(--ink);background:var(--lime)}
        .bhead b{font-size:12.5px;text-transform:uppercase;letter-spacing:.08em}
        .bhead span{font-size:10px;font-weight:700}
        .bgrid{display:grid;grid-template-columns:1.12fr 1fr .92fr}
        .bstep{padding:17px 18px 20px;border-left:2px solid var(--ink)}
        .bstep:first-child{border-left:0}
        .bstep h3{display:flex;align-items:center;gap:7px;font-size:10px;text-transform:uppercase;letter-spacing:.1em;margin-bottom:12px}
        .bstep h3 i{display:grid;place-items:center;width:18px;height:18px;background:var(--ink);color:var(--paper);border-radius:50%;font-size:8.5px;font-style:normal;letter-spacing:0}
        .chips{display:flex;flex-wrap:wrap;gap:6px}
        .chip{border:1.5px solid rgba(17,17,16,.28);border-radius:7px;padding:7px 9px;font-size:10.5px;font-weight:700;line-height:1.2}
        .chip small{display:block;color:var(--muted);font-size:9px;margin-top:1px;font-weight:600}
        .chip.on{background:var(--ink);color:var(--paper);border-color:var(--ink)}
        .chip.on small{color:rgba(246,243,236,.6)}
        .day{flex:1;min-width:47px;text-align:center;border:1.5px solid rgba(17,17,16,.28);border-radius:7px;padding:7px 4px;font-size:9px;text-transform:uppercase;letter-spacing:.04em}
        .day b{display:block;font-size:16px;letter-spacing:-.04em;margin-top:1px}
        .day.on{background:var(--lime);border-color:var(--ink)}
        .times{display:flex;flex-wrap:wrap;gap:5px;margin-top:11px}
        .time{border:1.5px solid rgba(17,17,16,.28);border-radius:6px;padding:6px 8px;font-size:10.5px;font-weight:700}
        .time.on{background:var(--ink);color:var(--paper);border-color:var(--ink)}
        .time.off{opacity:.36;text-decoration:line-through;text-decoration-thickness:1px}
        .field{margin-bottom:8px}
        .field span{display:block;font-size:9px;text-transform:uppercase;letter-spacing:.08em;font-weight:800;margin-bottom:3px;color:#4d4a45}
        .input{border:1.5px solid rgba(17,17,16,.25);border-radius:6px;padding:7px 9px;font-size:11px;color:#3f3d39}
        .sum{background:var(--paper);border:1.5px solid var(--ink);border-radius:7px;padding:10px 11px}
        .sum div{display:flex;justify-content:space-between;gap:8px;font-size:10px;margin-bottom:5px}
        .sum div b{font-weight:700}
        .sum .tot{border-top:1px dashed rgba(17,17,16,.25);padding-top:6px;margin-top:6px;font-size:11.5px;font-weight:800}
        .sum .tot b{font-size:14px}
        .bstep .btn{width:100%;margin-top:10px;padding:10px 12px;font-size:11px}
        .bstep small{display:block;text-align:center;font-size:8.5px;color:var(--muted);margin-top:6px}
        .block{padding:0 0 52px}
        .sechead{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:18px;border-top:1px solid var(--line);padding-top:34px}
        .sechead h2{font-weight:900;font-size:clamp(25px,3vw,35px);letter-spacing:-.045em;line-height:1}
        .sechead span{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.12em}
        .team{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        .person{border:1.5px solid var(--ink);border-radius:8px;overflow:hidden;background:#fff}
        .avatar{height:120px;position:relative}
        .a1{background:linear-gradient(150deg,#cdbfae,#6e5b47)}
        .a2{background:linear-gradient(150deg,#bcc4bd,#4f6158)}
        .a3{background:linear-gradient(150deg,#d6c3ad,#7b5c40)}
        .avatar:after{content:"";position:absolute;width:58px;height:58px;border-radius:50%;border:2px solid rgba(255,255,255,.5);left:50%;top:50%;transform:translate(-50%,-40%)}
        .person div{padding:10px 12px;border-top:1.5px solid var(--ink)}
        .person h3{font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:.03em}
        .person p{font-size:10px;color:var(--muted);margin-top:2px}
        .person b{display:inline-block;margin-top:6px;background:var(--lime);border:1px solid var(--ink);border-radius:999px;padding:1px 7px;font-size:8.5px}
        .loc{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:32px;border-top:1px solid var(--line);padding-top:34px}
        .map{height:190px;border:1.5px solid var(--ink);border-radius:8px;background:repeating-linear-gradient(0deg,rgba(17,17,16,.09) 0 1px,transparent 1px 22px),repeating-linear-gradient(90deg,rgba(17,17,16,.09) 0 1px,transparent 1px 22px),#e6e1d5;position:relative;overflow:hidden}
        .map:after{content:"";position:absolute;left:-20%;top:44%;width:140%;height:12px;background:rgba(255,255,255,.85);transform:rotate(-8deg)}
        .mappin{position:absolute;z-index:1;left:48%;top:37%;width:20px;height:20px;background:var(--lime);border:2px solid var(--ink);border-radius:50% 50% 50% 0;transform:rotate(-45deg)}
        .locopy{padding-top:4px}
        .locopy h3{font-weight:900;font-size:22px;letter-spacing:-.04em;line-height:1.1}
        .locopy p{font-size:11.5px;color:var(--muted);margin-top:7px;line-height:1.6}
        .locopy .btn{margin-top:12px;font-size:11px;padding:9px 14px}
        .hours{margin-top:12px;display:grid;gap:3px;font-size:10.5px}
        .hours div{display:flex;justify-content:space-between;gap:12px;border-bottom:1px dashed rgba(17,17,16,.18);padding-bottom:3px}
        .sitefoot{background:var(--ink);color:rgba(246,243,236,.6);padding:18px 0;font-size:10.5px}
        .sitefoot .wrap{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}
        @media(max-width:940px){
          .bgrid{grid-template-columns:1fr 1fr}
          .bstep:first-child{grid-column:span 2;border-bottom:2px solid var(--ink)}
          .bstep:nth-child(2){border-left:0}
          .heroin{grid-template-columns:1fr;gap:22px}
          .heroimg img{height:280px}
        }
        @media(max-width:620px){
          .links{display:none}
          .navin .btn-dark{padding:9px 12px;font-size:11px}
          h1{font-size:47px}
          .hero{padding-top:24px}
          .stamp{left:auto;right:12px;bottom:12px}
          .bgrid{grid-template-columns:1fr}
          .bstep{grid-column:auto !important;border-left:0;border-top:2px solid var(--ink)}
          .bstep:first-child{border-top:0;border-bottom:0}
          .team{grid-template-columns:1fr}
          .avatar{height:150px}
          .loc{grid-template-columns:1fr}
        }
      `;

      var body = `
        <div class="top"><div class="wrap"><span>${t.top1}</span><span>${t.top2}</span></div></div>
        <nav class="nav"><div class="wrap navin">
          <div class="brand">RAPIH<i>.</i></div>
          <div class="links">${t.nav.map(function (x) { return "<span>" + x + "</span>"; }).join("")}</div>
          <span class="btn btn-dark">${t.cta}</span>
        </div></nav>

        <section class="hero"><div class="wrap">
          <div class="heroin">
            <div>
              <span class="kick">${t.kick}</span>
              <h1>${t.h1a}<span>${t.h1b}</span></h1>
              <p>${t.sub}</p>
              <div class="rating"><b>★ ${en ? "4.9" : "4,9"}</b><span>${t.rating}</span></div>
            </div>
            <div class="heroimg">
              <img src="assets/img/bisnis-jasa.webp" alt="" width="900" height="675">
              <span class="stamp">${t.years}</span>
            </div>
          </div>

          <div class="booking">
            <div class="bhead"><b>${en ? "Book a chair" : "Booking kursi"}</b><span>${en ? "Slots update live" : "Slot diperbarui langsung"}</span></div>
            <div class="bgrid">
              <div class="bstep">
                <h3><i>1</i>${t.step1}</h3>
                <div class="chips">
                  ${t.services.map(function (s, i) {
                    return '<span class="chip' + (i === 0 ? " on" : "") + '">' + s[0] + "<small>" + s[1] + "</small></span>";
                  }).join("")}
                </div>
                <div class="field" style="margin-top:12px"><span>${t.barber}</span><div class="input">${t.barberVal} ▾</div></div>
              </div>
              <div class="bstep">
                <h3><i>2</i>${t.step2}</h3>
                <div class="chips">
                  ${t.days.map(function (d, i) {
                    return '<span class="day' + (i === 0 ? " on" : "") + '">' + d[0] + "<b>" + d[1] + "</b></span>";
                  }).join("")}
                </div>
                <div class="times">
                  ${t.times.map(function (x, i) {
                    return '<span class="time' + (i === 3 ? " on" : x[1] ? " off" : "") + '"' + (x[1] ? ' title="' + t.full + '"' : "") + ">" + x[0] + "</span>";
                  }).join("")}
                </div>
              </div>
              <div class="bstep">
                <h3><i>3</i>${t.step3}</h3>
                <div class="field"><span>${t.name}</span><div class="input">Daffa</div></div>
                <div class="field"><span>${t.phone}</span><div class="input">0812 3456 7890</div></div>
                <div class="sum">
                  <div><span>${t.summaryService}</span><b>${t.price}</b></div>
                  <div><span>${t.summaryTime}</span></div>
                  <div class="tot"><span>${t.total}</span><b>${t.price}</b></div>
                </div>
                <span class="btn btn-lime">${t.confirm}</span>
                <small>${t.note}</small>
              </div>
            </div>
          </div>
        </div></section>

        <section class="block"><div class="wrap">
          <div class="sechead"><h2>${t.barbersTitle}</h2><span>${t.barbersKick}</span></div>
          <div class="team">
            ${t.barbers.map(function (b, i) {
              return '<article class="person"><div class="avatar a' + (i + 1) + '"></div><div><h3>' + b[0] + "</h3><p>" + b[1] + "</p><b>" + b[2] + "</b></div></article>";
            }).join("")}
          </div>

          <div class="loc">
            <div class="map"><span class="mappin"></span></div>
            <div class="locopy">
              <span class="kick">${t.findKick}</span>
              <h3 style="margin-top:8px">${t.findTitle}</h3>
              <p>${t.findSub}<br>${t.open}</p>
              <span class="btn btn-line">${t.maps}</span>
              <div class="hours">${t.dots.map(function (d) { return "<div><span>" + d[0] + "</span><b>" + d[1] + "</b></div>"; }).join("")}</div>
            </div>
          </div>
        </div></section>

        <footer class="sitefoot"><div class="wrap"><span>${t.foot}</span><span>rapihbarbershop.id · Jakarta</span></div></footer>
      `;

      return frame(lang, css, body);
    }
  });

  /* ------------------------------------------------------------------ */
  /* 6. Creative portfolio                                               */
  /* ------------------------------------------------------------------ */

  list.push({
    id: "portfolio-tujuh",
    group: "web",
    demo: "studiotujuh.id",
    price: 1500000,
    days: { id: "3-7 hari", en: "3-7 days" },
    category: { id: "Kreatif & agensi", en: "Creative & agency" },
    name: { id: "Portfolio kreatif", en: "Creative portfolio" },
    summary: {
      id: "Portfolio editorial untuk fotografer, desainer, arsitek, atau studio. Karya jadi bintang, brief masuk tanpa banyak klik.",
      en: "An editorial portfolio for photographers, designers, architects, or studios. The work leads, and briefs come in without much clicking."
    },
    tags: {
      id: ["Portofolio", "Editorial", "Form brief"],
      en: ["Portfolio", "Editorial", "Brief form"]
    },
    features: {
      id: ["Galeri proyek editorial", "Halaman layanan", "Form brief proyek", "Studi kasus per proyek"],
      en: ["Editorial project gallery", "Services page", "Project brief form", "Case study per project"]
    },
    build: function (lang) {
      var en = lang === "en";
      var t = {
        nav: en ? ["Work", "Studio", "Services", "Contact"] : ["Karya", "Studio", "Layanan", "Kontak"],
        cta: en ? "Start a project" : "Mulai proyek",
        kick: en ? "Brand & digital studio · Jakarta" : "Studio brand & digital · Jakarta",
        h1a: en ? "Good brands" : "Merek bagus",
        h1b: en ? "should not look" : "nggak boleh",
        h1c: en ? "ordinary." : "terlihat biasa.",
        sub: en
          ? "We build identities, websites, and campaign visuals for businesses that are ready to look the part."
          : "Kami membuat identitas, website, dan visual kampanye untuk bisnis yang siap tampil lebih serius.",
        scroll: en ? "Selected work below" : "Karya pilihan di bawah",
        stats: en ? [["48", "projects"], ["12", "industries"], ["9", "years"]] : [["48", "proyek"], ["12", "industri"], ["9", "tahun"]],
        workKick: en ? "Selected work · 2024–2026" : "Karya pilihan · 2024–2026",
        projects: en
          ? [
              ["Batik Laras", "Brand identity & e-commerce", "2026", "image"],
              ["Kopi Senja", "Identity & packaging", "2025", "grad1"],
              ["Dapur Kita", "Menu system & photography", "2025", "grad2"]
            ]
          : [
              ["Batik Laras", "Identitas merek & e-commerce", "2026", "image"],
              ["Kopi Senja", "Identitas & kemasan", "2025", "grad1"],
              ["Dapur Kita", "Sistem menu & fotografi", "2025", "grad2"]
            ],
        servicesKick: en ? "What we do" : "Yang kami kerjakan",
        servicesTitle: en ? "Three things, done properly." : "Tiga hal, dikerjakan serius.",
        services: en
          ? [
              ["01", "Brand identity", "Naming, logo, type, colour, and a guideline the team can actually use.", ["Strategy", "Logo", "Guidelines"]],
              ["02", "Web design & build", "A fast site that looks like the brand and converts like a salesperson.", ["UI/UX", "Webflow/HTML", "SEO"]],
              ["03", "Art direction & photo", "Campaign visuals, product photos, and a library your social team can reuse.", ["Concept", "Photo", "Retouch"]]
            ]
          : [
              ["01", "Identitas merek", "Nama, logo, tipografi, warna, dan guideline yang benar-benar dipakai tim.", ["Strategi", "Logo", "Guideline"]],
              ["02", "Desain & bangun web", "Website cepat yang sesuai merek dan bekerja seperti sales.", ["UI/UX", "Webflow/HTML", "SEO"]],
              ["03", "Art direction & foto", "Visual kampanye, foto produk, dan library untuk tim sosial media.", ["Konsep", "Foto", "Retouch"]]
            ],
        manifesto: en
          ? "“We start with a question, not a template. What should people feel before they trust you?”"
          : "“Kami mulai dari pertanyaan, bukan template. Apa yang harus orang rasakan sebelum percaya?”",
        manifestoSig: en ? "Studio Tujuh · principle 01" : "Studio Tujuh · prinsip 01",
        clientsKick: en ? "Brands we worked with" : "Merek yang pernah kami tangani",
        contactKick: en ? "Have a project?" : "Punya proyek?",
        contactTitle: en ? "Tell us what you are building." : "Ceritakan yang sedang kamu bangun.",
        email: "hello@studiotujuh.id",
        wa: en ? "Message on WhatsApp" : "Chat WhatsApp",
        foot: en ? "Studio Tujuh · demo template by Cannes" : "Studio Tujuh · template demo oleh Cannes",
        footNav: en ? ["Instagram", "Behance", "LinkedIn"] : ["Instagram", "Behance", "LinkedIn"]
      };

      var css = `
        :root{--ink:#141412;--paper:#f3f0e9;--red:#e23a2e;--muted:#77736b;--line:rgba(20,20,18,.16)}
        body{background:var(--paper);color:var(--ink)}
        .nav{position:sticky;top:0;z-index:6;background:rgba(243,240,233,.95);border-bottom:1px solid var(--line)}
        .navin{display:flex;align-items:center;justify-content:space-between;gap:20px;padding-top:14px;padding-bottom:14px}
        .brand{font-weight:900;font-size:14px;letter-spacing:.02em}
        .brand span{color:var(--red)}
        .links{display:flex;gap:24px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em}
        .btn-red{background:var(--red);color:#fff}
        .btn-line{border:1.5px solid var(--ink)}
        .hero{padding-top:52px;padding-bottom:46px;border-bottom:1px solid var(--line)}
        .kick{display:flex;align-items:center;gap:9px;font-size:9.5px;font-weight:800;letter-spacing:.17em;text-transform:uppercase}
        .kick:before{content:"";width:6px;height:6px;background:var(--red);border-radius:50%}
        h1{font-weight:900;font-size:clamp(48px,7.4vw,104px);line-height:.88;letter-spacing:-.065em;margin:20px 0 22px;max-width:15ch;text-transform:uppercase}
        h1 em{font-style:normal;color:var(--red)}
        .herofoot{display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:end;margin-top:34px}
        .hero p{max-width:42ch;color:var(--muted);font-size:13.5px;line-height:1.7}
        .stats{display:flex;gap:34px;justify-content:flex-end;flex-wrap:wrap}
        .stat b{display:block;font-size:30px;font-weight:900;letter-spacing:-.05em;line-height:1}
        .stat span{font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);font-weight:700;display:block;margin-top:4px}
        .block{padding:44px 0 54px}
        .sechead{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:20px}
        .sechead h2{font-size:clamp(24px,3vw,34px);font-weight:900;letter-spacing:-.045em;text-transform:uppercase;line-height:1}
        .sechead span{font-size:9.5px;letter-spacing:.13em;text-transform:uppercase;color:var(--muted);font-weight:700}
        .work{display:grid;grid-template-columns:1.35fr .65fr;grid-auto-rows:minmax(155px,auto);gap:12px}
        .tile{position:relative;border-radius:4px;overflow:hidden;min-height:180px;display:flex;align-items:flex-end;padding:16px;color:#fff}
        .tile:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.62),transparent 62%)}
        .tile > div{position:relative;z-index:1;display:flex;justify-content:space-between;align-items:end;width:100%;gap:14px}
        .tile h3{font-size:17px;font-weight:900;letter-spacing:-.03em;text-transform:uppercase}
        .tile p{font-size:10px;color:rgba(255,255,255,.75);margin-top:2px}
        .tile b{font-size:9px;letter-spacing:.1em;color:rgba(255,255,255,.7)}
        .tileA{grid-row:span 2;min-height:372px}
        .tileA img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
        .tileB{background:linear-gradient(150deg,#b86f42,#4a2a1c)}
        .tileC{background:linear-gradient(150deg,#4b5c3c,#1c2417)}
        .services{border-top:1px solid var(--ink)}
        .service{display:grid;grid-template-columns:60px 1fr 1.1fr auto;gap:20px;align-items:start;padding:20px 0;border-bottom:1px solid var(--line)}
        .service > b{font-size:11px;color:var(--red);font-weight:800;letter-spacing:.05em}
        .service h3{font-size:16px;font-weight:800;letter-spacing:-.02em}
        .service p{font-size:11.5px;color:var(--muted);line-height:1.6;max-width:44ch}
        .service ul{display:flex;gap:5px;flex-wrap:wrap;justify-content:flex-end}
        .service li{border:1px solid var(--line);border-radius:999px;padding:3px 8px;font-size:8.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase}
        .manifesto{background:var(--ink);color:var(--paper)}
        .manifestoin{padding-top:52px;padding-bottom:52px;display:grid;grid-template-columns:1.4fr .6fr;gap:30px;align-items:end}
        .manifesto p{font-size:clamp(24px,3.4vw,40px);font-weight:800;line-height:1.18;letter-spacing:-.04em;max-width:25ch}
        .manifesto p span{color:var(--red)}
        .manifesto small{font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:rgba(243,240,233,.5);font-weight:700;display:block;text-align:right}
        .clients{display:flex;gap:26px;flex-wrap:wrap;padding-top:26px;border-top:1px solid var(--line);font-size:12px;font-weight:800;letter-spacing:.03em;text-transform:uppercase;color:#8b877f}
        .contact{padding:52px 0 58px;border-top:1px solid var(--ink)}
        .contact h2{font-weight:900;font-size:clamp(34px,5vw,62px);line-height:.95;letter-spacing:-.06em;text-transform:uppercase;max-width:14ch;margin:12px 0 22px}
        .contact a.mail{display:inline-block;font-size:clamp(17px,2.2vw,24px);font-weight:800;letter-spacing:-.03em;border-bottom:2px solid var(--red);padding-bottom:2px}
        .contact .buttons{display:flex;gap:10px;margin-top:24px;flex-wrap:wrap}
        .sitefoot{border-top:1px solid var(--line);padding:18px 0;font-size:10.5px;color:var(--muted)}
        .sitefoot .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
        .sitefoot nav{display:flex;gap:14px}
        @media(max-width:900px){
          .work{grid-template-columns:1fr 1fr}
          .tileA{grid-row:auto;min-height:280px;grid-column:span 2}
          .service{grid-template-columns:40px 1fr;gap:12px}
          .service p{grid-column:2}
          .service ul{grid-column:2;justify-content:flex-start}
          .manifestoin{grid-template-columns:1fr}
          .manifesto small{text-align:left}
        }
        @media(max-width:620px){
          .links{display:none}
          .navin .btn-red{padding:9px 12px;font-size:10.5px}
          h1{font-size:44px}
          .herofoot{grid-template-columns:1fr;gap:22px}
          .stats{justify-content:flex-start;gap:24px}
          .work{grid-template-columns:1fr}
          .tileA{grid-column:auto;min-height:260px}
          .tile{min-height:170px}
          .service{padding:16px 0}
          .contact h2{font-size:36px}
        }
      `;

      var body = `
        <nav class="nav"><div class="wrap navin">
          <div class="brand">STUDIO TUJUH<span>®</span></div>
          <div class="links">${t.nav.map(function (x) { return "<span>" + x + "</span>"; }).join("")}</div>
          <span class="btn btn-red">${t.cta} ↗</span>
        </div></nav>

        <section class="hero"><div class="wrap">
          <span class="kick">${t.kick}</span>
          <h1>${t.h1a} ${t.h1b} <em>${t.h1c}</em></h1>
          <div class="herofoot">
            <p>${t.sub}</p>
            <div class="stats">
              ${t.stats.map(function (s) { return '<div class="stat"><b>' + s[0] + "</b><span>" + s[1] + "</span></div>"; }).join("")}
            </div>
          </div>
        </div></section>

        <section class="block"><div class="wrap">
          <div class="sechead"><h2>${en ? "Selected work" : "Karya pilihan"}</h2><span>${t.workKick}</span></div>
          <div class="work">
            ${t.projects.map(function (p, i) {
              var media = p[3] === "image" ? '<img src="assets/img/bisnis-fashion.webp" alt="" width="900" height="675">' : "";
              var cls = ["tileA", "tileB", "tileC"][i];
              return '<div class="tile ' + cls + '">' + media + '<div><div><h3>' + p[0] + "</h3><p>" + p[1] + "</p></div><b>" + p[2] + "</b></div></div>";
            }).join("")}
          </div>
        </div></section>

        <section class="block" style="padding-top:0"><div class="wrap">
          <div class="sechead"><h2>${t.servicesTitle}</h2><span>${t.servicesKick}</span></div>
          <div class="services">
            ${t.services.map(function (s) {
              return '<div class="service"><b>' + s[0] + "</b><h3>" + s[1] + "</h3><p>" + s[2] + "</p><ul>" +
                s[3].map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul></div>";
            }).join("")}
          </div>
          <div class="clients">${["Batik Laras", "Kopi Senja", "Dapur Kita", "Rapih", "Karya Nusantara"].map(function (x) { return "<span>" + x + "</span>"; }).join("")}</div>
        </div></section>

        <section class="manifesto"><div class="wrap manifestoin">
          <p>${t.manifesto.replace("template.", '<span>template.</span>')}</p>
          <small>${t.manifestoSig}</small>
        </div></section>

        <section class="contact"><div class="wrap">
          <span class="kick">${t.contactKick}</span>
          <h2>${t.contactTitle}</h2>
          <a class="mail" href="mailto:hello@studiotujuh.id">${t.email}</a>
          <div class="buttons"><span class="btn btn-red">${t.wa}</span><span class="btn btn-line">${en ? "Download profile (PDF)" : "Unduh profil (PDF)"}</span></div>
        </div></section>

        <footer class="sitefoot"><div class="wrap"><span>${t.foot}</span><nav>${t.footNav.map(function (x) { return "<span>" + x + "</span>"; }).join("")}</nav></div></footer>
      `;

      return frame(lang, css, body);
    }
  });
})();
