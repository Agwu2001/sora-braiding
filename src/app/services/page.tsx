export default function Services() {
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
          <h1 className="mb-10 text-4xl font-bold text-[#b08d57]">
            Our Services
          </h1>
  
          <ul className="space-y-4 text-lg text-zinc-700">
            <li>Box Braids</li>
            <li>Knotless Braids</li>
            <li>Cornrows</li>
            <li>Dreadlocks</li>
            <li>Hair Extensions</li>
            <li>Hair Styling</li>
            <li>Hair Coloring</li>
            <li>Blowouts</li>
            <li>Haircut</li>
          </ul>
        </div>
      </main>
    );
  }