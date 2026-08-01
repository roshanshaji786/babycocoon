"use client";

import Link from "next/link";
import { ShoppingCart, Star, Eye } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { withAssetBase } from "@/lib/asset-base";

interface ProductCardProps {
  id: number;
  name: string;
  slug: string;
  price: number;
  compareAtPrice: number | null;
  images: string[];
  rating: number;
  reviewCount: number;
  category?: string;
  isBestseller?: boolean;
  isFeatured?: boolean;
}

export default function ProductCard({
  id,
  name,
  slug,
  price,
  compareAtPrice,
  images,
  rating,
  reviewCount,
  category,
  isBestseller,
}: ProductCardProps) {
  const { addItem } = useCartStore();
  const discount = compareAtPrice
    ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-light/30">
      {/* Image */}
      <Link href={`/product/${slug}`} className="block relative overflow-hidden aspect-square">
        <img
          src={withAssetBase(images[0] || "/placeholder.svg")}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {discount > 0 && (
            <span className="px-2.5 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-md">
              {discount}% OFF
            </span>
          )}
          {isBestseller && (
            <span className="px-2.5 py-1 bg-brand-accent text-white text-xs font-bold rounded-full shadow-md">
              Bestseller
            </span>
          )}
        </div>
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0">
            <Eye size={16} /> Quick View
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        {category && (
          <span className="text-[11px] font-medium text-brand-primary/70 uppercase tracking-wider">
            {category}
          </span>
        )}
        <Link href={`/product/${slug}`}>
          <h3 className="text-sm font-semibold text-gray-800 mt-1 line-clamp-2 hover:text-brand-primary transition-colors leading-snug" style={{ minHeight: '2.5rem' }}>
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className={
                  i < Math.round(rating)
                    ? "fill-amber-400 text-amber-400"
                    : "text-gray-200"
                }
              />
            ))}
          </div>
          <span className="text-xs text-gray-400">({reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-gray-900">
            ₹{price.toLocaleString("en-IN")}
          </span>
          {compareAtPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{compareAtPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={() =>
            addItem({
              id,
              name,
              price,
              compareAtPrice,
              image: withAssetBase(images[0] || ""),
              slug,
            })
          }
          className="mt-3 w-full py-2.5 bg-gradient-to-r from-brand-primary to-brand-dark text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-primary/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
