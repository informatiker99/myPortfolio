import Header from "../header/header";
import Footer from "../footer/footer";
const Layout = ({ children }: any) => {
  return (
    <div className="scroll-smooth	">
      <Header></Header>
      <main className="scroll-smooth">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
