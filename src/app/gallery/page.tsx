export default function Gallery() {
    return (
      <main className="min-h-screen bg-[#f2f2ef] px-6 py-16 text-center">
        <h1 className="mb-10 text-4xl font-bold text-[#b08d57]">
          Our Work
        </h1>
  
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <img src="/hero.jpg" alt="style1" className="rounded-xl shadow-md" />
          <img src="/hero1.jpg" alt="style2" className="rounded-xl shadow-md" />
          <img src="/hero2.jpg" alt="style3" className="rounded-xl shadow-md" />
          <img src="/hero3.jpg" alt="style4" className="rounded-xl shadow-md" />
        </div>
      </main>
    );
  }