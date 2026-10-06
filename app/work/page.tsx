import Image from "next/image";
import Link from "next/link";
import { workItems } from "@/content/work";

export default function WorkPage() {
  return (
    <main className="bg-background text-foreground px-[7vw] pt-[11vw] pb-[10vw]">
      <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-accent mb-6">
        All work
      </p>
      <h1 className="font-serif text-[clamp(52px,7.5vw,108px)] leading-[0.96] tracking-[-0.04em] max-w-[1000px] mb-[6vw]">
        Work with purpose.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workItems.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className="group bg-[#faf8f3] text-[#191817] p-4 block"
          >
<div
  className="relative aspect-[3/2] overflow-hidden"
  style={{ backgroundColor: item.imageBg ?? "#2f2a26" }}
>
  {item.image && (
    <Image
      src={item.image}
      alt={item.title}
      fill
      className={
        item.imageFit === "contain"
          ? "object-contain"
          : "object-cover transition-transform duration-500 group-hover:scale-105"
      }
style={{
  transform:
    item.imageFit === "contain"
      ? `scale(${item.scale ?? 1})`
      : undefined,
  objectPosition: `center ${item.objectPositionY ?? "50%"}`,
}}
    />
  )}
</div>
            <p className="font-sans text-[9px] tracking-[0.15em] uppercase text-[#777067] mt-5">
              {item.category}
            </p>
            <h3 className="font-serif text-2xl tracking-[-0.03em] my-2 transition-colors group-hover:text-accent">
              {item.title}
            </h3>
            <p className="font-sans text-sm text-[#746d64] leading-relaxed">
              {item.summary}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}