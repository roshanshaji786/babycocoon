import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Baby Cocoon | Premium Baby Essentials - Comfort for Little Ones",
  description:
    "Shop premium baby products at Baby Cocoon. Carry beds, swaddles, muslin collections, feeding pillows, hooded towels & more. India's trusted baby brand with free shipping.",
  keywords:
    "baby products, newborn essentials, baby bedding, carry beds, swaddles, muslin, baby cocoon india",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-warm-50 text-gray-900 antialiased"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
