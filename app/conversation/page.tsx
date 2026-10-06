import ProtectedImage from "@/components/ProtectedImage";

const press = [
  {
    publication: "B&H eXplora",
    title: "Path of Liberty: That Which Unites US",
    year: "2025",
    href: "https://static.bhphotovideo.com/explora/podcasts/photography/path-of-liberty-that-which-unites-us-with-daniella-vale-scott-beardslee",
  },
];

const projects = [
  {
    publication: "CBS · 2015–2021",
    title: "Lead Talent Comedy Producer",
    description:
      "For six years, Jessica led comedy talent for CBS's The Late Show, discovering and booking emerging stand-up comedians and helping bring their voices to one of late night's biggest stages.",
    image: "/images/clients/cbs.webp",
    imageBg: "#ffffff",
    imageScale: 1,
    imageFit: "contain",
  },
  {
    publication: "Path of Liberty",
    title: "That Which Unites US",
    description:
      "As Story Producer, Jessica worked with contributors across the country to shape the stories featured in a six-acre public art installation exploring the many perspectives that make up the American experience.",
    award: "Bronze, The Anthem Awards — Special Projects",
    href: "https://pathoflibertynyc.com/",
    image: "/images/conversation/path-of-liberty.jpeg",
    objectPositionY: "50%",
    imageScale: 1,
  },
  {
    publication: "Teen Vogue × Pivotal Ventures",
    title: "Hi Anxiety",
    description:
      "Jessica co-created and talent booked a social-impact series for teens that used candid conversations with young stars to make mental health feel more open, relatable, and worth talking about.",
    href: "https://www.teenvogue.com/story/lana-condor-awkwafina-anxiety-videos",
    image: "/images/conversation/hi-anxiety.webp",
    objectPositionY: "13%",
    imageScale: 1,
  },
  {
    publication: "The Village Voice",
    title: "This Is Stand-Up",
    description:
      "Jessica created and produced a 25-episode documentary series that followed stand-up comedians on and off stage, exploring the craft, challenges, and personal stories behind their work.",
    image: "/images/conversation/this-is-stand-up.png",
    objectPositionY: "50%",
    imageScale: 1.25,
  },
  {
    publication: "Netflix",
    title: "Dangerous World of Comedy",
    description:
      "Jessica served as Consulting Producer on Larry Charles' four-part documentary series exploring comedy and comedians around the world.",
    href: "https://www.netflix.com/title/80188051",
    image: "/images/clients/dangerous-world-of-comedy.jpg",
    objectPositionY: "50%",
    imageScale: 1.0,
  },
  {
    publication: "REFLECTIONS",
    title: "Processing the Pandemic",
    description:
      "Jessica co-created a public art and storytelling installation that brought together personal video testimonials and self-portraits to reflect on the lasting impact of the pandemic.",
    href: "https://www.instagram.com/reflections_2020/",
    image: "/images/clients/reflections.png",
    objectPositionY: "50%",
    imageScale: 1,
  },
];

