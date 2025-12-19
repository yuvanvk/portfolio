import { CommandToobar } from "@/components/porfolio/command-toolbar";
import { HeroSection } from "@/components/porfolio/hero-section";
import { Navbar } from "@/components/porfolio/navbar";
import { Skills } from "@/components/porfolio/skills";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <>
      <Container>
        <HeroSection />
        <Skills />
      </Container>
    </>
  );
}
