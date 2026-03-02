import LogoImage from "../../assets/img/mdi_eye.png";
import Button from "../atoms/button";
import LogoIDN from "../../assets/flag/indonesia.png";
import api from "../../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function InputRegister({ children }) {
  const [dataForm, setDataForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let newErrors = {};
      // validasi password
      if (dataForm.password !== dataForm.confirmPassword) {
        newErrors.confirmPassword = "Kata sandi tidak sama!";
      }
      if (dataForm.password.length < 6) {
        newErrors.password = "Kata sandi minimal 6 karakter!";
      }
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      // cek email
      const cekUser = await api.get("/users");
      const emailSudahAda = cekUser.data.some(
        (item) => item.email === dataForm.email,
      );
      if (emailSudahAda) {
        alert("Email sudah terdaftar, Silahkan Login!");
        navigate("/login");
        return;
      }

      // kirim data ke api
      const response = await api.post("/users", {
        fullName: dataForm.fullName,
        email: dataForm.email,
        phone: dataForm.phone,
        password: dataForm.password,
      });
      const userData = response.data;
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("userData", JSON.stringify(userData));
      alert("Register Berhasil!");
      navigate("/");
      // reset form
      setDataForm({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* nama */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-poppins font-medium text-[#333333ad] border-[#3a35411f]">
            Nama Lengkap<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border border-[#3a35411f] rounded-md p-3"
            type="text"
            name="fullName"
            placeholder=""
            value={dataForm.fullName}
            onChange={handleChange}
            required
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
            name="email"
            placeholder=""
            value={dataForm.email}
            onChange={handleChange}
            required
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
            <div className="w-12 h-12 max-xs:hidden bg-[#f0f0f0] flex items-center justify-center border border-[#3a35411f] rounded-l-md">
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
              value={dataForm.phone}
              onChange={handleChange}
              required
              placeholder=""
              className="flex-1 h-12 px-3 max-xs:px-0 ml-2 border border-[#3a35411f] rounded-md focus:ring-2 focus:ring-green-500 outline-none"
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
              name="password"
              value={dataForm.password}
              onChange={handleChange}
              placeholder=""
              className="pr-10 w-full border border-[#3a35411f] rounded-md p-3"
            />
            {errors.password && (
              <p className="text-red-500 text-[12px]">{errors.password}</p>
            )}
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
              name="confirmPassword"
              placeholder=""
              value={dataForm.confirmPassword}
              onChange={handleChange}
              className="pr-10 w-full border border-[#3a35411f] rounded-md p-3"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-[12px]">
                {errors.confirmPassword}
              </p>
            )}
            <img
              src={LogoImage}
              alt="eye"
              className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        <Button variant="primary">Daftar</Button>
        <Button variant="outline" url={"/login"}>
          Masuk
        </Button>
        {children}
      </form>
    </>
  );
}

export default InputRegister;
