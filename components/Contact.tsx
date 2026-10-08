export default function Contact() {
  return (
<section
  id="contact"
  className="bg-background text-foreground text-center px-[5vw] pt-[5vw] pb-4 max-[800px]:pb-[22vw]"
>
      <p className="text-[9px] tracking-[0.17em] uppercase text-accent">
        WHAT'S NEXT
      </p>
      <h2 className="font-serif text-[clamp(38px,5.8vw,88px)] leading-[1.05] tracking-normal max-w-[1000px] mx-auto mt-6 mb-8">
        Have a story to tell?
      </h2>

      <div className="w-12 h-[2px] bg-accent mx-auto mb-10" />

      <a
        href="/contact"
        className="inline-block border border-foreground px-5 py-3 text-[9px] tracking-[0.15em] uppercase hover:bg-accent hover:border-accent transition-colors"
      >
        Start a conversation
      </a>

<div className="mt-[7vw] translate-y-3 max-[800px]:hidden">
    <a
    href="https://kaitlyn-gledhill.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[7px] tracking-[0.08em] text-foreground/20 hover:text-foreground/40 transition-colors"
  >
    Designed &amp; developed by Kaitlyn Gledhill
  </a>
</div>
    </section>
  );
}
