"use client";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl shadow-2xl overflow-hidden border-4 border-white"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.7614858440217!2d75.85772537506149!3d22.73634527937305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd1e3b74ab05%3A0x2df46f7efc21c0!2sIndia!5e0!3m2!1sen!2s!4v1693829812345!5m2!1sen!2s"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-10 space-y-8"
        >
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Get in Touch
          </h2>

          {/* Input Wrapper with floating label */}
          <div className="relative">
            <motion.input
              type="text"
              required
              className="peer w-full px-4 pt-5 pb-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
              Name
            </label>
          </div>

          <div className="relative">
            <motion.input
              type="text"
              required
              className="peer w-full px-4 pt-5 pb-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
              Contact Number
            </label>
          </div>

          <div className="relative">
            <motion.input
              type="email"
              required
              className="peer w-full px-4 pt-5 pb-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
              Email
            </label>
          </div>

          <div className="relative">
            <motion.textarea
              rows="4"
              required
              className="peer w-full px-4 pt-5 pb-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></motion.textarea>
            <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-full text-lg font-semibold text-white shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 transition"
          >
            Send Message 🚀
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
