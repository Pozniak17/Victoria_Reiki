import { Benefits } from "../../components/Benefits";
import { Blog } from "../../components/Blog";
import { Hero } from "../../components/Hero";
import { Introduce } from "../../components/Introduce";
import { VideoIntroduction } from "../../components/VideoIntroduction";

export function Home() {
  return (
    <div>
      <Hero heading="Viсtoria’s Healing Flow" />
      <Introduce text="Viktoria, Reiki Master" />
      <Blog />
      <Benefits />
      <VideoIntroduction />
    </div>
  );
}
