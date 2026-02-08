export default function Services() {
  const services = [
    {
      id: "01",
      title: "Website Design",
      desc: "We design modern, conversion-focused websites that balance strong visuals with clear structure. Every layout is crafted to feel premium, intuitive, and performance-driven across all devices.",
    },
    {
      id: "02",
      title: "Brand Identity",
      desc: "From logos to complete visual systems, we help brands find their voice. Our identity work is minimal, scalable, and designed to stay timeless in a fast-moving digital world.",
    },
    {
      id: "03",
      title: "Ecommerce Projects",
      desc: "We build high-performing ecommerce experiences that convert visitors into customers. Clean UX, fast performance, and scalable architecture are at the core of every store we launch.",
    },
    {
      id: "04",
      title: "Customized Solutions",
      desc: "No two projects are the same. We develop tailored digital solutions that align perfectly with your business goals, workflows, and long-term growth plans.",
    },
  ];

  return (
    <section className="w-full min-h-screen font-['mono'] bg-white text-black px-6 md:px-16 py-24">
      {/* TOP */}
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block mb-6 px-4 py-1 border border-black/30 rounded-full text-xs tracking-wide">
          CAPABILITIES
        </span>

        <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-tight">
          SERVICES <br /> WE OFFER
        </h2>

        <p className="mt-6 text-sm md:text-base text-black/70">
          We are a creative digital agency focused on building meaningful
          digital experiences. From design to development, every project is
          crafted with precision, strategy, and long-term impact in mind.
        </p>
      </div>

      {/* GRID */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
        {services.map((service) => (
          <div key={service.id} className="relative">
            {/* Number */}
            <span className="absolute -top-8 left-0 text-xs text-black/40">
              {service.id}
            </span>

            {/* Divider */}
            <div className="h-px w-full bg-black/20 mb-8" />

            {/* Content */}
            <h3 className="text-xl md:text-2xl font-semibold uppercase">
              {service.title}
            </h3>

            <p className="mt-4 max-w-md text-sm md:text-base text-black/70">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
