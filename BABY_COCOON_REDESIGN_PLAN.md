# 🍼 Baby Cocoon — Complete Store Redesign & Conversion Optimization Plan

**Store:** babycocoon.co.in · **Platform:** Shopify · **Prepared:** August 2026
**Strategy:** Warm & Trusted Indian Mom Brand (Mamaearth-style trust + handcrafted premium feel)
**Budget constraint:** ₹0–1,000/month for apps → this plan is **free-first** (theme customization + free apps + Shopify native features)

> A visual preview of the new homepage design is in [`homepage-mockup/index.html`](homepage-mockup/index.html) — open it alongside this document.

---

## Table of contents
1. [Executive summary & priorities](#1-executive-summary--priorities)
2. [Working together (admin access, safely)](#2-working-together)
3. [Phase 0 — Fix the trust killers (do this first)](#3-phase-0--fix-the-trust-killers)
4. [Brand foundation, voice & honest claims](#4-brand-foundation)
5. [New design system: colors + typography](#5-design-system)
6. [Navigation & footer redesign](#6-navigation--footer)
7. [Homepage redesign — section by section](#7-homepage-redesign)
8. [Product page redesign](#8-product-page-redesign)
9. [Collection page improvements](#9-collection-pages)
10. [The complete copy bank (ready to paste)](#10-copy-bank)
11. [App stack (free-first)](#11-app-stack)
12. [Mobile optimization checklist](#12-mobile-optimization)
13. [Technical customizations (Liquid & settings)](#13-technical-customizations)
14. [30-day rollout roadmap](#14-30-day-rollout-roadmap)
15. [Measurement: KPIs & analytics](#15-measurement--kpis)
16. [What I need from you next](#16-what-i-need-from-you)

---

## 1. Executive summary & priorities

Your store currently loses trust in the first 5 seconds (leftover "Kidu" copy from another brand, typos like "Newborn Essantials", conflicting 15%/20%/30% offers, fake "270 people viewing" timers, AI-generated product photos). Buyers of baby products are the **most risk-averse shoppers on the internet** — a single red flag cancels the sale.

The fix is not a new theme. The fix is **credibility + warmth + clarity**, applied in this order:

| Priority | What | Why | Est. effort |
|---|---|---|---|
| **P0** | Kill the trust killers (typos, Kidu copy, conflicting offers, fake urgency, affiliate banner) | Nothing converts until trust is restored | 1 day |
| **P0** | Real reviews engine (you have real order history — use it) | #1 conversion lever for baby products | 2–3 days |
| **P1** | Homepage rebuild (hero, USP bar, why-us, best sellers, gift section) | Your homepage currently has no story, no offer, no emotion | 3–5 days |
| **P1** | Product page template (description structure, trust strip, size guide, upsells) | Feature-list descriptions don't sell to anxious parents | 3–4 days |
| **P1** | Product & collection data hygiene (renames, duplicates, compare-at pricing) | Clean data = premium feel = better SEO | 2 days |
| **P2** | Navigation, footer, FAQ, trust pages, SEO | Completes the professional picture | 2–3 days |
| **P2** | Email flows + WhatsApp + analytics | Recover the ~70% of carts you currently lose | 1–2 days |

**Targets (3 months):** Conversion rate 1% → 2%+ · AOV ₹850 → ₹1,200+ (via combos & free-shipping threshold) · 20+ verified reviews per top SKU.

---

## 2. Working together

**Please never paste Shopify passwords or API keys into chat.** The safe ways to work together:

- **Option A (recommended):** I give you step-by-step instructions + ready-to-paste text (this document does that). You apply them in your admin. After each round, tell me "done" and I'll fetch the live site, re-audit, and tell you exactly what changed/fixed.
- **Option B:** Shopify Admin → **Settings → Users and permissions → Add staff** → invite with "Products" + "Themes" + "Discounts" access. I still can't log in from here, but you can screen-share or paste the invite flow results and I'll guide you through every click.
- **Before any theme work:** Admin → **Online Store → Themes → ⋯ → Duplicate**. Always edit the duplicate, then publish when it passes your review.

---

## 3. Phase 0 — Fix the trust killers

These are live on your site right now. Fix all of them **this week**, before anything else. Exact clicks included.

### 3.1 Remove the "Kidu" leftover copy (URGENT)
Homepage section "Our Commitment to Excellence" says *"Explore worry-free play with Kidu. Our toys meet high safety standards…"* — that's another brand's copy.
**Fix:** Online Store → Themes → Customize → find the section with that text → replace with the copy in §7.5, or delete the section.

### 3.2 Fix every typo
| Where | Current | Fix to |
|---|---|---|
| Homepage category tile | "Newborn Essantials" | Newborn Essentials |
| Homepage category tile | "Baby Beeding" | Baby Bedding |
| Trust bar | "Online Suport" | Online Support |
| Testimonial | "Nutricionist" | Nutritionist |
| Exit popup | "Use above code to get 15% 0FF" / "Grap the discount" | "Enter FIRST15 at checkout to save 15%" |
| Cart drawer | "Buy Rs. 488 INR more" | "You're ₹11 away from FREE shipping" (threshold → ₹499) |

### 3.3 One offer. Not four.
Today you show: **20% off** (popup headline), **15% OFF** (popup body), **30% OFF code Deal30** (product page), **SAVE 24%** (product page). Multiple conflicting offers = a scam signal.
**Fix (this is important):** Keep exactly **one** offer everywhere:
> 🎁 **FIRST15 — 15% off your first order**
- Create the code: Admin → **Discounts → Create discount → Discount code** → `FIRST15`, 15% off, "Limit to one use per customer".
- Delete/disable the `Deal30` code and the 20% popup variant.
- Announce it in the announcement bar, popup, welcome email, and WhatsApp — same text everywhere.

### 3.4 Kill fake urgency (it's hurting you)
Remove or disable these apps/blocks:
- "270 people are viewing this right now"
- "HURRY UP! ONLY 15 LEFT IN STOCK" (unless it's tied to real inventory)
- The countdown timer stuck at `00:00:00:00`
- "Sale ends in" — only use for real, date-limited campaigns (max 72h)

Parents detect fake scarcity instantly and it poisons trust. **Honest alternative:** show "Only X left" *only* when Shopify inventory says so (Liquid snippet in §13.6) and use the "45-day returns" guarantee instead — guarantees convert better than scarcity for risk-averse buyers.

### 3.5 Remove the affiliate banner in collection pages
Your collection sidebar shows an external banner linking to `shopify.pxf.io` (ShopiLaunch affiliate). You're advertising a competitor on your own store.
**Fix (exact steps for Evary):** Online Store → Themes → **Customize** → select the **Collection template** → find the "sidebar banner" / image block (it appears twice — desktop sidebar and mobile filter area) → delete both. If you don't see it as an editable block, it's hardcoded or injected by the ShopiLaunch app:
1. First check your **Apps list** (Settings → Apps): if you have a "ShopiLaunch" app installed, the banner may be its "starter plan" injection — open the app's settings and look for a "remove branding" / "starter banner" toggle, or uninstall the app (the theme itself will keep working).
2. If it's in the theme: Online Store → Themes → ⋯ → **Edit code** → search for `shopilaunch`, `pxf`, or `sidebar_banner` (check `sections/`, `layout/theme.liquid`, `templates/collection.json`, `assets/*.js`). Delete the block referencing `landing.shopilaunch.com`.
3. Also search the footer files for "Powered by" / "ShopiLaunch" and replace that footer credit with "© 2026 Baby Cocoon · Made with 💛 in India".
> Do this on your duplicate theme (§13.1 Step 0) first, so nothing breaks live.

### 3.6 Fix currency formatting
Cart shows "Rs. 488 INR" (double currency). Fix: Admin → **Settings → General → Store currency formatting** → Standard format: `₹{{amount}}` and no-decimals format: `₹{{amount_no_decimals}}`. Set free-shipping threshold to a round **₹499**.

### 3.7 Fix fake-looking testimonials
"Sara Colinton", "Saitama One", "Ann Smith", "Shetty Jamie (Developer)" read as invented. Replace with your **real** customer reviews (Phase 0b below) — even 6 real reviews with names + cities beat 20 fake ones.

### 3.8 Fix product page gallery
Every product currently shows the **same image 4 times**. Only keep distinct images; then add 1–2 real photos (see §16, photo checklist).

### 3.9 Cart drawer "Recommended Products" error
It says *"There's no product available! Please choose a product collection."* — configure the recommended-products block to point at your best-selling collection, or hide it.

---

## 4. Brand foundation

### 4.1 Positioning statement
> **For Indian parents who want the safest, softest start for their newborn, Baby Cocoon makes breathable, skin-safe baby essentials — swaddles, wraps, bedding and clothing — hand-crafted in our own Indian workshop, so every piece is quality-checked, fairly priced, and made to be loved.**

### 4.2 Brand voice (write every sentence in this voice)
- **Warm, not corporate.** Write like a helpful older sister who's a mom, not like a brand brochure.
- **Reassuring, not hypey.** Address the worry *before* the feature: "Safe for the most sensitive skin" beats "Premium quality".
- **Plain English, lightly Indian.** A touch of familiarity is fine ("mamma-approved", "ghar jaisa soft") but keep it professional and grammatically perfect — every typo costs credibility.
- **Specific over vague.** Numbers, materials, sizes, care instructions. Never "premium" without proof.

### 4.3 Taglines (pick one, use consistently)
1. **"Comfort that feels like home."** ← recommended (hero)
2. "Made in India. Made for your baby."
3. "For your little one's softest sleep."
4. "Gentle on baby. Trusted by parents."

### 4.4 Honest claims — what you may say
Because you manufacture in-house (per your answers), you can honestly claim:
- ✅ **Made in India** (badge 🇮🇳) — huge trust lever vs imported brands
- ✅ **Cut, stitched & quality-checked in our own workshop** (with photo proof)
- ✅ **Breathable 100% cotton / muslin** (verify fabric composition with your supplier — put the real % on every product)
- ✅ **Azo-free, skin-safe dyes** — **only if your supplier confirms** (ask for the dye certificate; if not confirmed, say "low-chemical, baby-safe dyes" or nothing)
- ✅ **45-day easy returns**, **COD**, **free shipping over ₹499**

### 4.5 What you may NOT claim yet
- ❌ **GOTS-certified** — you told me you have no certifications. Do not write "GOTS" anywhere until you're certified. Same for OEKO-TEX.
- ❌ "Dermatologically tested" — only if you have a test report.
- ❌ Any "X number of happy parents" number you can't back up.

**Certification roadmap (Phase 3, optional):** OEKO-TEX Standard 100 is the cheapest credible certification (one fabric test, ~₹30–60k) and instantly unlocks the "certified safe" badge in your copy. GOTS is expensive; skip until volume justifies it.

### 4.6 The trust story (About page + homepage section)
"Every Baby Cocoon piece is cut, stitched and checked in our own workshop — no middlemen, no shortcuts. That's how we keep prices fair and quality this consistent. When you order, a real person packs it with care and sends it from India to your home."

---

## 5. Design system

### 5.1 Color palette — "Warm Earth" (premium, calm, Mamaearth-adjacent but softer)

| Role | Color | Hex | Usage |
|---|---|---|---|
| Background | Warm Ivory | `#FDF9F4` | Main page background |
| Alt background | Soft Sand | `#F4ECE3` | Alternating sections, footer top |
| **Primary** | Deep Forest | `#2E5E4E` | Buttons, headings, announcement bar, links |
| Primary hover | Forest Dark | `#244B3E` | Button hover |
| Accent | Terracotta | `#D97B5C` | Sale prices, highlights, secondary CTA, icons |
| Badge bg | Soft Blush | `#F3DCD2` | Badges ("Bestseller", "Gift-ready") |
| Star / small accents | Warm Amber | `#E9A13B` | Review stars, rating chips |
| Text primary | Warm Charcoal | `#3B332C` | Body copy |
| Text secondary | Muted Taupe | `#7A6E63` | Captions, meta |
| Card / white | White | `#FFFFFF` | Product cards, cart drawer |

**Rules:** 60% ivory/white · 30% sand + forest · 10% terracotta/amber. Never put two saturated colors side by side. Sale red → use Terracotta (it reads warm, not cheap). Green = buttons/trust, never red.

### 5.2 Typography (Google Fonts — free, native to Shopify themes)

| Role | Font | Weights |
|---|---|---|
| Headlines (H1–H3) | **Fraunces** (warm editorial serif) | 500, 600 (+ italic for accent words) |
| Body, buttons, nav | **Nunito Sans** (friendly rounded sans) | 400, 600, 700, 800 |

**Size scale:**
- H1: 44–56px desktop / 32–36px mobile · weight 600 · line-height 1.1
- H2: 30–36px / 26px · weight 600
- H3: 20–24px · weight 600
- Body: 16–17px · line-height 1.6
- Small/meta: 13–14px · weight 600 · uppercase letter-spacing 0.5px for labels
- Buttons: 16–18px · weight 700 · pill shape (border-radius 999px)
- Cards: 12–16px radius · soft shadow `0 4px 16px rgba(59,51,44,.06)`

**Typography rule:** one italic serif word per headline for warmth (e.g., "Your baby deserves a *soft* landing."). No more than 2 font families anywhere.

### 5.3 Design tokens (use everywhere)
- Buttons: primary = Deep Forest pill, white text; secondary = outlined forest; sale CTA = Terracotta.
- Section padding: 64–88px desktop, 40–48px mobile.
- Max content width: 1200px.
- Badges: blush pill with forest text, 12px uppercase.

---

## 6. Navigation & footer

### 6.1 Header (desktop)
Structure: **Announcement bar (top, forest bg)** → **Logo (left) · Menu (center) · Search / Account / Wishlist / Cart (right)**.

Announcement bar (rotates every 4s — one line at a time):
1. `🎁 15% off your first order — code FIRST15`
2. `🚚 Free shipping on orders over ₹499`
3. `💵 COD available across India`

### 6.2 Main menu (with dropdowns)

| Menu item | Links to | Notes |
|---|---|---|
| Shop All | `/collections/all` | |
| Newborn Essentials | `/collections/newborn-essentials` | rename + fix URL (see §9) |
| Swaddles & Wraps | `/collections/swaddles-wraps` | |
| Gift Sets | `/collections/gift-sets` | rename "Combo Sets" — gift buyers are half your audience |
| Bedding & Cradles ▾ | Baby Bedding, Baby Cradles, Carry Beds, Net Beds | merge 4 collections under one dropdown |
| Clothing | Jablas & Clothing | |
| More ▾ | About Us · Track Order · Contact/WhatsApp | |

Keep it to **7 top-level items max**. Menu labels = nouns parents search for, not brand-speak.

### 6.3 Mobile header
Hamburger (left) · Logo (center) · Search + Cart (right). One-thumb reach. Cart badge always visible.

### 6.4 Footer (5 columns)
1. **Brand:** logo + one line — "Handmade-in-India baby essentials for the softest, safest start." + "🇮🇳 Made in India" + payment icons (UPI, Visa, Mastercard, COD)
2. **Shop:** Newborn Essentials · Swaddles & Wraps · Gift Sets · Bedding & Cradles · Shop All
3. **Help:** Track Order · Shipping & Delivery · Returns (45 days) · Size Guide · FAQ
4. **Company:** About Us · Our Workshop · Contact · WhatsApp
5. **Newsletter:** "Get 15% off your first order" + email capture
Footer bottom: © 2026 Baby Cocoon · Privacy · Terms · Made with 💛 in India

---

## 7. Homepage redesign

> Reference the visual mockup (`homepage-mockup/index.html`). Order matters — this is the exact conversion flow: **hook → trust → product → proof → nudge.**

### 7.1 Announcement bar
Copy in §6.1. Settings: forest bg `#2E5E4E`, ivory text, 13px, centered, sticky on top.

### 7.2 HERO (most important section on your site)
**Layout:** Full-width, warm ivory bg. Left: copy. Right: real photo of a sleeping baby in a cream muslin swaddle (see §16 for the photo shoot). Mobile: photo below copy, full-width.

**Copy (ready to paste):**

> **Eyebrow (small uppercase, terracotta):** Handmade in India 🇮🇳
> **H1:** Your baby deserves a *soft* landing.
> **Subheadline:** Breathable, skin-safe swaddles, wraps and bedding — cut, stitched and quality-checked in our own Indian workshop. Gentle on newborn skin, kind to sleep-deprived parents.
> **CTA 1 (primary):** Shop Bestsellers
> **CTA 2 (secondary):** Find Your Baby's Fit
> **Micro-trust line under CTAs:** ⭐ 4.8/5 from real parents · 45-day returns · COD available

**Settings:** CTA 1 → best-selling collection. CTA 2 → size guide page (or FAQ). Add floating "Made in India" badge on the photo corner.

### 7.3 USP / trust bar (4 icons, one row)
Icons over text, sand background, no borders:
- 🚚 **Free shipping** over ₹499
- 💵 **COD available** across India
- 🔄 **45-day easy returns** — no questions asked
- 🇮🇳 **Made in India** in our own workshop

### 7.4 "Why Baby Cocoon" (3 pillars)
Three cards under the hero. Headline: **"Why Indian parents trust Baby Cocoon"**

1. 🧵 **Skin-safe, always.** Breathable 100% cotton & muslin, low-chemical baby-safe dyes, washed-soft before they reach you.
2. 🏭 **Made in our own workshop.** Every stitch quality-checked by us. No middlemen, no shortcuts, fair prices.
3. 👶 **Designed with real parents.** Sleep-safe shapes, easy washes, sizes that make sense for Indian babies and weather.

### 7.5 Best sellers (replace "Our Commitment to Excellence" section)
**Headline:** "Loved by Indian parents" · **Sub:** "Our most-loved, most-reviewed essentials" · CTA link: Shop all bestsellers.
Show 4–8 products from your real best-seller list (§16.1 — pull this data first). Badges: "Bestseller" on #1, "Gift-ready" on giftable items.

### 7.6 Shop by category (fix names!)
Keep the tile grid but: correct all names (§9.1), use **real product photos** (not AI renders), 3–4 tiles max in the first row: **Newborn Essentials · Swaddles & Wraps · Gift Sets · Bedding & Cradles**.

### 7.7 The Newborn Checklist (parent education → converts both audiences)
**Headline:** "The only newborn checklist you need"
**Sub:** "No guesswork. Everything your baby needs for the first 6 months, in one place."
Two-column: left = checklist (checked items linking to collections), right = CTA card "Buy the complete kit & save".

Checklist (each links to a collection):
- ☑️ Swaddles ×3–4 (breathable, skin-safe)
- ☑️ Jablas & onesies ×5–6
- ☑️ Muslin cloths ×4 (burp + bath)
- ☑️ Hooded towel ×1–2
- ☑️ Cradle / carry bed for day sleeps
- ☑️ Feeding pillow (if breastfeeding)

**Why this wins:** new parents get a trusted answer to "what do I actually need?", gift buyers get a ready-made shopping list. Both convert.

### 7.8 Gift section (for the other half of your audience)
**Layout:** image left (flat-lay gift set), copy right.
> **Eyebrow:** For gift-givers
> **H2:** The gift every new parent actually needs.
> **Sub:** No more guesswork, no more useless presents. Beautiful, useful combos — ready to gift, delivered with love.
> **CTA:** Shop Gift Sets · **Link:** Gift Cards

### 7.9 Combo spotlight (AOV booster)
Feature ONE kit: name, what's inside (3–5 items), "Worth ₹X — you pay ₹Y (save Z%)", CTA "Add the complete kit". Changes weekly or when stock shifts.

### 7.10 Real reviews (replaces fake testimonials)
**Headline:** "Real parents. Real reviews."
Judge.me review carousel/slider: 4–6 reviews with photos, names + city ("Priya, Kochi"). Include a "Verified Buyer" chip. Link: "Read all reviews".

### 7.11 Made-in-India story band
Full-width forest-green band, cream text, photo of your workshop/stitching:
> "Every Baby Cocoon piece starts as fabric in our Indian workshop — and ends as a quality-checked gift for your baby. Made here. Checked by hand. Loved at home."

### 7.12 FAQ (6 questions, accordion)
1. **Are your products safe for newborns?** Yes — we use breathable 100% cotton and muslin with low-chemical, baby-safe dyes, and every piece is quality-checked in our own workshop before dispatch.
2. **What's the delivery time?** 3–6 days within Kerala, 4–8 days across India. COD available.
3. **What if it doesn't fit or we don't like it?** 45-day easy returns — no questions asked.
4. **How do I wash baby muslin/swaddles?** Cold machine wash, mild detergent, line dry. It gets softer with every wash.
5. **Which size do I choose for a newborn?** See our size guide — most items fit 0–6 months; every product page lists exact dimensions.
6. **Do you take bulk/gift orders?** Yes — WhatsApp us for bulk and baby-shower orders.

### 7.13 Email capture + final CTA
**Headline:** "Join 5,000+ Indian parents who trust Baby Cocoon"
**Sub:** "Get 15% off your first order + newborn care tips (no spam, ever)."
Email input + button "Get My 15% Off". Below: "Your baby's comfort starts here." + Shop All button.

### 7.14 Footer — see §6.4.

### 7.15 Popups & cart drawer
- **Exit-intent popup (rewrite in your popup app):** Headline "Wait — don't forget your 15% off 💛" · Body "Join our list, get code FIRST15 for your first order. 45-day returns means zero risk." · Email capture.
- **Cart drawer:** fix threshold text (§3.6) + enable "Pair with" recommendations (real products).
- **Remove:** the broken "Recommended Products — no product available" block (§3.9).

---

## 8. Product page redesign

### 8.1 Layout (top to bottom)
1. Breadcrumbs: Home / Collection / Product
2. Two columns: **Gallery left** (real photos, zoom on hover, 4–6 distinct images) · **Buy box right**
3. Buy box order: Title → Star rating (Judge.me) → Price → badges → short benefit hook → variant pickers (color/size) → quantity → **Add to Cart / Buy It Now** → trust strip → delivery estimate → accordions (Description, Size guide, Shipping & returns, Care) → shipping & return icons
4. Below: **"Pairs well with"** (2–3 real cross-sells) → **Full description** → **Reviews** → **You might also like**

### 8.2 Buy box elements (exact copy)

**Rating line:** `⭐ 4.8 · 32 reviews` (from Judge.me — show even at 1–2 reviews: "First review? Tell us what you think!")

**Price block:** Sale price in Terracotta, compare-at strikethrough, "SAVE X%" chip. Format: `₹225` (never "Rs.").

**Badges (max 2 at a time):** "Bestseller" · "Gift-ready" · "Made in India 🇮🇳" · "New"

**Benefit hook (under title, 1 sentence):** "Wraps your newborn snugly for calmer, deeper sleep — in breathable muslin that keeps them comfortable all year round."

**Trust strip under buttons (4 lines, tiny icons):**
- 🚚 Free shipping over ₹499
- 🔄 45-day easy returns
- 💵 COD available
- 🇮🇳 Made in India

**Delivery estimate (honest, app or text):** "Order today — delivered in **3–6 days** in Kerala, **4–8 days** across India."

### 8.3 What to REMOVE from product pages
- Fake "270 people viewing", fake stock counters, dead countdown timers
- "Sale 30% Off Use Code: Deal30" (conflicts with FIRST15)
- The repeated duplicate gallery images
- "Compare Color" (your photos are single-color AI renders — it can't work yet)
- "Pairs well with" showing the *same product*

### 8.4 The product description template (use for every product)

```
**Hook (1–2 sentences — the outcome, not the feature):**

[What does the baby/parent feel? Write warmth + reassurance.]

**Why it's good for your baby:**
- ✅ [Benefit 1 with a concrete spec or number]
- ✅ [Benefit 2]
- ✅ [Benefit 3]

**Details:**
- Material: [real composition, e.g., 100% cotton muslin, double layer]
- Size: [exact cm + age range]
- Includes: [everything in the box]
- Care: [wash instructions]

**Made in India, checked by hand.** Every piece is stitched and quality-checked in our own workshop before it reaches your door. If anything isn't perfect, our 45-day returns have you covered.
```

**Rules:** no marketing words you can't prove ("premium", "luxury" → replace with "breathable", "double-layered", "hand-finished"). Always include numbers (dimensions, layers, age range). Always end with the guarantee — it's your best closer.

### 8.5 Worked example A — Muslin Swaddle (rename from "Swaddle")

> **Hook:** Your baby's first sleep should feel like a warm hug. Our double-layer muslin swaddle wraps your newborn snug and secure — the way babies love best — while the airy weave keeps them comfortable through Indian summers *and* winters.
>
> **Why it's good for your baby:**
> - ✅ **Snug, safe swaddling** — 100×100 cm wrap fits babies from birth to ~6 months
> - ✅ **Breathable double-layer muslin** — prevents overheating, the #1 newborn sleep worry
> - ✅ **Gets softer with every wash** — baby-safe, low-chemical dyes
>
> **Details:**
> - Material: 100% cotton muslin (double layer)
> - Size: 100 × 100 cm · Fits 0–6 months
> - Care: Cold machine wash · mild detergent · line dry
>
> **Made in India, checked by hand.** Every stitch is quality-checked in our own workshop. Not perfect? 45-day easy returns, no questions asked.

### 8.6 Worked example B — "3 Pcs Combo" → Newborn Essentials Kit

> **Hook:** Everything your newborn needs for day one — in one soft, thoughtful set. Perfect for your own baby, or as the gift every new parent secretly hopes for.
>
> **What's inside:**
> - ✅ [Item 1 — e.g., Muslin Swaddle]
> - ✅ [Item 2 — e.g., Front-open jabla]
> - ✅ [Item 3 — e.g., Hooded towel]
>
> **Why parents love it:** No guesswork, no mismatched pieces — a complete, matching set in skin-safe fabrics, gift-ready in our signature packaging.
> **You save ₹449** vs buying separately (worth ₹3,299 — yours for ₹2,850).
>
> **Details:** Materials & care per item · Fits 0–6 months
> **Made in India, checked by hand.** ... [guarantee line]

> ⚠️ **Action for you:** fill the "What's inside" bullets with the actual contents of this combo — check the product, and list real items.

### 8.7 Size guide (standardize on every clothing/swaddle item)
Table format: Age · Weight · Length · Product size
- 0–3 months · 3–6 kg · 56–62 cm · XS
- 3–6 months · 6–8 kg · 62–68 cm · S
- 6–12 months · 8–10 kg · 68–76 cm · M
- 12–18 months · 10–12 kg · 76–84 cm · L
Add note: "When in doubt, size up — babies grow fast!"

### 8.8 Upsells & bundles (AOV lever)
- **"Pairs well with":** real logic — swaddle + jabla + muslin cloths; cradle + bedding; hooded towel + muslin set. Configure the app/block so it never shows the same product.
- **Bundle deal:** "Add all 3 to the kit & save 15%" — create a Shopify **product bundle** or a manual "combo" product (you already sell combos — feature them).
- **Cart threshold nudge:** progress bar "You're ₹X away from FREE shipping" + "Add [cheapest relevant item] to unlock it".

---

## 9. Collection pages

### 9.1 Rename & fix collections (also fixes SEO + menu)
| Current | Rename to | New handle (auto) |
|---|---|---|
| Newborn Essantials | Newborn Essentials | newborn-essentials |
| Baby Beeding | Baby Bedding | baby-bedding |
| Combo Sets | Gift & Combo Sets | gift-combo-sets |
| Swaddles & Wrappers | Swaddles & Wraps | swaddles-wraps |
| Storage Basket | Storage Baskets | storage-baskets |
| (others are fine) | — | — |

**After renaming:** Admin → **Navigation → URL Redirects** → add redirects from old handles (`/collections/newborn-essantials` → `/collections/newborn-essentials`) so bookmarks and Google links don't break.

### 9.2 Merge duplicate products (data hygiene)
- "3 Pcs Combo" ×3 → keep one, rename **Newborn Essentials Kit (3-Piece)**; merge inventory/variants; delete extras.
- "3pcs Combo" → delete (duplicate of above).
- "Cradle Set" + "Cradle Set-1" → merge into one with 2 color options.
- "Carry Beds" + "Carry Beds-1" → merge.
- Rename "Swaddle" → "Muslin Swaddle"; "Baby Wrapper" → "Baby Wrap"; "Front Open Muslin Jabala" → "Front-Open Muslin Jabla".
> Duplicate products confuse buyers and split review counts. One product, one page, all reviews in one place.

### 9.3 Collection page layout
1. **Banner image** (real product photo) + **collection title** + **1–2 line description** (see copy bank §10.3)
2. **Filter bar:** Availability + Price + (Size/Color where relevant). Mobile: collapsible drawer.
3. **Sort default:** "Best selling" (your theme's default is "Featured" — change it).
4. **Product cards:** photo · badges ("Bestseller", "New", "Gift-ready", Sale) · name · stars + review count · price. Only show Sale badge when compare-at price exists (real discounts only — stop discounting everything by default; it teaches customers to wait).
5. **Bottom:** FAQ snippet + "Need help choosing? WhatsApp us" bar.

### 9.4 Collection descriptions (SEO + conversion) — see §10.3 for ready text.

---

## 10. Copy bank (everything, ready to paste)

### 10.1 Homepage (all sections) — full text in §7 above. Cheat sheet:
- Hero: "Your baby deserves a *soft* landing." / "Breathable, skin-safe swaddles, wraps and bedding — handcrafted in our own Indian workshop."
- USP bar: Free shipping over ₹499 · COD · 45-day returns · Made in India
- Why us: Skin-safe always / Made in our own workshop / Designed with real parents
- Best sellers: "Loved by Indian parents"
- Checklist: "The only newborn checklist you need"
- Gift: "The gift every new parent actually needs."
- Story band: "Made here. Checked by hand. Loved at home."
- FAQ + capture: "Join 5,000+ Indian parents…"

### 10.2 Buttons (use these everywhere)
Add to Cart · Buy It Now · Shop Bestsellers · Shop Gift Sets · Find Your Baby's Fit · Add the Complete Kit · Read All Reviews · Get My 15% Off · Track Order · WhatsApp Us · Shop All
> Never "Learn More" or "Click Here". Every button states the outcome.

### 10.3 Collection descriptions (paste into each collection's SEO/description)
- **Newborn Essentials:** "Everything a newborn actually needs — swaddles, jablas, muslin cloths and more in breathable, skin-safe fabrics. Handmade in India and quality-checked in our own workshop. 45-day returns and COD available."
- **Swaddles & Wraps:** "Help your baby sleep longer and calmer with our breathable muslin swaddles and wraps. Double-layered, baby-safe dyes, sized for Indian babies. 100×100 cm fits 0–6 months."
- **Gift & Combo Sets:** "The gift every new parent actually needs. Beautifully put-together newborn kits in gift-ready packaging — skip the guesswork, give comfort. Free shipping over ₹499."
- **Baby Bedding:** "Cradles, carry beds and bedding for peaceful day and night sleeps. Safe, breathable and beautifully made in India."
- **Jablas & Clothing:** "Front-open jablas and soft cotton clothing made for Indian weather — easy diaper changes, kind to sensitive skin, gets softer with every wash."

### 10.4 Email flows (free via Shopify Email — see §11)

**Welcome (sent on signup / after FIRST15 popup):**
> Subject: Your 15% off, mama 💛
> Hi [First name],
> Welcome to the Baby Cocoon family! 🍼
> Here's your code: **FIRST15** — 15% off your first order.
> Every piece we make is breathable, skin-safe and checked by hand in our own Indian workshop. Because your baby deserves a soft landing.
> [Shop Bestsellers]
> P.S. Not sure what to order? Text us on WhatsApp — a real parent (literally) will help you choose.

**Abandoned cart:**
> Subject: Your baby's bundle is waiting 🍼
> Hi [First name], you left [items] in your cart. They're still reserved — and free shipping over ₹499 means you're only ₹X away.
> [Return to cart] · [Need help? WhatsApp us]
> Not ready yet? No pressure — we've saved your cart for 7 days.

**Review request (7 days after delivery):**
> Subject: How did [product] work for your little one?
> Hi [First name], we'd love 30 seconds of your time. How did the [product] hold up?
> ⭐⭐⭐⭐⭐ Tap to rate — your review helps other Indian parents choose with confidence.
> P.S. Loved it? Share a photo — it means the world to us.

### 10.5 WhatsApp templates
- **Order update:** "Hi [name]! Your Baby Cocoon order #[id] is [packed/shipped] 🚚 Expected delivery: [date]. Track here: [link]"
- **Review nudge:** "Hi [name]! How's your little one liking the [product]? We'd love a quick review — it helps other parents a lot 💛 [link]"
- **Support:** "Hi! 👋 Thanks for reaching out to Baby Cocoon. We usually reply within a few hours (we're parents too). How can we help?"

### 10.6 Trust pages (create: Shipping, Returns, About, FAQ)
- **Shipping:** "Orders dispatched within 24 hours. Delivery: 3–6 days (Kerala), 4–8 days (rest of India). Free shipping over ₹499. COD available."
- **Returns:** "45-day easy returns. If anything isn't perfect, message us on WhatsApp — we'll make it right, no questions asked."
- **About:** the story in §4.6 + workshop photos + "Made in India 🇮🇳".

---

## 11. App stack

Budget: ₹0–1,000/mo → all recommendations are **free tiers** (verify current pricing before installing — apps change plans).

### 11.1 Install now (free)

| App | What it does | Why |
|---|---|---|
| **Judge.me Product Reviews** (free plan) | Reviews, photo reviews, star ratings, review request emails, Google rich snippets | Your #1 conversion tool. Free plan covers everything you need. **Import real reviews from your order history** (CSV or blast request emails to past buyers). |
| **Shopify Email** (included in plan) | Welcome / abandoned cart / review-request emails | Set up the 3 flows in §10.4. Abandoned-cart automation is included. |
| **Shopify Inbox** (free) | Live chat + WhatsApp chat | Instant "a real person is here" trust. |
| **Google & YouTube channel** (free) | Product feed → Google Shopping | Free traffic from Google. |
| **Meta/Facebook channel** (free) | Shop on Instagram/Facebook | Shoppable posts for your (presumably IG-heavy) audience. |

### 11.2 Remove now
- Fake-urgency apps (viewers counter, fake stock, dead countdown) — §3.4
- ShopiLaunch affiliate banner — §3.5

### 11.3 Optional (free/cheap, nice-to-have)
- **Size guide** — use theme-native accordion or a free size-chart app; you already have one — standardize content (§8.7).
- **Wishlist** — you already have a `/pages/wishlist`; keep if working.
- **GA4** (free) via "Google Analytics & Search Console" app — required for §15.
- **WhatsApp button** — use Shopify Inbox's WhatsApp integration (no extra app).

### 11.4 Phase 2 (when revenue allows, ₹1,000–3,000/mo)
Loox (photo reviews) · Rebuy (smart bundles/upsells) · PageFly or GemPages (visual page builder if you outgrow theme sections) · Klaviyo (advanced flows + SMS, free until 250 contacts) · a conversion-optimized paid theme (~$150 one-time) only if you ever outgrow the current theme.

---

## 12. Mobile optimization checklist

~75–80% of Indian shoppers will see mobile first. Non-negotiables:

- [ ] **Sticky mobile bar** with price + "Add to Cart" (snippet §13.7) — visible after scrolling past buy box
- [ ] Tap targets ≥ 44×44px; inputs ≥ 16px font (iOS zooms on <16px)
- [ ] No horizontal scroll; test at 360px width
- [ ] Hero: copy first, image second; image 4:5 aspect, preloaded (LCP)
- [ ] Product galleries swipeable; zoom via pinch
- [ ] Fonts: H1 32–36px, body 16px min
- [ ] Filters open as bottom drawer, one-thumb reach
- [ ] Announcement bar + header combine to ≤ 96px on mobile (huge space waste kills conversions)
- [ ] Compress images: Shopify CDN `&width=` params (e.g., `?width=600` for cards, 1200 for hero) — WebP automatic on Shopify
- [ ] Test on realistic devices: a Redmi/Mi mid-ranger, iPhone SE, Samsung M-series (use Chrome DevTools device mode if you don't have physical devices)
- [ ] Checkout: enable Shop Pay / UPI / COD — UPI is the #1 mobile payment in India
- [ ] Performance target: LCP < 2.5s on 4G (Shopify → Online Store → Speed report)

---

## 13. Technical customizations

**Decision (your call):** keep the current theme. ✔ Confirmed: you're on **Evary by EngoTheme** (a baby/kids Shopify 2.0 theme, distributed through ShopiLaunch) — one of the better bases for a baby store: it already has drag-and-drop sections, baby-oriented layouts, banners, and theme settings for colors/fonts. Everything below is achievable in the **theme editor** on Evary. Only two things need code (fonts if not in Evary's picker + removing the ShopiLaunch banner), and I give you both below.

> ⚠️ **One thing to know about Evary:** because it's distributed via ShopiLaunch's "starter" plan, your theme ships with ShopiLaunch-branded elements — the sidebar affiliate banner (§3.5), a "Powered by ShopiLaunch" footer line, and possibly an injected app. These look third-party and unprofessional. Removing them is priority #2 after the typos (removal steps in §3.5 and §13.1 Step 2).

### 13.1 Keep-your-theme customization checklist (in order)

**Step 0 — Safety first (5 min):**
Online Store → **Themes → ⋯ (next to your live theme) → Duplicate** → name it "Baby Cocoon v2". Do all work on the duplicate, publish only when you're happy. Never edit the live theme directly.

**Step 1 — Theme editor (do as much here as possible):**
Online Store → Themes → **Customize** on your v2 duplicate. Your theme editor has sections & blocks, so:
- [ ] **Global theme settings** (gear icon → Theme settings): on Evary these live under **Theme settings → General / Typography / Colors**. Set colors from §5.1, fonts from §5.2 (Evary's Typography settings has a Google Fonts picker — select **Fraunces** for headings and **Nunito Sans** for body; if they aren't in its list, use the code snippet in §13.2 instead), button shape → pill (999px radius), section spacing.
- [ ] **Announcement bar:** add/configure the top bar with the §6.1 copy (forest background `#2E5E4E`, cream text, centered, 13px). If your theme lacks an announcement bar, use a **custom liquid/image section** at the top of the homepage with the snippet in §13.3.
- [ ] **Homepage:** rebuild section-by-section per §7. Most themes have image banner, featured collection, multi-column, rich text, testimonials, FAQ, newsletter, image-with-text sections — map them 1:1 to §7 (hero = image banner; USP bar = multi-column/icon row; why-us = multi-column; best sellers = featured collection; checklist = image-with-text or custom liquid; gift = image-with-text; reviews = testimonial slider or Judge.me widget; story band = image banner with forest bg; FAQ = FAQ/collapsible content; capture = newsletter section).
- [ ] **Collection template:** customize banner image + description (§9.3), remove the ShopiLaunch sidebar banner (§3.5 below).
- [ ] **Product template:** apply §8 — move/remove blocks via the editor, add trust strip as a text block or custom liquid under the buy buttons.
- [ ] **Cart drawer:** replace the "Rs. 488 INR" progress text with the §13.5 snippet; configure recommended products to a real collection or hide the broken block (§3.9).
- [ ] **Footer:** configure menu columns per §6.4 (most themes let you add multiple menu columns).
- [ ] **Favicon + OG image** (Theme settings → or Settings → Preferences for the social image).

**Step 2 — Code editor (only 2 things):**
- [ ] Google Fonts + design tokens → §13.2 (one snippet in `theme.liquid`)
- [ ] Remove the ShopiLaunch affiliate banner → §3.5

**Step 3 — Checkout colors:** Settings → **Checkout → Branding** → use Deep Forest `#2E5E4E` buttons + ivory background + "Made with 💛 in India" footer note. Checkout branding is free on Shopify.

### 13.2 Fonts & design tokens (only needed if your theme's font picker doesn't include Fraunces/Nunito Sans)

**Where:** Online Store → Themes → ⋯ → **Edit code** → open `layout/theme.liquid` → paste right before `</head>`.

```liquid
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;1,500;1,600&family=Nunito+Sans:ital,opsz,wght@0,6..12,400;0,6..12,600;0,6..12,700;0,6..12,800&display=swap" rel="stylesheet">
<style>
  h1,h2,h3,.section-title, .section-heading, .title{font-family:'Fraunces',serif !important;font-weight:600;line-height:1.12}
  body,button,input,textarea,select,.btn{font-family:'Nunito Sans',sans-serif !important}
  :root{
    --forest:#2E5E4E; --forest-dark:#244B3E; --terra:#D97B5C;
    --ivory:#FDF9F4; --sand:#F4ECE3; --ink:#3B332C; --taupe:#7A6E63; --blush:#F3DCD2;
  }
  .btn,button[type=submit],.product-form__submit{border-radius:999px}
</style>
```

> This is safe: it only changes fonts and sets CSS variables. If a heading still uses the old font after publishing, add `!important` (already included above). If the theme already has a "Custom CSS" box in Theme settings, paste the `<style>` block there instead and skip editing `theme.liquid`.

### 13.3 Announcement bar (if your theme doesn't have one built in)

Add a **Custom Liquid section** at the very top of the homepage (and paste the same into `theme.liquid` header area if you want it on every page):

```liquid
<div style="background:#2E5E4E;color:#FDF9F4;text-align:center;font-size:13px;font-weight:700;padding:9px 16px;letter-spacing:.2px;">
  🎁 15% off your first order — code FIRST15 &nbsp;·&nbsp; 🚚 Free shipping over ₹499 &nbsp;·&nbsp; 💵 COD available
</div>
```

> Keep it to one rotating line if the theme/app supports rotation; otherwise this single combined line is fine on mobile too (it wraps).

### 13.4 Currency format fix
Settings → **General → Store currency** → Standard: `₹{{amount}}` · No decimals: `₹{{amount_no_decimals}}` · Remove the duplicated "INR" suffix in cart text (§3.6).

### 13.5 Free-shipping progress bar (Liquid — replace the "Rs. 488 INR" text)
```liquid
{% assign threshold = 49900 %}   <!-- ₹499.00 in paise -->
{% if cart.total_price >= threshold %}
  🎉 You've unlocked FREE shipping!
{% else %}
  {% assign remaining = threshold | minus: cart.total_price %}
  You're {{ remaining | money }} away from FREE shipping 🚚
{% endif %}
```

### 13.6 Honest low-stock note (only when Shopify knows real inventory)
```liquid
{%- if product.available -%}
  {%- assign v = product.selected_or_first_available_variant -%}
  {%- if v.inventory_management == "shopify" and v.inventory_quantity > 0 and v.inventory_quantity <= 10 -%}
    <p class="low-stock">Only {{ v.inventory_quantity }} left in stock</p>
  {%- endif -%}
{%- endif -%}
```

### 13.7 Sticky mobile Add-to-Cart (add to product template, adjust the button selector to your theme)
```liquid
{% if template contains 'product' %}
<style>
.mobile-atc{position:fixed;left:0;right:0;bottom:0;z-index:99;display:none;background:#fff;
padding:10px 16px calc(10px + env(safe-area-inset-bottom));box-shadow:0 -2px 12px rgba(0,0,0,.08);}
@media (max-width:749px){.mobile-atc{display:flex;gap:12px;align-items:center}}
.mobile-atc .price{font-weight:800;color:#2E5E4E;white-space:nowrap}
.mobile-atc button{flex:1;background:#2E5E4E;color:#fff;border:0;border-radius:999px;padding:14px;font-size:16px;font-weight:700}
</style>
<div class="mobile-atc">
  <span class="price">{{ product.price | money }}</span>
  <button onclick="document.querySelector('[name=add], .product-form__submit, form[action*=\"cart/add\"] button[type=submit]').click()">Add to Cart</button>
</div>
{% endif %}
```
> The selector line may need adjusting to your theme's add-to-cart button. Test on mobile before publishing.

### 13.8 Fix "Recommended products" error in cart drawer
Find the recommended-products block (app or theme section) → point it at a real collection ("Best sellers") → or hide it.

### 13.9 SEO housekeeping (free traffic)
- Set unique **meta title + description** per collection (use §10.3 text) and per product (formula: `[Product] | [Benefit] | Baby Cocoon India`).
- Enable **"Let search engines index your store"** (Settings → Preferences — verify it's on).
- **Google Search Console** (free): add site, submit sitemap `/sitemap.xml` — Shopify generates it automatically.
- **Google Merchant Center** (free, via §11.1): product feed → free Shopping listings.
- Fix internal links: old collection handles via URL redirects (§9.1).

### 13.10 Structured data / rich results
Shopify adds Product JSON-LD automatically (price, availability, reviews once Judge.me is wired). Verify with Google's Rich Results Test after installing Judge.me. OG image + favicon: set in Theme settings.

---

## 14. 30-day rollout roadmap

**Week 1 — Trust repair (P0)**
- [ ] §3 all items: typos, Kidu copy, one offer (FIRST15), fake urgency removed, affiliate banner, ₹ format, real reviews replacing fake testimonials
- [ ] Install Judge.me; import/collect reviews from real order history
- [ ] Set up Shopify Email flows (§10.4) + Inbox/WhatsApp

**Week 2 — Foundation**
- [ ] Theme: duplicate backup → restyle **current theme** in the editor (§13.1): colors, fonts, announcement bar, nav, footer
- [ ] Apply design system (§5): colors, fonts, buttons
- [ ] Rebuild navigation + footer (§6)
- [ ] Fix collection names + redirects + merge duplicate products (§9.1–9.2)

**Week 3 — Homepage + product pages**
- [ ] Homepage sections 7.1→7.14 in order
- [ ] Product page template (§8): rewrite top 10 products with description template
- [ ] Sticky mobile ATC, honest low-stock, free-shipping progress bar (§13)

**Week 4 — Polish, launch & measure**
- [ ] Collection banners + descriptions (§9, §10.3)
- [ ] Trust pages: About, Shipping, Returns, FAQ (§10.6)
- [ ] GA4 + Search Console + Merchant Center (§13.7)
- [ ] Publish, test on mobile (§12), run a 1-week A/B or before/after comparison

---

## 15. Measurement & KPIs

Check weekly (Shopify Analytics + GA4):

| Metric | Now (guess) | Target (90 days) |
|---|---|---|
| Conversion rate | ~1% | 2%+ |
| Average order value | ~₹850 | ₹1,200+ |
| Add-to-cart rate | low | 5–8% |
| Cart → checkout | — | 60%+ |
| Checkout abandonment | — | < 70% |
| Email signups/week | — | 50+ |
| Reviews per top SKU | 0 | 20+ |
| Repeat purchase rate | — | 10%+ |

**Funnel to watch:** Sessions → Product views → ATC → Checkout → Purchase. The week you fix product descriptions, you should see ATC jump; the week reviews land, you should see checkout jump. Report back and I'll adjust the plan with real numbers.

---

## 16. What I need from you

1. **Best-seller data (30 min):** Shopify Admin → Analytics → Reports → "Sales by product" (last 90 days). Paste me the top 10 products with units + revenue. Also: check which collection has the most sales.
2. **Real photos (the single highest-leverage asset):** even a phone camera works. 4–6 shots per top product: on a neutral cream background, baby model (with permission), scale shot (hand holding swaddle), fabric close-up, packaging. Replace AI images on at least the top 10 SKUs. I can write a 1-page photo-shoot brief if you want.
3. **Real review CSV:** export your past orders (Customers → Export). I'll format it for Judge.me import.
4. **Combo contents:** what's actually inside "3 Pcs Combo", "4 Pcs", "5 Pcs" (item list + which is best-selling) so I can write their descriptions.
5. **Workshop photos:** 3–5 shots of your workshop/stitching for the About page + homepage story band.
6. **Fabric truth:** % cotton/muslin composition + dye certification status (affects every product description).
7. **Tell me when done** after each week — I'll re-fetch the live site and grade it against this plan.
8. ~~Your theme name~~ ✅ **Confirmed: Evary (EngoTheme, via ShopiLaunch)** — plan's §13 is now written for it. New ask: in Settings → **Apps**, tell me if you have a **"ShopiLaunch" app** installed (that's what injects the sidebar affiliate banner — see §3.5).

---

*Next step: reply with item 1 (best-seller data) and any of items 2–6 you have, and I'll write the remaining product descriptions, the Judge.me import CSV, and the photo-shoot brief.*
