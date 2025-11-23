"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub 
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#262a32] via-[#1e293b] to-[#262a32] text-[#dad7d7] pt-20 relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-screen blur-2xl opacity-20"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-52 h-52 bg-sky-500 rounded-full mix-blend-screen blur-2xl opacity-20"
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Logo & Tagline */}
        <div>
          <Image src="/logo.webp" alt="Logo" width={150} height={150} />
          <p className="mt-4 text-[#dad7d7] text-sm">
            Delivering modern, scalable, and high-performing digital solutions 🚀
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#dad7d7]">Quick Links</h3>
          <ul className="space-y-2 text-[#dad7d7] text-sm">
            <li><a href="#about" className="hover:text-[#dad7d7]">About Us</a></li>
            <li><a href="#services" className="hover:text-[#dad7d7]">Services</a></li>
            <li><a href="#projects" className="hover:text-[#dad7d7]">Projects</a></li>
            <li><a href="#blog" className="hover:text-[#dad7d7]">Blog</a></li>
            <li><a href="#contact" className="hover:text-[#dad7d7]">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
      <div>
  <h3 className="text-lg font-semibold mb-4 text-sky-400">Contact</h3>
  <ul className="space-y-3 text-gray-300 text-sm">
    {/* Location */}
    <li className="flex items-center gap-2">
      <MdLocationOn className="text-sky-400" />
      <a 
        href="https://www.google.com/maps/place/Lahore,+Pakistan" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-sky-400 transition"
      >
        Lahore, Pakistan
      </a>
    </li>

    {/* Email */}
    <li className="flex items-center gap-2">
      <MdEmail className="text-sky-400" />
      <a 
        href="mailto:contact@tekzura.com" 
        className="hover:text-sky-400 transition"
      >
        contact@tekzura.com
      </a>
    </li>

    {/* Phone / WhatsApp */}
    <li className="flex items-center gap-2">
      <MdPhone className="text-sky-400" />
      <a 
        href="https://wa.me/923191628653" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-sky-400 transition"
      >
        +92 319 1628653
      </a>
    </li>
  </ul>
</div>


        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-sky-400">Newsletter</h3>
          <p className="text-gray-300 text-sm mb-3">Get updates, tips, and latest trends</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg text-gray-800 text-sm focus:ring-2 focus:ring-sky-400 outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2 bg-sky-500 hover:bg-sky-600 rounded-lg text-white text-sm font-medium"
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>

     

      {/* Bottom Bar */}
      <div className="mt-12 py-4 border-t border-gray-700 pt-6 relative z-10 flex flex-col md:flex-row justify-center items-center gap-8 px-6 text-gray-400 text-xs">
        <p>© {new Date().getFullYear()} Tekzura. All Rights Reserved.</p>
        {/* <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#privacy" className="hover:text-sky-400">Privacy Policy</a>
          <a href="#terms" className="hover:text-sky-400">Terms of Service</a>
          <a href="#careers" className="hover:text-sky-400">Careers</a>
          <a href="#sitemap" className="hover:text-sky-400">Sitemap</a>
        </div> */}
        {/* Social Icons */}
        <div className="flex gap-5 text-lg mt-4 md:mt-0">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.2, rotate: 8 }}
              className="hover:text-sky-400"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
