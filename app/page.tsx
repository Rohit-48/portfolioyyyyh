import { AboutSection } from "@/components/About";
import { HeroCard } from "@/components/HeroCard";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-20">
      <section id="hero">
        <HeroCard />
      </section>
      <Separator />
      <section id="about">
        <AboutSection />
      </section>
    </div>
  );
}
