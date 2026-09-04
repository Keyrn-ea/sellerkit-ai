const $ = (id) => document.getElementById(id);

const modal = $("modal");
const title = $("modalTitle");
const eyebrow = $("modalEyebrow");
const content = $("modalContent");
const themeToggle = $("themeToggle");

const state = {
  plans: JSON.parse(localStorage.getItem("sellerkit_plans") || "[]")
};

function scrollToTools() {
  const tools = $("tools");
  if (tools) tools.scrollIntoView({ behavior: "smooth" });
}

function showAbout() {
  setModal("Tentang SellerKit AI", "INFO", `
    <div class="card">
      <p><b>SellerKit AI Starter</b> adalah WebApp ringan untuk seller, affiliate, reseller, dan UMKM.</p>
      <p>Versi ini bekerja tanpa backend dan tanpa API berbayar.</p>
    </div>
  `);
}

function closeModal() {
  if (modal) modal.classList.add("hidden");
}

function setModal(name, sub, html) {
  if (!modal || !title || !eyebrow || !content) return;

  title.textContent = name;
  eyebrow.textContent = sub;
  content.innerHTML = html;
  modal.classList.remove("hidden");
}

function copyText(id) {
  const el = $(id);
  if (!el) return;

  const text = el.innerText || el.value || "";

  navigator.clipboard.writeText(text).then(() => {
    showToast("Tersalin");
  });
}

function showToast(msg = "Tersalin") {
  const t = $("toast");
  if (!t) return;

  t.textContent = msg;
  t.classList.remove("hidden");

  setTimeout(() => {
    t.classList.add("hidden");
  }, 1400);
}

function openTool(type) {
  if (type === "caption") captionTool();
  if (type === "hook") hookTool();
  if (type === "description") descriptionTool();
  if (type === "reply") replyTool();
  if (type === "profit") profitTool();
  if (type === "planner") plannerTool();
}

/* =========================
   CAPTION GENERATOR
========================= */

function captionTool() {
  setModal("Caption Generator", "CONTENT TOOL", `
    <div class="field">
      <label>Nama produk</label>
      <input id="product" placeholder="Contoh: Parfum Vanilla Bloom">
    </div>

    <div class="field">
      <label>Target pembeli</label>
      <input id="target" placeholder="Contoh: Remaja dan wanita 18–30 tahun">
    </div>

    <div class="field">
      <label>Gaya caption</label>
      <select id="style">
        <option>Soft selling</option>
        <option>Hard selling</option>
        <option>Friendly</option>
        <option>Elegant</option>
      </select>
    </div>

    <button class="primary" onclick="generateCaption()">
      Generate Caption
    </button>

    <div id="captionResult" class="result">
      Hasil akan muncul di sini.
    </div>

    <div class="actions">
      <button class="secondary"
        onclick="copyText('captionResult')">
        Salin
      </button>
    </div>
  `);
}

function generateCaption() {
  const product = $("product")?.value || "produk kamu";
  const target = $("target")?.value || "customer";
  const style = $("style")?.value || "Soft selling";

  const captions = {
    "Soft selling":
`Lagi cari ${product} yang bikin pilihan terasa lebih praktis? ✨

Cocok untuk ${target}.

Detailnya simpel, nyaman dipakai, dan pas untuk menemani aktivitas harian.

Kalau kamu penasaran, langsung chat ya 💬

#jualanonline #sellerindonesia #produkkeren`,

    "Hard selling":
`🔥 ${product.toUpperCase()} LAGI READY!

Cocok untuk ${target}.

✅ Praktis
✅ Siap order
✅ Bisa langsung chat

Jangan tunggu sampai kehabisan.

Ketik “MAU” sekarang!`,

    "Friendly":
`Hai bestie 👋

Kenalan dulu sama ${product} ✨

Produk ini cocok banget buat ${target}.

Kalau kamu mau tanya harga, detail, atau cara order, tinggal chat aja ya 🤍`,

    "Elegant":
`${product}

Pilihan sederhana dengan kesan yang lebih berkelas.

Cocok untuk ${target} yang menyukai pengalaman belanja praktis dengan tampilan yang rapi.

Hubungi kami untuk informasi dan pemesanan.`
  };

  const result = $("captionResult");

  if (result) {
    result.innerText = captions[style];
  }
}

/* =========================
   HOOK GENERATOR
========================= */

function hookTool() {
  setModal("Hook Generator", "TIKTOK / REELS", `
    <div class="field">
      <label>Produk / topik</label>
      <input id="hookProduct"
        placeholder="Contoh: Skincare untuk kulit kusam">
    </div>

    <button class="primary"
      onclick="generateHooks()">
      Generate 10 Hook
    </button>

    <div id="hookResult"
      class="result">
      Hasil akan muncul di sini.
    </div>

    <div class="actions">
      <button class="secondary"
        onclick="copyText('hookResult')">
        Salin
      </button>
    </div>
  `);
}

