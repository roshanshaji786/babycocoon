import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { products, categories } from "@/db/schema";
import { eq, ilike, desc, asc, and, sql } from "drizzle-orm";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get("category");
  const sort = searchParams.get("sort") || "featured";
  const search = searchParams.get("search");
  const featured = searchParams.get("featured");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "50");

  const conditions = [];

  if (category) {
    const cat = await db
      .select()
      .from(categories)
      .where(eq(categories.slug, category))
      .limit(1);
    if (cat.length > 0) {
      conditions.push(eq(products.categoryId, cat[0].id));
    }
  }

  if (featured === "true") {
    conditions.push(eq(products.isBestseller, true));
  }

  if (search) {
    conditions.push(ilike(products.name, `%${search}%`));
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  let orderBy;
  switch (sort) {
    case "price-low":
      orderBy = asc(sql`CAST(${products.price} AS DECIMAL)`);
      break;
    case "price-high":
      orderBy = desc(sql`CAST(${products.price} AS DECIMAL)`);
      break;
    case "newest":
      orderBy = desc(products.createdAt);
      break;
    case "rating":
      orderBy = desc(sql`CAST(${products.rating} AS DECIMAL)`);
      break;
    case "featured":
    default:
      orderBy = desc(products.isFeatured);
      break;
  }

  const offset = (page - 1) * limit;

  const result = await db
    .select({
      id: products.id,
      name: products.name,
      slug: products.slug,
      description: products.description,
      shortDescription: products.shortDescription,
      price: products.price,
      compareAtPrice: products.compareAtPrice,
      images: products.images,
      features: products.features,
      isFeatured: products.isFeatured,
      isBestseller: products.isBestseller,
      ageRange: products.ageRange,
      material: products.material,
      rating: products.rating,
      reviewCount: products.reviewCount,
      categoryName: categories.name,
      categorySlug: categories.slug,
    })
    .from(products)
    .leftJoin(categories, eq(products.categoryId, categories.id))
    .where(whereClause)
    .orderBy(orderBy)
    .limit(limit)
    .offset(offset);

  const countResult = await db
    .select({ count: sql<number>`count(*)` })
    .from(products)
    .where(whereClause);

  return NextResponse.json({
    products: result,
    total: Number(countResult[0].count),
    page,
    limit,
  });
}
