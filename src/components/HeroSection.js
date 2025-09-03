"use client";
import { motion } from "framer-motion";

export default function HeroWithAbout() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url('/bg.jpg')` }}
      >
        {/* Hero Content */}
        <div className="relative flex flex-col items-center justify-center h-full px-6 text-center z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Welcome to{" "}
            <span className="text-[#d7d4d4] drop-shadow-lg">
              Tekzura Digital
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            We are a creative digital company helping brands grow online with
            modern IT solutions, web development, and digital innovation.
          </motion.p>

          <motion.p
            className="mt-4 text-base md:text-lg text-gray-300 max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            At Tekzura, we believe in creativity, technology, and strategy to
            transform your vision into reality.
          </motion.p>
        </div>

        {/* Waves (bottom of Hero) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <div className="relative w-full h-36 md:h-44">
            {/* Layer 1 */}
            <svg
              className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-fast"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120Z"
                fill="#aaa6a6ff"
                opacity="0.8"
              />
            </svg>

            {/* Layer 2 */}
            <svg
              className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-medium"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,70 C250,110 450,30 700,70 C950,110 1200,30 1450,70 L1450,120 L0,120Z"
                fill="#c4bebeff"
                opacity="0.6"
              />
            </svg>

            {/* Layer 3 */}
            <svg
              className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-slow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,80 C300,120 600,40 900,80 C1200,120 1500,40 1800,80 L1800,120 L0,120Z"
                fill="#ffffffff"
                opacity="0.4"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative bg-white py-24">
        {/* Waves at top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-16">
          <div className="relative w-full h-20 md:h-28">
            {/* Layer 1 */}
            <svg
              className="absolute top-0 left-0 w-[200%] h-full animate-wave-fast"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,0 L0,0Z"
                fill="#aaa6a6ff"
                opacity="0.8"
              />
            </svg>

            {/* Layer 2 */}
            <svg
              className="absolute top-0 left-0 w-[200%] h-full animate-wave-medium"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,70 C250,110 450,30 700,70 C950,110 1200,30 1450,70 L1450,0 L0,0Z"
                fill="#c4bebeff"
                opacity="0.6"
              />
            </svg>

            {/* Layer 3 */}
            <svg
              className="absolute top-0 left-0 w-[200%] h-full animate-wave-slow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,80 C300,120 600,40 900,80 C1200,120 1500,40 1800,80 L1800,0 L0,0Z"
                fill="#ffffffff"
                opacity="0.4"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <motion.h2
            className="text-2xl font-bold text-[#262a32] relative inline-block"
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="relative">
              <span className="absolute -left-6 top-0 w-4 h-0.5 bg-[#262a32]"></span>
              <span className="absolute -left-6 top-0 h-4 w-0.5 bg-[#262a32]"></span>
              About Us
              <span className="absolute -right-6 bottom-0 w-4 h-0.5 bg-[#262a32]"></span>
              <span className="absolute -right-6 bottom-0 h-4 w-0.5 bg-[#262a32]"></span>
            </span>
          </motion.h2>

          <motion.h3
            className="text-3xl md:text-4xl font-bold text-[#262a32] mt-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            We Make Creativity Work For Your Brand!
          </motion.h3>

          <motion.p
            className="mt-6 text-[#262a32] leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Ours Is A Team Of Creatives That Is Brainstorming On Great Ideas,{" "}
            <span className="font-semibold text-[#262a32]">All. The. Time.</span>
            <br />
            With Our Skills Put Together, You Get An Ensemble Capable Of Doing
            Anything And Everything Your Brand Needs.
          </motion.p>
        </div>
      </section>

      {/* Waves Animation */}
      <style jsx>{`
        @keyframes waveMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-wave-fast {
          animation: waveMove 6s linear infinite;
        }
        .animate-wave-medium {
          animation: waveMove 10s linear infinite;
        }
        .animate-wave-slow {
          animation: waveMove 16s linear infinite;
        }
      `}</style>
    </>
  );
}
