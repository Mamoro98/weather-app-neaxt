import Image from "next/image";
import { Poppins } from "next/font/google";
import Header from "./component/Header";
import { url } from "inspector";
import bgimage from "../public/background.png";
import Hero from "./component/Hero";
import Search from "./component/Search";
import MainPart from "./component/MainPart";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <div className="w-full h-fit bg-cover bg-center p-10 ">
        <Header />
        <Hero />
        <Search />
        <MainPart />
      </div>
    </main>
  );
}
