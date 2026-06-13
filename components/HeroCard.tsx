import VerticalCutReveal from "./fancy/text/vertical-cut-reveal";

export function HeroCard() {
  return (
    <div className="flex items-start gap-8 selection:bg-teal-400">
      {/*Image Section*/}
      <div className="relative shrink-0 flex items-center gap-8 mx-auto 3rounded-2xl bg-white dark:bg-[#111111] hover:scale-110 rotate-3 p-4 transition-transform duration-500 shadow-[0_2px_10px_rgba(0,0,0,0.07)]">
        <div className="h-40 w-40 overflow-hidden rounded-2xl ">
          <img
            src="/images/profile/profile-image.png"
            alt="Rohit"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 rounded-2xl ring-1 ring-black/2 dark:ring-white-2" />
      </div>

      {/* Content*/}
      <div className="font-bold font-inter text-6xl mx-auto w-full">
        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.025}
          staggerFrom="first"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 21,
          }}
        >
          {`HI 👋, FRIEND!`}
        </VerticalCutReveal>
        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.025}
          staggerFrom="last"
          reverse={true}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 21,
            delay: 0.5,
          }}
        >
          {`ROHIT HERE`}
        </VerticalCutReveal>
        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.025}
          staggerFrom="center"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 21,
            delay: 1.1,
          }}
        >
          {`NICE TO MEET 😊 YOU.`}
        </VerticalCutReveal>
      </div>
    </div>
  );
}
