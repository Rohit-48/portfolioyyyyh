import { AboutSection } from "@/components/About";
import { HeroCard } from "@/components/HeroCard";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-20">
      <section id="hero">
        <HeroCard />
      </section>
      <section id="about">
        <AboutSection />
      </section>
    </div>
  );
}
