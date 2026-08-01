"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  slug: string;
  price: string;
  compareAtPrice: string | null;
  images: string[];
  rating: string;
  reviewCount: number;
  categoryName: string | null;
  categorySlug: string | null;
  isBestseller: boolean | null;
  isFeatured: boolean | null;
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "newest", label: "Newest" },
];

export default function ShopClient() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || ""
  );
  const [sort, setSort] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [isFeaturedFilter, setIsFeaturedFilter] = useState(
    searchParams.get("featured") === "true"
  );

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (selectedCategory) params.set("category", selectedCategory);
    if (sort) params.set("sort", sort);
    if (searchQuery) params.set("search", searchQuery);
    if (isFeaturedFilter) params.set("featured", "true");

    const res = await fetch(`/api/products?${params.toString()}`);
    const data = await res.json();
    setProducts(data.products || []);
    setTotal(data.total || 0);
    setLoading(false);
  }, [selectedCategory, sort, searchQuery, isFeaturedFilter]);

  useEffect(() => {
    fetch("/api/categories")
      .then((r) => r.json())
      .then((d) => setCategories(d || []));
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "");
    setIsFeaturedFilter(searchParams.get("featured") === "true");
  }, [searchParams]);

  const clearFilters = () => {
    setSelectedCategory("");
    setSort("featured");
    setSearchQuery("");
    setIsFeaturedFilter(false);
  };

  const hasFilters = selectedCategory || searchQuery || isFeaturedFilter;

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-baby-pink via-baby-lavender to-baby-blue py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1
            className="text-3xl lg:text-4xl font-bold text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {selectedCategory
              ? categories.find((c) => c.slug === selectedCategory)?.name ||
                "Shop"
              : isFeaturedFilter
              ? "Bestsellers"
              : "All Products"}
          </h1>
          <p className="text-gray-600 mt-2">
            {total} products found
            {selectedCategory && (
              <span className="ml-2">
                in{" "}
                <span className="font-medium text-brand-primary">
                  {categories.find((c) => c.slug === selectedCategory)?.name}
                </span>
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-gray-200 text-sm font-medium"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>

            {/* Sort */}
            <div className="relative flex-1 sm:flex-initial">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full appearance-none px-4 py-2.5 pr-10 rounded-xl border border-gray-200 bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {hasFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs font-medium text-gray-500">
              Active Filters:
            </span>
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory("")}
                className="flex items-center gap-1 px-3 py-1.5 bg-brand-primary/10 text-brand-primary text-xs font-medium rounded-full hover:bg-brand-primary/20 transition-colors"
              >
                {categories.find((c) => c.slug === selectedCategory)?.name}
                <X size={12} />
              </button>
            )}
            {isFeaturedFilter && (
              <button
                onClick={() => setIsFeaturedFilter(false)}
                className="flex items-center gap-1 px-3 py-1.5 bg-brand-accent/10 text-brand-accent text-xs font-medium rounded-full hover:bg-brand-accent/20 transition-colors"
              >
                Bestsellers
                <X size={12} />
              </button>
            )}
            <button
              onClick={clearFilters}
              className="text-xs text-gray-400 hover:text-gray-600 underline"
            >
              Clear All
            </button>
          </div>
        )}

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`${
              showFilters ? "block" : "hidden"
            } lg:block w-full lg:w-56 shrink-0`}
          >
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-sm font-bold text-gray-800 mb-4">
                Categories
              </h3>
              <div className="space-y-1">
                <button
                  onClick={() => {
                    setSelectedCategory("");
                    setIsFeaturedFilter(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    !selectedCategory && !isFeaturedFilter
                      ? "bg-brand-primary/10 text-brand-primary font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  All Products
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => {
                      setSelectedCategory(cat.slug);
                      setIsFeaturedFilter(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === cat.slug
                        ? "bg-brand-primary/10 text-brand-primary font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-800 mb-3">
                  Quick Filters
                </h3>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isFeaturedFilter}
                    onChange={(e) => setIsFeaturedFilter(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
                  />
                  <span className="text-sm text-gray-600">Bestsellers Only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden">
                    <div className="aspect-square bg-gray-100 animate-pulse" />
                    <div className="p-4 space-y-2">
                      <div className="h-3 bg-gray-100 rounded animate-pulse" />
                      <div className="h-3 bg-gray-100 rounded animate-pulse w-2/3" />
                      <div className="h-5 bg-gray-100 rounded animate-pulse w-1/3" />
                    </div>
                  </div>
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your filters or search query
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2.5 bg-brand-primary text-white font-medium rounded-xl hover:bg-brand-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    slug={product.slug}
                    price={parseFloat(product.price)}
                    compareAtPrice={
                      product.compareAtPrice
                        ? parseFloat(product.compareAtPrice)
                        : null
                    }
                    images={product.images as string[]}
                    rating={parseFloat(product.rating || "4.5")}
                    reviewCount={product.reviewCount}
                    category={product.categoryName || undefined}
                    isBestseller={product.isBestseller || false}
                    isFeatured={product.isFeatured || false}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
