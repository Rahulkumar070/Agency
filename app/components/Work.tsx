export default function Work() {
  return (
    <section className="px-6 sm:px-10 py-16 ">
      <h1 className="text-[clamp(3rem,7vw,10rem)] font-['med'] mb-10">Work</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/images/one.png"
            alt=""
            className="w-full h-full object-cover aspect-[16/10]"
          />
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src="/images/three.png"
            alt=""
            className="w-full h-full object-cover aspect-[16/10]"
          />
        </div>
      </div>
    </section>
  );
}
