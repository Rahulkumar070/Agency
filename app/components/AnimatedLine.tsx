import { motion } from "framer-motion";
export default function AnimatedLine({
  text,
  startIndex = 0,
  className = "",
  as = "h1",
}: {
  text: string;
  startIndex?: number;
  className?: string;
  as?: "h1" | "p";
}) {
  const Tag = motion[as];

  return (
    <Tag className={`flex overflow-hidden leading-[1.2] ${className}`}>
      {text.split("").map((char, i) => (
        <span key={i} className="inline-flex overflow-hidden">
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "105%" },
              show: (i: number) => ({
                y: "0%",
                transition: {
                  duration: 0.75,
                  ease: [0.33, 1, 0.68, 1],
                  delay: i * 0.04,
                },
              }),
            }}
            initial="hidden"
            animate="show"
            custom={startIndex + i}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
