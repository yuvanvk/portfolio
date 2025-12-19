import { CommandToobar } from "@/components/porfolio/command-toolbar";
import { HeroSection } from "@/components/porfolio/hero-section";
import { Navbar } from "@/components/porfolio/navbar";
import { Skills } from "@/components/porfolio/skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <CommandToobar />
      <div className="w-full px-2 md:max-w-3xl xl:max-w-3xl  mx-auto relative py-20">
        <HeroSection />
         <Skills />
        {/* <SideHustle />
        <POW />  */}
      </div>
    </>
  );
}
