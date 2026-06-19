import { AboutSection } from "@/components/About";
import { HeroCard } from "@/components/HeroCard";
import {
  BlogsPreview,
  ContactSection,
  ProjectsPreview,
} from "@/components/HomePreviewSections";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-20">
      <section id="hero">
        <HeroCard />
      </section>
      <Separator />
      <AboutSection />
      <Separator />
      <ProjectsPreview />
      <Separator />
      <BlogsPreview />
      <Separator />
      <ContactSection />
    </div>
  );
}
