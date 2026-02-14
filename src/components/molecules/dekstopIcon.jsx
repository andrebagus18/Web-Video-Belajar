import avatar from "../../assets/avatar/profile.png";
import UseMenu from "../../stores/useMenu";
import TabMenu from "../atoms/tabMenu";
import Humberger from "../atoms/humberger";

function DekstopIcon() {
  const toggleMenu = UseMenu((state) => state.toggleMenu);

  return (
    <>
      <div className="hidden md:flex items-center space-x-6 me-5">
        {/* Kategori */}
        <details className="relative">
          <summary className=" cursor-pointer text-gray-700 font-medium hover:text-orange-500 list-none">
            Kategori
          </summary>
        </details>

        {/* Foto profil */}
        <button className="relative cursor-pointer" onClick={toggleMenu}>
          <img
            src={avatar}
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
        </button>
        <TabMenu />
      </div>
      <Humberger />
    </>
  );
}

export default DekstopIcon;
