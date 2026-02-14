import DekstopIcon from "../molecules/dekstopIcon";
import Logo from "../atoms/logo";

function Header() {
  return (
    <header className="bg-white sticky shadow-[5px_5px_10px_rgba(230,230,230)] w-full h-[74px] md:pl-20 px-6 py-4 flex justify-between items-center z-20 top-0">
      <Logo />
      <DekstopIcon />
    </header>
  );
}

export default Header;
