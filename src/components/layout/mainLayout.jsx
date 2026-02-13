import { useState } from "react";
import Logo from "../atoms/logo";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar/profile.png";
import Footer from "../organisms/footer";

function MainLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" w-full my-0 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white sticky shadow-[5px_5px_10px_rgba(230,230,230)] w-full h-[74px] md:pl-20 px-6 py-4 flex justify-between items-center z-20 top-0">
        {/* Logo di kiri */}
        <Logo />
        {/* Desktop Menu (hidden di hp) */}
        <div className="hidden md:flex items-center space-x-6 me-5">
          {/* Kategori */}
          <details className="relative">
            <summary className=" cursor-pointer text-gray-700 font-medium hover:text-orange-500 list-none">
              Kategori
            </summary>
          </details>

          {/* Foto profil */}
          <button className="relative" onClick={() => setIsOpen(!isOpen)}>
            <img
              src={avatar}
              alt="Profile"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
          </button>
        </div>

        {/* Hamburger (muncul di hp) */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>
      </header>

      {/* Mobile Menu (hanya muncul kalau isOpen true) */}
      {isOpen && (
        <div className="sticky top-[74px] inset-0 bg-white space-y-4 z-50 shadow">
          <div className="relative">
            <ul className="absolute right-0 me-5 md:me-10 w-40 bg-white rounded-lg shadow-lg z-1">
              <li>
                <Link
                  to="/login"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="inline-flex px-4 py-2 hover:bg-orange-100"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="grow bg-[#fdf8f2] w-full">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MainLayout;
