import ProductDetailClient from "@/components/ProductDetailClient";
import { seedProducts } from "@/lib/seed-data";

export function generateStaticParams() {
  if (process.env.NEXT_PUBLIC_STATIC !== "1") return [];
  return seedProducts.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProductDetailClient slug={slug} />;
}
