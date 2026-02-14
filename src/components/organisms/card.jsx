import ratingImg from "../../assets/avatar/Rating.png";

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

function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:mx-24 md:mx-16 mx-10 gap-6 py-10">
      {contents.map((item) => (
        <div
          key={item.id}
          className="flex flex-col bg-white border border-gray-200 rounded-xl p-4 w-full xl:max-w-full mx-auto shadow-md transition hover:shadow-lg"
        >
          {/* Mobile Layout */}
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
                  <p className="text-[11px] text-gray-500">Senior Accountant</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
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
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-2">
              <img src={ratingImg} alt="rating" className="w-20 md:w-[90px]" />
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
  );
}

export default Card;
