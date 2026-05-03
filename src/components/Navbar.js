"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MOBILE_NAV_ID = "primary-mobile-nav";

/** Section order top → bottom (must match DOM ids on the home page). */
const SCROLL_SECTIONS = [
  { id: "about", name: "about" },
  { id: "services", name: "services" },
  { id: "portfolio", name: "portfolio" },
  { id: "team", name: "team" },
  { id: "faq", name: "faq" },
  { id: "contact", name: "contact" },
];

const HOME_SCROLL_MAX = 72;
/** Viewport line below fixed header — section is “active” once its top crosses this. */
const SECTION_TRIGGER_PX = 96;

function getScrollActiveSection() {
  if (typeof window === "undefined") return "home";
  if (window.scrollY < HOME_SCROLL_MAX) return "home";

  let active = "about";
  for (const { id, name } of SCROLL_SECTIONS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const { top } = el.getBoundingClientRect();
    if (top <= SECTION_TRIGGER_PX) active = name;
  }
  return active;
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollSection, setScrollSection] = useState("home");
  const [hoveredSection, setHoveredSection] = useState(null);

  const activeLink = hoveredSection ?? scrollSection;

  const links = [
    { name: "home", href: "/", label: "Home" },
    { name: "about", href: "#about", label: "About" },
    { name: "services", href: "#services", label: "Services" },
    { name: "portfolio", href: "#portfolio", label: "Portfolio" },
    { name: "team", href: "#team", label: "Team" },
    { name: "career", href: "/career", label: "Career" },
    { name: "contact", href: "#contact", label: "Contact" },
    { name: "faq", href: "#faq", label: "FAQ" },
  ];

  useEffect(() => {
    if (pathname === "/career") {
      setScrollSection("career");
      const onCareerScroll = () => setIsScrolled(window.scrollY > 80);
      onCareerScroll();
      window.addEventListener("scroll", onCareerScroll, { passive: true });
      return () => window.removeEventListener("scroll", onCareerScroll);
    }

    if (pathname !== "/") {
      setScrollSection("home");
      const onScrollOther = () => setIsScrolled(window.scrollY > 80);
      onScrollOther();
      window.addEventListener("scroll", onScrollOther, { passive: true });
      return () => window.removeEventListener("scroll", onScrollOther);
    }

    const tick = () => {
      setIsScrolled(window.scrollY > 80);
      setScrollSection(getScrollActiveSection());
    };

    tick();
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick);
    return () => {
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Desktop Link Component
  const DesktopLink = ({ link, index }) => {
    const isActive = activeLink === link.name;

    return (
      <motion.div
        key={index}
        className="relative group"
        onHoverStart={() => setHoveredSection(link.name)}
      >
        <Link
          href={link.href}
          className={`relative inline-block font-semibold text-sm tracking-wide px-3 py-2 rounded-md transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C854D6] ${
            isActive
              ? "text-transparent bg-clip-text bg-gradient-to-r from-[#C63C8E] via-[#A32EE7] to-[#C854D6]"
              : "text-[#D5D9DD] hover:text-[#f5f5f7]"
          }`}
          onClick={() => setHoveredSection(null)}
        >
          {link.label}

          {/* Animated underline */}
          <motion.span
            className="absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#C63C8E] via-[#A32EE7] to-[#C854D6] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: isActive ? "100%" : 0 }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* Hover glow effect */}
        <motion.div
          className="absolute -inset-2 bg-gradient-to-r from-[#C63C8E] via-[#A32EE7] to-[#C854D6] rounded-lg opacity-0 blur-lg group-hover:opacity-20 transition-opacity duration-300 -z-10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.2 }}
        />
      </motion.div>
    );
  };

  // Mobile Link Component
  const MobileLink = ({ link, index }) => {
    const isMobileActive = activeLink === link.name;
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.05 }}
        className="w-full"
      >
        <Link
          href={link.href}
          onClick={() => {
            setOpen(false);
            setHoveredSection(null);
          }}
          className={`relative block rounded-lg py-3 pl-5 pr-4 text-base font-semibold tracking-wide transition-colors duration-300 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C854D6] ${
            isMobileActive
              ? "bg-gradient-to-r from-[#C63C8E]/12 to-[#A32EE7]/8"
              : "text-[#D5D9DD] hover:bg-gradient-to-r hover:from-[#C63C8E]/10 hover:to-[#A32EE7]/10 hover:text-[#f5f5f7]"
          }`}
        >
          <span
            className={`absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-[#C63C8E] to-[#A32EE7] transition-opacity duration-300 ${
              isMobileActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
            aria-hidden
          />
          <span
            className={
              isMobileActive
                ? "bg-gradient-to-r from-[#C63C8E] via-[#A32EE7] to-[#C854D6] bg-clip-text text-transparent"
                : ""
            }
          >
            {link.label}
          </span>
        </Link>
      </motion.div>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b box-border transition-[background-color,backdrop-filter,box-shadow,border-color] duration-500 ${
        open || isScrolled
          ? "bg-gradient-to-b from-[#0f0f15]/95 to-[#1a1a24]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(198,60,142,0.08)] border-[#C63C8E]/6"
          : "bg-transparent border-transparent shadow-none"
      }`}
    >
      {/* Animated top border */}
      <motion.div
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-[#C63C8E] via-[#A32EE7] to-[#C854D6]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-[80px]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center h-full group rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C63C8E]"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Image
              src="/logo.webp"
              alt="Tekzura Logo"
              width={140}
              height={55}
              className="w-[140px] h-auto transition-all duration-300"
            />
            {/* Logo glow effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#C63C8E]/20 to-[#A32EE7]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex gap-2 h-full items-center"
          onMouseLeave={() => setHoveredSection(null)}
        >
          {links.map((link, i) => (
            <DesktopLink key={i} link={link} index={i} />
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.div
          className="hidden md:block ml-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="#contact"
            className="inline-flex gap-2 px-6 py-2.5 bg-gradient-to-r from-[#C63C8E] via-[#A32EE7] to-[#C854D6] text-white font-semibold text-sm tracking-wide rounded-lg transition-all duration-300 hover:shadow-[0_8px_24px_rgba(198,60,142,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get started
          </Link>
        </motion.div>

        {/* Mobile Toggle */}
        <motion.button
          type="button"
          className="md:hidden text-[#D5D9DD] z-50 relative p-2 rounded-lg hover:bg-[#C63C8E]/10 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C63C8E]"
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-expanded={open}
          aria-controls={MOBILE_NAV_ID}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <motion.div
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {open ? (
              <X size={28} strokeWidth={2.5} />
            ) : (
              <Menu size={28} strokeWidth={2.5} />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
              aria-hidden
            />

            {/* Mobile Menu Panel */}
            <motion.nav
              id={MOBILE_NAV_ID}
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-[80%] sm:w-[60%] h-screen bg-gradient-to-b from-[#0f0f15]/98 via-[#1a1a24]/95 to-[#0f0f15]/98 backdrop-blur-xl flex flex-col py-24 px-6 space-y-3 md:hidden z-40 border-l border-[#C63C8E]/20 shadow-2xl"
            >
              {/* Menu Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-6 pb-6 border-b border-[#C63C8E]/10"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-[#A0A5A9]">
                  Navigation
                </p>
              </motion.div>

              {/* Menu Links */}
              {links.map((link, i) => (
                <MobileLink key={i} link={link} index={i} />
              ))}

              {/* Mobile CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.05 + 0.1 }}
                className="mt-8 pt-6 border-t border-[#C63C8E]/10"
              >
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full justify-center py-3 bg-gradient-to-r from-[#C63C8E] via-[#A32EE7] to-[#C854D6] text-white font-semibold text-sm tracking-wide rounded-lg hover:shadow-[0_8px_24px_rgba(198,60,142,0.4)] transition-all duration-300 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </Link>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
