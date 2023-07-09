import Image from "next/image";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <About />
        <Portfolio />
        <Services />
        <Footer />
      </div>
    </main>
  );
}
