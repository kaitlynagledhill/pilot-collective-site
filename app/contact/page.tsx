export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* CONTACT INTRO */}
      <section className="px-[7vw] pt-[18vw] pb-[12vw] md:pt-[13vw] md:pb-[10vw]">
        <p className="text-[9px] tracking-[0.17em] uppercase text-accent mb-7">
          GET IN TOUCH
        </p>

        <h1 className="font-serif text-[clamp(52px,7.5vw,108px)] leading-[0.96] tracking-[-0.04em] max-w-[1000px]">
          Let’s talk.
        </h1>

        <p className="mt-8 max-w-none text-[20px] leading-[1.55] text-foreground/70">
          {" "}
          Talent partnerships, creative collaborations, and new opportunities.
        </p>
      </section>

      {/* CONTACT DETAILS */}
      <section className="px-[7vw] pb-[15vw] md:pb-[10vw]">
        <div className="border-t border-foreground/20 pt-8 md:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[8vw]">
            {/* GENERAL */}
            <div>
              <p className="text-[9px] tracking-[0.17em] uppercase text-foreground/50 mb-5">
                General Inquiries
              </p>

              <a
                href="mailto:info@pilot-collective.com"
                className="font-serif text-[clamp(24px,3vw,42px)] tracking-[-0.025em] hover:text-accent transition-colors"
              >
                info@pilot-collective.com
              </a>
            </div>

            {/* JESSICA */}
            <div>
              <p className="text-[9px] tracking-[0.17em] uppercase text-foreground/50 mb-5">
                Jessica Pilot
              </p>

              <a
                href="mailto:jessica@pilot-collective.com"
                className="font-serif text-[clamp(24px,3vw,42px)] tracking-[-0.025em] hover:text-accent transition-colors"
              >
                jessica@pilot-collective.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
