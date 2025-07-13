import React, { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav className="fixed w-full z-50 top-0 bg-gray-900/80 backdrop-blur border-b border-gray-800 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <a href="#hero" className="font-bold text-xl tracking-tight hover:text-blue-400">Arun Kumar</a>
        <div className="flex items-center gap-4">
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <span className={`block h-0.5 w-6 bg-white mb-1 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-white mb-1 ${open ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
          <button
            className="ml-2 p-2 rounded hover:bg-gray-800 transition"
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 1 1 6.707 2.707a8.001 8.001 0 0 0 10.586 10.586z"/></svg>
            ) : (
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm4.22 2.22a1 1 0 0 1 1.42 1.42l-.7.7a1 1 0 1 1-1.42-1.42l.7-.7zM18 9a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1zm-2.22 6.78a1 1 0 0 1-1.42 1.42l-.7-.7a1 1 0 1 1 1.42-1.42l.7.7zM10 16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm-6.22-1.22a1 1 0 0 1-1.42-1.42l.7-.7a1 1 0 1 1 1.42 1.42l-.7.7zM4 11a1 1 0 1 1 0-2H3a1 1 0 1 1 0 2h1zm2.22-6.78a1 1 0 0 1 1.42-1.42l.7.7a1 1 0 1 1-1.42 1.42l-.7-.7z"/></svg>
            )}
          </button>
        </div>
        <div className="hidden md:flex gap-6 ml-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-400 transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-400 transition"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
