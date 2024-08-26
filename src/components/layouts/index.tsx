import Home from "../pages/home";
import Header from "./header";
import Footer from "./footer";
const Layout = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-6">
      <Header />
      <div className="h-0.5 w-full bg-black"></div>
      <Home />
      <Footer />
    </main>
  );
};

export default Layout;
