export default function Story() {
  return (
    <section
      id="approach"
      className="bg-foreground text-background px-[7vw] py-[10vw]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_460px] gap-16 md:gap-20 max-w-[1400px] mx-auto">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <p className="text-[10px] tracking-[0.2em] uppercase text-accent font-medium">
              Our approach
            </p>
          </div>

          <h2 className="font-serif text-[clamp(40px,5vw,80px)] leading-[0.92] tracking-[-0.045em] -ml-[0.03em]">
            Values meet voices.
          </h2>

          <p className="font-serif text-xl md:text-2xl leading-[1.45] max-w-[650px] text-background/75 mt-10">
            We work through authentic relationships and empathy-driven strategy
            to help mission-driven organizations and consumer brands communicate
            with purpose and clarity.
          </p>
        </div>

        <div className="md:pt-[7rem] md:border-l md:border-background/15 md:pl-16 md:max-w-none">
          <p className="font-serif font-semibold text-3xl md:text-4xl leading-[1.15] tracking-[-0.03em]">
            Pilot Collective builds
            <br />
            partnerships that move
            <br />
            culture forward.
          </p>
        </div>
      </div>
    </section>
  );
}
