import LogoImage from "../../assets/img/mdi_eye.png";
import Button from "../atoms/button";
import { Link } from "react-router-dom";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function InputLogin({ children }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get("/DB-Video-2");
      const userIn = response.data.find(
        (u) => u.email === email && u.password === password,
      );

      if (userIn) {
        localStorage.setItem("userData", JSON.stringify(userIn));
        localStorage.setItem("isLogin", "true");
        navigate("/");
      } else {
        alert("Username atau Password salah!");
      }
    } catch {
      alert("Anda belum terdaftar!");
      navigate("/register");
    }
  };

  return (
    <>
      <form onSubmit={handleLogin} className="space-y-4">
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-poppins font-medium text-[#333333ad] border-[#3a35411f]">
            E-Mail<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border border-[#3a35411f] rounded-md p-3"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

        <Button variant="primary">Masuk</Button>
        <Button variant="outline" url={`/register`}>
          Daftar
        </Button>
        {children}
      </form>
    </>
  );
}

export default InputLogin;
