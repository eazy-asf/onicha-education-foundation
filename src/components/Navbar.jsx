import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Stories", href: "/stories" },
  { label: "Events", href: "/events" },
  { label: "Totem", href: "/totem" },
  { label: "Board", href: "/board" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  function closeMenu() {
    setMenuOpen(false);
  }

  function isActive(path) {
    return location.pathname === path;
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between rounded-full border border-white/50 bg-paper/70 px-5 shadow-[0_12px_40px_rgba(16,20,24,0.08)] backdrop-blur-2xl sm:px-7 lg:px-8">
        {/* LOGO */}
        <Link
          to="/"
          className="group flex items-center gap-3 font-black tracking-tight"
          onClick={closeMenu}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/12 bg-paper p-2 shadow-[0_2px_10px_rgba(16,20,24,0.08)] transition-transform duration-300 group-hover:rotate-3 sm:h-12 sm:w-12">
            <img
              src="/magazine-pages/Frame%2047%20(1).svg"
              alt="Onicha Education Foundation logo"
              className="h-full w-full object-contain"
            />
          </span>

          <span className="hidden text-sm tracking-tight sm:inline">
            Onicha Education Foundation
          </span>
        </Link>
        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-6 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-ink/60 md:flex lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`relative py-2 transition-colors duration-300 ${
                isActive(item.href) ? "text-ink" : "hover:text-ink"
              }`}
            >
              {item.label}

              <span
                className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-300 ${
                  isActive(item.href) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}

          {/* MAIN ACTION */}
          <Link
            to="/get-involved"
            className="rounded-full bg-ink px-5 py-3 text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest"
          >
            Get Involved
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="rounded-2xl border border-ink/20 bg-paper/40 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.16em] transition-all duration-300 hover:bg-ink hover:text-paper md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="mx-auto mt-2 max-w-[1400px] rounded-3xl border border-white/50 bg-paper/85 px-5 py-5 shadow-[0_12px_40px_rgba(16,20,24,0.08)] backdrop-blur-2xl md:hidden"
        >
          <div className="grid gap-3 text-sm font-extrabold">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={closeMenu}
                className={`rounded-xl px-3 py-2 transition-colors ${
                  isActive(item.href) ? "bg-ink text-paper" : "hover:bg-ink/5"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/get-involved"
              onClick={closeMenu}
              className="rounded-xl bg-ink px-3 py-3 text-center text-paper"
            >
              Get Involved
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
