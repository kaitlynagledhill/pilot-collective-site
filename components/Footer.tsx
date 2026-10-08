export default function Footer() {
  return (
    <footer className="bg-[#191817] text-foreground px-[4.5vw] py-6 grid grid-cols-3 items-center text-[9px] tracking-[0.14em] uppercase max-[800px]:grid-cols-1 max-[800px]:gap-4 max-[800px]:py-7">
      <span className="justify-self-start max-[800px]:justify-self-center">
        Pilot Collective
      </span>

      <a
        href="https://www.instagram.com/pilot_collective/"
        target="_blank"
        rel="noopener noreferrer"
        className="justify-self-center flex items-center gap-2 hover:text-accent transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="18" cy="6" r="0.5" fill="currentColor" />
        </svg>
        Instagram
      </a>

      <a
        href="mailto:info@pilot-collective.com"
        className="justify-self-end max-[800px]:justify-self-center hover:text-accent transition-colors"
      >
        info@pilot-collective.com
      </a>

      <a
        href="https://kaitlyn-gledhill.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden max-[800px]:block justify-self-center translate-y-2 text-[7px] tracking-[0.08em] text-foreground/20 hover:text-foreground/40 transition-colors"
      >
        Designed &amp; developed by Kaitlyn Gledhill
      </a>
    </footer>
  );
}