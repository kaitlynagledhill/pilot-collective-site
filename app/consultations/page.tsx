const jessicaConsultationBio =
  "Jessica Pilot is the founder of Pilot Collective and a veteran talent producer and partnership strategist. She spent six years booking celebrity guests for The Late Show with Stephen Colbert, where she worked with some of the most influential figures in entertainment, politics, and culture. Today, through Pilot Collective, Jessica leads talent partnership strategy for mission driven organizations including Zion National Park through the Zion Forever Project and Meals on Wheels America. In consultations, Jessica shares insight into talent booking, celebrity relations, media strategy, and how brands and nonprofits successfully collaborate with public figures.";

export default function ConsultationsPage() {
  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="px-[7vw] pt-[11vw] pb-[10vw] md:pt-[9vw] md:pb-[8vw]">
        <h1 className="font-serif text-[clamp(52px,7.5vw,108px)] leading-[0.96] tracking-[-0.04em] max-w-[1000px]">
          Industry
          <br />
          consultations.
        </h1>

        <p className="mt-8 max-w-[720px] text-[20px] leading-[1.5] text-foreground/70">
          One hour private consultations for individuals looking to better
          understand the entertainment, media, and talent partnership landscape.
        </p>

        <a
          href="mailto:jessica@pilot-collective.com"
          className="inline-block mt-9 text-[10px] tracking-[0.16em] uppercase border-b border-accent pb-2 hover:text-accent transition-colors"
        >
          Book a consultation
        </a>
      </section>

      {/* INTRO */}
      <section className="bg-foreground text-background px-[7vw] py-[5vw] md:py-[6vw]">
        <div className="max-w-[1000px] mx-auto text-center">
          <p className="font-serif text-[clamp(32px,3.5vw,50px)] leading-[1.12] tracking-[-0.025em]">
            Practical guidance. Real-world perspective. <br></br>A conversation
            tailored to your goals.
          </p>
        </div>

        <div className="mt-10 max-w-[780px] mx-auto text-left">
          <p className="font-sans text-[17px] leading-[1.8] text-background/70">
            Whether you are looking to break into the industry, pitch yourself
            or a project, refine your personal brand, or gain insight from
            professionals actively working in television, talent relations, and
            creative development, these sessions provide practical guidance and
            real world perspective.
          </p>

          <p className="font-sans mt-5 text-[17px] leading-[1.8] text-background/70">
            Each consultation is interactive and tailored to your goals. Topics
            may include navigating the casting process, positioning yourself for
            media opportunities, developing and pitching ideas, auditing your
            website or digital presence, and understanding how talent
            partnerships work across television, brands, and nonprofit
            campaigns.
          </p>
        </div>
      </section>

      {/* WHO IT'S FOR + WHAT YOU CAN GAIN — merged */}
      <section className="bg-sand text-background px-[7vw] py-[6vw]">
        <h2 className="font-serif text-[clamp(42px,5.5vw,76px)] leading-[1.02] tracking-[-0.04em] max-w-[1100px] mb-[6vw]">
          Who it&apos;s for, and what you&apos;ll gain.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* LEFT: Who it's for */}
          <div>
            <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-background/70 mb-8">
              Who these consultations are for
            </p>

            <ul>
              {[
                "Individuals interested in applying to or appearing on reality television",
                "Creators, influencers, or entrepreneurs looking to pitch themselves or their story",
                "Aspiring producers, casting professionals, or media executives seeking industry guidance",
                "People developing a television, digital, or social impact project and looking for strategic feedback",
                "Professionals interested in talent partnerships, celebrity engagement, or brand collaborations",
                "Anyone looking for clarity on how the entertainment and media landscape really works",
              ].map((item, i) => (
                <li
                  key={i}
                  className="py-6 border-b border-background/15 font-serif text-lg leading-[1.4]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: What you can gain */}
          <div>
            <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-background/70 mb-8">
              What you can gain
            </p>

            <ul>
              {[
                "Breaking into the entertainment and media industry",
                "How to pitch yourself for reality television or digital media opportunities",
                "Understanding how casting really works behind the scenes",
                "Positioning your personal story to stand out",
                "Website or personal brand audits",
                "Developing and pitching television or media concepts",
                "Navigating celebrity partnerships and talent outreach",
                "Career advice for producers, creators, and aspiring industry professionals",
              ].map((item, i) => (
                <li
                  key={i}
                  className="py-5 border-b border-background/15 font-serif text-lg leading-[1.4]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-foreground text-background px-[7vw] pt-[7vw] pb-[10.5vw] text-center">
        {" "}
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-[clamp(40px,5vw,72px)] leading-[1.05] tracking-[-0.035em]">
            Ready to start the conversation?
          </h2>

          <p className="mt-8 max-w-[700px] mx-auto text-[17px] leading-[1.7] text-background/70">
            One hour consultations are conducted virtually and scheduled based
            on availability.
          </p>

          <a
            href="mailto:jessica@pilot-collective.com"
            className="inline-block mt-8 font-serif text-[clamp(24px,3vw,40px)] tracking-[-0.02em] hover:text-accent transition-colors"
          >
            jessica@pilot-collective.com
          </a>
        </div>
      </section>
    </main>
  );
}
