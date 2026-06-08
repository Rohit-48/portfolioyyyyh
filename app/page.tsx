import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3">
      <h1 className="font-inter">Hello</h1>
      <p className="font-roboto">Roboto is working</p>
      <ModeToggle />
    </div>
  );
}
