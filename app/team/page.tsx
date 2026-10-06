const jessicaBio = [
  "Jessica Pilot is a creative leader, producer, and communications strategist with more than 15 years of experience shaping storytelling across media, entertainment, and nonprofit sectors. Recognized as a tastemaker by CNN and IndieWire, she brings a sharp eye for talent, cultural relevance, and building platforms that connect with national audiences.",

  "As the former lead talent comedy producer for The Late Show with Stephen Colbert (2015–2021), Pilot helped shape the show’s comedy and cultural voice while championing emerging talent. Her work spans campaigns and content initiatives for CBS, Hulu, the LA Clippers, American Public Media, and Meals on Wheels America.",

  "Pilot has served as Story Producer and creative lead for Path of Liberty, a six-acre public art installation created with C&G Partners exploring what it means to be American. Her podcast and digital work includes talent partnerships with Dotdash, Lattice, Fortune Brand Studio, and the LA Clippers.",

  "She has also secured multi-year funding for national awareness campaigns, including a mental health initiative with Teen Vogue and Pivotal Ventures, and produced special projects for cultural icons including Rick Rubin, Larry Charles and the late Tony Bennett.",

  "Pilot’s work sits at the intersection of storytelling, talent, strategy, and social impact, bringing together the right voices, ideas, and audiences to create work that matters.",
];

const melissaBio = [
  "Melissa Kellner known to most as Mel Kel, brings her passion for storytelling and talent discovery to Pilot Collective as part of the Talent Partnerships team. Mel’s career spans a dynamic range of unscripted, new media, branded, and commercial projects, where she has built a reputation for uncovering uncut gems, forging meaningful talent–client relationships, and crafting thoughtful, strategic talent identities. She thrives in ideation — pinpointing the unique core of a person’s brand and giving them a platform to share their most authentic, resonant stories.",

  "Some of Mel’s favorite projects include Peacock’s House of Villains (Seasons 1–3), Meta-branded content casting, Peacock’s True Story with Ed Helms and Randall Park, and Hulu’s Vanderpump Villa Season 2 — for which she earned a 2026 Artios Award nomination for casting.",

  "Additional career highlights include being named a 2025 Realscreen Propelle Pitch Accelerator Finalist, serving as a regular guest lecturer for Emerson LA’s Casting Fundamentals course, and proudly holding membership in the Casting Society of America.",
];

function BioText({ paragraphs }: { paragraphs: string[] }) {
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
      <section className="px-[7vw] pt-[11vw] pb-[5vw] md:pt-[9vw] md:pb-[4vw]">
        <h1 className="font-serif text-[clamp(52px,7.5vw,108px)] leading-[0.96] tracking-[-0.04em] max-w-[1000px]">
          The people behind
          <br />
          the work.
        </h1>

        <p className="mt-7 max-w-[700px] text-[clamp(18px,1.5vw,23px)] leading-[1.5] tracking-[-0.01em] text-foreground/70">
          A collective of creative thinkers, talent experts, and storytellers,
          bringing people and ideas together to move culture forward.
        </p>
      </section>
      {/* JESSICA — FOUNDER */}
      <section className="px-[7vw] pb-[12vw]">
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-[7vw] items-center">
          <div>
            <img
              src="/images/team/jessica.png"
              alt="Jessica Pilot"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>

          <div>
            <p className="text-[9px] tracking-[0.17em] uppercase text-accent mb-5">
              Founder & CEO
            </p>

            <h2 className="font-serif text-[clamp(40px,5vw,68px)] leading-[1.05] tracking-[-0.035em] mb-8">
              Jessica Pilot
            </h2>

            <BioText paragraphs={jessicaBio} />
          </div>
        </div>
      </section>

      {/*
<section className="bg-foreground text-background px-[7vw] py-[10vw]">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[5vw]">

      <div id="melissa">
  <img
    src="/images/team/melissa.png"
    alt="Melissa Kellner"
    className="w-full aspect-[4/5] object-cover mb-7"
  />

<p className="text-[9px] tracking-[0.17em] uppercase text-accent mb-4">
  Talent Partnerships
</p>

  <h3 className="font-serif text-[clamp(32px,3.5vw,48px)] leading-[1.1] tracking-[-0.03em] mb-6">
    Melissa Kellner
  </h3>

  <div className="space-y-5 text-[14px] leading-[1.8] text-background/80">
    {melissaBio.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </div>
</div>

<div>
  <div className="w-full aspect-[4/5] bg-background/10 flex items-center justify-center mb-7">
    <p className="text-[9px] tracking-[0.17em] uppercase text-background/50">
      Photo coming soon
    </p>
  </div>

  <p className="text-[9px] tracking-[0.17em] uppercase text-accent mb-4">
    Team Member
  </p>

  <h3 className="font-serif text-[clamp(32px,3.5vw,48px)] leading-[1.1] tracking-[-0.03em] mb-6">
    Kristen Hayford
  </h3>

  <p className="text-[14px] leading-[1.8] text-background/70">
    Bio coming soon.
  </p>
</div>
</div>
      </section>
*/}
    </main>
  );
}
