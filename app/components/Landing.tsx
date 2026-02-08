"use client";

import { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import Lenis from "lenis";

/* ---------------- TEXT ANIMATION ---------------- */

const letterVariant: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: i * 0.05,
    },
  }),
};

/* ---------------- PAGE ---------------- */

export default function Page(): JSX.Element {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
    });

    const raf = (time: number): void => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative">
      <Hero />
    </main>
  );
}

/* ---------------- HERO SECTION ---------------- */

interface AnimatedLineProps {
  text: string;
  startIndex?: number;
}

function AnimatedLine({
  text,
  startIndex = 0,
}: AnimatedLineProps): JSX.Element {
  return (
    <motion.h1 className="flex overflow-hidden">
      {text.split("").map((char, i) => (
        <span key={i} className="inline-flex overflow-hidden">
          <motion.span
            variants={letterVariant}
            initial="hidden"
            animate="show"
            custom={startIndex + i}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}

function Hero(): JSX.Element {
  return (
    <section className="h-screen bg-white text-[#212121] flex items-center">
      <div className="lg:px-10 p-5 w-full">
        <div className="lg:text-[6vw] text-[clamp(1rem,9vw,10vw)] font-['Boldonse'] font-bold 2xl:leading-[5.6rem] lg:leading-[8rem]">
          <AnimatedLine text="WE CREATE" startIndex={0} />
          <AnimatedLine text="PRESENTATIONS" startIndex={2} />
          <AnimatedLine text="THAT OPEN EYES" startIndex={4} />
        </div>

        <div className="mt-10 lg:flex items-center justify-between font-['Source'] font-bold">
          <div>
            <p>Presentation and storytelling agency</p>
            <p>For innovation teams and global brands</p>
          </div>

          <a
            href="/contact"
            className="flex w-fit mt-5 items-center gap-2 bg-black text-white px-6 py-3 rounded-full"
          >
            Start the project <FaArrowRightLong />
          </a>
        </div>
      </div>
    </section>
  );
}
