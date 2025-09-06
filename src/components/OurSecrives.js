"use client";
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
} from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

const services = [
  {
    title: "Web Development",
    desc: "Our world class web development team creates highly dynamic and fully responsive websites capable of outdoing your competition.",
    img: "/2.png",
  },
  {
    title: "App Development",
    desc: "Our professional iOS and Android development teams specialize in producing comprehensive apps catering to your specific business needs.",
    img: "/2.png",
  },
  {
    title: "Graphics Designing",
    desc: "Our highly skilled Graphic designers create unique logos, corporate profiles, mockups, cover/headers, Letterhead Pads, and other aesthetically appealing graphics to engage audience.",
    img: "/2.png",
  },
  {
    title: "Software Quality Assurance",
    desc: "Our Proficient SQA engineers are trained enough to develop, implement, and maintain test plans, cases, and scripts. Also performs end-to-end testing of applications by executing test cases and tracking test execution.",
    img: "/2.png",
  },
  {
    title: "Digital Marketing",
    desc: "Our digital marketing team has a bag full of tricks to showcase your business to your target audience, turning leads into prospects effortlessly.",
    img: "/2.png",
  },
];

export default function OurServices() {
  return (
    <section id="services" className="py-16 bg-[#dad7d7]">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <motion.h2
          className="text-2xl font-bold text-[#262a32] relative inline-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="relative">
            <span className="absolute -left-6 top-0 w-4 h-0.5 bg-[#262a32]"></span>
            <span className="absolute -left-6 top-0 h-4 w-0.5 bg-[#262a32]"></span>
            Our Services
            <span className="absolute -right-6 bottom-0 w-4 h-0.5 bg-[#262a32]"></span>
            <span className="absolute -right-6 bottom-0 h-4 w-0.5 bg-[#262a32]"></span>
          </span>
        </motion.h2>

        <p className="my-4 text-[#262a32]">
          We help you build high-quality digital solutions and products as well
          as deliver a wide range of related professional services. We are
          providing world-class service to our clients.
        </p>
      </div>

      {/* Service Cards */}
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-gray-700">
  {services.map((service, index) => (
    <div
      key={index}
      className="group relative bg-[#262a32] p-8 border border-gray-700 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundImage: `url(/laptop.png)` }}
      ></div>

      {/* Blue Overlay (semi-transparent so image stays visible) */}
      <div className="absolute inset-0 bg-[#0A1A3A]/70 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col h-full">
        <FaShieldAlt className="text-white text-3xl mb-5" />
        <h3 className="text-lg font-bold text-white mb-4">
          {service.title}
        </h3>
        <p className="text-sm text-gray-300 flex-grow mt-2 leading-relaxed">
          {service.desc}
        </p>

        <div className="mt-6">
          <button className="flex flex-col items-start text-[#dad7d7] border border-[#dad7d7] px-5 py-4 rounded-lg text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#dad7d7] hover:text-[#262a32]">
            <span className="leading-none font-semibold">Learn</span>
            <span className="flex items-center gap-1 leading-none">
              More <LuArrowUpRight className="text-lg" />
            </span>
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


      {/* Fixed Background Counters */}
      <div
        className="relative bg-fixed bg-center bg-cover mt-16"
        style={{ backgroundImage: `url('/bg1.jpg')` }}
      >
        <div className="bg-black/60 py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center text-white gap-8 px-6">
            <div>
              <FaClock className="text-4xl mx-auto mb-2" />
              <h3 className="text-3xl font-bold">13500</h3>
              <p className="text-sm mt-1">Working Hours</p>
            </div>
            <div>
              <FaGift className="text-4xl mx-auto mb-2" />
              <h3 className="text-3xl font-bold">720</h3>
              <p className="text-sm mt-1">Projects Completed</p>
            </div>
            <div>
              <FaUsers className="text-4xl mx-auto mb-2" />
              <h3 className="text-3xl font-bold">480</h3>
              <p className="text-sm mt-1">Happy Clients</p>
            </div>
            <div>
              <FaAward className="text-4xl mx-auto mb-2" />
              <h3 className="text-3xl font-bold">120</h3>
              <p className="text-sm mt-1">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
