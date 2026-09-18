import { workItems } from "@/content/work";

const sizeClasses = {
  large: "md:col-span-2 md:row-span-2 h-[520px]",
  medium: "h-[330px]",
  small: "h-[240px]",
};

export default function WorkGrid() {
  return (
    <section id="work" className="px-[5vw] py-[9vw] bg-background text-foreground">
      <p className="text-[9px] tracking-[0.17em] uppercase text-muted">
        Selected work
      </p>
      <h2 className="font-serif text-[clamp(65px,10vw,145px)] leading-[0.8] tracking-[-0.075em] my-8">
        Work with purpose.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workItems.map((item) => (
          <article key={item.title} className="bg-[#faf8f3] text-[#191817] p-4">
            <div
              className={`bg-gradient-to-br from-[#463f3a] to-[#a99885] ${sizeClasses[item.size]}`}
            />
            <p className="text-[9px] tracking-[0.15em] uppercase text-[#777067] mt-5">
              {item.category}
            </p>
            <h3 className="font-serif text-4xl tracking-[-0.04em] my-2">
              {item.title}
            </h3>
            <p className="text-[#746d64] leading-relaxed">{item.summary}</p>
          </article>
        ))}
      </div>

      <div className="text-center mt-16">
        
        <a
          href="/work"
          className="inline-block border border-foreground px-5 py-3 text-[9px] tracking-[0.15em] uppercase hover:bg-accent hover:border-accent transition-colors"
        >
          View all work
        </a>
      </div>
    </section>
  );
}