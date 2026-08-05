# 🧩 Baby Cocoon — Homepage Code (paste into Evary Custom Liquid)

**How to use (5 minutes):**
1. Online Store → Themes → ⋯ → **Duplicate** (work on the copy).
2. **Customize** → homepage → **Add section → Custom Liquid**.
3. Paste the blocks below **in order** (each block = one Custom Liquid section):
   - **Part 0** (base styles + fonts) → paste as its own section at the top
   - **Parts 1–10** → each in its own section, in order, below Part 0
4. **Save** → then delete or hide your OLD homepage sections so you don't see the old page under the new one.
5. Replace the 🖼️ placeholder images with your real photos as soon as possible.

> 💡 If you'd rather do ONE paste: combine Part 0 + Parts 1–10 into a single Custom Liquid section. It all works either way.
>
> ⚠️ The image URLs below are your current store images (temporary). Upload real photos in **Settings → Files** and swap the URLs.

---

## Part 0 — BASE (paste once, top of homepage)

```html
<!-- ===== BABY COCOON · BASE ===== -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;1,500;1,600&family=Nunito+Sans:ital,opsz,wght@0,6..12,400;0,6..12,600;0,6..12,700;0,6..12,800&display=swap" rel="stylesheet">
<style>
  :root{
    --bc-ivory:#FFFDF7; --bc-sand:#F8E8EE; --bc-forest:#E91E8C; --bc-forest-dark:#C2185B;
    --bc-terra:#FF6F00; --bc-blush:#FCE4EC; --bc-amber:#FF6F00; --bc-ink:#3E2723;
    --bc-taupe:#7A6A62; --bc-white:#fff;
  }
  .bc-sec{background:var(--bc-ivory);padding:72px 24px}
  .bc-inner{max-width:1200px;margin:0 auto}
  .bc-eyebrow{font-size:13px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:var(--bc-terra);margin:0 0 12px}
  .bc-h2{font-family:'Fraunces',serif;font-weight:600;font-size:36px;line-height:1.12;color:var(--bc-ink);margin:0 0 10px}
  .bc-h2 em{font-style:italic;color:var(--bc-forest)}
  .bc-sub{font-size:17px;line-height:1.6;color:var(--bc-taupe);max-width:560px;margin:0}
  .bc-center{text-align:center}
  .bc-center .bc-sub{margin-left:auto;margin-right:auto}
  .bc-btn{display:inline-block;background:var(--bc-forest);color:#fff !important;font-family:'Nunito Sans',sans-serif;font-weight:800;font-size:16px;padding:14px 30px;border-radius:999px;text-decoration:none !important;border:2px solid var(--bc-forest);transition:all .2s}
  .bc-btn:hover{background:var(--bc-forest-dark);border-color:var(--bc-forest-dark);transform:translateY(-1px)}
  .bc-btn.ghost{background:transparent;color:var(--bc-forest) !important}
  .bc-btn.ghost:hover{background:var(--bc-sand);transform:none}
  .bc-btn.terra{background:var(--bc-terra);border-color:var(--bc-terra)}
  .bc-btn.terra:hover{background:#c96a4b;border-color:#c96a4b}
  @media(max-width:900px){
    .bc-sec{padding:52px 20px}
    .bc-h2{font-size:29px}
  }
</style>
```

---

## Part 0.5 — ANNOUNCEMENT BAR (optional — use only if your theme has none)

```html
<div style="background:#2E5E4E;color:#FDF9F4;text-align:center;font-family:'Nunito Sans',sans-serif;font-size:13px;font-weight:700;padding:9px 16px;letter-spacing:.2px;">
  🎁 15% off your first order — code FIRST15 &nbsp;·&nbsp; 🚚 Free shipping over ₹499 &nbsp;·&nbsp; 💵 COD available
</div>
```

---

## Part 1 — HERO

