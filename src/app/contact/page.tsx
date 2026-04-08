export default function Contact() {
    return (
      <main
        className="relative min-h-screen bg-[#f2f2ef] px-6 py-16 text-center"
        style={{
          backgroundImage: "url('/hero1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
  
        <div className="relative z-10">
          <h1 className="mb-8 text-4xl font-bold text-[#b08d57]">
            Contact Us
          </h1>
  
          <p className="mb-4 text-lg text-zinc-700">
            📍 Houston, Texas
          </p>
  
          <p className="mb-4 text-lg text-zinc-700">
            📞 +1 832-299-3742
          </p>
  
          <p className="text-lg text-zinc-700">
            Walk-ins welcome. Appointments recommended.
          </p>
        </div>
      </main>
    );
  }