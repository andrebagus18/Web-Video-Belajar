import UseMenu from "../../stores/useMenu";
import TabMenu from "./tabMenu";

function Humberger() {
  const toggleMenu = UseMenu((state) => state.toggleMenu);

  return (
    <button className="md:hidden flex flex-col space-y-1" onClick={toggleMenu}>
      <span className="w-6 h-0.5 bg-gray-700"></span>
      <span className="w-6 h-0.5 bg-gray-700"></span>
      <span className="w-6 h-0.5 bg-gray-700"></span>
      <TabMenu />
    </button>
  );
}

export default Humberger;
