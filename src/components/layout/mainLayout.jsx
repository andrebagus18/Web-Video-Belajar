import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../organisms/footer";
import Header from "../organisms/navbar";

function MainLayout({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const status = localStorage.getItem("isLogin");
    const data = localStorage.getItem("userData");
    if (status !== "true" || !data) {
      navigate("/login");
    } else {
      setUser(JSON.parse(data));
    }
  }, []);

  if (!user) return null;

  return (
    <div className=" w-full my-0 min-h-screen flex flex-col">
      <Header />
      {/* Main Content */}
      <main className="grow bg-[#fdf8f2] w-full">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MainLayout;
