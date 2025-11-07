import { HeroSection } from "@/components/porfolio/hero-section";
import { Navbar } from "@/components/porfolio/navbar";
import { POW } from "@/components/porfolio/pow";
import { SideHustle } from "@/components/porfolio/side-hustle";
import { Skills } from "@/components/porfolio/skills";

export default function Home() {
  return (
    <div className="py-10 md:py-20 w-full px-2 md:max-w-3xl xl:max-w-3xl  mx-auto relative">
      <Navbar />
      <HeroSection />
      <Skills />
      <SideHustle />
      <POW />
    </div>
  );
}


