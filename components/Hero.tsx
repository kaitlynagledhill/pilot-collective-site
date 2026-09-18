export default function Hero() {
  return (
    <section className="min-h-screen bg-background text-foreground px-[5vw] pt-[125px] pb-[5vw] flex flex-col justify-between">
      <p className="text-[9px] tracking-[0.17em] uppercase text-muted">
        Talent partnerships · Culture · Impact
      </p>

      <h1 className="font-serif text-[clamp(68px,11vw,165px)] leading-[0.78] tracking-[-0.075em] max-w-[1200px] my-16">
        People make stories matter.
      </h1>

      <div className="flex justify-between items-end border-t border-white/20 pt-6 flex-col md:flex-row gap-6 md:gap-0">
        <p className="font-serif text-xl leading-relaxed max-w-[560px]">
          Pilot Collective is a boutique agency that specializes in intuitive
          talent partnerships rooted in the belief that the most powerful
          brand stories are told by people.
        </p>
        <a
          href="#work"
          className="border border-foreground px-5 py-3 text-[9px] tracking-[0.15em] uppercase hover:bg-accent hover:border-accent transition-colors"
        >
          Explore our work
        </a>
      </div>
    </section>
  );
}