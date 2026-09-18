export default function Story() {
  return (
    <section
      id="approach"
      className="grid grid-cols-1 md:grid-cols-2 min-h-[75vh]"
    >
      <div className="px-[7vw] py-[9vw] flex flex-col justify-center bg-background text-foreground">
        <p className="text-[9px] tracking-[0.17em] uppercase text-muted">
          Our approach
        </p>

        <h2 className="font-serif text-[clamp(55px,7vw,105px)] leading-[0.84] tracking-[-0.065em] my-8">
          Values meet voices.
        </h2>

        <p className="font-serif text-lg leading-relaxed max-w-[580px]">
          We work through authentic relationships and empathy-driven strategy
          to help mission-driven organizations and consumer brands
          communicate with purpose and clarity. By aligning values with
          voices, Pilot Collective builds partnerships that move culture
          forward.
        </p>
      </div>

      <div className="min-h-[55vh] md:min-h-0 bg-gradient-to-br from-[#b7a08b] to-[#514b45]" />
    </section>
  );
}