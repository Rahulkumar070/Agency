"use client";

import { MdArrowOutward } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedLine from "../components/AnimatedLine";
import { PiPaintBrushThin } from "react-icons/pi";

const paragraphLines = [
  "We exist only for the brands who speak",
  "louder, stand taller, and never apologize",
  "for taking up space",
];

export default function AboutExomio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      ref={ref}
      className=" bg-white text-black border-t-1 border-[#BFBFBF]"
    >
      <div className="lg:flex border-b-1 border-[#BFBFBF]">
        {/* LEFT */}
        <div className="border-r-1 border-[#BFBFBF] p-10 font-['Source']">
          <AnimatedLine
            text="ABOUT EXOMIO"
            startIndex={0}
            className="text-[#FF7409]"
          />

          <AnimatedLine
            text="$128K +"
            startIndex={12}
            className="text-5xl mt-5"
          />

          <AnimatedLine
            text="Capital have been raised after collaboration"
            startIndex={20}
            as="p"
            className="mt-4 text-[10px]"
          />
        </div>

        {/* RIGHT */}
        <div className="lg:pl-50 p-10">
          <div className="font-['med'] -mt-14 lg:mt-0 font-medium text-[clamp(1.5rem,2vw,3.5rem)] leading-tight rgba(255,255,255,0.85))">
            {paragraphLines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={isInView ? { y: "0%" } : {}}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 1, 0.5, 1],
                    delay: i * 0.12,
                  }}
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </div>

          <motion.a
            href=""
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            className="mt-10 inline-flex items-center gap-4
                       rounded-full bg-black px-4 py-3
                       font-['Source'] text-white"
          >
            More about us
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1F1F60]">
              <MdArrowOutward />
            </span>
          </motion.a>
        </div>
      </div>
      <div className="p-6 sm:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* CARD */}
          <div className="w-full rounded-2xl border border-[#BFBFBF]">
            <div className="p-10 text-5xl">
              <PiPaintBrushThin className="bg-black text-white p-2 rounded-full" />
            </div>
            <div className="px-10 pb-10 font-['med']">
              <h1>YOUNG PAINT</h1>
              <p className="mt-5">
                A design that ditch the cookie-cutter oproach. Vitae sapien
                tristique habitasse etiam pharetra at sed libero ante a.
              </p>
            </div>
          </div>

          {/* CARD */}
          <div className="w-full rounded-2xl border border-[#BFBFBF]">
            <div className="p-10 text-5xl">
              <PiPaintBrushThin className="bg-black text-white p-2 rounded-full" />
            </div>
            <div className="px-10 pb-10 font-['med']">
              <h1>YOUNG PAINT</h1>
              <p className="mt-5">
                A design that ditch the cookie-cutter oproach. Vitae sapien
                tristique habitasse etiam pharetra at sed libero ante a.
              </p>
            </div>
          </div>

          {/* CARD */}
          <div className="w-full rounded-2xl border border-[#BFBFBF]">
            <div className="p-10 text-5xl">
              <PiPaintBrushThin className="bg-black text-white p-2 rounded-full" />
            </div>
            <div className="px-10 pb-10 font-['med']">
              <h1>YOUNG PAINT</h1>
              <p className="mt-5">
                A design that ditch the cookie-cutter oproach. Vitae sapien
                tristique habitasse etiam pharetra at sed libero ante a.
              </p>
            </div>
          </div>

          {/* CARD */}
          <div className="w-full rounded-2xl border border-[#BFBFBF]">
            <div className="p-10 text-5xl">
              <PiPaintBrushThin className="bg-black text-white p-2 rounded-full" />
            </div>
            <div className="px-10 pb-10 font-['med']">
              <h1>YOUNG PAINT</h1>
              <p className="mt-5">
                A design that ditch the cookie-cutter oproach. Vitae sapien
                tristique habitasse etiam pharetra at sed libero ante a.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