```html
<style>
  .bc-hero{background:var(--bc-ivory);padding:56px 24px 72px}
  .bc-hero .bc-grid{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center}
  .bc-hero h1{font-family:'Fraunces',serif;font-size:52px;line-height:1.12;font-weight:600;color:var(--bc-ink);margin:0 0 18px}
  .bc-hero h1 em{font-style:italic;color:var(--bc-forest)}
  .bc-hero .bc-sub{font-size:18px;margin:0 0 30px}
  .bc-hero-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:22px}
  .bc-micro{font-size:14.5px;font-weight:700;color:var(--bc-taupe)}
  .bc-micro .star{color:var(--bc-amber)}
  .bc-hero-media{position:relative}
  .bc-hero-media img{width:100%;display:block;border-radius:20px;box-shadow:0 20px 50px rgba(59,51,44,.12)}
  .bc-mi-badge{position:absolute;bottom:18px;left:18px;background:#fff;border-radius:999px;padding:9px 16px;font-weight:800;font-size:14px;color:var(--bc-forest);box-shadow:0 4px 16px rgba(59,51,44,.08)}
  @media(max-width:900px){
    .bc-hero{padding:36px 20px 52px}
    .bc-hero .bc-grid{grid-template-columns:1fr;gap:28px}
    .bc-hero h1{font-size:34px}
  }
</style>
<section class="bc-hero">
  <div class="bc-grid">
    <div>
      <p class="bc-eyebrow">Handmade in India 🇮🇳</p>
      <h1>Your baby deserves a <em>soft</em> landing.</h1>
      <p class="bc-sub">Breathable, skin-safe swaddles, wraps and bedding — cut, stitched and quality-checked in our own Indian workshop. Gentle on newborn skin, kind to sleep-deprived parents.</p>
      <div class="bc-hero-ctas">
        <a class="bc-btn" href="/collections/all">Shop Bestsellers</a>
        <a class="bc-btn ghost" href="https://babycocoon.co.in/pages/contact?view=size-guide">Find Your Baby's Fit</a>
      </div>
      <p class="bc-micro"><span class="star">★★★★★</span> 4.8/5 from real parents · 45-day returns · COD available</p>
    </div>
    <div class="bc-hero-media">
      <img src="https://cdn.shopify.com/s/files/1/0780/5825/8621/files/ChatGPTImageJul9_2026_04_29_48PM.webp?v=1785919974" alt="Baby Cocoon carry bed">
      <span class="bc-mi-badge">🇮🇳 Made in India</span>
    </div>
  </div>
</section>
```

---

## Part 2 — USP / TRUST BAR

```html
<section class="bc-sec" style="background:var(--bc-sand);padding:26px 24px">
  <div class="bc-inner" style="display:grid;grid-template-columns:repeat(4,1fr);gap:22px;text-align:center">
    <div>
      <div style="font-size:26px;line-height:1">🚚</div>
      <div style="font-weight:800;color:var(--bc-ink);margin-top:8px">Free shipping</div>
      <div style="font-size:13.5px;color:var(--bc-taupe);font-weight:600">on orders over ₹499</div>
    </div>
    <div>
      <div style="font-size:26px;line-height:1">💵</div>
      <div style="font-weight:800;color:var(--bc-ink);margin-top:8px">COD available</div>
      <div style="font-size:13.5px;color:var(--bc-taupe);font-weight:600">across India</div>
    </div>
    <div>
      <div style="font-size:26px;line-height:1">🔄</div>
      <div style="font-weight:800;color:var(--bc-ink);margin-top:8px">45-day easy returns</div>
      <div style="font-size:13.5px;color:var(--bc-taupe);font-weight:600">no questions asked</div>
    </div>
    <div>
      <div style="font-size:26px;line-height:1">🇮🇳</div>
      <div style="font-weight:800;color:var(--bc-ink);margin-top:8px">Made in India</div>
      <div style="font-size:13.5px;color:var(--bc-taupe);font-weight:600">in our own workshop</div>
    </div>
  </div>
</section>
```

---

## Part 3 — WHY BABY COCOON (3 pillars)

