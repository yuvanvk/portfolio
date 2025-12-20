import { HeroSection } from "@/components/porfolio/hero-section";
import { MusicPlayer } from "@/components/porfolio/music-player";
import { Skills } from "@/components/porfolio/skills";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
      <Container>
        <div className="pt-10 px-2 md:px-0">
          <HeroSection />
          <Skills />
          <MusicPlayer />
        </div>
      </Container>
  
  );
}
