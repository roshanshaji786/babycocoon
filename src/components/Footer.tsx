import Link from "next/link";
import { Baby, Phone, Mail, MapPin, Globe, MessageCircle, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Newsletter */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-dark">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            Join the Baby Cocoon Family 💕
          </h3>
          <p className="text-white/80 mb-6 text-sm">
            Subscribe for exclusive deals, new arrivals & parenting tips
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white text-sm"
            />
            <button className="px-6 py-3 bg-white text-brand-primary font-bold rounded-xl hover:bg-gray-100 transition-colors text-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-dark flex items-center justify-center">
                <Baby className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Baby Cocoon</h4>
                <p className="text-xs text-gray-400">Comfort for Little Ones</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              India&apos;s trusted destination for premium baby essentials. We craft
              comfort and joy for your little ones with 100% safe, organic products.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Globe size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <MessageCircle size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Share2 size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { name: "Shop All", href: "/shop" },
                { name: "Bestsellers", href: "/shop?featured=true" },
                { name: "New Arrivals", href: "/shop" },
                { name: "Combo Sets", href: "/shop?category=combo-sets" },
                { name: "Gift Sets", href: "/shop?category=newborn-essentials" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-brand-light transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2.5">
              {[
                { name: "Newborn Essentials", slug: "newborn-essentials" },
                { name: "Baby Bedding", slug: "baby-bedding" },
                { name: "Swaddles & Wrappers", slug: "swaddles-wrappers" },
                { name: "Muslin Collection", slug: "muslin-collection" },
                { name: "Hooded Towels", slug: "hooded-towels" },
              ].map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/shop?category=${cat.slug}`} className="text-sm text-gray-400 hover:text-brand-light transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-light mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-light shrink-0" />
                <span className="text-sm text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-light shrink-0" />
                <span className="text-sm text-gray-400">hello@babycocoon.co.in</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-gray-800/50 rounded-lg">
              <p className="text-xs text-gray-400">
                <span className="font-semibold text-white">Business Hours:</span><br />
                Mon-Sat: 9:00 AM - 7:00 PM IST
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-gray-800">
          {[
            { icon: "🚚", title: "Free Shipping", desc: "On orders ₹999+" },
            { icon: "🔒", title: "Secure Payment", desc: "100% Protected" },
            { icon: "↩️", title: "Easy Returns", desc: "7-Day Policy" },
            { icon: "💬", title: "24/7 Support", desc: "Always Here" },
          ].map((badge) => (
            <div key={badge.title} className="text-center">
              <span className="text-2xl">{badge.icon}</span>
              <h5 className="text-sm font-semibold text-white mt-1">{badge.title}</h5>
              <p className="text-xs text-gray-500">{badge.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2025 Baby Cocoon. All rights reserved. | babycocoon.co.in
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
