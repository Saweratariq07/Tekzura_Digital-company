"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";

const projects = [
  {
    title: "Enterprise delivery platform",
    category: "Web · Cloud",
    outcome: "40% faster release cycles, unified admin and analytics.",
    tags: ["Next.js", "AWS", "CI/CD"],
  },
  {
    title: "Consumer finance companion app",
    category: "Mobile · Product",
    outcome: "Stable offline flows, biometric auth, and store compliance.",
    tags: ["React Native", "Security", "QA"],
  },
  {
    title: "Global brand relaunch",
    category: "Design · Growth",
    outcome: "New design system, site migration, and paid acquisition alignment.",
    tags: ["UI/UX", "Performance", "Ads"],
  },
];

export default function FeaturedWork() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden px-6 py-24 scroll-mt-[88px]"
      aria-labelledby="portfolio-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-[#C63C8E]/12 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#A32EE7]/14 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] [background-size:44px_44px] [background-image:linear-gradient(to_right,#C63C8E_1px,transparent_1px),linear-gradient(to_bottom,#C63C8E_1px,transparent_1px)]" />

      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          className="inline-flex rounded-full border border-[#C63C8E]/30 bg-gradient-to-r from-[#C63C8E]/10 to-[#A32EE7]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D5D9DD]"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.35 }}
        >
          Selected work
        </motion.p>

        <motion.h2
          id="portfolio-heading"
          className="mt-6 text-4xl font-bold leading-tight text-[#D5D9DD] md:text-5xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          Outcomes we ship
          <span className="mt-2 block bg-gradient-to-r from-[#C63C8E] via-[#A32EE7] to-[#C854D6] bg-clip-text text-transparent">
            for product-led teams
          </span>
        </motion.h2>

        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#A0A5A9] md:text-lg"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Representative engagements across engineering, mobile, and growth.
          Tell us about your stack and constraints—we&apos;ll map a delivery plan.
        </motion.p>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            className="group flex h-full flex-col rounded-2xl border border-[#C63C8E]/20 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C63C8E]/40 hover:shadow-[0_18px_44px_rgba(163,46,231,0.15)]"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#A0A5A9]">
              {project.category}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-[#D5D9DD]">
              {project.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#A0A5A9]">
              {project.outcome}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-[#C63C8E]/25 bg-[#0f0f15]/60 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-[#D5D9DD]/90"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#D5D9DD] transition-colors duration-200 hover:text-[#C854D6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C63C8E]"
            >
              Discuss a similar build
              <LuArrowUpRight className="text-base transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.article>
        ))}
      </div>

      <div className="mx-auto mt-14 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-[#C63C8E]/40 to-transparent" />
    </section>
  );
}
