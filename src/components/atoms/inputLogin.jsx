import LogoImage from "../../assets/img/mdi_eye.png";
import Button from "../atoms/button";
import { Link } from "react-router-dom";

function InputLogin({ children }) {
  return (
    <>
      <form className="space-y-4">
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
        <div className="flex flex-col space-y-1 relative">
          <label className="text-sm font-medium text-[#333333ad]">
            Kata Sandi <span className="text-red-500">*</span>
          </label>
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

        {/* Lupa Password */}
        <div className="flex justify-end">
          <Link
            to={"/register"}
            className="text-sm font-medium text-[#333333ad] hover:underline"
          >
            Lupa Password?
          </Link>
        </div>

        <Button variant="primary" url={`/`}>
          Masuk
        </Button>
        <Button variant="outline" url={`/register`}>
          Daftar
        </Button>
        {children}
      </form>
    </>
  );
}

export default InputLogin;
