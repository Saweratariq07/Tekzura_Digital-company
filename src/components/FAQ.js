"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What Services Does Tekzura Digital Provide?",
    answer:
      "Tekzura Digital offers Web Development, Mobile App Development, UI/UX Design, Digital Marketing, and IT Consulting tailored to client needs.",
  },
  {
    question: "How Can I Apply for a Job at Tekzura Digital?",
    answer:
      "You can apply directly through our Careers Page by filling out the application form and uploading your resume.",
  },
  {
    question: "Does Tekzura Digital Provide Remote Job Opportunities?",
    answer:
      "Yes, depending on the role, we provide both on-site and remote job opportunities to support flexible working.",
  },
  {
    question: "Can Tekzura Digital Help Improve My Existing Website or App?",
    answer:
      "Absolutely! We specialize in redesigning, optimizing, and scaling existing websites and apps to make them faster, more secure, and user-friendly.",
  },
  {
    question: "What is the Usual Project Timeline?",
    answer:
      "Timelines vary depending on project complexity. A basic website may take 1–2 weeks, while larger digital solutions may take several months.",
  },
  {
    question: "How Does Tekzura Digital Handle Payments?",
    answer:
      "Payment terms are discussed during the proposal stage. Typically, a percentage is taken upfront, with milestones for the remaining payments.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden px-6 py-24 scroll-mt-[88px]"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-[#C63C8E]/14 blur-3xl" />
        <div className="absolute top-1/3 left-0 h-80 w-80 rounded-full bg-[#A32EE7]/16 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#C854D6]/10 blur-3xl" />
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
          FAQs
        </motion.h2>

        <motion.h3
          className="mt-6 text-4xl font-bold leading-tight text-[#D5D9DD] md:text-6xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          Clear Answers for
          <span className="block bg-gradient-to-r from-[#C63C8E] via-[#A32EE7] to-[#C854D6] bg-clip-text text-transparent">
            Confident Decisions
          </span>
        </motion.h3>

        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#A0A5A9] md:text-lg"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Everything you need to know about our services, timelines, and
          collaboration process.
        </motion.p>
      </div>

      <div className="mx-auto mt-12 max-w-4xl space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = activeIndex === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`rounded-2xl border bg-white/[0.02] backdrop-blur-sm transition-all duration-300 ${
                isOpen
                  ? "border-[#C63C8E]/50 shadow-[0_16px_32px_rgba(163,46,231,0.18)]"
                  : "border-[#C63C8E]/20 hover:border-[#C63C8E]/40"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${idx}`}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#A0A5A9]">
                    Question {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h4 className="mt-2 text-lg font-semibold text-[#D5D9DD] md:text-xl">
                    {faq.question}
                  </h4>
                </div>
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-all duration-200 ${
                    isOpen
                      ? "border-[#C63C8E]/60 bg-[#C63C8E]/15 text-[#C854D6]"
                      : "border-[#C63C8E]/25 bg-white/[0.02] text-[#A0A5A9]"
                  }`}
                >
                  {isOpen ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="px-6 pb-5 text-sm leading-relaxed text-[#A0A5A9] md:text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div className="mx-auto mt-14 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-[#C63C8E]/40 to-transparent" />
    </section>
  );
}
