import { useState } from "react";
import Brand from "../Brand/Brand";
import "./Header.css";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);
  const navClassName = menuOpen ? "header__nav header__nav--open" : "header__nav";

  return (
    <header className="header">
      <Brand onClick={closeMenu} />

      <button
        className="header__menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <span className="header__menu-line" />
        <span className="header__menu-line" />
      </button>

      <nav className={navClassName}>
        {navigationLinks.map((link) => (
          <a
            className="header__nav-link"
            href={link.href}
            onClick={closeMenu}
            key={link.href}
          >
            {link.label}
          </a>
        ))}
        <a
          className="header__nav-link header__nav-link--contact"
          href="#contact"
          onClick={closeMenu}
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
}

export default Header;
