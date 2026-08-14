# 🎠 Baby Cocoon — Hero v4 (brand theme) + fixed link

> **Why v4:** Your brand colors (from your own storefront) are **pink/magenta `#E91E8C` → `#C2185B`**, **blush `#F8E8EE`**, **warm cream `#FFFDF7`**, warm brown text `#3E2723`, orange accent `#FF6F00`. The previous hero used green/ivory — now it matches your real theme. Button 2 now points to the **working** size-guide URL.

## Replace your current hero Custom Liquid with this (same section, just swap the code):

```html
<!-- BABY COCOON HERO v4 · BRAND THEME -->
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;1,500;1,600&family=Nunito+Sans:ital,opsz,wght@0,6..12,400;0,6..12,600;0,6..12,700;0,6..12,800&display=swap" rel="stylesheet">
<style>
  .bc-hero{background:#FFFDF7;padding:48px 24px 64px}
  .bc-hero .bc-grid{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center}
  .bc-eyebrow{font-size:13px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#C2185B;margin:0 0 14px}
  .bc-hero h1{font-family:'Fraunces',serif;font-size:52px;line-height:1.12;font-weight:600;color:#3E2723;margin:0 0 18px}
  .bc-hero h1 em{font-style:italic;background:linear-gradient(90deg,#E91E8C,#C2185B);-webkit-background-clip:text;background-clip:text;color:transparent}
  .bc-hero .bc-sub{font-size:18px;line-height:1.6;color:#6B5D55;max-width:520px;margin:0 0 30px}
  .bc-hero-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:22px}
  .bc-btn{display:inline-block;background:linear-gradient(90deg,#E91E8C,#C2185B);color:#fff !important;font-family:'Nunito Sans',sans-serif;font-weight:800;font-size:16px;padding:14px 30px;border-radius:999px;text-decoration:none !important;border:2px solid transparent;box-shadow:0 6px 16px rgba(233,30,140,.28);transition:all .2s}
  .bc-btn:hover{background:linear-gradient(90deg,#C2185B,#A0134E);transform:translateY(-1px)}
  .bc-btn.ghost{background:transparent;color:#C2185B !important;border-color:#E91E8C;box-shadow:none}
  .bc-btn.ghost:hover{background:#F8E8EE}
  .bc-micro{font-size:14.5px;font-weight:700;color:#7A6A62}
  .bc-micro .star{color:#FF6F00}
  .bc-hero-media{position:relative}
  .bc-hero-media img{width:100%;display:block;border-radius:20px;box-shadow:0 20px 50px rgba(62,39,35,.12)}
  .bc-mi-badge{position:absolute;bottom:18px;left:18px;background:#fff;border-radius:999px;padding:9px 16px;font-weight:800;font-size:14px;color:#C2185B;box-shadow:0 4px 16px rgba(62,39,35,.08)}
  @media(max-width:900px){
    .bc-hero{padding:32px 20px 48px}
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

## What changed vs. v3
| Item | v3 | v4 (brand) |
|---|---|---|
| Background | Ivory `#FDF9F4` | Warm cream `#FFFDF7` (your theme bg) |
| Headline accent | Forest green | **Pink gradient** `#E91E8C→#C2185B` |
| Buttons | Solid green | **Pink gradient + soft pink glow** |
| Ghost button | Green outline | Pink outline + blush hover `#F8E8EE` |
| Micro trust stars | Amber | Orange `#FF6F00` |
| Badge | Green text | Pink text |
| Body text | Warm charcoal | Warm brown `#3E2723` / `#6B5D55` |
| **Button 2 link** | `/pages/size-guide` (404) | **`https://babycocoon.co.in/pages/contact?view=size-guide`** ✅ |

## Steps
1. Online Store → Themes → **Customize** → open your hero **Custom Liquid** section
2. Delete the old code inside → paste this v4 code → **Save**
3. Test: tap **"Find Your Baby's Fit"** → should open the size-guide page (not 404)
4. Tell me "done" and I'll verify live 📸

> 🔁 I've also re-themed the full one-paste homepage (`HOMEPAGE_ONE_PASTE.md`) and per-section code (`HOMEPAGE_CODE.md`) to these brand colors — same pink/cream/blush system — so the whole page is consistent from the hero down.