function generateHooks() {
  const product =
    $("hookProduct")?.value || "produk ini";

  const hooks = [
    `Jangan beli ${product} sebelum kamu tahu ini.`,
    `Aku baru sadar kenapa ${product} sering diremehkan.`,
    `3 alasan kenapa ${product} layak kamu coba.`,
    `Kalau kamu masih bingung pilih ${product}, lihat ini dulu.`,
    `Kesalahan paling umum saat memilih ${product}.`,
    `POV: kamu akhirnya menemukan ${product} yang cocok.`,
    `Yang orang jarang bilang soal ${product}.`,
    `Worth it nggak sih ${product}? Ini jawabannya.`,
    `Sebelum checkout ${product}, cek 3 hal ini.`,
    `Kalau aku cuma boleh pilih satu, aku pilih ${product}.`
  ];

  const result = $("hookResult");

  if (result) {
    result.innerText =
      hooks.map((h, i) => `${i + 1}. ${h}`).join("\n");
  }
}

/* =========================
   PRODUCT DESCRIPTION
========================= */

function descriptionTool() {
  setModal("Product Description", "STORE TOOL", `
    <div class="field">
      <label>Nama produk</label>
      <input id="descProduct"
        placeholder="Nama produk">
    </div>

    <div class="field">
      <label>Keunggulan utama</label>
      <textarea id="benefits"
        placeholder="Contoh: ringan, tahan lama, mudah dipakai"></textarea>
    </div>

    <button class="primary"
      onclick="generateDescription()">
      Buat Deskripsi
    </button>

    <div id="descResult"
      class="result">
      Hasil akan muncul di sini.
    </div>

    <div class="actions">
      <button class="secondary"
        onclick="copyText('descResult')">
        Salin
      </button>
    </div>
  `);
}

function generateDescription() {
  const product =
    $("descProduct")?.value || "Produk";

  const benefits =
    ($("benefits")?.value ||
      "praktis, nyaman digunakan, cocok untuk kebutuhan harian")
      .split(",")
      .map(x => x.trim())
      .filter(Boolean);

  const result = $("descResult");

  if (result) {
    result.innerText =
`${product}

Pilihan praktis untuk kamu yang ingin produk dengan fungsi jelas dan tampilan menarik.

Keunggulan:
${benefits.map(x => "• " + x).join("\n")}

Silakan hubungi seller untuk detail stok, variasi, dan pemesanan.`;
  }
}

/* =========================
   CUSTOMER REPLY
========================= */

function replyTool() {
  setModal("Balasan Customer", "CHAT TOOL", `
    <div class="field">
      <label>Pilih situasi</label>

      <select id="replyType">
        <option value="price">Tanya harga</option>
        <option value="stock">Tanya stok</option>
        <option value="discount">Minta diskon</option>
        <option value="late">Pesanan terlambat</option>
        <option value="thanks">Ucapan terima kasih</option>
      </select>
    </div>

    <div class="field">
      <label>Nama produk</label>
      <input id="replyProduct"
        placeholder="Opsional">
    </div>

    <button class="primary"
      onclick="generateReply()">
      Buat Balasan
    </button>

    <div id="replyResult"
      class="result">
      Hasil akan muncul di sini.
    </div>

    <div class="actions">
      <button class="secondary"
        onclick="copyText('replyResult')">
        Salin
      </button>
    </div>
  `);
}

function generateReply() {
  const product =
    $("replyProduct")?.value || "produknya";

  const type =
    $("replyType")?.value || "price";

  const replies = {
    price:
`Hai kak 👋

Untuk ${product}, harga dan promo terbaru bisa aku bantu cek.

Kalau kakak mau, sekalian aku jelaskan pilihan variannya ya 😊`,

    stock:
`Hai kak 👋

Untuk stok ${product}, aku cek dulu ketersediaannya ya.

Mohon tunggu sebentar 😊`,

    discount:
`Hai kak 😊

Terima kasih sudah tertarik dengan ${product}.

Untuk promo atau diskon, aku cekkan penawaran terbaik yang tersedia ya.`,

    late:
`Mohon maaf ya kak atas keterlambatan pesanan ${product}.

Aku bantu cek status pesanannya dan akan memberikan informasi terbaru secepatnya.`,

    thanks:
`Terima kasih banyak kak sudah order ${product} 🤍

Semoga suka dengan produknya.

Kalau ada yang ingin ditanyakan setelah barang diterima, langsung chat saja ya.`
  };

  const result = $("replyResult");

  if (result) {
    result.innerText = replies[type];
  }
}

/* =========================
   PROFIT CALCULATOR
========================= */

function profitTool() {
  setModal("Profit Calculator", "BUSINESS TOOL", `
    <div class="row">

      <div class="field">
        <label>Modal / unit</label>
        <input id="cost"
          type="number"
          inputmode="numeric"
          placeholder="20000">
      </div>

      <div class="field">
        <label>Harga jual / unit</label>
        <input id="sell"
          type="number"
          inputmode="numeric"
          placeholder="35000">
      </div>

    </div>

    <div class="row">

      <div class="field">
        <label>Jumlah terjual</label>
        <input id="qty"
          type="number"
          inputmode="numeric"
          value="1">
      </div>

      <div class="field">
        <label>Biaya tambahan</label>
        <input id="extra"
          type="number"
          inputmode="numeric"
          value="0">
      </div>

    </div>

    <button class="primary"
      onclick="calculateProfit()">
      Hitung
    </button>

    <div id="profitResult"
      class="result">
      Masukkan angka lalu klik Hitung.
    </div>
  `);
}

