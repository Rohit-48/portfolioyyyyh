import VerticalCutReveal from "./fancy/text/vertical-cut-reveal";

export function HeroCard() {
  return (
    <div className="flex items-start gap-10">
      {/* Polaroid image */}
      <div className="relative shrink-0 rotate-3 rounded-2xl bg-white dark:bg-[#c6c6c6] p-4 shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-transform duration-400 hover:scale-105 hover:rotate-0">
        <div className="relative h-52 w-52 overflow-hidden rounded-xl">
          <img
            src="/images/profile/profile-image.png"
            alt="Rohit"
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-2.5 right-3 rounded-[4px] bg-white p-1.5 font-dynapuff text-sm text-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Rohit
          </span>
        </div>
        {/* subtle ring overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/10 dark:ring-white/10" />
      </div>

      {/* Text */}
      <div className="flex min-h-52 w-full flex-col justify-between font-inter text-6xl font-bold">
        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.025}
          staggerFrom="first"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          {`Rohit Here`}
        </VerticalCutReveal>

        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.025}
          staggerFrom="last"
          reverse={true}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 21,
            delay: 0.8,
          }}
        >
          {`Full Stack Engineer`}
        </VerticalCutReveal>

        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.025}
          staggerFrom="center"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 21,
            delay: 1.1,
          }}
        >
          {`Building full-stack products.`}
        </VerticalCutReveal>
      </div>
    </div>
  );
}
