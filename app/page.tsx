import { HeroSection } from "@/components/porfolio/hero-section";
import { Navbar } from "@/components/porfolio/navbar";
import { Crafts } from "@/components/porfolio/crafts";


export default function Home() {
  return (
    <div className=" py-10 md:py-20 w-full px-2 md:max-w-lg xl:max-w-3xl  mx-auto">
      <Navbar />
      <HeroSection />
      <Crafts />
    </div>
  );
}


