
"use client";

import { useState } from "react";

// Links used in both the desktop and mobile navigation
const links = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/team" },
  { label: "In the Conversation", href: "/conversation" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  // Tracks whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Main header stays at the top of the page */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-[80px] max-[800px]:h-[64px] bg-background flex justify-between items-center px-[4.5vw] text-foreground">
        {/* Logo links back to the homepage */}
        <a
          href="/"
          onClick={() => setMenuOpen(false)}
          className="font-serif text-xl max-[800px]:text-lg tracking-[-0.04em] border-b-2 border-accent pb-1"
        >
          PILOT COLLECTIVE
        </a>

        {/* Desktop navigation links, hidden on smaller screens */}
        <div className="flex gap-8 text-[10.5px] tracking-[0.14em] uppercase max-[800px]:hidden">
            {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Button that opens and closes the mobile menu */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="hidden max-[800px]:block text-[9px] tracking-[0.15em] uppercase hover:text-accent transition-colors"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Full-screen mobile menu, shown when menuOpen is true */}
      <div
        className={`fixed inset-0 z-40 bg-[#191817] text-[#faf8f3] transition-all duration-300 ease-out ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="h-full px-[7vw] pt-[110px] pb-[8vw] flex flex-col justify-between">
          {/* Mobile navigation links with larger text */}
          <nav>
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`group flex items-center border-b border-white/15 py-5 ${
                  index === 0 ? "border-t" : ""
                }`}
              >
                <span className="font-serif text-[clamp(30px,8vw,46px)] leading-none tracking-[-0.035em] transition-colors group-hover:text-[#F15922]">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          {/* Small tagline at the bottom of the mobile menu */}
          <p className="font-sans text-[8px] tracking-[0.16em] uppercase text-white/40">
            Talent partnerships · Culture · Impact
          </p>
        </div>
      </div>
    </>
  );
}