const heroVideos = [
  "/hero/reel-1-cropped.mp4",
  "/hero/reel-2-cropped.mp4",
  "/hero/reel-3-cropped.mp4",
];

export default function Hero() {
  return (
    <>
      {/* HERO VIDEO SECTION */}
      <section className="relative mt-[80px] h-[calc(100svh-130px)] min-h-[500px] bg-background overflow-hidden text-foreground">

        {/* Full-width video columns */}
        <div className="absolute inset-0 grid grid-cols-3 gap-[7px]">
          {heroVideos.map((src, i) => (
            <div key={i} className="relative min-w-0 h-full overflow-hidden">
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-background/30 pointer-events-none" />
{/* Hero content */}
<div className="relative z-10 h-full px-[5vw] pt-[5vw] pb-[2vw] flex flex-col justify-between">
  {/* Main message */}
  <div className="max-w-[1050px] pt-[5vw]">

<h1 className="font-serif text-[clamp(60px,7.3vw,120px)] leading-[0.95] tracking-[-0.035em]">
  <span className="block">People make</span>
  <span className="block mt-[0.12em] ml-[0.04em]">
    stories matter.
  </span>
</h1>

    <p className="font-serif text-xl md:text-2xl leading-[1.3] max-w-[610px] mt-6">
      Pilot Collective is a boutique agency that specializes in intuitive
      talent partnerships rooted in the belief that the most powerful
      brand stories are told by people.
    </p>

  </div>

  {/* CTA */}
  <div className="flex justify-end">
    <a
      href="#work"
      className="border border-foreground px-5 py-3 text-[9px] tracking-[0.15em] uppercase hover:bg-accent hover:border-accent transition-colors"
    >
      Explore our work
    </a>
  </div>

</div>

      </section>

      {/* BOTTOM BAND */}
      <div className="h-[50px] bg-background px-[4.5vw] flex items-center">
        <p className="text-[9px] tracking-[0.17em] uppercase text-accent">
          Talent partnerships · Culture · Impact
        </p>
      </div>
    </>
  );
}