"use client";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 scroll-mt-[88px]"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-[#C63C8E]/14 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-[#A32EE7]/16 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[#C854D6]/10 blur-3xl" />
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
          Contact Us
        </motion.h2>

        <motion.h3
          className="mt-6 text-4xl font-bold leading-tight text-[#D5D9DD] md:text-6xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          Start the Conversation
          <span className="block bg-gradient-to-r from-[#C63C8E] via-[#A32EE7] to-[#C854D6] bg-clip-text text-transparent">
            with Tekzura
          </span>
        </motion.h3>

        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#A0A5A9] md:text-lg"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Share your goals, timeline, and scope. Our team will get back with a
          tailored plan to move your product forward.
        </motion.p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#C63C8E]/25 bg-white/[0.02] shadow-[0_18px_40px_rgba(15,15,21,0.45)]"
        >
          <div className="flex items-center justify-between border-b border-[#C63C8E]/20 px-5 py-3">
            <p className="text-sm font-semibold text-[#D5D9DD]">Our Location</p>
            <span className="text-xs uppercase tracking-widest text-[#A0A5A9]">
              Bahawalpur, PK
            </span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111256.73033521952!2d71.69001209999999!3d29.376940299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c46c611ad5%3A0xfcdf0da8e103f862!2sBahawalpur%2C%20Pakistan!5e0!3m2!1sen!2s!4v1777610547729!5m2!1sen!2s"
            width="100%"
            className="w-full flex-1 min-h-[360px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Tekzura Location"
          ></iframe>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-[#C63C8E]/25 bg-white/[0.02] p-8 backdrop-blur-sm"
        >
          <h4 className="text-2xl font-semibold text-[#D5D9DD]">Get in Touch</h4>
          <p className="mt-2 text-sm text-[#A0A5A9]">
            We reply within 24 hours with next steps.
          </p>

          <div className="mt-6 space-y-5">
            <label className="block text-sm font-medium text-[#D5D9DD]">
              Name
              <input
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-[#C63C8E]/20 bg-[#0f0f15]/80 px-4 py-3 text-sm text-[#D5D9DD] outline-none transition focus:border-[#C63C8E]/60 focus:ring-2 focus:ring-[#C63C8E]/20"
                placeholder="Your full name"
              />
            </label>

            <label className="block text-sm font-medium text-[#D5D9DD]">
              Contact Number
              <input
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-[#C63C8E]/20 bg-[#0f0f15]/80 px-4 py-3 text-sm text-[#D5D9DD] outline-none transition focus:border-[#C63C8E]/60 focus:ring-2 focus:ring-[#C63C8E]/20"
                placeholder="Phone number"
              />
            </label>

            <label className="block text-sm font-medium text-[#D5D9DD]">
              Email
              <input
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-[#C63C8E]/20 bg-[#0f0f15]/80 px-4 py-3 text-sm text-[#D5D9DD] outline-none transition focus:border-[#C63C8E]/60 focus:ring-2 focus:ring-[#C63C8E]/20"
                placeholder="you@example.com"
              />
            </label>

            <label className="block text-sm font-medium text-[#D5D9DD]">
              Your Message
              <textarea
                rows={4}
                required
                className="mt-2 w-full rounded-xl border border-[#C63C8E]/20 bg-[#0f0f15]/80 px-4 py-3 text-sm text-[#D5D9DD] outline-none transition focus:border-[#C63C8E]/60 focus:ring-2 focus:ring-[#C63C8E]/20"
                placeholder="Tell us about your project"
              ></textarea>
            </label>
          </div>

          <motion.button
            type="submit"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#C63C8E] via-[#A32EE7] to-[#C854D6] py-3 text-sm font-semibold text-white transition hover:shadow-[0_14px_28px_rgba(198,60,142,0.35)]"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      <div className="mx-auto mt-14 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-[#C63C8E]/40 to-transparent" />
    </section>
  );
}
