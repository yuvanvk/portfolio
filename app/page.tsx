import { HeroSection } from "@/components/porfolio/hero-section";
import { Navbar } from "@/components/porfolio/navbar";
import { POW } from "@/components/porfolio/pow";
import { Skills } from "@/components/porfolio/skills";


export default function Home() {
  return (
    <div className=" py-10 md:py-20 w-full px-2 md:max-w-3xl xl:max-w-4xl  mx-auto">
      <Navbar />
      <HeroSection />
      <Skills />
      <POW />
    </div>
  );
}


