export default function ContactPage() {
  return (
    <section className="w-full min-h-screen font-['mono'] bg-white text-black px-6 md:px-16 py-16">
      {/* TOP TITLE */}
      <h1 className="text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.95]">
        Contact me
      </h1>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">
        {/* LEFT INFO */}
        <div className="space-y-10 text-sm md:text-base text-black/80">
          <div>
            <p>Manhattan, New York</p>
            <p>2023</p>
          </div>

          <div>
            <p className="font-medium">Office hours</p>
            <p>Monday – Friday</p>
            <p>11 AM – 2 PM</p>
          </div>
        </div>

        {/* FORM */}
        <form className="space-y-10 w-full">
          {/* Name */}
          <div>
            <p className="text-sm mb-3">Name (required)</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="border-b border-black/40 outline-none py-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-b border-black/40 outline-none py-2"
              />
            </div>
          </div>

          {/* Service */}
          <div>
            <p className="text-sm mb-3">Service</p>
            <select className="w-full border-b border-black/40 outline-none py-2 bg-transparent">
              <option>Select a service</option>
              <option>Web Design</option>
              <option>Development</option>
              <option>Branding</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <p className="text-sm mb-3">Email (required)</p>
            <input
              type="email"
              className="w-full border-b border-black/40 outline-none py-2"
            />
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-3 text-sm text-black/70">
            <input type="checkbox" />
            Sign up for news and updates
          </label>

          {/* Description */}
          <div>
            <p className="text-sm mb-3">Project description</p>
            <textarea
              rows={3}
              className="w-full border-b border-black/40 outline-none resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="px-10 py-3 rounded-full bg-black text-white text-sm hover:opacity-80 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-28 flex flex-col lg:flex-row justify-between gap-10 items-start lg:items-center">
        <p className="text-2xl md:text-3xl font-semibold">
          hello.exovio@gmail.com
        </p>

        <p className="text-2xl md:text-3xl font-semibold">+91 8275058374</p>
      </div>

      {/* FOOTER */}
      <div className="mt-20 border-t border-black/20 pt-6 flex flex-col md:flex-row justify-between gap-6 text-sm text-black/70">
        <p>© 2023 Template by Prodilus Studio | Photos from pexels.com</p>

        <div className="flex gap-6">
          <a href="#">Say hello</a>
          <a href="#">Work with us</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </section>
  );
}
