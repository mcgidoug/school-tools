import Image from "next/image";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Portfolio />
      </div>
    </main>
  );
}
