"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#C63C8E]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#A32EE7]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-b from-[#C854D6]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(198, 60, 142, 0.05) 25%, rgba(198, 60, 142, 0.05) 26%, transparent 27%, transparent 74%, rgba(198, 60, 142, 0.05) 75%, rgba(198, 60, 142, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(198, 60, 142, 0.05) 25%, rgba(198, 60, 142, 0.05) 26%, transparent 27%, transparent 74%, rgba(198, 60, 142, 0.05) 75%, rgba(198, 60, 142, 0.05) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C63C8E]/30 bg-gradient-to-r from-[#C63C8E]/10 to-[#A32EE7]/10 backdrop-blur-sm">
            <Sparkles size={16} className="text-[#C63C8E]" />
            <span className="text-sm font-semibold text-[#D5D9DD] tracking-wide">
              Welcome to Tekzura Digital
            </span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          className="text-center mb-8"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-[#D5D9DD]">Transform Your</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C63C8E] via-[#A32EE7] to-[#C854D6] animate-pulse">
              Digital Vision
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          className="text-center text-lg md:text-xl text-[#A0A5A9] max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          We are a creative digital powerhouse crafting modern IT solutions,
          stunning web experiences, and innovative digital strategies to elevate
          your brand and drive meaningful growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-[#C63C8E] via-[#A32EE7] to-[#C854D6] text-white font-semibold rounded-lg flex items-center gap-2 group transition-all duration-300 hover:shadow-[0_20px_40px_rgba(198,60,142,0.3)]"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Project
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-[#C63C8E]/50 text-[#D5D9DD] font-semibold rounded-lg hover:border-[#C63C8E] hover:bg-[#C63C8E]/10 transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
          </motion.button>
        </motion.div>

        {/* Stats / Features Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "30+", label: "Team Members" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-lg border border-[#C63C8E]/20 bg-gradient-to-br from-[#C63C8E]/5 to-[#A32EE7]/5 backdrop-blur-sm hover:border-[#C63C8E]/50 transition-all duration-300 text-center"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C63C8E] to-[#A32EE7] mb-2">
                {stat.number}
              </h3>
              <p className="text-sm text-[#A0A5A9] font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 rounded-lg border-2 border-[#C63C8E]/20 opacity-50"
        animate={{ rotate: 360, y: [0, -20, 0] }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity },
        }}
      />
      <motion.div
        className="absolute bottom-32 left-10 w-16 h-16 rounded-full border-2 border-[#A32EE7]/20 opacity-50"
        animate={{ rotate: -360, y: [0, 20, 0] }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity },
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-br from-[#C854D6]/20 to-transparent rounded-lg opacity-30"
        animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </section>
  );
}
