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
    <section id="faq" className="bg-[#dad7d7] py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.h2
            className="text-4xl font-bold text-[#262a32] relative inline-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="relative">
              <span className="absolute -left-6 top-0 w-4 h-0.5 bg-[#262a32]"></span>
              <span className="absolute -left-6 top-0 h-4 w-0.5 bg-[#262a32]"></span>
              FAQ&apos;s
              <span className="absolute -right-6 bottom-0 w-4 h-0.5 bg-[#262a32]"></span>
              <span className="absolute -right-6 bottom-0 h-4 w-0.5 bg-[#262a32]"></span>
            </span>
          </motion.h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-md shadow-lg overflow-hidden"
              >
                <div className="flex items-stretch h-[56px] sm:h-[60px]">
                  <div className="w-16 bg-black clip-right-notch flex justify-center items-center text-white">
                    {isOpen ? <FaMinus size={16} /> : <FaPlus size={16} />}
                  </div>

                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="flex-1 text-left bg-[#262a32] text-white uppercase font-semibold px-5 text-lg hover:opacity-90 transition-all duration-200"
                  >
                    {faq.question}
                  </button>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 py-5 border-t border-gray-200 text-gray-700 text-base leading-relaxed bg-white"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .clip-right-notch {
          clip-path: polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%);
        }
      `}</style>
    </section>
  );
}
