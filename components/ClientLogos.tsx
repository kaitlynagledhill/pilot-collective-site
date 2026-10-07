import ProtectedImage from "@/components/ProtectedImage";
import Link from "next/link";
import { clients } from "@/content/clients";

export default function ClientLogos() {
  const featuredClients = clients.filter((client) => client.featured);
  const nonprofitClients = featuredClients.filter(
    (c) => c.sector === "nonprofit"
  );
  const brandClients = featuredClients.filter((c) => c.sector === "brand");

  function renderGrid(list: typeof clients) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px border border-white/15 bg-white/15">
{list.map((client, index) => {
const tile = (
  <div
    className={`h-[150px] max-[800px]:h-[105px] bg-[#faf8f3] flex items-center justify-center p-8 max-[800px]:p-5 transition-colors hover:bg-white ${
      index === 9 ? "flex md:hidden" : ""
    }`}
  >
              {client.logo ? (
                <ProtectedImage
                  src={client.logo}
                  alt={client.name}
                  width={170}
                  height={72}
className="max-w-[170px] max-h-[72px] max-[800px]:max-w-[125px] max-[800px]:max-h-[52px] object-contain scale-[var(--logo-scale)] max-[800px]:scale-[var(--logo-mobile-scale)]"
style={{
  mixBlendMode: "multiply",
  width: "auto",
  height: "auto",
  "--logo-scale": client.scale ?? 1,
  "--logo-mobile-scale": client.mobileScale ?? client.scale ?? 1,
} as React.CSSProperties}
                  unoptimized
                />
              ) : (
                <p className="font-sans text-[11px] max-[800px]:text-[9px] tracking-[0.05em] text-[#4a4540] text-center leading-snug">
                  {client.name}
                </p>
              )}
            </div>
          );

          return client.workSlug ? (
            <Link
              key={client.name}
              href={`/work/${client.workSlug}`}
              className="block"
            >
              {tile}
            </Link>
          ) : (
            <div key={client.name}>{tile}</div>
          );
        })}
      </div>
    );
  }

  return (
    <section
      id="collective"
      className="px-[5vw] py-[7vw] bg-background text-foreground max-[800px]:px-[6vw] max-[800px]:py-[18vw]"
    >
      <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-accent">
        A few of the worlds we&apos;ve worked across
      </p>

      <h2 className="font-serif text-[clamp(40px,5vw,80px)] max-[800px]:text-[clamp(40px,11vw,54px)] leading-[0.9] tracking-[-0.02em] mt-6 mb-10 max-[800px]:mt-5 max-[800px]:mb-8">
        Media. Culture.
        <br />
        Social impact.
      </h2>

      {nonprofitClients.length > 0 && (
        <div className="mb-12 max-[800px]:mb-10">
          <p className="font-sans text-[9px] tracking-[0.15em] uppercase text-foreground/50 mb-4 max-[800px]:mb-3">
            Nonprofit &amp; Foundations
          </p>
          {renderGrid(nonprofitClients)}
        </div>
      )}

      {brandClients.length > 0 && (
        <div>
          <p className="font-sans text-[9px] tracking-[0.15em] uppercase text-foreground/50 mb-4 max-[800px]:mb-3">
            Brands
          </p>
          {renderGrid(brandClients)}
        </div>
      )}
    </section>
  );
}