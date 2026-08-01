"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCartStore, getCartSubtotal } from "@/store/cart";
import { withAssetBase } from "@/lib/asset-base";
import { ChevronRight, Lock, Truck, Check, ShoppingBag } from "lucide-react";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
  "West Bengal", "Delhi",
];

export default function CheckoutClient() {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const hydrate = useCartStore((s) => s.hydrate);
  const hydrated = useCartStore((s) => s.hydrated);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState<number | null>(null);

  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    shippingAddress: "",
    shippingCity: "",
    shippingState: "",
    shippingPincode: "",
    paymentMethod: "cod",
  });

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  const sub = getCartSubtotal(items);
  const shipping = sub >= 999 ? 0 : 99;
  const total = sub + shipping;

  const updateForm = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          items: items.map((item) => ({
            productId: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
          })),
          subtotal: sub,
          shipping,
          total,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setOrderId(data.orderId);
        setStep(3);
        clearCart();
      }
    } catch (error) {
      console.error("Order failed:", error);
    }
    setLoading(false);
  };

  const isFormValid =
    form.customerName &&
    form.customerEmail &&
    form.customerPhone &&
    form.shippingAddress &&
    form.shippingCity &&
    form.shippingState &&
    form.shippingPincode;

  // Wait for hydration before showing empty state
  if (!hydrated) {
    return (
      <div className="min-h-screen bg-warm-50 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (items.length === 0 && !orderId) {
    return (
      <div className="min-h-screen bg-warm-50 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-24 h-24 rounded-full bg-baby-pink flex items-center justify-center mx-auto mb-4">
            <ShoppingBag size={40} className="text-brand-primary" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Add some products to proceed to checkout
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  // Order Confirmation
  if (step === 3 && orderId) {
    return (
      <div className="min-h-screen bg-warm-50 flex items-center justify-center">
        <div className="max-w-md text-center px-4 animate-scale-in">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-green-600" />
          </div>
          <h2
            className="text-3xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Order Confirmed! 🎉
          </h2>
          <p className="text-gray-600 mb-2">
            Thank you for shopping with Baby Cocoon
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Order ID: <span className="font-bold text-gray-700">#{orderId}</span>
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 text-left">
            <h3 className="text-sm font-bold text-gray-800 mb-3">
              What happens next?
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <p className="text-sm text-gray-600">
                  You&apos;ll receive an order confirmation email shortly
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <p className="text-sm text-gray-600">
                  Your order will be dispatched within 24-48 hours
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <p className="text-sm text-gray-600">
                  Estimated delivery: 4-7 business days
                </p>
              </div>
            </div>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <nav className="flex items-center gap-1.5 text-sm text-gray-400">
            <Link href="/" className="hover:text-brand-primary">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/shop" className="hover:text-brand-primary">
              Shop
            </Link>
            <ChevronRight size={14} />
            <span className="text-gray-700 font-medium">Checkout</span>
          </nav>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4">
            {["Shipping", "Payment"].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step > i + 1
                      ? "bg-green-500 text-white"
                      : step === i + 1
                      ? "bg-brand-primary text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step > i + 1 ? <Check size={16} /> : i + 1}
                </div>
                <span
                  className={`text-sm font-medium ${
                    step >= i + 1 ? "text-gray-800" : "text-gray-400"
                  }`}
                >
                  {s}
                </span>
                {i < 1 && (
                  <div className="w-16 h-0.5 bg-gray-200 mx-2">
                    <div
                      className="h-full bg-brand-primary transition-all"
                      style={{ width: step > i + 1 ? "100%" : "0%" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 animate-fade-in">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Shipping Information
                </h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={form.customerName}
                        onChange={(e) =>
                          updateForm("customerName", e.target.value)
                        }
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={form.customerPhone}
                        onChange={(e) =>
                          updateForm("customerPhone", e.target.value)
                        }
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={form.customerEmail}
                      onChange={(e) =>
                        updateForm("customerEmail", e.target.value)
                      }
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Shipping Address *
                    </label>
                    <textarea
                      value={form.shippingAddress}
                      onChange={(e) =>
                        updateForm("shippingAddress", e.target.value)
                      }
                      placeholder="House/Flat No., Street, Landmark"
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm resize-none"
                    />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        City *
                      </label>
                      <input
                        type="text"
                        value={form.shippingCity}
                        onChange={(e) =>
                          updateForm("shippingCity", e.target.value)
                        }
                        placeholder="City"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        State *
                      </label>
                      <select
                        value={form.shippingState}
                        onChange={(e) =>
                          updateForm("shippingState", e.target.value)
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm bg-white"
                      >
                        <option value="">Select</option>
                        {indianStates.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        value={form.shippingPincode}
                        onChange={(e) =>
                          updateForm("shippingPincode", e.target.value)
                        }
                        placeholder="6 digit"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => isFormValid && setStep(2)}
                  disabled={!isFormValid}
                  className={`mt-6 w-full py-3.5 font-bold rounded-xl transition-all text-sm ${
                    isFormValid
                      ? "bg-brand-primary text-white hover:bg-brand-dark"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Continue to Payment →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 animate-fade-in">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Payment Method
                </h2>

                {/* Shipping Summary */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                    Shipping to
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    {form.customerName}
                  </p>
                  <p className="text-sm text-gray-600">
                    {form.shippingAddress}, {form.shippingCity},{" "}
                    {form.shippingState} - {form.shippingPincode}
                  </p>
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs text-brand-primary font-medium mt-2 hover:underline"
                  >
                    Edit Address
                  </button>
                </div>

                <div className="space-y-3">
                  <label
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      form.paymentMethod === "cod"
                        ? "border-brand-primary bg-brand-primary/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={form.paymentMethod === "cod"}
                      onChange={() => updateForm("paymentMethod", "cod")}
                      className="w-5 h-5 text-brand-primary"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        💵 Cash on Delivery
                      </p>
                      <p className="text-xs text-gray-500">
                        Pay when your order arrives
                      </p>
                    </div>
                  </label>
                  <label
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      form.paymentMethod === "upi"
                        ? "border-brand-primary bg-brand-primary/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={form.paymentMethod === "upi"}
                      onChange={() => updateForm("paymentMethod", "upi")}
                      className="w-5 h-5 text-brand-primary"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        📱 UPI Payment
                      </p>
                      <p className="text-xs text-gray-500">
                        Pay via Google Pay, PhonePe, Paytm
                      </p>
                    </div>
                  </label>
                  <label
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      form.paymentMethod === "card"
                        ? "border-brand-primary bg-brand-primary/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={form.paymentMethod === "card"}
                      onChange={() => updateForm("paymentMethod", "card")}
                      className="w-5 h-5 text-brand-primary"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        💳 Credit/Debit Card
                      </p>
                      <p className="text-xs text-gray-500">
                        Visa, Mastercard, Rupay
                      </p>
                    </div>
                  </label>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3.5 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors text-sm"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="flex-1 py-3.5 bg-gradient-to-r from-brand-primary to-brand-dark text-white font-bold rounded-xl hover:shadow-xl transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      <>
                        <Lock size={16} />
                        Place Order — ₹{total.toLocaleString("en-IN")}
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Order Summary
              </h3>
              <div className="space-y-3 max-h-[300px] overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-50 shrink-0">
                      <img
                        src={withAssetBase(item.image)}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-700 line-clamp-2">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Qty: {item.quantity}
                      </p>
                      <p className="text-sm font-bold text-gray-800">
                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium">
                    ₹{sub.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>
                  <span
                    className={
                      shipping === 0
                        ? "text-green-600 font-medium"
                        : "font-medium"
                    }
                  >
                    {shipping === 0 ? "FREE" : `₹${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold pt-2 border-t border-gray-100">
                  <span>Total</span>
                  <span className="text-brand-primary">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400">
                <Lock size={12} />
                <span>Secure checkout powered by Baby Cocoon</span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs text-green-600">
                <Truck size={12} />
                <span>
                  {shipping === 0
                    ? "Free shipping on this order!"
                    : `Add ₹${(999 - sub).toFixed(0)} more for free shipping`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
