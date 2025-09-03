"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Schott Watkins", role: "Web Developer", image: "/girl.jpg" },
  { name: "Nicole Bell", role: "Mobile Developer", image: "/girl.jpg" },
  { name: "John Doe", role: "Graphic Designer", image: "/girl.jpg" },
  { name: "Rose Matthews", role: "Web Designer", image: "/girl.jpg" },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#262a32] py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-14">
          Our <span className="text-sky-500">Team</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
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
              {/* Top-right sky blue circle with animation */}
              <motion.div
                className="absolute top-0 right-0 w-24 h-24 bg-[#5D688A] rounded-bl-full translate-x-4 -translate-y-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>

              {/* Bottom-left gray circle with animation */}
              <motion.div
                className="absolute bottom-0 left-0 w-24 h-24 bg-gray-300 rounded-tr-full -translate-x-4 translate-y-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              ></motion.div>

              {/* Circular Image */}
              <div className="relative w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg overflow-hidden z-10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <div className="z-10 relative mt-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sky-500 text-base font-medium mt-1">
                  {member.role}
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-6 mt-6 text-gray-600 z-10 relative">
                <a href="#" className="hover:text-sky-500 transition">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-sky-500 transition">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-sky-500 transition">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-sky-500 transition">
                  <FaLinkedinIn />
                </a>
              </div>

              {/* Reflection Shadow */}
              <div className="absolute left-6 right-6 bottom-[-72px] h-20 bg-gradient-to-t from-black/20 to-transparent transform scale-y-[-1] opacity-30 rounded-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
