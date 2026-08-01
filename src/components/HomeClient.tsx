"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Truck, Shield, Headphones, Star, ChevronLeft, ChevronRight } from "lucide-react";
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
  description: string | null;
  image: string | null;
  sortOrder: number | null;
}

const testimonials = [
  {
    text: "Absolutely loved the quality! The fabric is incredibly soft and gentle on my baby's skin. The stitching and finish are excellent. Highly recommended!",
    author: "Sara C.",
    role: "Mother of 2",
    rating: 5,
  },
  {
    text: "Baby Cocoon exceeded my expectations. The products are beautiful, comfortable, and exactly as shown. My baby sleeps so peacefully!",
    author: "Priya M.",
    role: "First-time Mom",
    rating: 5,
  },
  {
    text: "Fast delivery and premium quality. The swaddle is lightweight, breathable, and perfect for everyday use. Will definitely shop again!",
    author: "Neha S.",
    role: "Pediatrician",
    rating: 5,
  },
  {
    text: "The materials feel luxurious, the designs are adorable, and everything is made with great care. A wonderful store for baby essentials!",
    author: "Anjali R.",
    role: "Interior Designer",
    rating: 5,
  },
];

const heroSlides = [
  {
    image: "https://images.pexels.com/photos/32138734/pexels-photo-32138734.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    title: "Welcome to Baby Cocoon",
    subtitle: "Premium Baby Essentials for Your Little One",
    cta: "Shop Now",
    link: "/shop",
  },
  {
    image: "https://images.pexels.com/photos/4964488/pexels-photo-4964488.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    title: "Newborn Combo Sets",
    subtitle: "Complete Sets Starting at ₹2,850",
    cta: "View Combos",
    link: "/shop?category=combo-sets",
  },
  {
    image: "https://images.pexels.com/photos/33719889/pexels-photo-33719889.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    title: "Soft & Safe Bedding",
    subtitle: "100% Organic Cotton for Delicate Skin",
    cta: "Explore",
    link: "/shop?category=baby-bedding",
  },
];

