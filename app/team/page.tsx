import ProtectedImage from "@/components/ProtectedImage";

const jessicaBio = [
  <>
    <strong>Jessica Pilot</strong> is a Founder, CEO, and Creative Strategist
    who builds high-impact platforms, media ecosystems, and cultural campaigns
    at scale. With more than 15 years of experience operating at the
    intersection of media, entertainment, and social impact, she architects
    multi-channel storytelling strategies that drive national engagement and
    redefine modern narrative. Recognized as a tastemaker by <em>CNN</em> and{" "}
    <em>IndieWire</em>, Pilot leverages a sharp instinct for talent acquisition,
    cultural resonance, and brand positioning to connect ideas with mass
    audiences.
  </>,

  <>
    As Lead Talent Comedy Producer for{" "}
    <em>The Late Show with Stephen Colbert</em> (2015–2021), Pilot served as a
    key creative architect shaping the show’s cultural voice and booking
    pipeline while championing breakout talent during peak broadcast years. Her
    work in platform and content architecture includes engineering integrated
    campaigns, content initiatives, and talent frameworks for premier brands and
    networks such as CBS, Hulu, the LA Clippers, American Public Media, and
    Meals on Wheels America. In the audio and digital space, she has scaled
    podcast initiatives through high-value talent partnerships with Dotdash,
    Lattice, and Fortune Brand Studio.
  </>,

  <>
    Beyond broadcast and digital media, Pilot brings storytelling into physical
    and institutional spaces. She served as Story Producer and Creative Lead for{" "}
    <em>Path of Liberty</em>, a six-acre public art installation developed with
    C&G Partners to explore contemporary American identity through spatial
    design. A pioneer in securing philanthropic capital, she has brokered
    multi-year institutional alignments for national campaigns, including a
    major mental health initiative backed by <em>Teen Vogue</em> and Pivotal
    Ventures. Throughout her career, she has also produced bespoke projects and
    creative strategies for legendary cultural figures, including Rick Rubin,
    Larry Charles, and the late Tony Bennett.
  </>,
];

const melissaBio = [
  "Melissa Kellner known to most as Mel Kel, brings her passion for storytelling and talent discovery to Pilot Collective as part of the Talent Partnerships team. Mel’s career spans a dynamic range of unscripted, new media, branded, and commercial projects, where she has built a reputation for uncovering uncut gems, forging meaningful talent–client relationships, and crafting thoughtful, strategic talent identities. She thrives in ideation — pinpointing the unique core of a person’s brand and giving them a platform to share their most authentic, resonant stories.",

  "Some of Mel’s favorite projects include Peacock’s House of Villains (Seasons 1–3), Meta-branded content casting, Peacock’s True Story with Ed Helms and Randall Park, and Hulu’s Vanderpump Villa Season 2 — for which she earned a 2026 Artios Award nomination for casting.",

  "Additional career highlights include being named a 2025 Realscreen Propelle Pitch Accelerator Finalist, serving as a regular guest lecturer for Emerson LA’s Casting Fundamentals course, and proudly holding membership in the Casting Society of America.",
];

function BioText({ paragraphs }: { paragraphs: React.ReactNode[] }) {
  return (
    <div className="space-y-5 text-[14px] leading-[1.8] text-foreground/80">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="bg-background text-foreground">
      {/* PAGE INTRO */}
      <section className="px-[7vw] pt-[11vw] pb-[5vw] md:pt-[9vw] md:pb-[4vw] max-[800px]:px-[6vw] max-[800px]:pt-[20vw] max-[800px]:pb-[10vw]">
        <h1 className="font-serif text-[clamp(52px,7.5vw,108px)] max-[800px]:text-[clamp(46px,12vw,60px)] leading-[0.96] tracking-[-0.04em] max-w-[1000px]">
          The people behind
          <br />
          the work.
        </h1>

        <p className="mt-7 max-w-[700px] text-[clamp(18px,1.5vw,23px)] max-[800px]:text-[18px] leading-[1.5] tracking-[-0.01em] text-foreground/70">
          A collective of creative thinkers, talent experts, and storytellers,
          bringing people and ideas together to move culture forward.
        </p>
      </section>

      {/* JESSICA — FOUNDER */}
      <section className="px-[7vw] pb-[12vw] max-[800px]:px-[6vw] max-[800px]:pb-[18vw]">
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-[7vw] items-center">
          <div>
            <ProtectedImage
              src="/images/team/jessica.png"
              alt="Jessica Pilot"
              width={800}
              height={1000}
              className="w-full aspect-[4/5] object-cover"
            />
          </div>

          <div>
            <p className="text-[9px] tracking-[0.17em] uppercase text-accent mb-5">
              Founder & CEO
            </p>

            <h2 className="font-serif text-[clamp(40px,5vw,68px)] max-[800px]:text-[clamp(38px,10.5vw,52px)] leading-[1.05] tracking-[-0.035em] mb-8 max-[800px]:mb-6">
              Jessica Pilot
            </h2>

            <BioText paragraphs={jessicaBio} />
          </div>
        </div>
      </section>
    </main>
  );
}
