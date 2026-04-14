import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Layers, Smartphone, Code, Megaphone, ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
// Removed Get Started button import (not used)
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", href: "/" },
  { label: "Our Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/");
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : ""
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {!isHomePage && (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border/60 bg-background/80 text-foreground hover:border-primary/40 hover:bg-primary/5 transition-colors"
              aria-label="Go back"
              title="Go back"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
          )}
          <a
            href="/"
            className="inline-flex items-center rounded-md px-2 py-1"
            aria-label="Aselea Network"
          >
            <img
              src="/assets/aselea-logo.svg"
              alt="Aselea Network"
              className="h-8 w-auto"
            />
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            (l.label === 'Contact' || l.label === 'Home' || l.label === 'Careers' || l.label === 'Our Team') ? (
              <a key={l.label} href={l.href} className="inline-block p-[1px] rounded-md bg-gradient-to-r from-pink-400 to-rose-500 transform hover:scale-105 transition-transform">
                <span className="block bg-background/80 dark:bg-background px-4 py-2 rounded-md text-foreground">
                  {l.label}
                </span>
              </a>
            ) : (
              <a key={l.label} href={l.href} className="hover:text-foreground transition-colors story-link">
                <span>{l.label}</span>
              </a>
            )
          ))}
        </nav>

          <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <div className="relative group">
            <a href="/services" title="Services" className="inline-block p-[1px] rounded-md bg-gradient-to-r from-pink-400 to-rose-500 transform hover:scale-105 transition-transform">
              <span className="flex items-center gap-2 px-3 py-1 bg-background/80 dark:bg-background rounded-md text-foreground">
                <Layers className="h-5 w-5" />
                <span className="hidden lg:inline">Services</span>
              </span>
            </a>

            <div className="absolute left-0 mt-2 w-48 bg-background border border-border/50 rounded-md shadow-lg p-2 hidden group-hover:block">
              <a href="/services" className="flex items-center gap-2 px-2 py-2 rounded hover:bg-accent/10">
                <Smartphone className="h-4 w-4" /> App Development
              </a>
              <a href="/services" className="flex items-center gap-2 px-2 py-2 rounded hover:bg-accent/10">
                <Code className="h-4 w-4" /> Web Development
              </a>
              <a href="/services" className="flex items-center gap-2 px-2 py-2 rounded hover:bg-accent/10">
                <Megaphone className="h-4 w-4" /> Digital Marketing
              </a>
            </div>
          </div>
          
          

          
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 px-6 py-6 flex flex-col gap-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {links.map((l) => (
            (l.label === 'Contact' || l.label === 'Home' || l.label === 'Careers' || l.label === 'Our Team') ? (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="inline-block w-full p-[1px] rounded-md bg-gradient-to-r from-pink-400 to-rose-500 transform hover:scale-105 transition-transform">
                <span className="block w-full text-center bg-background/80 dark:bg-background px-4 py-2 rounded-md text-foreground">
                  {l.label}
                </span>
              </a>
            ) : (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            )
          ))}

            <div className="pt-2 border-t border-border/30 flex items-center gap-4">
            <div>
                <a href="/services" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-md shadow-md transform hover:scale-105 transition-transform">
                  <Layers className="h-5 w-5" /> Services
                </a>
              <div className="ml-4 mt-1 flex flex-col gap-2">
                <a href="/services" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Smartphone className="h-4 w-4" /> App Development
                </a>
                <a href="/services" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Code className="h-4 w-4" /> Web Development
                </a>
                <a href="/services" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Megaphone className="h-4 w-4" /> Digital Marketing
                </a>
              </div>
            </div>
            
            
          </div>

          
          <div className="mt-3 flex justify-center">
            <ThemeToggle />
          </div>
        </motion.div>
      )}
      {/* Drawer removed — toolbar now uses anchors linking to sections/pages */}
    </motion.header>
  );
};

export default Navbar;
