# 🐛 Baby Cocoon — Typo & Copy Fix Checklist

**Hand to staff → tick each box when fixed.**
Based on an audit of babycocoon.co.in (August 2026). If an item is already fixed or no longer visible, tick it and move on.

**Where to fix:** Online Store → Themes → **Customize** (edit text in the theme editor) · Products/Collections → edit the product or collection in Admin.

---

## 1. Homepage (theme editor → homepage)

- [ ] **Category tile:** "Newborn Essantials" → **"Newborn Essentials"**
- [ ] **Category tile:** "Baby Beeding" → **"Baby Bedding"**
- [ ] **Trust bar:** "Online Suport" → **"Online Support"**
- [ ] **Testimonial job title:** "Nutricionist" → **"Nutritionist"**
- [ ] **Section headline:** "Shop our Best sellers" → **"Shop our Best Sellers"** (capitalize S)
- [ ] **"Our Commitment to Excellence" section:** delete the entire section — it says *"Explore worry-free play with Kidu. Our toys meet high safety standards…"* — that is another brand's copy. Replace with our "Why Indian parents trust Baby Cocoon" section (see main plan §7.4).
- [ ] **Fake testimonials:** "Sara Colinton", "Saitama One", "Ann Smith", "Shetty Jamie" → replace with real customer reviews (names + city). Even 4 real reviews beat 20 invented ones.
- [ ] **Anywhere on page:** check for double spaces, missing spaces after punctuation, and mixed ₹ / Rs. formatting.

## 2. Exit popup ("Wait! before you leave...")

- [ ] **Headline says:** "Get 20% off for your first order" → **"Get 15% off your first order"** (keep ONE offer — see #5)
- [ ] **Body text:** "Use above code to get 15% 0FF for your first order when checkout" → **"Enter code FIRST15 at checkout to save 15% on your first order."** (note: "0FF" uses a zero, and "when checkout" → "at checkout")
- [ ] **Button:** "Grap the discount" → **"Grab the discount"**
- [ ] **Small heading:** "Wait! before you leave..." → **"Wait — before you leave…"** (capital W after em dash)

## 3. Cart drawer

- [ ] **Progress text:** "Buy Rs. 488 INR more to enjoy FREE shipping" → **"You're ₹11 away from FREE shipping"** (no double currency; set threshold to ₹499 → ₹11 remaining at ₹488 cart)
- [ ] **Broken block:** "Recommended Products — There's no product available! Please choose a product collection." → remove this block or point it at a real collection (Best sellers)
- [ ] **"5"** floating number near recommended products → remove if it's a leftover label

## 4. Product pages (all products)

- [ ] **Fake urgency — remove:** "270 people are viewing this right now" (turn off in app/settings)
- [ ] **Fake scarcity — remove:** "HURRY UP! ONLY 15 LEFT IN STOCK" (unless tied to real Shopify inventory)
- [ ] **Dead countdown — remove:** "Sale ends in: 00 00 00 00" and the stuck timer
- [ ] **Conflicting offer — remove:** "Special Offer: Sale 30% Off Use Code: Deal30" → delete this block entirely (we run one offer only: FIRST15)
- [ ] **Badge spacing:** "SAVE24%" → **"SAVE 24%"** (space; verify the % is real)
- [ ] **Duplicate gallery images:** products show the same image 4× → keep only distinct photos (add 1–2 real photos per product)
- [ ] **Size guide / Compare color:** if a product has no variants, hide the "Compare Color" control so it doesn't look broken

## 5. One-offer rule (do this with the fixes above)

- [ ] **Delete/disable** discount code **Deal30** (Admin → Discounts)
- [ ] **Create** discount code **FIRST15** = 15% off, one use per customer (Admin → Discounts → Create discount)
- [ ] Announce **only** FIRST15 everywhere: popup, announcement bar, product pages, email. Never show 15% / 20% / 24% / 30% at the same time.

## 6. Collections & product names (Admin → Products / Collections)

- [ ] **Collection:** "Swaddles & Wrappers" → **"Swaddles & Wraps"**
- [ ] **Collection:** "Newborn Essantials" → **"Newborn Essentials"** (same as tile)
- [ ] **Collection:** "Baby Beeding" → **"Baby Bedding"**
- [ ] **Collection:** "Combo Sets" → **"Gift & Combo Sets"**
- [ ] **Product:** "Front Open Muslin Jabala" → **"Front-Open Muslin Jabla"** ("Jabala" is misspelled)
- [ ] **Product:** "Swaddle" → **"Muslin Swaddle"** (descriptive)
- [ ] **Product:** "Baby Wrapper" → **"Baby Wrap"**
- [ ] **Duplicates to merge/delete:** "3 Pcs Combo" ×3, "3pcs Combo", "Cradle Set" ×2, "Carry Beds" ×2 → keep one of each, rename properly, delete the rest
- [ ] **After renaming collections:** Admin → Navigation → URL Redirects → add redirect from old URL to new URL (e.g. /collections/newborn-essantials → /collections/newborn-essentials) so old links don't break

## 7. Final proofread pass (assign one person)

- [ ] Open every page: Homepage, each collection, top 10 products, cart, popup, footer
- [ ] Check: spelling, grammar, capitalization, ₹ vs Rs., spacing, and that **no page still says 20% / 24% / 30% / Deal30**
- [ ] Check footer for "Powered by ShopiLaunch" → replace with "© 2026 Baby Cocoon · Made with 💛 in India"
- [ ] List any new typos found here: ____________________

---

**Done = all boxes ticked + one person confirms the final proofread.**
Then tell me "done" — I'll re-check the live site and grade it. ✅
