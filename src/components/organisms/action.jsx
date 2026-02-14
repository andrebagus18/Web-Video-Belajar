import newsletterBg from "../../assets/img/bannerNews.jpg";

function Action() {
  return (
    <div className="relative max-xs:w-[80%] xs:w-[90%] max-w-7xl mx-auto my-10 overflow-hidden shadow-lg text-white">
      {/* Background */}
      <img
        src={newsletterBg}
        alt="background"
        className="absolute w-full h-full object-cover top-0 left-0 brightness-[0.2] z-0"
      />

      {/* Overlay content */}
      <div className="relative z-10 p-10 md:p-16 flex flex-col items-center text-center">
        <p className="text-sm font-medium text-gray-300 tracking-wider mb-2">
          NEWSLETTER
        </p>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Mau Belajar Lebih Banyak?
        </h1>
        <p className="text-sm md:text-base max-w-md mb-6">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik hariesok.id
        </p>

        {/* Input + Button */}
        <div className="max-xs:w-[100%] xs:w-full xs:bg-white xs:max-w-md xs:rounded-lg flex max-xs:flex-col max-xs:items-center max-xs:justify-between overflow-hidden">
          <input
            type="email"
            placeholder="Masukkan Emailmu"
            className="flex-1 max-xs:w-full max-xs:h-10 px-4 py-3 max-xs:mb-2.5 max-xs:bg-white max-xs:rounded-lg text-gray-900  font-poppins text-sm max-xs:text-center focus:outline-none"
          />
          <button className="max-xs:w-full max-xs:h-10 rounded-lg m-1.5 bg-yellow-400 hover:bg-yellow-500 text-white font-medium text-sm px-5">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Action;
