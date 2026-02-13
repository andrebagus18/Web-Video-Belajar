import { Link } from "react-router-dom";

function Button({ children, onClick, variant = "primary", url }) {
  const baseStyle = "w-full p-2 rounded-xl block text-center";
  const styles = {
    outline: `${baseStyle} bg-[#e2fcd9cc] text-[#3ecf4c] font-semibold font-poppins`,
    primary: `${baseStyle} bg-[#3ecf4c] text-[#fff] font-semibold font-poppins`,
    secondary: `${baseStyle} bg-white border border-[#3a35411f] text-[#333333] font-semibold font-poppins`,
  };
  if (url) {
    return (
      <Link to={url} className={styles[variant]}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
}

export default Button;