export default function HomeClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [heroIndex, setHeroIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/products?limit=50").then((r) => r.json()),
      fetch("/api/categories").then((r) => r.json()),
    ]).then(([prodData, catData]) => {
      setProducts(prodData.products || []);
      setCategories(catData || []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const bestsellers = products.filter((p) => p.isBestseller);
  const featured = products.filter((p) => p.isFeatured);
  const topCategories = categories.slice(0, 6);
  const moreCategories = categories.slice(6, 12);

  return (
    <div>
      {/* ═══ Hero Carousel ═══ */}
      <section className="relative h-[480px] sm:h-[540px] lg:h-[600px] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === heroIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div
                  className={`max-w-xl transition-all duration-700 ${
                    i === heroIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <span className="inline-block px-3 py-1 bg-brand-primary/90 text-white text-xs font-bold rounded-full mb-4">
                    ✨ NEW COLLECTION
                  </span>
                  <h2
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {slide.title}
                  </h2>
                  <p className="text-lg text-white/90 mb-6">{slide.subtitle}</p>
                  <Link
                    href={slide.link}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-primary font-bold rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    {slide.cta} <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Hero Navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIndex(i)}
              className={`h-3 rounded-full transition-all ${
                i === heroIndex
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/70 w-3"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() =>
            setHeroIndex(
              (heroIndex - 1 + heroSlides.length) % heroSlides.length
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors z-10"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() =>
            setHeroIndex((heroIndex + 1) % heroSlides.length)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors z-10"
        >
          <ChevronRight size={20} />
        </button>
      </section>

      {/* ═══ Trust Badges ═══ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Truck size={24} />, title: "Free Shipping", desc: "On orders above ₹999" },
              { icon: <Shield size={24} />, title: "Secure Payment", desc: "100% safe checkout" },
              { icon: <Headphones size={24} />, title: "Online Support", desc: "Chat with us anytime" },
              { icon: "🧸", title: "Premium Quality", desc: "Organic & certified" },
            ].map((badge) => (
              <div key={badge.title} className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-xl bg-baby-pink flex items-center justify-center text-brand-primary shrink-0">
                  {typeof badge.icon === "string" ? (
                    <span className="text-xl">{badge.icon}</span>
                  ) : (
                    badge.icon
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">{badge.title}</h4>
                  <p className="text-xs text-gray-500">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Shop Best Sellers Categories ═══ */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-sm font-bold text-brand-primary tracking-wider uppercase">
              Shop Our Best Sellers
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Explore Categories
            </h2>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto text-sm">
              Handpicked collections designed with love for your little bundle of joy
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square bg-gray-100 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {topCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/shop?category=${cat.slug}`}
                  className="group relative overflow-hidden rounded-2xl aspect-square"
                >
                  <img
                    src={cat.image || ""}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <h3 className="text-white font-bold text-xs sm:text-sm leading-tight">
                      {cat.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═══ Bestselling Products ═══ */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-baby-pink/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-sm font-bold text-brand-primary tracking-wider uppercase">
                Trending Now 🔥
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Bestselling Products
              </h2>
            </div>
            <Link
              href="/shop?featured=true"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-brand-primary hover:text-brand-dark transition-colors"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
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
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {bestsellers.slice(0, 8).map((product) => (
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
                  images={(product.images || []) as string[]}
                  rating={parseFloat(product.rating || "4.5")}
                  reviewCount={product.reviewCount}
                  category={product.categoryName || undefined}
                  isBestseller={product.isBestseller || false}
                  isFeatured={product.isFeatured || false}
                />
              ))}
            </div>
          )}

          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/shop?featured=true"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-dark transition-colors"
            >
              View All Bestsellers <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Promotional Banners ═══ */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/shop?category=newborn-essentials" className="relative overflow-hidden rounded-2xl h-64 md:h-80 group block">
              <img
                src="https://images.pexels.com/photos/14023459/pexels-photo-14023459.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Newborn collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 to-transparent flex items-center">
                <div className="p-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Newborn<br />Welcome Kits
                  </h3>
                  <p className="text-white/80 text-sm mb-4">Everything for Day 1</p>
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-brand-primary font-bold rounded-full text-sm">
                    Shop Now <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/shop?category=muslin-collection" className="relative overflow-hidden rounded-2xl h-64 md:h-80 group block">
              <img
                src="https://images.pexels.com/photos/4964372/pexels-photo-4964372.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Muslin collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800/80 to-transparent flex items-center">
                <div className="p-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Muslin<br />Collection
                  </h3>
                  <p className="text-white/80 text-sm mb-4">Ultra-soft &amp; breathable</p>
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-purple-700 font-bold rounded-full text-sm">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ More Categories ═══ */}
      {moreCategories.length > 0 && (
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-sm font-bold text-brand-primary tracking-wider uppercase">
                Shop Our Top Collections
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                More Categories
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {moreCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/shop?category=${cat.slug}`}
                  className="group relative overflow-hidden rounded-2xl aspect-square"
                >
                  <img
                    src={cat.image || ""}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <h3 className="text-white font-bold text-xs sm:text-sm leading-tight">
                      {cat.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ Featured Products Grid ═══ */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-sm font-bold text-brand-primary tracking-wider uppercase">
                Hand-picked for You ❤️
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Featured Products
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-brand-primary hover:text-brand-dark transition-colors"
            >
              Shop All <ArrowRight size={16} />
            </Link>
          </div>

          {!loading && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {featured.slice(0, 8).map((product) => (
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
                  images={(product.images || []) as string[]}
                  rating={parseFloat(product.rating || "4.5")}
                  reviewCount={product.reviewCount}
                  category={product.categoryName || undefined}
                  isBestseller={product.isBestseller || false}
                  isFeatured={product.isFeatured || false}
                />
              ))}
            </div>
          )}

          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-dark transition-colors"
            >
              Shop All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Testimonials ═══ */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-baby-lavender/30 to-baby-pink/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-sm font-bold text-brand-primary tracking-wider uppercase">
              Happy Parents
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-bold text-gray-800">{t.author}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-brand-primary via-brand-dark to-purple-800 rounded-3xl p-8 lg:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-8 text-6xl">🧸</div>
              <div className="absolute bottom-4 right-8 text-6xl">👶</div>
              <div className="absolute top-1/2 left-1/4 text-4xl">⭐</div>
              <div className="absolute top-1/3 right-1/4 text-4xl">💕</div>
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 relative"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready to Shop the Best for Your Baby?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto relative">
              Join thousands of happy parents who trust Baby Cocoon for premium baby essentials
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-primary font-bold rounded-full text-lg hover:bg-gray-100 transition-colors shadow-xl relative"
            >
              Shop Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
