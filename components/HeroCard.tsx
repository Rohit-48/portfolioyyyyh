import VerticalCutReveal from "./fancy/text/vertical-cut-reveal";
import TiltedCard from "./fancy/TiltedCard";

export function HeroCard() {
  return (
    <div className="flex items-center gap-12">
      {/* Tilted profile card */}
      <div className="shrink-0" style={{ width: 220, height: 220 }}>
        <TiltedCard
          imageSrc="/images/profile/profile-image.png"
          altText="Rohit"
          captionText="Rohit"
          containerHeight="220px"
          containerWidth="220px"
          imageHeight="220px"
          imageWidth="220px"
          rotateAmplitude={12}
          scaleOnHover={1.08}
          showMobileWarning={false}
          showTooltip={true}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-3 font-inter font-bold">
        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.025}
          staggerFrom="first"
          containerClassName="text-5xl leading-tight"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          {`Rohit Here`}
        </VerticalCutReveal>

        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.025}
          staggerFrom="last"
          reverse={true}
          containerClassName="text-3xl leading-snug text-muted-foreground font-semibold"
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
          containerClassName="text-lg leading-relaxed text-muted-foreground/70 font-medium"
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
