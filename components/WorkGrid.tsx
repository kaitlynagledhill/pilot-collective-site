import Image from "next/image";
import Link from "next/link";
import { workItems } from "@/content/work";

export default function WorkGrid() {
  const featuredItems = workItems.filter((item) => item.featured).slice(0, 3);

  return (
    <section
      id="work"
      className="px-[5vw] pt-[9vw] pb-[9vw] bg-background text-foreground"
    >
      <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-accent">
        Selected work
      </p>
      <h2 className="font-serif text-[clamp(50px,6vw,100px)] leading-[0.9] tracking-[-0.045em] mt-8 mb-16">
        Work with purpose.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredItems.map((item) => (
          <Link
            key={item.title}
            href={`/work/${item.slug}`}
            className="group bg-[#faf8f3] text-[#191817] p-4 block"
          >
            <div className="relative aspect-[3/2] bg-[#2f2a26] overflow-hidden">
              {item.image && (
                <Image
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
            <p className="font-sans text-[9px] tracking-[0.15em] uppercase text-[#777067] mt-5">
              {item.category}
            </p>
            <h3 className="font-serif text-4xl tracking-[-0.04em] my-2 transition-colors group-hover:text-accent">
              {item.title}
            </h3>
            <p className="font-sans text-[#746d64] leading-relaxed">
              {item.summary}
            </p>
          </Link>
        ))}
      </div>

      <div className="text-center mt-16">
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
