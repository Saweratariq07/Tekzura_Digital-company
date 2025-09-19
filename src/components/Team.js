"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const teamMembers = [
  { name: "Muhammad Aamir", role: "SEO & Web Specialist", image: "/amir bhai.png" },
  { name: "Muhammad Yasir", role: "Virtual Assistant ", image: "/yasir.jpg" },
  { name: "Sawera Malik", role: " Full stack Web Developer", image: "/sawera.jpg" },
  { name: "Fakhar Malik", role: "Python Developer", image: "/fakhar bhai.jpg" },

  // Extra members for View More
  { name: "Muhammad Sajjad", role: "Digital Marketing & SEO Expert", image: "/sajjad bhai.jpg" },
  { name: "Muhammad Mujahid", role: "Social Media Manager", image: "/mujahid bhai.jpg" },
  { name: "Muhammad Hassan", role: "Content Creator", image: "/hassan bhai.jpg" },
  { name: "Tahir Iqbal", role: "Project Manager", image: "/tahir bhai.png" },
];

export default function Team() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="team" className="bg-[#262a32] py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-14">
          Our <span className="text-sky-500">Team</span>
        </h2>

        {/* First 4 Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.slice(0, 4).map((member, idx) => (
            <TeamCard key={idx} member={member} idx={idx} />
          ))}
        </div>

        {/* Show More Row */}
        {showMore && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
            {teamMembers.slice(4, 8).map((member, idx) => (
              <TeamCard key={idx} member={member} idx={idx + 4} />
            ))}
          </div>
        )}

        {/* Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-3 bg-sky-500 text-white rounded-lg font-medium hover:bg-sky-600 transition"
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
}

// ✅ Reusable Card Component
function TeamCard({ member, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
      className="
        relative bg-white rounded-xl overflow-hidden p-8 text-center
        shadow-xl min-h-[380px] flex flex-col justify-between
        transition-all duration-500
      "
    >
      <motion.div
        className="absolute top-0 right-0 w-24 h-24 bg-[#5D688A] rounded-bl-full translate-x-4 -translate-y-4"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-24 h-24 bg-gray-300 rounded-tr-full -translate-x-4 translate-y-4"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      ></motion.div>

      <div className="relative w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg overflow-hidden z-10">
        <Image
          src={member.image}
          alt={member.name}
          width={128}
          height={128}
          className="object-cover"
        />
      </div>

      <div className="z-10 relative mt-6">
        <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
        <p className="text-sky-500 text-base font-medium mt-1">{member.role}</p>
      </div>

      <div className="flex justify-center gap-6 mt-6 text-gray-600 z-10 relative">
        <a href="#" className="hover:text-sky-500 transition"><FaFacebookF /></a>
        <a href="#" className="hover:text-sky-500 transition"><FaTwitter /></a>
        <a href="#" className="hover:text-sky-500 transition"><FaInstagram /></a>
        <a href="#" className="hover:text-sky-500 transition"><FaLinkedinIn /></a>
      </div>

      <div className="absolute left-6 right-6 bottom-[-72px] h-20 bg-gradient-to-t from-black/20 to-transparent transform scale-y-[-1] opacity-30 rounded-xl"></div>
    </motion.div>
  );
}
