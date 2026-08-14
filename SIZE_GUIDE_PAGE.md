# 📏 Baby Cocoon — Size Guide Page (mobile-friendly · brand theme)

## ✅ Current status (verified live)
- Your size guide is **live** at: **`https://babycocoon.co.in/pages/contact?view=size-guide`**
- It renders correctly — **but** the tables overflow on mobile (4 columns get crushed) and it uses the old green theme.
- **Fix applied:** the updated HTML below is mobile-friendly (tables swipe sideways, buttons go full-width, compact padding) and matches your **brand theme** (pink `#E91E8C→#C2185B`, blush `#F8E8EE`, cream `#FFFDF7`, warm-brown text).

## How to update the page (2 minutes)
1. Shopify Admin → **Online Store → Pages** → open the page that serves `?view=size-guide` (likely your **Contact** page).
2. In the content box, click **Show HTML** → **select all** → delete old code.
3. Paste the **new HTML** from `size-guide.html` (open it, copy everything).
4. Click **Hide HTML** → **Save**.

> 💡 The URL stays the same (`/pages/contact?view=size-guide`), so your hero button keeps working — no link changes needed.

## What changed for mobile (test at 390px wide)
- Tables are now wrapped in a **horizontal swipe container** → no more crushed/overflowing columns; a "👆 swipe table sideways on mobile" hint shows on small screens
- Compact padding: page `20px 12px`, cards `18px 14px`, smaller heading (28px)
- **Buttons go full-width** and stack vertically on mobile (easy thumb taps)
- Steps stack 3→1 column; trust chips wrap neatly
- Font sizes scaled down but still readable (13px table cells)

## What changed for brand
- Table headers: pink gradient `#E91E8C→#C2185B`
- Headline accent word: pink gradient ("perfect *fit*")
- Tips/blush boxes, orange warning boxes, pink CTA buttons with soft glow
- Background warm cream `#FFFDF7`, warm-brown text `#3E2723`

## ⚠️ Before publishing — confirm real numbers
Sizes are standard Indian baby ranges + your plan data. Verify on your actual products:
- Swaddle dimensions (100×100 cm)
- Hooded towel size (75×75 cm approx.)
- Carry bed / cradle / net bed **exact dimensions** (add to the table + product pages — parents need real dimensions before buying a bed)

## 🛟 If the page ever disappears
The `?view=size-guide` view needs the page content to exist. Keep the content on that page; don't delete it. (Long-term, creating a real page titled "Size Guide" gives the cleaner URL `/pages/size-guide` and better SEO — tell me when you want to do that and I'll give you the exact steps + redirect.)

---
**Files:** `size-guide.html` (paste-ready) · `HERO_BRAND.md` (brand hero with the working link)
