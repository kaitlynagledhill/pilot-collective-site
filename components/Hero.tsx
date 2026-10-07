import ProtectedVideo from "@/components/ProtectedVideo";
import { videoUrl } from "@/videoUrl";

const heroVideos = [
  videoUrl("hero/reel-1-cropped.mp4"),
  videoUrl("hero/reel-2-cropped.mp4"),
  videoUrl("hero/reel-3-cropped.mp4"),
];

export default function Hero() {
  return (
    <>
      {/* HERO VIDEO SECTION */}
      <section className="relative mt-[80px] max-[800px]:mt-[64px] h-[calc(100svh-130px)] max-[800px]:h-[calc(100svh-114px)] min-h-[500px] max-[800px]:min-h-[560px] bg-background overflow-hidden text-foreground">
        {/* Full-width video columns */}
        <div className="absolute inset-0 grid grid-cols-3 gap-[7px] max-[800px]:gap-[3px]">
          {heroVideos.map((src, i) => (
            <div key={i} className="relative min-w-0 h-full overflow-hidden">
              <ProtectedVideo
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
        <div className="relative z-10 h-full px-[5vw] max-[800px]:px-[6vw] pt-[5vw] max-[800px]:pt-[8vw] pb-[2vw] max-[800px]:pb-[5vw] flex flex-col justify-between">
          {/* Main message */}
          <div className="max-w-[1050px] pt-[5vw] max-[800px]:pt-[12vw]">
            <h1 className="font-serif text-[clamp(60px,7.3vw,120px)] max-[800px]:text-[clamp(48px,14vw,68px)] leading-[0.95] tracking-[-0.035em]">
              <span className="block">People make</span>
              <span className="block mt-[0.12em] ml-[0.04em]">
                stories matter.
              </span>
            </h1>

            <p className="font-serif text-xl md:text-2xl max-[800px]:text-lg leading-[1.3] max-w-[600px] max-[800px]:max-w-[330px] mt-6 max-[900px]:mt-5">
              Pilot Collective is a boutique agency that believes the most
              powerful brand stories are told by people.
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
      <div className="h-[50px] max-[800px]:h-[50px] bg-background px-[4.5vw] flex items-center">
        <p className="text-[9px] tracking-[0.17em] uppercase text-accent">
          Talent Partnerships · Culture · Impact
        </p>
      </div>
    </>
  );
}