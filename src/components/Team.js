"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

const teamMembers = [
  {
    name: "Muhammad Yasir",
    role: "Founder & CEO",
    tag: "Leadership",
    image: "/yasir.jpg",
  },
  {
    name: "Sawera Malik",
    role: "Full Stack Web Developer",
    tag: "Engineering",
    image: "/sawera.jpg",
  },
  {
    name: "Fakhar Malik",
    role: "AI & Python Developer",
    tag: "AI",
    image: "/fakhar bhai.jpg",
  },
  {
    name: "Muhammad Sajjad",
    role: "Digital Marketing & Automation Expert",
    tag: "Growth",
    image: "/sajjad bhai.jpg",
  },
  {
    name: "Muhammad Mujahid",
    role: "Social Media Manager",
    tag: "Brand",
    image: "/mujahid bhai.jpg",
  },
  {
    name: "Muhammad Hassan",
    role: "Content Creator",
    tag: "Creative",
    image: "/hassan bhai.jpg",
  },
  {
    name: "Tahir Iqbal",
    role: "Customer Support Specialist",
    tag: "Support",
    image: "/tahir bhai.png",
  },
];

export default function Team() {
  const [showMore, setShowMore] = useState(false);
  const hasMore = teamMembers.length > 6;

  const visibleMembers = useMemo(() => {
    if (showMore) {
      return teamMembers;
    }

    return teamMembers.slice(0, 6);
  }, [showMore]);

  return (
    <section id="team" className="relative overflow-hidden px-6 py-24">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-[#C63C8E]/14 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-[#A32EE7]/16 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#C854D6]/10 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] [background-size:44px_44px] [background-image:linear-gradient(to_right,#C63C8E_1px,transparent_1px),linear-gradient(to_bottom,#C63C8E_1px,transparent_1px)]" />

      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          className="inline-flex rounded-full border border-[#C63C8E]/30 bg-gradient-to-r from-[#C63C8E]/10 to-[#A32EE7]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D5D9DD]"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.35 }}
        >
          Our Team
        </motion.h2>

        <motion.h3
          className="mt-6 text-4xl font-bold leading-tight text-[#D5D9DD] md:text-6xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          Minds Behind the
          <span className="block bg-gradient-to-r from-[#C63C8E] via-[#A32EE7] to-[#C854D6] bg-clip-text text-transparent">
            Digital Execution
          </span>
        </motion.h3>

        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#A0A5A9] md:text-lg"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          We are strategists, developers, and creatives working together to
          turn ideas into reliable products and measurable growth.
        </motion.p>
      </div>

      <motion.div
        layout
        className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {visibleMembers.map((member, idx) => (
          <TeamCard key={member.name} member={member} idx={idx} />
        ))}
      </motion.div>

      {hasMore && (
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 rounded-lg border border-[#C63C8E]/35 bg-[#C63C8E]/10 px-5 py-3 text-sm font-semibold text-[#D5D9DD] transition-all duration-300 hover:border-[#C63C8E]/60 hover:bg-[#C63C8E]/15"
          >
            {showMore ? "Show Less" : "View Full Team"}
            <LuArrowUpRight className="text-base" />
          </button>
        </motion.div>
      )}

      <div className="mx-auto mt-14 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-[#C63C8E]/40 to-transparent" />
    </section>
  );
}

function TeamCard({ member, idx }) {
  const socialLinks = [
    { icon: FaFacebookF, label: "Facebook" },
    { icon: FaTwitter, label: "Twitter" },
    { icon: FaInstagram, label: "Instagram" },
    { icon: FaLinkedinIn, label: "LinkedIn" },
  ];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: Math.min(idx, 5) * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-[#C63C8E]/20 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-7 backdrop-blur-sm transition-all duration-300 hover:border-[#C63C8E]/45 hover:shadow-[0_18px_44px_rgba(163,46,231,0.18)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C63C8E] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex rounded-full border border-[#C63C8E]/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#A0A5A9]">
          {member.tag}
        </span>
        <span className="text-xs text-[#A0A5A9]">#{String(idx + 1).padStart(2, "0")}</span>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-[#C63C8E]/30 bg-[#0f0f15]">
          <Image
            src={member.image}
            alt={member.name}
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h4 className="text-xl font-semibold text-[#D5D9DD]">{member.name}</h4>
          <p className="mt-1 text-sm leading-relaxed text-[#A0A5A9]">{member.role}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        {socialLinks.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={`${member.name}-${item.label}`}
              href="#"
              aria-label={`${member.name} ${item.label}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#C63C8E]/25 bg-white/[0.02] text-[#A0A5A9] transition-all duration-200 hover:border-[#C63C8E]/55 hover:text-[#D5D9DD]"
            >
              <Icon className="text-sm" />
            </a>
          );
        })}
      </div>
    </motion.article>
  );
}
