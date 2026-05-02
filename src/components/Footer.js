"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const socialLinks = [
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaTwitter, label: "X (Twitter)" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaLinkedinIn, label: "LinkedIn" },
  { Icon: FaGithub, label: "GitHub" },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="relative overflow-hidden border-t border-[#C63C8E]/20 bg-gradient-to-b from-[#0f0f15] via-[#121221] to-[#0b0b12] text-[#D5D9DD]">
      {/* Ambient background */}
      <motion.div
        className="absolute -top-20 left-20 h-40 w-40 rounded-full bg-[#C63C8E]/20 blur-3xl"
        animate={reduceMotion ? { scale: 1 } : { scale: [1, 1.2, 1] }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 7, repeat: Infinity }
        }
      />
      <motion.div
        className="absolute bottom-10 right-20 h-52 w-52 rounded-full bg-[#A32EE7]/20 blur-3xl"
        animate={reduceMotion ? { scale: 1 } : { scale: [1, 1.35, 1] }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 9, repeat: Infinity }
        }
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-size:44px_44px] [background-image:linear-gradient(to_right,#C63C8E_1px,transparent_1px),linear-gradient(to_bottom,#C63C8E_1px,transparent_1px)]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-4 relative z-10">
        {/* Brand */}
        <div>
          <Image src="/logo.webp" alt="Tekzura" width={150} height={60} />
          <p className="mt-4 text-sm text-[#A0A5A9]">
            Delivering modern, scalable, and high-performing digital solutions
            for ambitious teams.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#C63C8E]/30 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#A0A5A9]">
            Bahawalpur, PK
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#D5D9DD]">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-[#A0A5A9]">
            <li>
              <a
                href="#about"
                className="rounded transition hover:text-[#D5D9DD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C854D6]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="rounded transition hover:text-[#D5D9DD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C854D6]"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="rounded transition hover:text-[#D5D9DD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C854D6]"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="rounded transition hover:text-[#D5D9DD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C854D6]"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="rounded transition hover:text-[#D5D9DD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C854D6]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-[#D5D9DD]">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#A0A5A9]">
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-[#C854D6]" />
              <a
                href="https://www.google.com/maps/place/Bahawalpur,+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded transition hover:text-[#D5D9DD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C854D6]"
              >
                Bahawalpur, Pakistan
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-[#C854D6]" />
              <a
                href="mailto:contact@tekzura.com"
                className="rounded transition hover:text-[#D5D9DD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C854D6]"
              >
                contact@tekzura.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-[#C854D6]" />
              <a
                href="https://wa.me/923191628653"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded transition hover:text-[#D5D9DD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C854D6]"
              >
                +92 319 1628653
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-[#D5D9DD]">Newsletter</h3>
          <p className="mt-4 text-sm text-[#A0A5A9]">
            Get updates, tips, and the latest trends.
          </p>
          <form
            className="mt-4 flex flex-col gap-2 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              name="newsletter-email"
              autoComplete="email"
              placeholder="Your email"
              aria-label="Email for newsletter"
              className="w-full rounded-lg border border-[#C63C8E]/20 bg-[#0f0f15]/80 px-4 py-2 text-sm text-[#D5D9DD] outline-none transition focus:border-[#C63C8E]/60 focus:ring-2 focus:ring-[#C63C8E]/20"
            />
            <motion.button
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="shrink-0 rounded-lg bg-gradient-to-r from-[#C63C8E] via-[#A32EE7] to-[#C854D6] px-4 py-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C63C8E]/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 text-xs text-[#A0A5A9] md:flex-row">
          <p>© {new Date().getFullYear()} Tekzura. All Rights Reserved.</p>
          <div className="flex items-center gap-3 text-sm">
            {socialLinks.map(({ Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                onClick={(e) => e.preventDefault()}
                whileHover={{ y: -2 }}
                aria-label={`${label} (link not yet configured)`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#C63C8E]/25 text-[#A0A5A9] transition-all duration-200 hover:border-[#C63C8E]/55 hover:text-[#D5D9DD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C854D6]"
              >
                <Icon className="text-sm" aria-hidden />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
