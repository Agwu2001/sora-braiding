export default function Home() {
  const services = [
    "Blowouts",
    "Body waxing",
    "Box Braids",
    "Braids",
    "Curly hair",
    "Dreadlocks",
    "Hair coloring",
    "Hair extensions",
    "Hair straightening",
    "Haircut",
    "Hairstyling",
    "Braid Styles",
    "Hair Extension",
    "Knotless Braids",
  ];

  const amenities = [
    "Onsite services",
    "Good for kids",
    "Wheelchair accessible parking lot",
    "Wheelchair accessible seating",
    "Restroom",
    "Free Wi-Fi",
    "Appointment required",
    "Appointments recommended",
    "Accepts walk-ins",
    "Credit cards",
    "Debit cards",
    "NFC mobile payments",
    "American Express, MasterCard, VISA",
    "Free parking lot",
  ];

  return (
    <main className="min-h-screen bg-[#f2f2ef] text-[#1f1f1f]">
      {/* NAVBAR */}
      <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e4dccd] bg-[#f2f2ef] px-6 py-4 text-[#1f1f1f] shadow-sm">
        <a href="/" className="text-xl font-bold text-[#b08d57] md:text-2xl">
          Sora Braiding
        </a>

        <div className="flex flex-wrap gap-4 text-sm font-medium md:text-base">
          <a href="/" className="transition hover:text-[#b08d57]">
            Home
          </a>
          <a href="#services" className="transition hover:text-[#b08d57]">
            Services
          </a>
          <a href="#about" className="transition hover:text-[#b08d57]">
            About
          </a>
          <a href="#contact" className="transition hover:text-[#b08d57]">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-[70vh] overflow-hidden md:h-[85vh]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/Soravidmain.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-zinc-800/55 to-[#b08d57]/30"></div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white backdrop-blur-sm">
            Houston Braiding Studio
          </p>

          <h1 className="mb-4 text-4xl font-extrabold text-white drop-shadow-lg md:text-6xl">
            Sora Braiding
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-white/95 md:text-xl">
            Beauty salon focused on elaborate styles like braids and cornrows.
            Clean work, bold looks, and a finish that stands out.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-block rounded-full bg-[#b08d57] px-6 py-3 text-lg font-semibold text-white transition hover:bg-[#9a7744]"
            >
              Book Appointment
            </a>

            <a
              href="#services"
              className="inline-block rounded-full bg-white px-6 py-3 text-lg font-semibold text-[#b08d57] transition hover:bg-[#f7f3eb]"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT / INTRO SECTION */}
      <section
        id="about"
        className="relative mx-auto max-w-6xl overflow-hidden px-6 py-16"
      >
        <img
          src="/hero.jpg"
          alt="Sora watermark"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.07]"
        />

        <div className="relative z-10">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#b08d57] md:text-4xl">
            Elegant Braids and Professional Care
          </h2>

          <p className="mx-auto max-w-3xl text-center text-lg leading-8 text-zinc-700">
            At Sora Braiding, we focus on clean parts, neat finishes, and styles
            that make every client feel confident. From everyday protective
            styles to standout braided looks, the goal is simple: quality work,
            comfort, and a polished result every time.
          </p>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#e4dccd] bg-[#ede7dc] p-6 text-center shadow-sm">
            <h3 className="mb-3 text-center text-xl font-semibold text-[#b08d57]">
              Professional Braiding
            </h3>
            <p className="text-zinc-700">
              Clean parts, neat finishes, and styles done with care and close
              attention to detail.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e4dccd] bg-white p-6 text-center shadow-sm">
            <h3 className="mb-3 text-center text-xl font-semibold text-[#b08d57]">
              Elegant Styling
            </h3>
            <p className="text-zinc-700">
              Elaborate braid styles and polished looks designed to match your
              beauty and confidence.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e4dccd] bg-[#ede7dc] p-6 text-center shadow-sm">
            <h3 className="mb-3 text-center text-xl font-semibold text-[#b08d57]">
              Houston Based
            </h3>
            <p className="text-zinc-700">
              A local braiding studio serving clients with style, consistency,
              and professional care.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#b08d57] md:text-4xl">
          Services
        </h2>

        <div className="rounded-3xl border border-[#e4dccd] bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-[#eee5d7] bg-[#faf7f1] px-5 py-4 text-center text-lg font-medium text-zinc-800"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS INFO */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#b08d57] md:text-4xl">
          Business Information
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#e4dccd] bg-[#ede7dc] p-6 shadow-sm">
            <h3 className="mb-4 text-center text-2xl font-semibold text-[#b08d57]">
              Details
            </h3>
            <p className="text-center text-lg leading-8 text-zinc-700">
              Beauty salon focusing on elaborate styles like braids and
              cornrows.
            </p>
          </div>

          <div className="rounded-3xl border border-[#e4dccd] bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-center text-2xl font-semibold text-[#b08d57]">
              Contact & Booking
            </h3>
            <div className="space-y-3 text-center text-lg text-zinc-700">
              <p>Onsite services available</p>
              <p>Appointment required</p>
              <p>Appointments recommended</p>
              <p>Accepts walk-ins</p>
              <p>Good for kids</p>
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#b08d57] md:text-4xl">
          Amenities & Service Options
        </h2>

        <div className="rounded-3xl border border-[#e4dccd] bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {amenities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#eee5d7] bg-[#faf7f1] px-5 py-4 text-center text-lg text-zinc-800"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-[#e4dccd] bg-[#1f1f1f] px-6 py-10 text-center text-white shadow-sm">
          <h2 className="mb-4 text-3xl font-bold text-[#d4b67a] md:text-4xl">
            Book With Sora Braiding
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-zinc-200">
            Beauty salon focusing on elaborate styles like braids and cornrows,
            with onsite services, walk-ins accepted, and appointments
            recommended.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="rounded-full bg-[#b08d57] px-6 py-3 text-lg font-semibold text-white transition hover:bg-[#9a7744]"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-lg font-semibold text-white transition hover:bg-white/20"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
