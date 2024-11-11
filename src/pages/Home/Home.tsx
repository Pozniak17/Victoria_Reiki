import { Blog } from "../../components/Blog";
import { Hero } from "../../components/Hero";
import { Introduce } from "../../components/Introduce";

export function Home() {
  return (
    <>
      <Hero heading="Viсtoria’s Healing Flow" />
      <Introduce text="Viktoria, Reiki Master" />
      <Blog />
    </>
  );
}
