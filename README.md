# 🍼 Baby Cocoon

**Premium Baby Essentials — Comfort for Little Ones**

A full-stack e-commerce storefront for baby products (carry beds, swaddles,
muslin collections, feeding pillows, hooded towels & more) built with
Next.js 16, Tailwind CSS v4, Drizzle ORM and PostgreSQL.

## ✨ Features

- 🏠 Landing page with hero carousel, bestsellers & featured products
- 🛍️ Shop page with category filters, search, sorting & ratings
- 📦 Product detail pages with reviews, related products & gallery
- 🛒 Cart drawer (Zustand + localStorage persistence)
- 💳 Checkout flow with order submission (COD / UPI / Card)
- 📱 Fully responsive, mobile-first design

## 🚀 Quick start (local)

```bash
npm install

# 1. Start PostgreSQL (or point DATABASE_URL at any Postgres)
docker run -d --name babycocoon-db -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=app_db -p 5432:5432 postgres:16

# 2. Create tables
cp .env.example .env
npm run db:push

# 3. Seed the catalogue (categories, products, reviews)
npm run seed

# 4. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## ☁️ Deploy to Vercel (full-stack, live store)

1. Create a free Postgres database on [Neon](https://neon.tech) and copy its
   connection string.
2. Import this repo into [Vercel](https://vercel.com) — framework preset:
   **Next.js**.
3. Add the environment variable `DATABASE_URL` (in Vercel project settings).
4. In the Vercel build, tables are created automatically via
   `postinstall`/build hooks **or** run locally:
   ```bash
   npm run db:push   # with DATABASE_URL set
   npm run seed
   ```
5. The repo also includes `.github/workflows/vercel.yml` for automatic
   deploys — add `VERCEL_TOKEN`, `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`
   as repository secrets to enable it.

## 🖼️ Static demo (GitHub Pages)

The repo ships a self-contained static export of the storefront (seeded
catalogue served client-side, orders simulated) deployed automatically by
`.github/workflows/pages.yml` to:

```
https://roshanshaji786.github.io/babycocoon/
```

To rebuild the static version locally, run the build and copy the output
into `docs/`:

```bash
STATIC_EXPORT=1 NEXT_PUBLIC_STATIC=1 npm run build
rm -rf docs && cp -a out docs
```

## 🗂️ Project structure

```
src/
  app/            # pages + API routes
    api/          # /api/products, /api/categories, /api/orders, /api/health
  components/     # UI components
  db/             # Drizzle schema + Postgres client
  lib/            # seed catalogue + static-mode shim
  store/          # Zustand cart store
scripts/seed.ts   # seeds the catalogue into Postgres
```