const writing = [
  {
    publication: "NPR",
    title: "Hasan Minhaj on Homecoming King",
    year: "2015",
    href: "https://laist.com/news/npr-news/hasan-minhaj-of-daily-show-on-prom-indian-dads-and-white-folks-at-desi-weddings",
  },
  {
    publication: "Vanity Fair",
    title: "An Oral History of the Comedy Cellar",
    year: "2016",
    href: "https://www.vanityfair.com/hollywood/2016/03/comedy-cellar-oral-history",
  },
  {
    publication: "Vanity Fair",
    title: "Will Arnett on BoJack Horseman's Unlovable Lovability",
    year: "2015",
    href: "https://www.vanityfair.com/hollywood/2015/09/bojack-horseman-emmys-will-arnett-interview",
  },
  {
    publication: "Esquire",
    title:
      "Larry King on His Love of Comedy, Jon Stewart, and Why He Doesn't Think Brian Williams Will Ever Anchor Again",
    year: "2015",
    href: "https://www.esquire.com/entertainment/tv/interviews/a33320/larry-king-quotes/",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const posY = project.objectPositionY ?? "50%";
  const scale = project.imageScale ?? 1;

  return (
    <div className="bg-[#faf8f3] text-[#191817] p-4 max-[800px]:p-3 flex flex-col h-full">
      <div
        className="relative aspect-[3/2] overflow-hidden"
        style={{ backgroundColor: project.imageBg ?? "#2f2a26" }}
      >
        <ProtectedImage
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={
            project.imageFit === "contain"
              ? "object-contain"
              : "object-cover"
          }
          style={{
            objectPosition: `center ${posY}`,
            transform: scale !== 1 ? `scale(${scale})` : undefined,
            transformOrigin: `center ${posY}`,
          }}
        />
      </div>

      <div className="flex flex-col flex-1">
        <p className="font-sans text-[9px] tracking-[0.15em] uppercase text-[#777067] mt-5 max-[800px]:mt-4">
          {project.publication}
        </p>

        <h3 className="font-serif text-2xl max-[800px]:text-[22px] tracking-[-0.03em] my-2">
          {project.title}
        </h3>

        {project.award && (
          <p className="font-sans text-[10px] tracking-[0.1em] uppercase text-accent mb-4">
            {project.award}
          </p>
        )}

        <p className="font-sans text-sm text-[#746d64] leading-relaxed">
          {project.description}
        </p>

        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block self-start font-sans text-[9px] tracking-[0.15em] uppercase text-[#191817] mt-auto pt-5 border-b border-[#191817]/40 pb-1 transition-colors hover:border-accent hover:text-accent"
          >
            Explore ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function ConversationPage() {
  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="px-[7vw] pt-[11vw] pb-[7vw] md:pt-[9vw] md:pb-[6vw] max-[800px]:px-[6vw] max-[800px]:pt-[20vw] max-[800px]:pb-[12vw]">
        <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-accent mb-6">
          In the conversation
        </p>

        <h1 className="font-serif text-[clamp(52px,7.5vw,108px)] max-[800px]:text-[clamp(46px,12vw,60px)] leading-[0.96] tracking-[-0.04em] max-w-[1000px]">
          A career built
          <br />
          around people.
        </h1>

        <p className="font-sans mt-8 max-w-[750px] text-[18px] max-[800px]:text-[16px] leading-[1.6] text-foreground/70">
          Before Pilot Collective, Jessica spent over a decade in the rooms
          where talent and culture meet — booking comedy for late night,
          creating original series, and writing about the people who make
          entertainment work.
        </p>
      </section>

      {/* PRESS */}
      <section className="bg-sand text-background px-[7vw] py-[9vw] max-[800px]:px-[6vw] max-[800px]:py-[16vw]">
        <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-background/70 mb-6">
          In the press
        </p>

        <h2 className="font-serif text-[clamp(40px,5vw,80px)] max-[800px]:text-[clamp(40px,11vw,54px)] leading-[0.95] tracking-[-0.045em] max-w-[800px] mb-[5vw] max-[800px]:mb-8">
          Press &amp; features.
        </h2>

        {press.length > 0 && (
          <a
            href={press[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border-t border-b border-background/15 py-10 max-[800px]:py-7"
          >
            <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-background/50 mb-4">
              {press[0].publication} · {press[0].year}
            </p>

            <h3 className="font-serif text-[clamp(32px,4vw,48px)] max-[800px]:text-[clamp(30px,8.5vw,40px)] leading-[1.05] tracking-[-0.03em] max-w-[950px] group-hover:text-accent transition-colors">
              {press[0].title}
            </h3>

            <span className="font-sans inline-block mt-6 text-[9px] tracking-[0.15em] uppercase border-b border-background/40 pb-1 group-hover:border-accent group-hover:text-accent transition-colors">
              Read →
            </span>
          </a>
        )}

        {press.length > 1 && (
          <div className="flex flex-col mt-2">
            {press.slice(1).map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-center justify-between gap-2 py-6 border-b border-background/15"
              >
                <div>
                  <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-background/50 mb-2">
                    {item.publication} · {item.year}
                  </p>

                  <h3 className="font-serif text-xl md:text-2xl tracking-[-0.02em] group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                </div>

                <span className="font-sans text-[10px] tracking-[0.15em] uppercase shrink-0 border-b border-background/40 pb-1 group-hover:border-accent group-hover:text-accent transition-colors">
                  Read →
                </span>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* NOTABLE PROJECTS */}
      <section className="px-[7vw] py-[10vw] max-[800px]:px-[6vw] max-[800px]:py-[18vw]">
        <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-accent mb-6">
          Notable projects
        </p>

        <h2 className="font-serif text-[clamp(40px,5vw,80px)] max-[800px]:text-[clamp(40px,11vw,54px)] leading-[0.95] tracking-[-0.045em] max-w-[950px] mb-[5vw] max-[800px]:mb-8">
          Work worth talking about.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-[800px]:gap-5 items-stretch">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* SELECTED WRITING */}
      <section className="bg-sand text-background px-[7vw] py-[9vw] max-[800px]:px-[6vw] max-[800px]:py-[16vw]">
        <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-background/70 mb-6">
          Selected writing
        </p>

        <h2 className="font-serif text-[clamp(40px,5vw,80px)] max-[800px]:text-[clamp(40px,11vw,54px)] leading-[0.95] tracking-[-0.045em] max-w-[800px] mb-[4vw] max-[800px]:mb-8">
          From the archives.
        </h2>

        <div className="flex flex-col">
          {writing.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row md:items-center justify-between gap-2 py-6 max-[800px]:py-5 border-b border-background/15"
            >
              <div>
                <p className="font-sans text-[9px] tracking-[0.15em] uppercase text-background/50 mb-1">
                  {item.publication} · {item.year}
                </p>

                <h3 className="font-serif text-xl md:text-2xl tracking-[-0.02em] group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
              </div>

              <span className="font-sans text-[9px] tracking-[0.15em] uppercase mt-2 md:mt-0 border-b border-background/40 pb-1 self-start group-hover:border-accent group-hover:text-accent transition-colors">
                Read →
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}