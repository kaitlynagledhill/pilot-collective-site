import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { workItems } from "@/content/work";

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = workItems.find((w) => w.slug === slug);

  if (!item) notFound();

  const media = item.media ?? [];

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="px-[7vw] pt-[11vw] pb-[5vw]">
        <Link
          href="/work"
          className="font-sans inline-block mb-8 text-[9px] tracking-[0.16em] uppercase text-foreground/50 hover:text-accent transition-colors"
        >
          ← All work
        </Link>

        <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-accent mb-6">
          {item.category}
        </p>
        <h1 className="font-serif text-[clamp(44px,6vw,92px)] leading-[0.96] tracking-[-0.04em] max-w-[900px]">
          {item.title}
        </h1>
      </section>

      {/* LEAD IMAGE */}
      {item.image && (
        <section className="px-[7vw] pb-[6vw]">
          <div
            className="relative aspect-[16/9] overflow-hidden"
            style={{ backgroundColor: item.imageBg ?? "#2f2a26" }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className={
                item.imageFit === "contain" ? "object-contain" : "object-cover"
              }
              style={{
                transform:
                  item.imageFit === "contain"
                    ? `scale(${item.scale ?? 1})`
                    : undefined,
                objectPosition: "center",
              }}
            />
          </div>
        </section>
      )}

      {/* BODY + SIDEBAR */}
      <section className="px-[7vw] pb-[8vw]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 md:gap-20">
          <div className="max-w-[720px]">
            {(item.body ?? [item.summary]).map((paragraph, i) => (
              <p
                key={i}
                className="font-sans text-lg leading-[1.8] text-foreground/75 mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="border-t border-foreground/15 pt-6 h-fit">
            <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-accent mb-3">
              Client
            </p>
            <p className="font-serif text-xl mb-6">{item.client}</p>

            <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-accent mb-3">
              Role
            </p>
            <p className="font-sans text-sm text-foreground/70 mb-6">
              {item.role}
            </p>

            {item.website && (
              <>
                <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-accent mb-3">
                  Explore
                </p>
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-foreground/70 hover:text-accent transition-colors"
                >
                  Visit Website →
                </a>
              </>
            )}

            {item.award && (
              <>
                <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-accent mb-3">
                  Recognition
                </p>
                <p className="font-sans text-sm text-foreground/70">
                  {item.award}
                </p>
              </>
            )}
          </aside>
        </div>
      </section>

      {/* MEDIA GALLERY */}
      {media.length > 0 && (
        <section className="bg-sand px-[7vw] py-[7vw]">
          <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-background/70 mb-8">
            Gallery
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {media.map((m, i) =>
              m.type === "image" ? (
                <div
                  key={i}
                  className="relative aspect-[4/3] bg-[#2f2a26] overflow-hidden"
                >
                  <Image
                    src={m.src}
                    alt={m.title ?? ""}
                    fill
                    className={
                      m.imageFit === "contain"
                        ? "object-contain"
                        : "object-cover"
                    }
                  />
                </div>
              ) : (
                <div
                  key={i}
                  className={media.length === 1 ? "md:col-span-2" : ""}
                >
                  {m.title && (
                    <p className="font-serif text-sm text-background mb-3">
                      {m.title}
                    </p>
                  )}

                  {m.type === "youtube" ? (
                    <iframe
                      src={m.src}
                      title={m.title ?? "YouTube video"}
                      className="w-full aspect-video bg-[#2f2a26]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={m.src}
                      controls
                      controlsList="nodownload"
                      disablePictureInPicture
                      className="w-full h-auto bg-[#2f2a26]"
                    />
                  )}
                </div>
              ),
            )}
          </div>
        </section>
      )}
    </main>
  );
}