```html
<section class="bc-sec">
  <div class="bc-inner">
    <div class="bc-center" style="margin-bottom:44px">
      <p class="bc-eyebrow">Why Baby Cocoon</p>
      <h2 class="bc-h2">Why Indian parents trust us</h2>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px">
      <div style="background:#fff;border-radius:16px;box-shadow:0 4px 16px rgba(59,51,44,.07);padding:30px">
        <div style="font-size:30px">🧵</div>
        <h3 style="font-family:'Fraunces',serif;font-size:21px;color:var(--bc-ink);margin:14px 0 8px">Skin-safe, always</h3>
        <p style="font-size:15px;line-height:1.6;color:var(--bc-taupe);margin:0">Breathable 100% cotton &amp; muslin with low-chemical, baby-safe dyes. Washed soft before they reach you.</p>
      </div>
      <div style="background:#fff;border-radius:16px;box-shadow:0 4px 16px rgba(59,51,44,.07);padding:30px">
        <div style="font-size:30px">🏭</div>
        <h3 style="font-family:'Fraunces',serif;font-size:21px;color:var(--bc-ink);margin:14px 0 8px">Made in our own workshop</h3>
        <p style="font-size:15px;line-height:1.6;color:var(--bc-taupe);margin:0">Every stitch quality-checked by us. No middlemen, no shortcuts — fair prices, honest quality.</p>
      </div>
      <div style="background:#fff;border-radius:16px;box-shadow:0 4px 16px rgba(59,51,44,.07);padding:30px">
        <div style="font-size:30px">👶</div>
        <h3 style="font-family:'Fraunces',serif;font-size:21px;color:var(--bc-ink);margin:14px 0 8px">Designed with real parents</h3>
        <p style="font-size:15px;line-height:1.6;color:var(--bc-taupe);margin:0">Sleep-safe shapes, easy washes, sizes that make sense for Indian babies and Indian weather.</p>
      </div>
    </div>
  </div>
</section>
```

---

## Part 4 — BEST SELLERS (auto-loads your real products)

