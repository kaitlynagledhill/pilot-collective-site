import ProtectedImage from "@/components/ProtectedImage";
import ProtectedVideo from "@/components/ProtectedVideo";

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
      <section className="px-[7vw] pt-[11vw] pb-[5vw] max-[800px]:px-[6vw] max-[800px]:pt-[20vw] max-[800px]:pb-[10vw]">
        <Link
          href="/work"
          className="font-sans inline-block mb-8 max-[800px]:mb-6 text-[9px] tracking-[0.16em] uppercase text-foreground/50 hover:text-accent transition-colors"
        >
          ← All work
        </Link>

        <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-accent mb-6 max-[800px]:mb-5">
          {item.category}
        </p>

        <h1 className="font-serif text-[clamp(44px,6vw,92px)] max-[800px]:text-[clamp(42px,11vw,58px)] leading-[0.96] tracking-[-0.04em] max-w-[1300px]">
          {item.title}
        </h1>
      </section>

      {/* LEAD IMAGE */}
      {item.image && (
        <section className="px-[7vw] pb-[6vw] max-[800px]:px-[6vw] max-[800px]:pb-[10vw]">
          <div
            className="relative aspect-[16/9] overflow-hidden"
            style={{ backgroundColor: item.imageBg ?? "#2f2a26" }}
          >
            <ProtectedImage
              src={item.image}
              alt={item.title}
              fill
              className={
                item.imageFit === "contain"
                  ? "object-contain"
                  : "object-cover"
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

      {item.award && (
        <section className="px-[7vw] pb-[4vw] max-[800px]:px-[6vw] max-[800px]:pb-[8vw]">
          <p className="font-sans text-[10px] tracking-[0.1em] uppercase text-accent">
            {item.award}
          </p>
        </section>
      )}

      {/* BODY + SIDEBAR */}
      <section className="px-[7vw] pb-[8vw] max-[800px]:px-[6vw] max-[800px]:pb-[16vw]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 md:gap-20 max-[800px]:gap-12">
          <div className="max-w-[720px]">
            {(item.body ?? [item.summary]).map((paragraph, i) => (
              <p
                key={i}
                className="font-sans text-lg max-[800px]:text-[16px] leading-[1.8] text-foreground/75 mb-6"
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
          </aside>
        </div>
      </section>

      {/* MEDIA GALLERY */}
      {media.length > 0 && (
        <section className="bg-sand px-[7vw] py-[7vw] max-[800px]:px-[6vw] max-[800px]:py-[14vw]">
          <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-background/70 mb-8 max-[800px]:mb-6">
            Gallery
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-[800px]:gap-6">
            {media.map((m, i) =>
              m.type === "image" ? (
                <div
                  key={i}
                  className="relative aspect-[4/3] bg-[#2f2a26] overflow-hidden"
                >
                  <ProtectedImage
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
                  className={
                    media.length === 1 &&
                    !(m.type === "video" && m.orientation === "portrait")
                      ? "md:col-span-2"
                      : ""
                  }
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
                    <ProtectedVideo
                      src={m.src}
                      controls
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