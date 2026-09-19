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
    // <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between rounded-full border border-primary-dark/25 bg-surface/60 px-5 shadow-[0_12px_40px_rgba(16,20,24,0.08)] backdrop-blur-2xl sm:px-7 lg:px-8">
        {/* LOGO */}
        <Link
          to="/"
          className="group flex items-center gap-3 font-black tracking-tight"
          onClick={closeMenu}
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full  bg-surface p-1 shadow-[0_2px_10px_rgba(16,20,24,0.08)] transition-transform duration-300 group-hover:rotate-3 sm:h-14 sm:w-14">
            <img
              src="/magazine-pages/oef-logo(1).svg"
              alt="Onicha Education Foundation logo"
              className="h-full w-full object-contain"
            />
          </span>

          <span className="hidden text-lg text-primary tracking-tight sm:inline">
            Onicha Education Foundation
          </span>
        </Link>
        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-5 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-text-secondary lg:flex xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`relative py-2 transition-colors duration-300 ${
                isActive(item.href) ? "text-primary" : "hover:text-text"
              }`}
            >
              {item.label}

              <span
                className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-300 ${
                  isActive(item.href) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}

          {/* MAIN ACTION */}
          <Link
            to="/get-involved"
            className="rounded-full bg-primary px-5 py-3 text-surface transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark"
          >
            Get Involved
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="rounded-2xl border border-border bg-primary-light px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.16em] text-primary transition-all duration-300 hover:bg-primary hover:text-surface lg:hidden"
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
          className="mx-auto mt-2 max-w-[1400px] rounded-3xl border border-border bg-surface px-5 py-5 shadow-[0_12px_40px_rgba(16,20,24,0.08)] backdrop-blur-2xl lg:hidden"
        >
          <div className="grid gap-3 text-sm font-extrabold">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={closeMenu}
                className={`rounded-xl px-3 py-2 transition-colors ${
                  isActive(item.href)
                    ? "bg-primary text-surface"
                    : "text-text hover:bg-primary-light hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/get-involved"
              onClick={closeMenu}
              className="rounded-xl bg-primary px-3 py-3 text-center text-surface transition-colors hover:bg-primary-dark"
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
