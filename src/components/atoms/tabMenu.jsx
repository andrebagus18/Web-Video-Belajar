import { Link } from "react-router-dom";
import IconOut from "../../assets/icon/IconOut.png";
import UseMenu from "../../stores/useMenu";

function TabMenu() {
  const isOpen = UseMenu((state) => state.isOpen);
  const closeMenu = UseMenu((state) => state.closeMenu);

  return (
    <div
      className={`absolute right-0 h-auto transition-all duration-500 ease-in-out me-10 md:me-19 w-40 bg-white rounded-lg shadow-lg z-50 text-left ${
        isOpen
          ? "top-18 opacity-100 visible fixed"
          : "top-0 opacity-0 pointer-events-none invisible"
      }`}
    >
      <ul onClick={closeMenu}>
        <li>
          <Link to="" className="block px-4 py-2 hover:bg-orange-100">
            Profil Saya
          </Link>
        </li>
        <li>
          <Link to="" className="block px-4 py-2 hover:bg-orange-100">
            Kelas Saya
          </Link>
        </li>
        <li>
          <Link to="" className="block px-4 py-2 hover:bg-orange-100">
            Pesanan Saya
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="inline-flex items-center w-full px-4 py-2 hover:bg-gray-700/10 text-orange-600"
          >
            Keluar
            <img src={IconOut} alt="IconOut" className="w-5 h-4 ml-3" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TabMenu;
