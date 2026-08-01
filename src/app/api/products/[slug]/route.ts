import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { products, categories, reviews } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

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
      inStock: products.inStock,
      categoryName: categories.name,
      categorySlug: categories.slug,
      categoryId: products.categoryId,
    })
    .from(products)
    .leftJoin(categories, eq(products.categoryId, categories.id))
    .where(eq(products.slug, slug))
    .limit(1);

  if (result.length === 0) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const product = result[0];

  // Get reviews
  const productReviews = await db
    .select()
    .from(reviews)
    .where(eq(reviews.productId, product.id))
    .orderBy(desc(reviews.createdAt));

  // Get related products
  let related: Array<{
    id: number;
    name: string;
    slug: string;
    price: string;
    compareAtPrice: string | null;
    images: string[] | null;
    rating: string | null;
    reviewCount: number | null;
    isBestseller: boolean | null;
    isFeatured: boolean | null;
    categoryName: string | null;
  }> = [];
  
  if (product.categoryId) {
    related = await db
      .select({
        id: products.id,
        name: products.name,
        slug: products.slug,
        price: products.price,
        compareAtPrice: products.compareAtPrice,
        images: products.images,
        rating: products.rating,
        reviewCount: products.reviewCount,
        isBestseller: products.isBestseller,
        isFeatured: products.isFeatured,
        categoryName: categories.name,
      })
      .from(products)
      .leftJoin(categories, eq(products.categoryId, categories.id))
      .where(eq(products.categoryId, product.categoryId))
      .limit(5);
  }

  return NextResponse.json({
    product,
    reviews: productReviews,
    relatedProducts: related.filter((r) => r.id !== product.id).slice(0, 4),
  });
}
