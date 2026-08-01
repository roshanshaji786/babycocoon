import { Suspense } from "react";
import ShopClient from "@/components/ShopClient";

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-warm-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-10 border-4 border-brand-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-500 text-sm">Loading products...</p>
          </div>
        </div>
      }
    >
      <ShopClient />
    </Suspense>
  );
}
