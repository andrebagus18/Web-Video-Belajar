import FormRegister from "../molecules/formRegister";

function Registers() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md font-poppins max-xs:w-[90%] xs:w-[80%] max-w-md overflow-hidden">
      <h2 className="text-center text-3xl font-semibold mb-2">
        Pendaftaran Akun
      </h2>
      <p className="text-center text-sm mb-6 text-[#333333ad]">
        Yuk, daftarkan akunmu sekarang juga!
      </p>
      <FormRegister />
    </div>
  );
}
export default Registers;
