"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCartStore, getCartSubtotal } from "@/store/cart";
import { withAssetBase } from "@/lib/asset-base";

export default function CartDrawer() {
  const items = useCartStore((s) => s.items);
  const isOpen = useCartStore((s) => s.isOpen);
  const closeCart = useCartStore((s) => s.closeCart);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const drawerRef = useRef<HTMLDivElement>(null);

  const sub = getCartSubtotal(items);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const shipping = sub >= 999 ? 0 : 99;
  const total = sub + shipping;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-brand-primary" />
            <h2 className="text-lg font-bold text-gray-900">
              Your Cart ({items.length})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress */}
        {items.length > 0 && (
          <div className="px-6 py-3 bg-baby-mint">
            {sub >= 999 ? (
              <p className="text-sm text-green-700 font-medium text-center">
                🎉 Yay! You&apos;ve unlocked FREE shipping!
              </p>
            ) : (
              <div>
                <p className="text-xs text-gray-600 text-center mb-1.5">
                  Add ₹{(999 - sub).toFixed(0)} more for FREE shipping
                </p>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand-primary to-brand-accent rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((sub / 999) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 rounded-full bg-baby-pink flex items-center justify-center mb-4">
                <ShoppingBag size={40} className="text-brand-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Your cart is empty
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Looks like you haven&apos;t added anything yet
              </p>
              <button
                onClick={closeCart}
                className="px-6 py-3 bg-brand-primary text-white font-medium rounded-xl hover:bg-brand-dark transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Link
                    href={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="w-20 h-20 rounded-lg overflow-hidden bg-white shrink-0"
                  >
                    <img
                      src={withAssetBase(item.image)}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/product/${item.slug}`}
                      onClick={closeCart}
                      className="text-sm font-medium text-gray-800 line-clamp-2 hover:text-brand-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-bold text-brand-primary">
                        ₹{item.price.toLocaleString("en-IN")}
                      </span>
                      {item.compareAtPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          ₹{item.compareAtPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1 bg-white rounded-lg border border-gray-200">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-1.5 hover:bg-gray-100 rounded-l-lg transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1.5 hover:bg-gray-100 rounded-r-lg transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">
                  ₹{sub.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className={shipping === 0 ? "text-green-600 font-medium" : "font-medium"}>
                  {shipping === 0 ? "FREE" : `₹${shipping}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold pt-2 border-t border-gray-200">
                <span>Total</span>
                <span className="text-brand-primary">
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full py-3.5 bg-gradient-to-r from-brand-primary to-brand-dark text-white text-center font-bold rounded-xl hover:shadow-lg transition-all text-sm"
            >
              Proceed to Checkout →
            </Link>
            <button
              onClick={closeCart}
              className="block w-full py-2.5 text-sm text-gray-500 hover:text-brand-primary text-center mt-2 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
