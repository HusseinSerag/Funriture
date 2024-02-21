import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routers from "../../routers/Routers";
export default function Layout() {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
}
