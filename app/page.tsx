
import { HeroSection } from "@/components/porfolio/hero-section";
import { Setting } from "@/components/porfolio/setting";
import { Skills } from "@/components/porfolio/skills";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <>
      <Container>
        <HeroSection />
        <Skills />
        <Setting />
      </Container>
    </>
  );
}
