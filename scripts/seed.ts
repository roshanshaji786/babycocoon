/* eslint-disable no-console */
/**
 * Seed script — populates the PostgreSQL database with the Baby Cocoon catalogue.
 *
 * Usage:
 *   DATABASE_URL=postgresql://... npm run seed
 * (falls back to the local default in drizzle.config.json / src/db/index.ts)
 */
import "dotenv/config";
import { db } from "../src/db";
import { categories, products, reviews } from "../src/db/schema";
import { seedCategories, seedProducts, seedReviews } from "../src/lib/seed-data";

async function main() {
  console.log("Clearing existing catalogue...");
  await db.delete(reviews);
  await db.delete(products);
  await db.delete(categories);

  console.log(`Inserting ${seedCategories.length} categories...`);
  await db.insert(categories).values(
    seedCategories.map(({ id, ...rest }) => rest)
  );

  console.log(`Inserting ${seedProducts.length} products...`);
  await db.insert(products).values(
    seedProducts.map(({ id, ...rest }) => rest)
  );

  console.log(`Inserting ${seedReviews.length} reviews...`);
  await db.insert(reviews).values(
    seedReviews.map(({ id, ...rest }) => rest)
  );

  console.log("Done ✅  Catalogue is live.");
  process.exit(0);
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
