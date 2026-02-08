"use client";

import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full font-['mono'] bg-white h-screen text-black px-6 md:px-12 lg:px-20 py-16 relative">
      {/* TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
        {/* BRAND + ADDRESS */}
        <div className="space-y-6 ">
          <h2 className="text-xl font-semibold tracking-wide">YOUR AGENCY</h2>

          <div className="text-sm leading-relaxed text-neutral-600">
            <p>Suite 2</p>
            <p>9 Marsh Street</p>
            <p>Your City, 000000</p>
            <p>Your Country</p>
          </div>
        </div>

        {/* LINKS + EMAILS */}
        <div className="space-y-10">
          <div className="space-y-2 text-sm">
            <a href="#" className="block hover:underline">
              Twitter / X
            </a>
            <a href="#" className="block hover:underline">
              Instagram
            </a>
            <a href="#" className="block hover:underline">
              LinkedIn
            </a>
          </div>

          <div className="space-y-4 text-sm text-neutral-700">
            <div>
              <p className="font-medium">General enquiries</p>
              <p>hello@youragency.co</p>
            </div>

            <div>
              <p className="font-medium">New business</p>
              <p>business@youragency.co</p>
            </div>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-medium leading-tight">
            Subscribe to <br /> our newsletter
          </h3>

          <div className="relative max-w-md">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-full bg-neutral-100 px-6 py-4 pr-14 text-sm outline-none focus:ring-2 focus:ring-black"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-neutral-600">
        <p>©2026 YOUR AGENCY. All rights reserved.</p>
        <p>Built with ❤️ by Your Agency</p>
      </div>

      {/* SCROLL TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
