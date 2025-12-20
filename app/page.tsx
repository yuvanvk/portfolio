import { HeroSection } from "@/components/porfolio/hero-section";
import { MusicPlayer } from "@/components/porfolio/music-player";
import { Skills } from "@/components/porfolio/skills";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
  
      <Container>
        <div className="pt-10">
          <HeroSection />
          <Skills />
          <MusicPlayer />
        </div>
      </Container>
  
  );
}
