import Blog from "../../components/Blog/Blog";
import Hero from "../../components/Hero/Hero";
import Introduce from "../../components/Introduce/Introduce";

export default function Home() {
  return (
    <>
      <Hero heading="Viсtoria’s Healing Flow" />
      <Introduce text="Viktoria, Reiki Master" />
      <Blog />
    </>
  );
}
