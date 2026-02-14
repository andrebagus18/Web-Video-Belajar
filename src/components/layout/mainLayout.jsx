import Footer from "../organisms/footer";
import Header from "../organisms/navbar";

function MainLayout({ children }) {
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
