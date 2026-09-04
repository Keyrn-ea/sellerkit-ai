const $ = id => document.getElementById(id);

const modal = $("modal");
const title = $("modalTitle");
const eyebrow = $("modalEyebrow");
const content = $("modalContent");

function setModal(t, e, h) {
  title.textContent = t;
  eyebrow.textContent = e;
  content.innerHTML = h;
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

function toast(m = "Tersalin") {
  const t = $("toast");
  t.textContent = m;
  t.classList.remove("hidden");

  setTimeout(() => {
    t.classList.add("hidden");
  }, 1400);
}

function copy(id) {
  const el = $(id);

  if (!el) return;

  navigator.clipboard
    .writeText(el.innerText || "")
    .then(() => toast());
}

/* =========================
   OPEN TOOL
========================= */

function openTool(x) {
  const tools = {
    caption: captionTool,
    hook: hookTool,
    affiliate: affiliateTool,
    cta: ctaTool,
    broadcast: broadcastTool,
    description: descriptionTool,
    reply: replyTool,
    profit: profitTool,
    commission: commissionTool,
    planner: plannerTool,
    branding: brandingTool
  };

  if (tools[x]) {
    tools[x]();
  }
}

/* =========================
   CAPTION
========================= */

function captionTool() {
  setModal(
    "Caption Generator",
    "CONTENT",
    `
    <div class="field">
      <label>Produk</label>
      <input id="p" placeholder="Contoh: Parfum Vanilla">
    </div>

    <div class="field">
      <label>Target</label>
      <input id="t" placeholder="Contoh: Wanita 18–30 tahun">
    </div>

    <button class="primary" onclick="genCaption()">
      Generate
    </button>

    <div id="r" class="result"></div>
    `
  );
}

function genCaption() {
  const p = $("p").value || "produk kamu";
  const t = $("t").value || "customer";

  $("r").innerText =
`Lagi cari ${p} yang cocok buat ${t}? ✨

Praktis, menarik, dan siap menemani kebutuhan harian.

Kalau penasaran, langsung chat ya 💬`;
}

/* =========================
   HOOK
========================= */

function hookTool() {
  setModal(
    "Hook Generator",
    "TIKTOK / REELS",
    `
    <div class="field">
      <label>Produk / topik</label>
      <input id="p" placeholder="Contoh: Skincare kusam">
    </div>

    <button class="primary" onclick="genHook()">
      Generate 10 Hook
    </button>

    <div id="r" class="result"></div>
    `
  );
}

function genHook() {
  const p = $("p").value || "produk ini";

  const hooks = [
    `Jangan beli ${p} sebelum tahu ini.`,
    `3 alasan kenapa ${p} layak dicoba.`,
    `Kalau bingung pilih ${p}, lihat ini dulu.`,
    `Kesalahan paling umum saat memilih ${p}.`,
    `POV: akhirnya menemukan ${p} yang cocok.`,
    `Yang jarang orang bilang soal ${p}.`,
    `Worth it nggak sih ${p}?`,
    `Sebelum checkout ${p}, cek ini.`,
    `Kenapa ${p} lagi banyak dicari?`,
    `Kalau cuma pilih satu, aku pilih ${p}.`
  ];

  $("r").innerText = hooks
    .map((x, i) => `${i + 1}. ${x}`)
    .join("\n");
}

/* =========================
   AFFILIATE SCRIPT
========================= */

function affiliateTool() {
  setModal(
    "Affiliate Script",
    "AFFILIATE",
    `
    <div class="field">
      <label>Produk</label>
      <input id="p" placeholder="Contoh: Mini blender">
    </div>

    <div class="field">
      <label>Masalah customer</label>
      <input id="t" placeholder="Contoh: Repot bikin jus pagi">
    </div>

    <button class="primary" onclick="genAffiliate()">
      Buat Script
    </button>

    <div id="r" class="result"></div>
    `
  );
}

function genAffiliate() {
  const p = $("p").value || "produk ini";
  const t = $("t").value || "aktivitas jadi ribet";

  $("r").innerText =
`HOOK:
Kalau kamu sering merasa ${t}, coba lihat ${p} ini.

MASALAH:
Aku juga awalnya ngerasa ribet dan buang waktu.

SOLUSI:
${p} bikin prosesnya jadi lebih praktis.

DEMO:
Tunjukkan cara pakai dan hasil akhirnya.

CTA:
Kalau penasaran, cek produknya sekarang.`;
}

/* =========================
   CTA
========================= */

function ctaTool() {
  setModal(
    "CTA Generator",
    "CONVERSION",
    `
    <div class="field">
      <label>Produk</label>
      <input id="p" placeholder="Nama produk">
    </div>

    <button class="primary" onclick="genCTA()">
      Generate CTA
    </button>

    <div id="r" class="result"></div>
    `
  );
}

function genCTA() {
  const p = $("p").value || "produk ini";

  $("r").innerText = [
    `Klik sekarang kalau kamu mau coba ${p}.`,
    `Cek ${p} sebelum stok habis.`,
    `Kalau cocok, langsung checkout ${p}.`,
    `Mau tahu detail ${p}? Cek sekarang.`
  ].join("\n");
}

/* =========================
   WHATSAPP BROADCAST
========================= */

function broadcastTool() {
  setModal(
    "WA Broadcast",
    "CHAT MARKETING",
    `
    <div class="field">
      <label>Produk</label>
      <input id="p" placeholder="Nama produk">
    </div>

    <div class="field">
      <label>Promo</label>
      <input id="t" placeholder="Contoh: Diskon 20%">
    </div>

    <button class="primary" onclick="genBroadcast()">
      Buat Broadcast
    </button>

    <div id="r" class="result"></div>
    `
  );
}

function genBroadcast() {
  const p = $("p").value || "produk kami";
  const t = $("t").value || "promo spesial";

  $("r").innerText =
`Hai kak 👋

${p} sedang ada ${t} 🎉

Kalau mau detail harga, stok, atau cara order, tinggal balas chat ini ya 😊`;
}

/* =========================
   PRODUCT DESCRIPTION
========================= */

function descriptionTool() {
  setModal(
    "Product Description",
    "STORE",
    `
    <div class="field">
      <label>Produk</label>
      <input id="p" placeholder="Nama produk">
    </div>

    <div class="field">
      <label>Keunggulan, pisahkan koma</label>
      <textarea id="t" placeholder="praktis, tahan lama, mudah dipakai"></textarea>
    </div>

    <button class="primary" onclick="genDesc()">
      Buat
    </button>

    <div id="r" class="result"></div>
    `
  );
}

function genDesc() {
  const p = $("p").value || "Produk";

  const a = (
    $("t").value ||
    "praktis,mudah digunakan,cocok untuk harian"
  ).split(",");

  $("r").innerText =
`${p}

Keunggulan:
${a.map(x => "• " + x.trim()).join("\n")}

Hubungi seller untuk detail stok dan pemesanan.`;
}

/* =========================
   CUSTOMER REPLY
========================= */

function replyTool() {
  setModal(
    "Balasan Customer",
    "CHAT",
    `
    <div class="field">
      <label>Produk</label>
      <input id="p" placeholder="Nama produk">
    </div>

    <button class="primary" onclick="genReply()">
      Buat Balasan
    </button>

    <div id="r" class="result"></div>
    `
  );
}

function genReply() {
  const p = $("p").value || "produknya";

  $("r").innerText =
`Hai kak 👋

Untuk ${p}, aku bantu cek harga, stok, dan promo terbarunya ya 😊`;
}

/* =========================
   RUPIAH
========================= */

const rupiah = n =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(n);

/* =========================
   PROFIT CALCULATOR
========================= */

function profitTool() {
  setModal(
    "Profit Calculator",
    "BUSINESS",
    `
    <div class="field">
      <label>Modal / unit</label>
      <input id="a" type="number" placeholder="20000">
    </div>

    <div class="field">
      <label>Harga jual / unit</label>
      <input id="b" type="number" placeholder="35000">
    </div>

    <div class="field">
      <label>Jumlah</label>
      <input id="c" type="number" value="1">
    </div>

    <button class="primary" onclick="calcProfit()">
      Hitung
    </button>

    <div id="r" class="result"></div>
    `
  );
}

function calcProfit() {
  const a = Number($("a").value || 0);
  const b = Number($("b").value || 0);
  const c = Number($("c").value || 0);

  const omzet = b * c;
  const profit = (b - a) * c;

  const margin =
    omzet > 0
      ? (profit / omzet) * 100
      : 0;

  $("r").innerText =
`Omzet: ${rupiah(omzet)}
Profit: ${rupiah(profit)}
Margin: ${margin.toFixed(1)}%`;
}

/* =========================
   AFFILIATE COMMISSION FIX
========================= */

function commissionTool() {
  setModal(
    "Affiliate Commission",
    "AFFILIATE TOOL",
    `
    <div class="field">
      <label>Harga produk</label>
      <input
        id="comPrice"
        type="number"
        inputmode="numeric"
        placeholder="Contoh: 100000"
      >
    </div>

    <div class="field">
      <label>Komisi (%)</label>
      <input
        id="comRate"
        type="number"
        inputmode="decimal"
        placeholder="Contoh: 10"
      >
    </div>

    <div class="field">
      <label>Jumlah terjual</label>
      <input
        id="comQty"
        type="number"
        inputmode="numeric"
        value="1"
      >
    </div>

    <button
      class="primary"
      onclick="calculateCommission()"
    >
      Hitung Komisi
    </button>

    <div
      id="comResult"
      class="result"
    >
      Masukkan data lalu tekan Hitung Komisi.
    </div>
    `
  );
}

function calculateCommission() {
  const price =
    Number($("comPrice")?.value || 0);

  const rate =
    Number($("comRate")?.value || 0);

  const qty =
    Number($("comQty")?.value || 0);

  const perItem =
    (price * rate) / 100;

  const total =
    perItem * qty;

  const out =
    $("comResult");

  if (out) {
    out.innerText =
`Harga produk: ${rupiah(price)}
Komisi: ${rate}%
Komisi per produk: ${rupiah(perItem)}
Jumlah terjual: ${qty}
Total estimasi komisi: ${rupiah(total)}`;
  }
}

/* =========================
   CONTENT PLANNER
========================= */

function plannerTool() {
  setModal(
    "Content Planner",
    "PLANNER",
    `
    <div class="field">
      <label>Tanggal</label>
      <input id="a" type="date">
    </div>

    <div class="field">
      <label>Ide konten</label>
      <input id="b" placeholder="Contoh: Review produk A">
    </div>

    <button class="primary" onclick="savePlan()">
      Simpan
    </button>

    <div id="r" class="result"></div>
    `
  );

  $("r").innerText =
    localStorage.getItem("plan") ||
    "Belum ada jadwal.";
}

function savePlan() {
  const x =
    `${$("a").value} • ${$("b").value}`;

  localStorage.setItem(
    "plan",
    x
  );

  $("r").innerText =
    x;
}

/* =========================
   BRANDING
========================= */

function brandingTool() {
  setModal(
    "Ubah Branding",
    "WHITE LABEL",
    `
    <div class="field">
      <label>Nama brand</label>
      <input
        id="a"
        value="${localStorage.getItem("brand") || "SellerKit AI"}"
      >
    </div>

    <div class="field">
      <label>Link Lynk.id / WhatsApp</label>
      <input
        id="b"
        value="${localStorage.getItem("buy") || ""}"
        placeholder="https://lynk.id/namakamu"
      >
    </div>

    <button class="primary" onclick="saveBrand()">
      Simpan
    </button>
    `
  );
}

function saveBrand() {
  localStorage.setItem(
    "brand",
    $("a").value || "SellerKit AI"
  );

  localStorage.setItem(
    "buy",
    $("b").value || ""
  );

  applyBrand();
  closeModal();
  toast("Branding disimpan");
}

function applyBrand() {
  const b =
    localStorage.getItem("brand") ||
    "SellerKit AI";

  const u =
    localStorage.getItem("buy") ||
    "";

  $("brandName").textContent =
    b;

  $("footerBrand").textContent =
    `${b} V2 • Resell Ready`;

  if (u) {
    $("buyButton").href = u;
    $("buyButton").onclick = null;
    $("buyButton").target = "_blank";
  }
}

applyBrand();

/* =========================
   DARK MODE
========================= */

$("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "dark",
    document.body.classList.contains("dark")
      ? "1"
      : "0"
  );
};

if (
  localStorage.getItem("dark") === "1"
) {
  document.body.classList.add("dark");
}

/* =========================
   CLOSE MODAL
========================= */

modal.onclick = e => {
  if (e.target === modal) {
    closeModal();
  }
};

/* =========================
   REGISTER FUNCTIONS
========================= */

Object.assign(window, {
  openTool,
  closeModal,

  genCaption,
  genHook,
  genAffiliate,
  genCTA,
  genBroadcast,
  genDesc,
  genReply,

  calcProfit,

  calculateCommission,

  savePlan,
  saveBrand,

  copy
});

console.log(
  "SellerKit AI V2 siap digunakan"
);
