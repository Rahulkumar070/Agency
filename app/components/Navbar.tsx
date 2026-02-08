"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "work", href: "/work" },
  { label: "services", href: "/services" },
  { label: "about", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-['Source'] text-white">
      {/* Main Bar */}
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl bg-black p-2 rounded-full font-semibold"
        >
          Exovio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden bg-black  p-3  rounded-full md:flex gap-10 items-center">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;

            return (
              <motion.div key={label} whileHover={{ y: -2 }}>
                <Link href={href} className="relative group">
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[1px] bg-white transition-all ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </motion.div>
            );
          })}

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/contact"
              className="bg-[#FF7408] px-4 py-2 rounded-full border border-white/20"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-black" />
          <span className="w-6 h-[2px] bg-black" />
          <span className="w-6 h-[2px] bg-black" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl px-6 py-8"
          >
            <div className="flex flex-col gap-6 text-lg">
              {navLinks.map(({ label, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`${
                      pathname === href ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="bg-white text-black px-4 py-2 rounded-full w-fit"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
