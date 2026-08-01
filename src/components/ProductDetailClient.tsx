"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  Check,
  ChevronRight,
  Minus,
  Plus,
} from "lucide-react";
import { useCartStore } from "@/store/cart";
import { withAssetBase } from "@/lib/asset-base";
import ProductCard from "./ProductCard";

interface ProductDetail {
  id: number;
  name: string;
  slug: string;
  description: string;
  shortDescription: string | null;
  price: string;
  compareAtPrice: string | null;
  images: string[];
  features: string[];
  isFeatured: boolean | null;
  isBestseller: boolean | null;
  ageRange: string | null;
  material: string | null;
  rating: string | null;
  reviewCount: number | null;
  inStock: boolean | null;
  categoryName: string | null;
  categorySlug: string | null;
}

interface Review {
  id: number;
  authorName: string;
  rating: number;
  title: string | null;
  body: string;
  verified: boolean | null;
  createdAt: string;
}

interface RelatedProduct {
  id: number;
  name: string;
  slug: string;
  price: string;
  compareAtPrice: string | null;
  images: string[];
  rating: string | null;
  reviewCount: number | null;
  isBestseller: boolean | null;
  isFeatured: boolean | null;
  categoryName: string | null;
}

export default function ProductDetailClient({ slug }: { slug: string }) {
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [relatedProducts, setRelatedProducts] = useState<RelatedProduct[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );
  const [loading, setLoading] = useState(true);
  const { addItem } = useCartStore();

  useEffect(() => {
    setLoading(true);
    fetch(`/api/products/${slug}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.product) {
          setProduct(data.product);
          setReviews(data.reviews || []);
          setRelatedProducts(data.relatedProducts || []);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="aspect-square bg-gray-100 rounded-2xl animate-pulse" />
          <div className="space-y-4">
            <div className="h-4 bg-gray-100 rounded w-1/4 animate-pulse" />
            <div className="h-8 bg-gray-100 rounded w-3/4 animate-pulse" />
            <div className="h-6 bg-gray-100 rounded w-1/3 animate-pulse" />
            <div className="h-20 bg-gray-100 rounded animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">😔</div>
        <h2 className="text-2xl font-bold mb-2">Product not found</h2>
        <Link href="/shop" className="text-brand-primary hover:underline">
          ← Back to Shop
        </Link>
      </div>
    );
  }

  const price = parseFloat(product.price);
  const compareAtPrice = product.compareAtPrice
    ? parseFloat(product.compareAtPrice)
    : null;
  const discount = compareAtPrice
    ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
    : 0;
  const rating = parseFloat(product.rating || "4.5");
  const images = (product.images as string[]) || [];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price,
        compareAtPrice,
        image: withAssetBase(images[0] || ""),
        slug: product.slug,
      });
    }
  };

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center gap-1.5 text-sm text-gray-400">
          <Link href="/" className="hover:text-brand-primary transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link
            href="/shop"
            className="hover:text-brand-primary transition-colors"
          >
            Shop
          </Link>
          {product.categoryName && (
            <>
              <ChevronRight size={14} />
              <Link
                href={`/shop?category=${product.categorySlug}`}
                className="hover:text-brand-primary transition-colors"
              >
                {product.categoryName}
              </Link>
            </>
          )}
          <ChevronRight size={14} />
          <span className="text-gray-600 font-medium truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-14">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100">
              <img
                src={withAssetBase(images[selectedImage] || "/placeholder.svg")}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {discount > 0 && (
                <span className="absolute top-4 left-4 px-3 py-1.5 bg-red-500 text-white text-sm font-bold rounded-full shadow-lg">
                  {discount}% OFF
                </span>
              )}
              {product.isBestseller && (
                <span className="absolute top-4 right-4 px-3 py-1.5 bg-brand-accent text-white text-sm font-bold rounded-full shadow-lg">
                  Bestseller
                </span>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      i === selectedImage
                        ? "border-brand-primary shadow-md"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={withAssetBase(img)}
                      alt={`${product.name} ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="animate-fade-in">
            {product.categoryName && (
              <Link
                href={`/shop?category=${product.categorySlug}`}
                className="text-sm font-medium text-brand-primary hover:text-brand-dark transition-colors"
              >
                {product.categoryName}
              </Link>
            )}

            <h1
              className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.round(rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-200"
                    }
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">
                {rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mt-4">
              <span className="text-3xl font-bold text-gray-900">
                ₹{price.toLocaleString("en-IN")}
              </span>
              {compareAtPrice && (
                <span className="text-xl text-gray-400 line-through">
                  ₹{compareAtPrice.toLocaleString("en-IN")}
                </span>
              )}
              {discount > 0 && (
                <span className="px-2.5 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-lg">
                  Save {discount}%
                </span>
              )}
            </div>

            {/* Tax */}
            <p className="text-xs text-gray-400 mt-1">
              Inclusive of all taxes. Free shipping on orders above ₹999
            </p>

            {/* Short Description */}
            {product.shortDescription && (
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                {product.shortDescription}
              </p>
            )}

            {/* Product Info */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {product.material && (
                <div className="px-4 py-3 bg-baby-mint rounded-xl">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Material
                  </p>
                  <p className="text-sm font-semibold text-gray-800 mt-0.5">
                    {product.material}
                  </p>
                </div>
              )}
              {product.ageRange && (
                <div className="px-4 py-3 bg-baby-blue rounded-xl">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Age Range
                  </p>
                  <p className="text-sm font-semibold text-gray-800 mt-0.5">
                    {product.ageRange}
                  </p>
                </div>
              )}
            </div>

            {/* Features */}
            {product.features && (product.features as string[]).length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-bold text-gray-800 mb-2">
                  Key Features
                </h3>
                <div className="space-y-1.5">
                  {(product.features as string[]).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check
                        size={14}
                        className="text-green-500 shrink-0"
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">
                  Quantity:
                </span>
                <div className="flex items-center gap-0 bg-gray-100 rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2.5 hover:bg-gray-200 rounded-l-xl transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-5 text-sm font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2.5 hover:bg-gray-200 rounded-r-xl transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 bg-gradient-to-r from-brand-primary to-brand-dark text-white font-bold rounded-xl hover:shadow-xl hover:shadow-brand-primary/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
                <button className="p-3.5 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors text-gray-600">
                  <Heart size={20} />
                </button>
                <button className="p-3.5 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors text-gray-600">
                  <Share2 size={20} />
                </button>
              </div>

              <Link
                href="/checkout"
                onClick={handleAddToCart}
                className="block w-full py-3.5 bg-brand-accent text-white text-center font-bold rounded-xl hover:bg-orange-700 transition-colors text-sm"
              >
                Buy Now
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-100">
              <div className="text-center">
                <Truck size={20} className="mx-auto text-brand-primary mb-1" />
                <p className="text-xs text-gray-500">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield
                  size={20}
                  className="mx-auto text-brand-primary mb-1"
                />
                <p className="text-xs text-gray-500">Secure Payment</p>
              </div>
              <div className="text-center">
                <RotateCcw
                  size={20}
                  className="mx-auto text-brand-primary mb-1"
                />
                <p className="text-xs text-gray-500">7-Day Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12 lg:mt-16">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("description")}
              className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === "description"
                  ? "border-brand-primary text-brand-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === "reviews"
                  ? "border-brand-primary text-brand-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Reviews ({reviews.length})
            </button>
          </div>

          <div className="mt-6">
            {activeTab === "description" ? (
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Rating Summary */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900">
                      {rating}
                    </div>
                    <div className="flex items-center gap-0.5 mt-1 justify-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < Math.round(rating)
                              ? "fill-amber-400 text-amber-400"
                              : "text-gray-200"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      {reviews.length} reviews
                    </p>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {[5, 4, 3, 2, 1].map((stars) => {
                      const count = reviews.filter(
                        (r) => r.rating === stars
                      ).length;
                      const pct =
                        reviews.length > 0
                          ? (count / reviews.length) * 100
                          : 0;
                      return (
                        <div key={stars} className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 w-6">
                            {stars}★
                          </span>
                          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-amber-400 rounded-full"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-400 w-8">
                            {count}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Individual Reviews */}
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-primary to-brand-dark flex items-center justify-center text-white text-sm font-bold">
                          {review.authorName.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">
                            {review.authorName}
                          </p>
                          <div className="flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                size={11}
                                className={
                                  i < review.rating
                                    ? "fill-amber-400 text-amber-400"
                                    : "text-gray-200"
                                }
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      {review.verified && (
                        <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          <Check size={10} /> Verified
                        </span>
                      )}
                    </div>
                    {review.title && (
                      <p className="text-sm font-semibold text-gray-700 mt-3">
                        {review.title}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                      {review.body}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12 lg:mt-16">
            <h2
              className="text-2xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              You Might Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((rp) => (
                <ProductCard
                  key={rp.id}
                  id={rp.id}
                  name={rp.name}
                  slug={rp.slug}
                  price={parseFloat(rp.price)}
                  compareAtPrice={
                    rp.compareAtPrice ? parseFloat(rp.compareAtPrice) : null
                  }
                  images={rp.images as string[]}
                  rating={parseFloat(rp.rating || "4.5")}
                  reviewCount={rp.reviewCount || 0}
                  category={rp.categoryName || undefined}
                  isBestseller={rp.isBestseller || false}
                  isFeatured={rp.isFeatured || false}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
