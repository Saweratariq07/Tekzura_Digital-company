"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaClock,
  FaGift,
  FaUsers,
  FaAward,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

const services = [
  {
    title: "Web Development",
    desc: "Fast, scalable, and responsive web platforms designed for conversion and long-term maintainability.",
    icon: FaLaptopCode,
    tag: "Engineering",
  },
  {
    title: "App Development",
    desc: "Native-feel Android and iOS apps with clean UX, stable performance, and robust architecture.",
    icon: FaMobileAlt,
    tag: "Mobile",
  },
  {
    title: "Graphics Designing",
    desc: "Brand systems, visual assets, and modern interfaces that communicate clearly and stand out.",
    icon: FaBullhorn,
    tag: "Creative",
  },
  {
    title: "Software Quality Assurance",
    desc: "Manual and automated QA pipelines that improve release confidence and reduce production risk.",
    icon: FaShieldAlt,
    tag: "Quality",
  },
  {
    title: "Digital Marketing",
    desc: "Performance campaigns, content strategy, and funnel optimization to drive measurable growth.",
    icon: FaBullhorn,
    tag: "Growth",
  },
  {
    title: "Cloud & DevOps",
    desc: "CI/CD pipelines, cloud infrastructure, and monitoring systems that keep your product reliable at scale.",
    icon: FaRocket,
    tag: "Infrastructure",
  },
];

const milestones = [
  {
    icon: FaClock,
    value: "13.5K+",
    label: "Working Hours",
  },
  {
    icon: FaGift,
    value: "720+",
    label: "Projects Completed",
  },
  {
    icon: FaUsers,
    value: "480+",
    label: "Happy Clients",
  },
  {
    icon: FaAward,
    value: "120+",
    label: "Awards Won",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function OurServices() {
  return (
    <section id="services" className="relative overflow-hidden py-24 px-6">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-[#C63C8E]/15 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-[#A32EE7]/18 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-[#C854D6]/12 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-size:44px_44px] [background-image:linear-gradient(to_right,#C63C8E_1px,transparent_1px),linear-gradient(to_bottom,#C63C8E_1px,transparent_1px)]" />

      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          className="inline-flex rounded-full border border-[#C63C8E]/30 bg-gradient-to-r from-[#C63C8E]/10 to-[#A32EE7]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D5D9DD]"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.35 }}
        >
          Our Services
        </motion.h2>

        <motion.h3
          className="mt-6 text-4xl font-bold leading-tight text-[#D5D9DD] md:text-6xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          Build, Launch,
          <span className="block bg-gradient-to-r from-[#C63C8E] via-[#A32EE7] to-[#C854D6] bg-clip-text text-transparent">
            and Scale with Confidence
          </span>
        </motion.h3>

        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#A0A5A9] md:text-lg"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          We craft high-impact digital products and growth systems that help
          brands move faster, deliver better experiences, and win in competitive
          markets.
        </motion.p>
      </div>

      {/* Service Cards */}
      <motion.div
        className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-[#C63C8E]/20 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C63C8E]/45 hover:shadow-[0_18px_44px_rgba(163,46,231,0.20)]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C63C8E] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mt-1 flex items-center justify-between gap-4">
                <span className="inline-flex whitespace-nowrap rounded-full border border-[#C63C8E]/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#A0A5A9]">
                  {service.tag}
                </span>

                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#C63C8E]/30 bg-[#C63C8E]/10 text-xl text-[#C854D6] transition-all duration-300 group-hover:border-[#A32EE7]/60 group-hover:bg-gradient-to-br group-hover:from-[#C63C8E]/30 group-hover:to-[#A32EE7]/30 group-hover:text-[#f5f5f7]">
                  <Icon />
                </div>
              </div>

              <h4 className="mt-6 text-2xl font-semibold text-[#D5D9DD]">
                {service.title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-[#A0A5A9] md:text-base">
                {service.desc}
              </p>

              <Link
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#D5D9DD] transition-colors duration-200 hover:text-[#C854D6]"
              >
                Learn More
                <LuArrowUpRight className="text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.article>
          );
        })}
      </motion.div>

      {/* Action strip */}
      <motion.div
        className="mx-auto mt-10 flex w-full max-w-7xl flex-col items-start justify-between gap-4 rounded-2xl border border-[#C63C8E]/25 bg-gradient-to-r from-[#C63C8E]/10 to-[#A32EE7]/10 p-6 md:flex-row md:items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.45 }}
      >
        <div>
          <h4 className="text-xl font-semibold text-[#D5D9DD]">
            Need a custom solution for your business?
          </h4>
          <p className="mt-1 text-sm text-[#A0A5A9]">
            Let us align strategy, design, and engineering for your next launch.
          </p>
        </div>

        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#C63C8E] via-[#A32EE7] to-[#C854D6] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_10px_24px_rgba(198,60,142,0.35)]"
        >
          Let&apos;s Talk
          <LuArrowUpRight className="text-base" />
        </Link>
      </motion.div>

      {/* Milestones */}
      <motion.div
        className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {milestones.map((item, idx) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="rounded-xl border border-[#C63C8E]/20 bg-white/[0.02] p-5 text-center backdrop-blur-sm"
            >
              <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#C63C8E]/15 text-[#C854D6]">
                <Icon className="text-lg" />
              </div>
              <p className="mt-3 text-2xl font-bold text-[#D5D9DD]">{item.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#A0A5A9]">
                {item.label}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom divider glow */}
      <div className="mx-auto mt-14 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-[#C63C8E]/40 to-transparent" />
    </section>
  );
}
