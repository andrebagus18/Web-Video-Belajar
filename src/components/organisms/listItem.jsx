function ListItem() {
  return (
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
  );
}

export default ListItem;