function rupiah(number) {
  return new Intl.NumberFormat(
    "id-ID",
    {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }
  ).format(number);
}

function calculateProfit() {
  const cost =
    Number($("cost")?.value || 0);

  const sell =
    Number($("sell")?.value || 0);

  const qty =
    Number($("qty")?.value || 0);

  const extra =
    Number($("extra")?.value || 0);

  const revenue =
    sell * qty;

  const totalCost =
    (cost * qty) + extra;

  const profit =
    revenue - totalCost;

  const margin =
    revenue
      ? (profit / revenue) * 100
      : 0;

  const result = $("profitResult");

  if (result) {
    result.innerText =
`Omzet: ${rupiah(revenue)}

Total biaya: ${rupiah(totalCost)}

Profit: ${rupiah(profit)}

Margin: ${margin.toFixed(1)}%`;
  }
}

/* =========================
   CONTENT PLANNER
========================= */

function plannerTool() {
  setModal("Content Planner", "PLANNER", `
    <div class="field">
      <label>Tanggal</label>
      <input id="planDate"
        type="date">
    </div>

    <div class="field">
      <label>Platform</label>

      <select id="planPlatform">
        <option>TikTok</option>
        <option>Instagram</option>
        <option>WhatsApp</option>
        <option>Shopee</option>
      </select>

    </div>

    <div class="field">
      <label>Ide konten</label>

      <input id="planText"
        placeholder="Contoh: Video hook produk A">
    </div>

    <button class="primary"
      onclick="addPlan()">
      Tambah
    </button>

    <div id="plannerList"
      class="planner-list">
    </div>
  `);

  renderPlans();
}

function addPlan() {
  const date =
    $("planDate")?.value || "";

  const platform =
    $("planPlatform")?.value || "TikTok";

  const text =
    $("planText")?.value.trim() || "";

  if (!date || !text) {
    showToast("Lengkapi tanggal & ide");
    return;
  }

  state.plans.unshift({
    id: Date.now(),
    date,
    platform,
    text
  });

  localStorage.setItem(
    "sellerkit_plans",
    JSON.stringify(state.plans)
  );

  if ($("planText")) {
    $("planText").value = "";
  }

  renderPlans();
}

function deletePlan(id) {
  state.plans =
    state.plans.filter(
      item => item.id !== id
    );

  localStorage.setItem(
    "sellerkit_plans",
    JSON.stringify(state.plans)
  );

  renderPlans();
}

function escapeHtml(text) {
  return String(text).replace(
    /[&<>"']/g,
    (char) => {

      const map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      };

      return map[char];
    }
  );
}

function renderPlans() {
  const el =
    $("plannerList");

  if (!el) return;

  if (!state.plans.length) {
    el.innerHTML =
      '<div class="result">Belum ada jadwal.</div>';

    return;
  }

  el.innerHTML =
    state.plans.map(plan => `
      <div class="plan-item">

        <div>
          <strong>
            ${escapeHtml(plan.text)}
          </strong>

          <br>

          <small>
            ${escapeHtml(plan.date)}
            •
            ${escapeHtml(plan.platform)}
          </small>
        </div>

        <button
          class="secondary"
          onclick="deletePlan(${plan.id})">
          Hapus
        </button>

      </div>
    `).join("");
}

/* =========================
   DARK MODE
========================= */

if (themeToggle) {

  themeToggle.addEventListener(
    "click",
    () => {

      document.body.classList.toggle(
        "dark"
      );

      const dark =
        document.body.classList.contains(
          "dark"
        );

      localStorage.setItem(
        "sellerkit_theme",
        dark
          ? "dark"
          : "light"
      );

      themeToggle.textContent =
        dark
          ? "☀"
          : "☾";
    }
  );
}

if (
  localStorage.getItem(
    "sellerkit_theme"
  ) === "dark"
) {

  document.body.classList.add(
    "dark"
  );

  if (themeToggle) {
    themeToggle.textContent = "☀";
  }
}

/* =========================
   MODAL
========================= */

if (modal) {

  modal.addEventListener(
    "click",
    (event) => {

      if (event.target === modal) {
        closeModal();
      }

    }
  );
}

/* =========================
   REGISTER FUNCTIONS
========================= */

Object.assign(
  window,
  {
    scrollToTools,
    showAbout,
    closeModal,
    openTool,
    generateCaption,
    generateHooks,
    generateDescription,
    generateReply,
    calculateProfit,
    addPlan,
    deletePlan,
    copyText
  }
);

console.log("SellerKit AI siap digunakan");
