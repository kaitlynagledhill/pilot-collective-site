import ProtectedImage from "@/components/ProtectedImage";
import Link from "next/link";
import { workItems } from "@/content/work";

export default function WorkGrid() {
  const featuredItems = workItems.filter((item) => item.featured).slice(0, 3);

  return (
    <section
      id="work"
      className="px-[5vw] pt-[9vw] pb-[9vw] bg-background text-foreground max-[800px]:px-[6vw] max-[800px]:pt-[18vw] max-[800px]:pb-[18vw]"
    >
      <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-accent">
        Selected work
      </p>

      <h2 className="font-serif text-[clamp(50px,6vw,100px)] max-[800px]:text-[clamp(44px,12vw,58px)] leading-[0.9] tracking-[-0.045em] mt-8 mb-16 max-[800px]:mt-6 max-[800px]:mb-10">
        Work with purpose.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-[800px]:gap-5">
        {featuredItems.map((item) => (
          <Link
            key={item.title}
            href={`/work/${item.slug}`}
            className="group bg-[#faf8f3] text-[#191817] p-4 max-[800px]:p-3 block"
          >
            <div className="relative aspect-[3/2] bg-[#2f2a26] overflow-hidden">
              {item.image && (
                <ProtectedImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={
                    item.title === "The Adam Ray Show"
                      ? { objectPosition: "center 30%" }
                      : undefined
                  }
                />
              )}
            </div>

            <p className="font-sans text-[9px] tracking-[0.15em] uppercase text-[#777067] mt-5 max-[800px]:mt-4">
              {item.category}
            </p>

            <h3 className="font-serif text-4xl max-[800px]:text-[32px] tracking-[-0.04em] my-2 transition-colors group-hover:text-accent">
              {item.title}
            </h3>

            <p className="font-sans text-[#746d64] leading-relaxed">
              {item.summary}
            </p>
          </Link>
        ))}
      </div>

      <div className="text-center mt-16 max-[800px]:mt-12">
        <a
          href="/work"
          className="font-sans inline-block border border-foreground px-5 py-3 text-[9px] tracking-[0.15em] uppercase hover:bg-accent hover:border-accent transition-colors"
        >
          View all work
        </a>
      </div>
    </section>
  );
}