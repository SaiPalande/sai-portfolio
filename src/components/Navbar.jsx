import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "certifications", label: "Certifications" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) =>
        document.getElementById(link.id)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-[#0B1120]/90 backdrop-blur-md border-b border-slate-800 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 lg:px-8 py-5">

        {/* Logo */}

        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-white cursor-pointer"
        >
          Sai<span className="text-cyan-400">.</span>
        </motion.h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 text-slate-300 font-medium">

          {links.map((link) => (
            <li key={link.id} className="relative">

              <a
                href={`#${link.id}`}
                className={`transition duration-300 ${
                  active === link.id
                    ? "text-cyan-400"
                    : "hover:text-cyan-400"
                }`}
              >
                {link.label}
              </a>

              {active === link.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-2 w-full h-[2px] bg-cyan-400 rounded-full"
                />
              )}

            </li>
          ))}

        </ul>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#111827] border-t border-slate-800"
          >

            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-4 transition ${
                  active === link.id
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {link.label}
              </a>
            ))}

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}

export default Navbar;