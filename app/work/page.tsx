export default function Work() {
  const projects = [
    {
      title: "ARTISAN STORE",
      desc: "Showcasing exquisite craftsmanship and timeless artistry.",
      year: "2023",
    },
    {
      title: "NEODAYS",
      desc: "Stunning compilation of interactive experiences.",
      year: "2023",
    },
    {
      title: "MILES DAVIS",
      desc: "Captivating visual journey capturing fleeting moments, emotions, and beauty.",
      year: "2023",
    },
    {
      title: "ALTITUDE",
      desc: "Compelling visual narratives that leave a lasting impact.",
      year: "2023",
    },
    {
      title: "COZY+CO",
      desc: "Elevating interiors with meticulously crafted furniture.",
      year: "2023",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-white text-black">
      {/* Heading */}
      <div className="px-8 md:px-16 pt-16 pb-10">
        <h1 className="text-[clamp(4rem,10vw,9rem)] font-['mono'] font-light tracking-tight">
          WORK
        </h1>
      </div>

      {/* Divider */}
      <div className="border-t border-black" />

      {/* List */}
      <div>
        {projects.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1.2fr_2fr_auto] font-['mono'] px-8 md:px-16 py-6 border-b border-black items-center gap-6"
          >
            {/* Left */}
            <h3 className="text-lg md:text-xl font-medium uppercase">
              {item.title}
            </h3>

            {/* Center */}
            <p className="text-sm md:text-base text-black/80">{item.desc}</p>

            {/* Right */}
            <span className="text-sm md:text-base">({item.year})</span>
          </div>
        ))}
      </div>
    </section>
  );
}
