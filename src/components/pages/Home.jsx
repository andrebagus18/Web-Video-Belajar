import MainLayout from "../layout/mainLayout";
import ratingImg from "../../assets/avatar/Rating.png";
import newsletterBg from "../../assets/img/bannerNews.jpg";

import content1 from "../../assets/img/bg1.jpg";
import content2 from "../../assets/img/bg2.jpg";
import content3 from "../../assets/img/bg3.jpg";
import content4 from "../../assets/img/bg4.jpg";
import content5 from "../../assets/img/bg5.jpg";
import content6 from "../../assets/img/bg6.jpg";
import content7 from "../../assets/img/bg7.jpg";
import content8 from "../../assets/img/bg8.jpg";
import content9 from "../../assets/img/bg9.jpg";

import profile1 from "../../assets/avatar/icon1.png";
import profile2 from "../../assets/avatar/icon2.png";
import profile3 from "../../assets/avatar/icon3.png";
import profile4 from "../../assets/avatar/icon4.png";
import profile5 from "../../assets/avatar/icon5.png";
import profile6 from "../../assets/avatar/icon6.png";
import profile7 from "../../assets/avatar/icon7.png";
import profile8 from "../../assets/avatar/icon8.png";
import profile9 from "../../assets/avatar/icon9.png";

const contents = [
  { id: 1, img: content1, profile: profile1 },
  { id: 2, img: content2, profile: profile2 },
  { id: 3, img: content3, profile: profile3 },
  { id: 4, img: content4, profile: profile4 },
  { id: 5, img: content5, profile: profile5 },
  { id: 6, img: content6, profile: profile6 },
  { id: 7, img: content7, profile: profile7 },
  { id: 8, img: content8, profile: profile8 },
  { id: 9, img: content9, profile: profile9 },
];

function Home() {
  return (
    <MainLayout>
      {/* Section Dashboard */}
      <div className="dashboard w-full flex flex-col items-center py-7">
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

      {/* Header Navbar */}
      <div className="mt-5 px-5 xl:mx-24 md:mx-16 mx-10">
        <div className="text-left">
          <h1 className="text-2xl font-semibold text-black mb-2 leading-tight">
            Koleksi Video Pembelajaran Unggulan
          </h1>
          <p className="text-sm font-medium text-gray-700 mb-6">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>
        <div className="flex flex-nowrap gap-5 whitespace-nowrap overflow-y-hidden overflow-x-auto py-4">
          <div className="w-max h-5 inline-block p-1.5 m-2.5 mt-0 ml-0 pl-0 relative after:content-[''] after:absolute after:left-0 after:mt-2 after:w-0 after:border-[#f64920] after:bottom-[-20px] after:border-b-3 after:rounded-[10px] after:transition-all after:duration-300 hover:after:w-full ">
            <a
              className="text-[16px] hover:text-[#f64920] font-normal text-black"
              href="#"
            >
              Semua Kelas
            </a>
          </div>
          <div className="w-max h-5 inline-block p-1.5 m-2.5 mt-0 ml-0 pl-0 relative after:content-[''] after:absolute after:left-0 after:mt-2 after:w-0 after:border-[#f64920] after:bottom-[-20px] after:border-b-3 after:rounded-[10px] after:transition-all after:duration-300 hover:after:w-full ">
            <a
              className="text-[16px] hover:text-[#f64920] font-normal text-black"
              href="#"
            >
              Pemasaran
            </a>
          </div>
          <div className="w-max h-5 inline-block p-1.5 m-2.5 mt-0 ml-0 pl-0 relative after:content-[''] after:absolute after:left-0 after:mt-2 after:w-0 after:border-[#f64920] after:bottom-[-20px] after:border-b-3 after:rounded-[10px] after:transition-all after:duration-300 hover:after:w-full ">
            <a
              className="text-[16px] hover:text-[#f64920] font-normal text-black"
              href="#"
            >
              Desain
            </a>
          </div>
          <div className="w-max h-5 inline-block p-1.5 m-2.5 mt-0 ml-0 pl-0 relative after:content-[''] after:absolute after:left-0 after:mt-2 after:w-0 after:border-[#f64920] after:bottom-[-20px] after:border-b-3 after:rounded-[10px] after:transition-all after:duration-300 hover:after:w-full ">
            <a
              className="text-[16px] hover:text-[#f64920] font-normal text-black"
              href="#"
            >
              Pengembangan Diri
            </a>
          </div>
          <div className="w-max h-5 inline-block p-1.5 m-2.5 mt-0 ml-0 pl-0 relative after:content-[''] after:absolute after:left-0 after:mt-2 after:w-0 after:border-[#f64920] after:bottom-[-20px] after:border-b-3 after:rounded-[10px] after:transition-all after:duration-300 hover:after:w-full ">
            <a
              className="text-[16px] hover:text-[#f64920] font-normal text-black"
              href="#"
            >
              Bisnis
            </a>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:mx-24 md:mx-16 mx-10 gap-6 py-10">
        {contents.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white border border-gray-200 rounded-xl p-4 w-full xl:max-w-full mx-auto shadow-md transition hover:shadow-lg"
          >
            {/* Mobile Layout (gambar kiri, teks kanan) */}
            <div className="flex sm:hidden gap-4 ">
              <img
                src={item.img}
                alt="content"
                className="w-25 h-25 rounded-lg object-cover shrink-0"
              />
              <div className="flex flex-col justify-center gap-2 flex-1">
                <p className="text-base font-bold font-poppins text-gray-900 line-clamp-2">
                  Big 4 Auditor Financial Analyst
                </p>
                <div className="flex items-center gap-2">
                  <img
                    src={item.profile}
                    alt="profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Jenna Ortega</span>
                    <p className="text-[11px] text-gray-500">
                      Senior Accountant
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout (gambar atas, deskripsi bawah) */}
            <div className="hidden sm:flex flex-col gap-3">
              <img
                src={item.img}
                alt="content"
                className="w-full h-[180px] rounded-lg object-cover"
              />

              <p className="text-lg font-bold font-poppins text-gray-900">
                Big 4 Auditor Financial Analyst
              </p>
              <p className="text-sm  font-poppins text-[#333333]">
                Mulai transformasi dengan instruktur profesional, harga yang
                terjangkau, dan...
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={item.profile}
                  alt="profile"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-base font-medium">Jenna Ortega</span>
                  <p className="text-sm text-gray-500">
                    Senior Accountant di{" "}
                    <span className="text-[#333333] font-poppins font-medium">
                      {" "}
                      Gojek
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Rating & Price (sama untuk mobile & desktop) */}
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-2">
                <img
                  src={ratingImg}
                  alt="rating"
                  className="w-20 md:w-[90px]"
                />
                <p className="text-xs md:text-sm text-gray-500 underline">
                  3.5 (86)
                </p>
              </div>
              <div className="text-base md:text-lg font-bold text-green-500">
                Rp 300K
              </div>
            </div>
          </div>
        ))}
      </div>

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
    </MainLayout>
  );
}
export default Home;
