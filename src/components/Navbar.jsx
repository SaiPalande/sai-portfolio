import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0B1120]/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 lg:px-8 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Sai<span className="text-cyan-400">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-slate-300 font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-[#111827] border-t border-slate-800">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-slate-300 hover:text-cyan-400"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-slate-300 hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-slate-300 hover:text-cyan-400"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-slate-300 hover:text-cyan-400"
          >
            Contact
          </a>

        </div>

      )}

    </nav>
  );
}

export default Navbar;