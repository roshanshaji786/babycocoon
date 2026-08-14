# 🎠 Baby Cocoon — How to Build the Perfect Hero (Evary theme)

**Goal:** A hero that states one message, shows one offer, builds instant trust, and pushes the visitor to the right next step.
**Time:** ~30 minutes for Route B (recommended) or ~15 minutes for Route A.

---

## Step 0 — What a converting hero needs (30-second rule)

A visitor decides in ~3–5 seconds. Your hero must deliver, in order:

1. **One clear headline** that speaks to the outcome (not the product): "Your baby deserves a *soft* landing."
2. **One subheadline** that removes doubt (materials, workshop, safety).
3. **One primary action** (green button) + one secondary (ghost button).
4. **A micro trust line** under the buttons (stars · returns · COD).
5. **A real, warm photo** — this is the #1 lever. AI images destroy trust for baby products.

**What to AVOID in the hero:** multiple offers, fake countdowns, "hurry", more than 1–2 slides, text so small it's unreadable on mobile, a photo that's clearly AI-generated.

---

## Step 1 — Choose your route

| | **Route A — Evary built-in Slider/Banner** | **Route B — Custom Liquid hero (recommended)** |
|---|---|---|
| What it is | The theme's own banner/slideshow section | A ready-made HTML block you paste into a Custom Liquid section |
| Look | Full-width photo with text overlaid | Matches the design mockup exactly (ivory bg, split layout, serif headline) |
| Setup | ~15 min, all clicks, no code | ~30 min, one paste, no coding skill needed |
| Control | Limited by theme's settings | Full control (colors, spacing, mobile) |
| When to use | When you have one stunning real photo | Always — it's our recommended hero |

> **Recommendation: Route B.** It gives the exact premium look from the mockup and works in any theme, including Evary. Use Route A only if you prefer the full-bleed photo look.

---

## Step 2 — Prepare the image (both routes)

| Use | Spec | Notes |
|---|---|---|
| Desktop | 1920×1080 px (16:9) for Route A · 900×1100 px (4:5 portrait) for Route B | Crop tightly, no clutter |
| Mobile | Same file is fine — it crops automatically | Check it still looks good at 390 px wide |
| Format | JPG, under 500 KB | Compress at tinypng.com if needed |
| Content | Baby in a cream/ivory muslin swaddle, warm light, neutral background, calm mood | Real photo from the shoot (see main plan §16). The mockup's placeholder is in `homepage-mockup/images/hero.jpg` if you need something temporary — replace it ASAP. |

