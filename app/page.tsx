import { HeroCard } from "@/components/HeroCard";
import { ModeToggle } from "@/components/ModeToggle";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col top-20 justify-between gap-3">
      <HeroCard />
    </div>
  );
}