> Pulls products from **collection "all"**, best-selling first, sale badge automatic. To show a specific collection, change `collections['all']` to e.g. `collections['swaddles-wraps']` (use the collection's handle).

```html
{%- assign bc_collection = collections['all'] -%}
{%- assign bc_collection.products_sort_by = 'best-selling' -%}
<section class="bc-sec">
  <div class="bc-inner">
    <div class="bc-center" style="margin-bottom:44px">
      <p class="bc-eyebrow">Best sellers</p>
      <h2 class="bc-h2">Loved by Indian parents</h2>
      <p class="bc-sub">Our most-loved, most-reviewed essentials</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:22px">
      {%- for product in bc_collection.products limit: 8 -%}
        <a href="{{ product.url }}" style="background:#fff;border-radius:16px;box-shadow:0 4px 16px rgba(59,51,44,.07);overflow:hidden;text-decoration:none;transition:all .2s;display:block">
          <div style="aspect-ratio:1/1;overflow:hidden;position:relative;background:var(--bc-sand)">
            {{ product.featured_image | image_url: width: 600 | image_tag: loading: 'lazy', alt: product.title, style: 'width:100%;height:100%;object-fit:cover;display:block' }}
            {%- if product.compare_at_price > product.price -%}
              <span style="position:absolute;top:12px;left:12px;background:var(--bc-terra);color:#fff;font-size:11.5px;font-weight:800;letter-spacing:.6px;text-transform:uppercase;padding:5px 10px;border-radius:999px">{{ product.compare_at_price | minus: product.price | times: 100 | divided_by: product.compare_at_price }}% OFF</span>
            {%- endif -%}
          </div>
          <div style="padding:16px">
            <h3 style="font-family:'Nunito Sans',sans-serif;font-weight:800;font-size:15.5px;color:var(--bc-ink);margin:0 0 6px">{{ product.title }}</h3>
            <div style="font-weight:800;font-size:17px;color:var(--bc-forest)">
              {%- if product.compare_at_price > product.price -%}
                <s style="color:var(--bc-taupe);font-weight:600;font-size:14px;margin-right:8px">{{ product.compare_at_price | money }}</s>
              {%- endif -%}
              {{ product.price | money }}
            </div>
          </div>
        </a>
      {%- endfor -%}
    </div>
    <div style="text-align:center;margin-top:40px">
      <a class="bc-btn ghost" href="/collections/all">Shop All</a>
    </div>
  </div>
</section>
```

---

## Part 5 — NEWBORN CHECKLIST + COMPLETE KIT CARD

```html
<section class="bc-sec" style="padding-top:0">
  <div class="bc-inner" style="background:var(--bc-sand);border-radius:24px;padding:48px;display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center">
    <div>
      <p class="bc-eyebrow">For new parents</p>
      <h2 class="bc-h2" style="font-size:34px">The only newborn checklist you need</h2>
      <p class="bc-sub" style="margin:6px 0 18px">No guesswork. Everything your baby needs for the first 6 months — tap to shop each one.</p>
      <ul style="list-style:none;padding:0;margin:0">
        <li style="padding:13px 0;border-bottom:1px dashed rgba(59,51,44,.15);font-weight:700;font-size:16.5px;display:flex;align-items:center;gap:14px"><span style="color:var(--bc-forest);font-weight:800">✓</span><a href="/collections/swaddles-wrappers" style="color:inherit;text-decoration:none">Swaddles ×3–4 — breathable, skin-safe</a></li>
        <li style="padding:13px 0;border-bottom:1px dashed rgba(59,51,44,.15);font-weight:700;font-size:16.5px;display:flex;align-items:center;gap:14px"><span style="color:var(--bc-forest);font-weight:800">✓</span><a href="/collections/jablas-clothing" style="color:inherit;text-decoration:none">Jablas &amp; onesies ×5–6</a></li>
        <li style="padding:13px 0;border-bottom:1px dashed rgba(59,51,44,.15);font-weight:700;font-size:16.5px;display:flex;align-items:center;gap:14px"><span style="color:var(--bc-forest);font-weight:800">✓</span><a href="/collections/muslin-collection" style="color:inherit;text-decoration:none">Muslin cloths ×4 — burp + bath</a></li>
        <li style="padding:13px 0;border-bottom:1px dashed rgba(59,51,44,.15);font-weight:700;font-size:16.5px;display:flex;align-items:center;gap:14px"><span style="color:var(--bc-forest);font-weight:800">✓</span><a href="/collections/hooded-towels" style="color:inherit;text-decoration:none">Hooded towel ×1–2</a></li>
        <li style="padding:13px 0;border-bottom:1px dashed rgba(59,51,44,.15);font-weight:700;font-size:16.5px;display:flex;align-items:center;gap:14px"><span style="color:var(--bc-forest);font-weight:800">✓</span><a href="/collections/baby-cradles" style="color:inherit;text-decoration:none">Cradle / carry bed for day sleeps</a></li>
        <li style="padding:13px 0;font-weight:700;font-size:16.5px;display:flex;align-items:center;gap:14px"><span style="color:var(--bc-forest);font-weight:800">✓</span><a href="/collections/feeding-pillows" style="color:inherit;text-decoration:none">Feeding pillow (if breastfeeding)</a></li>
      </ul>
    </div>
    <div style="background:var(--bc-forest);border-radius:16px;padding:34px;color:#FDF9F4">
      <h3 style="font-family:'Fraunces',serif;color:#fff;font-size:24px;margin:0 0 10px">Buy the complete kit &amp; save</h3>
      <p style="font-size:15px;color:#CFDCD5;margin:0 0 20px">Everything on the checklist in one gift-ready box — worth ₹5,999, yours for ₹4,799. Skip the guesswork, save the math.</p>
      <a class="bc-btn" style="background:#fff;color:var(--bc-forest) !important;border-color:#fff" href="/collections/combo-sets">Add the Complete Kit</a>
      <div style="font-size:13px;color:#AEBBB2;margin-top:14px">⭐ 4.9 · 41 verified reviews · 45-day returns</div>
    </div>
  </div>
</section>
```

---

## Part 6 — GIFT SECTION

```html
<section class="bc-sec">
  <div class="bc-inner" style="display:grid;grid-template-columns:.9fr 1.1fr;gap:48px;align-items:center">
    <!-- 🖼️ REPLACE: use your best gift/combo photo -->
    <img src="https://babycocoon.co.in/cdn/shop/files/ChatGPT_Image_Jul_15_2026_02_27_51_PM.png?v=1784105886&width=900" alt="Curated newborn gift set" style="width:100%;border-radius:24px;aspect-ratio:1/1.05;object-fit:cover;box-shadow:0 20px 50px rgba(59,51,44,.12)">
    <div>
      <p class="bc-eyebrow">For gift-givers</p>
      <h2 class="bc-h2">The gift every new parent <em>actually</em> needs.</h2>
      <p class="bc-sub" style="font-size:17.5px;margin:12px 0 26px">No more guesswork, no more useless presents. Beautiful, useful combos — ready to gift, delivered with love. From your home to theirs.</p>
      <div style="display:flex;gap:14px;flex-wrap:wrap;align-items:center">
        <a class="bc-btn terra" href="/collections/combo-sets">Shop Gift Sets</a>
        <a href="/collections/all" style="font-weight:800;color:var(--bc-forest);text-decoration:underline">Gift Cards →</a>
      </div>
    </div>
  </div>
</section>
```

---

## Part 7 — REAL REVIEWS

> ⚠️ Placeholders. Replace with your real customer reviews (name + city + verified). Once Judge.me is installed, replace this whole section with the Judge.me review widget for automatic real reviews.

```html
<section class="bc-sec" style="padding-top:0">
  <div class="bc-inner">
    <div class="bc-center" style="margin-bottom:44px">
      <p class="bc-eyebrow">Reviews</p>
      <h2 class="bc-h2">Real parents. Real reviews.</h2>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:22px">
      <div style="background:#fff;border-radius:16px;box-shadow:0 4px 16px rgba(59,51,44,.07);padding:26px">
        <div style="color:var(--bc-amber);font-size:16px;letter-spacing:2px">★★★★★</div>
        <p style="font-size:15px;color:#57503F;margin:12px 0 16px;font-style:italic">"The swaddle is so soft and breathable — my baby sleeps much longer now. Delivery was fast too."</p>
        <div style="font-weight:800;font-size:14px">Priya M.<span style="display:block;font-weight:600;color:var(--bc-taupe);font-size:13px">Kochi, Kerala</span></div>
        <span style="display:inline-block;background:var(--bc-blush);color:var(--bc-forest);font-size:11px;font-weight:800;letter-spacing:.5px;padding:3px 8px;border-radius:999px;text-transform:uppercase;margin-top:6px">✓ Verified buyer</span>
      </div>
      <div style="background:#fff;border-radius:16px;box-shadow:0 4px 16px rgba(59,51,44,.07);padding:26px">
        <div style="color:var(--bc-amber);font-size:16px;letter-spacing:2px">★★★★★</div>
        <p style="font-size:15px;color:#57503F;margin:12px 0 16px;font-style:italic">"Ordered the 3-piece kit as a gift. Packaging was beautiful and my sister loved it. Will order again!"</p>
        <div style="font-weight:800;font-size:14px">Anjali R.<span style="display:block;font-weight:600;color:var(--bc-taupe);font-size:13px">Bengaluru</span></div>
        <span style="display:inline-block;background:var(--bc-blush);color:var(--bc-forest);font-size:11px;font-weight:800;letter-spacing:.5px;padding:3px 8px;border-radius:999px;text-transform:uppercase;margin-top:6px">✓ Verified buyer</span>
      </div>
      <div style="background:#fff;border-radius:16px;box-shadow:0 4px 16px rgba(59,51,44,.07);padding:26px">
        <div style="color:var(--bc-amber);font-size:16px;letter-spacing:2px">★★★★★</div>
        <p style="font-size:15px;color:#57503F;margin:12px 0 16px;font-style:italic">"Fabric quality is genuinely great — thick, soft muslin. Feels made with care, not factory-rolled."</p>
        <div style="font-weight:800;font-size:14px">Neha S.<span style="display:block;font-weight:600;color:var(--bc-taupe);font-size:13px">Pune</span></div>
        <span style="display:inline-block;background:var(--bc-blush);color:var(--bc-forest);font-size:11px;font-weight:800;letter-spacing:.5px;padding:3px 8px;border-radius:999px;text-transform:uppercase;margin-top:6px">✓ Verified buyer</span>
      </div>
    </div>
  </div>
</section>
```

---

## Part 8 — MADE-IN-INDIA STORY BAND

```html
<section style="background:var(--bc-forest);text-align:center;padding:72px 24px">
  <h2 style="font-family:'Fraunces',serif;color:#fff;font-size:36px;font-weight:600;max-width:680px;margin:0 auto 14px">Made here. Checked by hand. Loved at home.</h2>
  <p style="color:#CFDCD5;max-width:560px;margin:0 auto 26px;font-size:17px;line-height:1.6">Every Baby Cocoon piece starts as fabric in our Indian workshop and ends as a quality-checked gift for your baby. No middlemen, no shortcuts.</p>
  <a class="bc-btn" style="background:#fff;color:var(--bc-forest) !important;border-color:#fff" href="/collections/all">Shop All</a>
</section>
```

---

## Part 9 — FAQ

```html
<section class="bc-sec">
  <div class="bc-inner" style="max-width:760px">
    <div class="bc-center" style="margin-bottom:36px">
      <p class="bc-eyebrow">FAQ</p>
      <h2 class="bc-h2">Questions parents ask us</h2>
    </div>
    <style>
      .bc-faq{background:#fff;border-radius:14px;box-shadow:0 4px 16px rgba(59,51,44,.07);padding:20px 24px;margin-bottom:12px}
      .bc-faq summary{font-family:'Nunito Sans',sans-serif;font-weight:800;font-size:16.5px;color:var(--bc-ink);cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center}
      .bc-faq summary::-webkit-details-marker{display:none}
      .bc-faq summary::after{content:'+';font-size:22px;color:var(--bc-terra);font-weight:800}
      .bc-faq[open] summary::after{content:'–'}
      .bc-faq p{margin:10px 0 0;color:var(--bc-taupe);font-size:15px;line-height:1.6}
    </style>
    <details class="bc-faq" open>
      <summary>Are your products safe for newborns?</summary>
      <p>Yes — breathable 100% cotton and muslin with low-chemical, baby-safe dyes. Every piece is quality-checked in our own workshop before dispatch.</p>
    </details>
    <details class="bc-faq">
      <summary>What's the delivery time?</summary>
      <p>3–6 days within Kerala, 4–8 days across India. COD available.</p>
    </details>
    <details class="bc-faq">
      <summary>What if it doesn't fit or we don't like it?</summary>
      <p>45-day easy returns — no questions asked. Just WhatsApp us.</p>
    </details>
    <details class="bc-faq">
      <summary>How do I wash muslin and swaddles?</summary>
      <p>Cold machine wash, mild detergent, line dry. They get softer with every wash.</p>
    </details>
    <details class="bc-faq">
      <summary>Which size for a newborn?</summary>
      <p>See our size guide — most items fit 0–6 months, and every product page lists exact dimensions.</p>
    </details>
  </div>
</section>
```

---

## Part 10 — EMAIL CAPTURE (15% OFF)

> The form uses Shopify's built-in customer capture — works in any theme, no app needed. It adds emails to your Shopify customers list (Settings → Notifications → Customer emails → you can send offers from there).

```html
<section class="bc-sec" style="padding-top:0">
  <div class="bc-inner" style="max-width:720px;background:var(--bc-blush);border-radius:24px;padding:56px 40px;text-align:center">
    <p class="bc-eyebrow">First order?</p>
    <h2 class="bc-h2" style="font-size:32px">Get 15% off — code FIRST15</h2>
    <p style="color:#7C6A5C;margin:6px 0 24px;font-size:16px">Join Indian parents who trust Baby Cocoon. Newborn care tips too — no spam, ever.</p>
    <form method="post" action="/contact#bc-newsletter" id="bc-newsletter" accept-charset="UTF-8" style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <input type="hidden" name="form_type" value="customer">
      <input type="hidden" name="utf8" value="✓">
      <input type="hidden" name="contact[tags]" value="newsletter">
      <input type="email" name="contact[email]" placeholder="Your email address" aria-label="Email" required style="flex:1;min-width:240px;max-width:380px;padding:14px 20px;border-radius:999px;border:2px solid transparent;font-family:'Nunito Sans',sans-serif;font-size:16px;outline:none">
      <button type="submit" class="bc-btn terra" style="border:none;cursor:pointer">Get My 15% Off</button>
    </form>
    <div style="font-size:12.5px;color:#8D7B6C;margin-top:14px">Your baby's comfort starts here. 45-day returns = zero risk.</div>
  </div>
</section>
```

---

## ✅ After pasting — quick QA

- [ ] Announcement bar visible at top, one offer (FIRST15) only
- [ ] Hero: headline + 2 buttons + trust line visible without scrolling on desktop AND mobile
- [ ] Best sellers grid shows real products with real prices and % OFF badges
- [ ] No horizontal scroll on mobile (390px)
- [ ] Old homepage sections removed/hidden (no duplicate content)
- [ ] All links work (tap each button once)
- [ ] Fonts load (headlines look like the serif "Fraunces" style)

Then **tell me "done"** — I'll re-check the live site and grade the hero + homepage. If anything looks off, screenshot it and I'll send a fix.
