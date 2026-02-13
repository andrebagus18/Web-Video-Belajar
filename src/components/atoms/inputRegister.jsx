import LogoImage from "../../assets/img/mdi_eye.png";
import Button from "../atoms/button";
import LogoIDN from "../../assets/flag/indonesia.png";

function InputRegister() {
  return (
    <>
      <form className="space-y-4">
        {/* nama */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-poppins font-medium text-[#333333ad] border-[#3a35411f]">
            Nama Lengkap<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border border-[#3a35411f] rounded-md p-3"
            type="text"
            placeholder=""
          />
        </div>
        {/* Email */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-poppins font-medium text-[#333333ad] border-[#3a35411f]">
            E-Mail<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border border-[#3a35411f] rounded-md p-3"
            type="email"
            placeholder=""
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-[#333333ad]"
          >
            No. Hp <span className="text-red-500">*</span>
          </label>

          <div className="flex items-center">
            {/* Bendera */}
            <div className="w-12 h-12 bg-[#f0f0f0] flex items-center justify-center border border-[#3a35411f] rounded-l-md">
              <img src={LogoIDN} alt="indonesia" className="w-6 h-6" />
            </div>

            {/* Select Kode Negara */}
            <select
              name="kode"
              className="h-12 px-2 text-sm bg-white border rounded-r-lg border-[#3a35411f] focus:ring-2 focus:ring-green-500 outline-none"
              required
            >
              <option value="+62">+62</option>
              <option value="+60">+60</option>
              <option value="+253">+253</option>
              <option value="+72">+72</option>
            </select>

            {/* Input Nomor */}
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder=""
              className="flex-1 h-12 px-3 ml-2 border border-[#3a35411f] rounded-md focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>
        </div>
        {/* Password */}
        <div className="flex flex-col space-y-1 relative">
          <label className="text-sm font-medium text-[#333333ad]">
            Kata Sandi <span className="text-red-500">*</span>
          </label>

          {/* wrapper relative untuk input + icon */}
          <div className="relative">
            <input
              type="password"
              placeholder=""
              className="pr-10 w-full border border-[#3a35411f] rounded-md p-3" // kasih padding kanan biar tidak ketimpa icon
            />
            <img
              src={LogoImage}
              alt="eye"
              className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        {/* Password */}
        <div className="flex flex-col space-y-1 relative">
          <label className="text-sm font-medium text-[#333333ad]">
            Konfirmasi Kata Sandi <span className="text-red-500">*</span>
          </label>

          {/* wrapper relative untuk input + icon */}
          <div className="relative">
            <input
              type="password"
              placeholder=""
              className="pr-10 w-full border border-[#3a35411f] rounded-md p-3" // kasih padding kanan biar tidak ketimpa icon
            />
            <img
              src={LogoImage}
              alt="eye"
              className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        <Button variant="primary">Daftar</Button>
        <Button variant="outline" url="/login">
          Masuk
        </Button>
      </form>
    </>
  );
}

export default InputRegister;
