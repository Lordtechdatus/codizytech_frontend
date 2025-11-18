import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const services = [
  {
    title: "Web & App Development",
    desc: "We build scalable, high-performance websites and applications that combine beautiful design with seamless functionality. From responsive frontends to powerful backend systems — we bring your ideas to life.",
    image:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&w=900&q=70&fm=webp",
  },
  {
    title: "Digital Marketing",
    desc: "Grow your brand with strategic digital marketing — from SEO, SEM, and social campaigns to data-driven content strategies that connect you with the right audience at the right time.",
    image:
   "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&w=900&q=70&fm=webp",
  },
  {
    title: "Thesis Writing Assistance",
    desc: "Our experts assist students and researchers with professional thesis writing, topic selection, data analysis, and formatting — ensuring your research stands out with quality and precision.",
    image:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&w=900&q=70&fm=webp",
  },
  {
    title: "Data Analysis & AI Solutions",
    desc: "Transform data into decisions. We provide end-to-end data analysis, dashboards, and predictive AI models to help businesses make informed, data-driven decisions.",
    image:
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&w=900&q=70&fm=webp",
  },
  {
    title: "Training & Internship Programs",
    desc: "Empowering the next generation of developers and analysts through hands-on training and internship opportunities in cutting-edge technologies like React, Python, and AI.",
    image:
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&w=900&q=70&fm=webp",
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore our professional digital services designed to empower your business."
      />

      {/* 🌌 Background */}
      <div className="relative min-h-screen overflow-hidden text-white bg-black">
        {/* Background layers */}
        <div className="absolute inset-0 bg-black z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/95 via-[#030b2c]/95 to-black/95 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.25),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(0,123,255,0.25),transparent_70%)] z-0"></div>

        {/* 🌟 Main Section */}
        <section className="container relative z-10 py-20">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>

          <motion.p
            className="mt-3 text-neutral-300 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            From web solutions to data-driven insights, we deliver innovation
            that accelerates business growth.
          </motion.p>

          {/* 🔹 Services Section */}
          <div className="mt-16 flex flex-col gap-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* 🖼️ Image */}
                <div className="md:w-1/2 w-full overflow-hidden rounded-2xl border border-cyan-400/30 shadow-[0_0_25px_rgba(0,255,255,0.2)] hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                </div>

                {/* 🧠 Text Content */}
                <div className="md:w-1/2 w-full">
                  <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 🚀 Footer */}
          <motion.div
            className="mt-20 text-center text-sm text-neutral-500 border-t border-white/10 pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            © {new Date().getFullYear()} CODIZYTECH — Empowering Ideas with
            Technology.
          </motion.div>
        </section>
      </div>
    </>
  );
}
