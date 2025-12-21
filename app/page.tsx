import { HeroSection } from "@/components/sections/hero";
import { MusicPlayer } from "@/components/sections/music-player";
import { Skills } from "@/components/sections/skills";
import { Container } from "@/components/wrapper/container";

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
