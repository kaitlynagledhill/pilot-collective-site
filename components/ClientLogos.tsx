import Image from "next/image";
import { clients } from "@/content/clients";

export default function ClientLogos() {
  const featuredClients = clients.filter((client) => client.featured);

  return (
    <section id="collective" className="px-[5vw] py-[7vw] bg-background text-foreground">
      <p className="font-sans text-[9px] tracking-[0.17em] uppercase text-accent">
        A few of the worlds we&apos;ve worked across
      </p>
      <h2 className="font-serif text-[clamp(40px,5vw,80px)] leading-[0.9] tracking-[-0.045em] my-6">
        Media. Culture.
        <br />
        Social impact.
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-px border border-white/15 bg-white/15">
        {featuredClients.map((client) => (
<div
  key={client.name}
  className="h-[150px] bg-[#faf8f3] flex items-center justify-center p-8 transition-colors"
>
            {client.logo ? (
              <Image
                src={client.logo}
                alt={client.name}
                width={170}
                height={72}
                className="max-w-[170px] max-h-[72px] object-contain"
                style={{ 
                    mixBlendMode: "multiply", 
                    width: "auto", 
                    height: "auto",
                    transform: client.scale ? `scale(${client.scale})` : undefined,
                }}
                unoptimized
              />
            ) : (
              <p className="font-sans text-[11px] tracking-[0.05em] text-[#4a4540] text-center leading-snug">
                {client.name}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}