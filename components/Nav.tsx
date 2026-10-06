export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[80px] bg-background flex justify-between items-center px-[4.5vw] text-foreground">
      <a
        href="/"
        className="font-serif text-lg tracking-[-0.04em] border-b-2 border-accent pb-1"
      >
        PILOT COLLECTIVE
      </a>

<div className="flex gap-7 text-[9px] tracking-[0.15em] uppercase">
  <a href="/work">Work</a>
  <a href="/team">The Collective</a>
  <a href="/conversation">In the Conversation</a>
  <a href="/consultations">Consultations</a>
  <a href="/contact">Contact</a>
</div>
    </nav>
  );
}