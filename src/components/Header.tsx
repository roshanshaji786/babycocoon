"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X, Search, Heart, Baby, ChevronDown } from "lucide-react";
import { useCartStore, getCartTotalItems } from "@/store/cart";

const categories = [
  { name: "Newborn Essentials", slug: "newborn-essentials" },
  { name: "Baby Bedding", slug: "baby-bedding" },
  { name: "Carry Beds", slug: "carry-beds" },
  { name: "Combo Sets", slug: "combo-sets" },
  { name: "Baby Cradles", slug: "baby-cradles" },
  { name: "Feeding Pillows", slug: "feeding-pillows" },
  { name: "Net Beds", slug: "net-beds" },
  { name: "Hooded Towels", slug: "hooded-towels" },
  { name: "Jablas & Clothing", slug: "jablas-clothing" },
  { name: "Muslin Collection", slug: "muslin-collection" },
  { name: "Storage Baskets", slug: "storage-baskets" },
  { name: "Swaddles & Wrappers", slug: "swaddles-wrappers" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catDropdownOpen, setCatDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = useCartStore((s) => s.items);
  const openCart = useCartStore((s) => s.openCart);
  const hydrate = useCartStore((s) => s.hydrate);
  const itemCount = getCartTotalItems(items);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-dark text-white text-center py-2 text-xs sm:text-sm font-medium tracking-wide">
        🎉 Free Shipping on orders above ₹999 | Use code <span className="font-bold">BABY20</span> for 20% OFF
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-baby-pink transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-dark flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Baby className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-dark bg-clip-text text-transparent leading-tight">
                  Baby Cocoon
                </h1>
                <p className="text-[10px] lg:text-xs text-gray-400 -mt-0.5 tracking-wider">
                  Comfort for Little Ones
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-primary hover:bg-baby-pink rounded-lg transition-all"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-primary hover:bg-baby-pink rounded-lg transition-all"
              >
                Shop All
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setCatDropdownOpen(true)}
                onMouseLeave={() => setCatDropdownOpen(false)}
              >
                <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-primary hover:bg-baby-pink rounded-lg transition-all flex items-center gap-1">
                  Categories <ChevronDown size={14} />
                </button>
                {catDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-scale-in z-50">
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/shop?category=${cat.slug}`}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-baby-pink hover:text-brand-primary transition-colors"
                        onClick={() => setCatDropdownOpen(false)}
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/shop?featured=true"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-primary hover:bg-baby-pink rounded-lg transition-all"
              >
                Bestsellers
              </Link>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/shop"
                className="p-2 rounded-lg hover:bg-baby-pink transition-colors text-gray-600 hover:text-brand-primary"
                aria-label="Search"
              >
                <Search size={20} />
              </Link>
              <button
                className="p-2 rounded-lg hover:bg-baby-pink transition-colors text-gray-600 hover:text-brand-primary hidden sm:block"
                aria-label="Wishlist"
              >
                <Heart size={20} />
              </button>
              <button
                onClick={openCart}
                className="relative p-2 rounded-lg hover:bg-baby-pink transition-colors text-gray-600 hover:text-brand-primary"
                aria-label="Cart"
              >
                <ShoppingCart size={22} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-primary text-white text-xs font-bold rounded-full flex items-center justify-center cart-badge">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in">
            <div className="px-4 py-3 space-y-1">
              <Link
                href="/"
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-baby-pink rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-baby-pink rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop All
              </Link>
              <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Categories
              </div>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/shop?category=${cat.slug}`}
                  className="block px-6 py-2.5 text-sm text-gray-600 hover:bg-baby-pink rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
