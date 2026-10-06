export default function Footer() {
  return (
<footer className="bg-[#191817] text-foreground px-[4.5vw] py-6 grid grid-cols-3 items-center text-[9px] tracking-[0.14em] uppercase">
  <span className="justify-self-start">Pilot Collective</span>

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
    className="justify-self-end hover:text-accent transition-colors"
  >
    info@pilot-collective.com
  </a>
</footer>
  );
}