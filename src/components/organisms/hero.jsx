function Hero() {
  return (
    <div className="w-full flex flex-col items-center py-7">
      <div className="hero max-xs:w-[78%] xs:w-[80%] max-w-[1200px] min-h-[400px] mx-auto bg-cover bg-center flex flex-col items-center justify-center rounded-2xl relative overflow-hidden p-4">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 flex flex-col items-center text-center px-4 overflow-hidden">
          <h2 className="font-bold text-xl xs:text-2xl md:text-4xl text-white leading-tight">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h2>
          <p className="mt-4 text-sm xs:text-base text-gray-200 max-w-[700px]">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
          <button className="mt-8 xs:w-[370px] max-xs:w-[270px] py-2 bg-green-500 rounded-lg font-normal md:font-medium text-white text-[12px] hover:bg-green-600 hover:border-lime-300 hover:border-2 border-2 border-green-500">
            Temukan Video Course untuk Dipelajari!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