**Upload:** Shopify Admin → Settings → **Files** → Upload → click the image → **Copy link** (you'll paste it into the code).

---

## Step 3 — Route B: build the hero (recommended)

### 3.1 Add a Custom Liquid section
1. Online Store → Themes → ⋯ → **Duplicate** (work on the copy).
2. Click **Customize** on the duplicate.
3. At the top of the homepage, click **Add section** → choose **Custom Liquid**.
4. Drag it to the **very top**, above everything else (below the header/announcement bar).

### 3.2 Paste this code
Replace `YOUR_IMAGE_URL_HERE` with the image link you copied in Step 2, and update the two button links (I've set them to `/collections/all` and `/pages/size-guide` — point "Find Your Baby's Fit" at your size guide or FAQ page if it lives elsewhere):

```html
<!-- ===== BABY COCOON HERO v1 ===== -->
<style>
.bc-hero{background:#FDF9F4;padding:64px 24px 72px}
.bc-hero-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center}
.bc-hero-eyebrow{font-size:13px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#D97B5C;margin:0 0 14px}
.bc-hero h1{font-family:'Fraunces',serif;font-size:52px;line-height:1.12;font-weight:600;color:#3B332C;margin:0 0 18px}
.bc-hero h1 em{font-style:italic;color:#2E5E4E}
.bc-hero-sub{font-size:18px;line-height:1.6;color:#57503F;max-width:520px;margin:0 0 30px}
.bc-hero-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:22px}
.bc-btn{display:inline-block;background:#2E5E4E;color:#fff!important;font-weight:800;font-size:16px;padding:14px 30px;border-radius:999px;text-decoration:none!important;border:2px solid #2E5E4E}
.bc-btn:hover{background:#244B3E;border-color:#244B3E;color:#fff!important}
.bc-btn.ghost{background:transparent;color:#2E5E4E!important}
.bc-btn.ghost:hover{background:#F4ECE3}
.bc-micro{font-size:14.5px;font-weight:700;color:#7A6E63}
.bc-micro .star{color:#E9A13B}
.bc-hero-img{position:relative}
.bc-hero-img img{width:100%;border-radius:24px;display:block;aspect-ratio:4/4.4;object-fit:cover;box-shadow:0 20px 50px rgba(59,51,44,.14)}
.bc-badge{position:absolute;bottom:18px;left:18px;background:#fff;border-radius:999px;padding:9px 16px;font-weight:800;font-size:14px;color:#2E5E4E;box-shadow:0 4px 16px rgba(59,51,44,.08)}
@media(max-width:900px){
  .bc-hero{padding:40px 20px 48px}
  .bc-hero-inner{grid-template-columns:1fr;gap:28px}
  .bc-hero h1{font-size:34px}
}
</style>
<section class="bc-hero">
  <div class="bc-hero-inner">
    <div>
      <p class="bc-hero-eyebrow">Handmade in India 🇮🇳</p>
      <h1>Your baby deserves a <em>soft</em> landing.</h1>
      <p class="bc-hero-sub">Breathable, skin-safe swaddles, wraps and bedding — cut, stitched and quality-checked in our own Indian workshop. Gentle on newborn skin, kind to sleep-deprived parents.</p>
      <div class="bc-hero-ctas">
        <a class="bc-btn" href="/collections/all">Shop Bestsellers</a>
        <a class="bc-btn ghost" href="/pages/size-guide">Find Your Baby's Fit</a>
      </div>
      <p class="bc-micro"><span class="star">★★★★★</span> 4.8/5 from real parents · 45-day returns · COD available</p>
    </div>
    <div class="bc-hero-img">
      <img src="YOUR_IMAGE_URL_HERE" alt="Newborn sleeping peacefully in a soft muslin swaddle">
      <span class="bc-badge">🇮🇳 Made in India</span>
    </div>
  </div>
</section>
```

### 3.3 Make it match your theme's fonts (if needed)
The code uses **Fraunces** for the headline. If Evary's font picker doesn't include it, add this line at the very top of the same Custom Liquid box (inside, before the `<style>`):

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;1,500;1,600&display=swap" rel="stylesheet">
```

### 3.4 Save & check
**Save** → then run the QA checklist in Step 5.

---

## Step 4 — Route A: use Evary's built-in Slider/Banner

If you prefer the full-bleed photo look, use the theme's own section. In Evary it's likely called **"Slider"** or **"Banner"** or **"Slideshow"** in the Add-section list (it's the one with slide blocks).

1. **Add section** → select the Slider/Banner → drag to the top of the homepage.
2. **Keep ONE slide only** (delete the demo slides). One focused message converts better than a carousel.
3. Configure the slide:

| Setting | Value |
|---|---|
| Image | Your 1920×1080 photo |
| Heading | Your baby deserves a *soft* landing. |
| Subheading | Breathable, skin-safe swaddles, wraps and bedding — handcrafted and quality-checked in our own Indian workshop. |
| Button 1 | Shop Bestsellers → /collections/all |
| Button 2 (if any) | Find Your Baby's Fit → /pages/size-guide |
| Text position | Left (or Center if the theme forces it) |
| Text alignment | Left |
| Overlay / darken | 30–40% (only if text sits on the photo) |
| Height | Large (avoid full-window height — it pushes products below the fold) |
| Auto-rotate | Off |

4. If the theme has a **separate mobile banner image** option: upload a portrait crop (800×1200) and keep the text short.
5. **Save** and run Step 5 QA.

> If the section name isn't obvious: click **Add section** and look for any name containing "Slider", "Banner", "Hero", or "Slideshow". If you're still unsure, screenshot the Add-section list and send it to me — I'll name the exact one.

---

## Step 5 — QA checklist (do this before publishing)

- [ ] **Desktop:** headline, subheadline, and both buttons visible without scrolling (announcement bar + header + hero).
- [ ] **Mobile (390px):** headline readable (34px+), image below text, buttons full-width enough to tap, no horizontal scroll.
- [ ] **Contrast:** text is clearly readable against the image/background (use the 30–40% overlay in Route A).
- [ ] **Buttons:** both links go to the right pages; primary is the green pill, secondary is the outline pill.
- [ ] **Trust line:** shows ★ 4.8/5 · 45-day returns · COD available.
- [ ] **No fake urgency** anywhere in the hero (no countdowns, no "x people viewing").
- [ ] **Speed:** image under 500 KB; hero loads fast on 4G.
- [ ] **Publish:** only after all boxes are ticked — then tell me "done" and I'll check the live site.

---

## Step 6 — Want it even better? (send me screenshots)

1. A screenshot of your theme editor's **Add section** list → I'll tell you exactly which Evary sections to use for the rest of the homepage (USP bar, best sellers, checklist, gift, etc.).
2. A screenshot of your built hero (desktop + mobile) → I'll fine-tune spacing, colors, and copy.
3. Or just say "done" after Step 5 and I'll audit the live hero myself.
