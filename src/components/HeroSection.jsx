function HeroSection() {
  return (
    <section className="container mx-auto px-4 capitalize relative top-18 md:top-4 h-[780px] grid grid-cols-1 gap-6 md:grid-cols-2 md:justify-center md:gap-2 md:items-center md:px-6">
      {/* Main Content */}
      <div className="w-full p-4 mb-4 md:mb-0">
        <h1 className="text-4xl font-extrabold text-green-400 sm:text-5xl md:text-6xl mb-6">
          it's never too late to try something new
        </h1>
        <p className="font-light text-gray-500 md:text-lg mb-8">
          with PieTV+, you can track/search your favourite TV shows and watch
          thrilling movies, so you never lose track of your Tv shows again 🍿
        </p>
        <div className="border border-amber-300 p-2 w-26 rounded-3xl mx-auto hover:bg-amber-500 transition-colors duration-300">
          <button className="cursor-pointer hover:text-emerald-900 rounded-xl font-medium text-center">
            search now
          </button>
        </div>
      </div>

      {/* Grid Aside - Centered on mobile, right-aligned on desktop */}
      <aside className="w-full max-w-[400px] max-h-[400px] mx-auto mb-4 md:max-w-none md:w-auto md:mx-0 md:justify-self-center">
        <div className="grid grid-cols-2 gap-0 w-full aspect-square max-w-[400px] md:w-[400px]">
          <div className="bg-blue-700 rounded-tl-2xl relative flex items-end p-4 hover:opacity-100 opacity-85 hover:scale-[1.02] transition-all duration-300">
            <p className="text-white font-semibold text-shadow">Explore</p>
          </div>
          <div className="bg-orange-500 relative flex items-end p-4 hover:opacity-100 opacity-85 hover:scale-[1.02] transition-all duration-300">
            <p className="text-white font-semibold text-shadow">Movies</p>
          </div>
          <div className="bg-pink-300 relative flex items-end p-4 hover:opacity-100 opacity-85 hover:scale-[1.02] transition-all duration-300">
            <p className="text-white font-semibold text-shadow">About</p>
          </div>
          <div className="bg-purple-500 rounded-br-2xl relative flex items-end p-4 hover:opacity-100 opacity-85 hover:scale-[1.02] transition-all duration-300">
            <p className="text-white font-semibold text-shadow">Help</p>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default HeroSection;
