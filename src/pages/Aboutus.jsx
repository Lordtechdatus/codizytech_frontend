import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

export default function About() {
  const highlights = [
    {
      title: "Who We Are",
      desc: "CodizyTech is a creative technology company passionate about turning ideas into impactful digital solutions that make a difference.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Our Vision",
      desc: "Empower businesses through innovation, design, and technology to build a smarter, connected, and sustainable digital future.",
      img: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Our Mission",
      desc: "Deliver scalable, efficient, and beautifully crafted web and mobile experiences that drive measurable growth and success.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Our Values",
      desc: "Integrity, innovation, collaboration, and excellence form the foundation of every project we build and deliver.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Our Team",
      desc: "A passionate mix of developers, designers, and strategists who believe in pushing the boundaries of technology and creativity.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Our Expertise",
      desc: "From AI to cloud, we harness next-gen technologies to craft digital ecosystems that redefine innovation.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn more about CodizyTech — our mission, values, and expertise in modern technology."
      />

      {/* 🌌 Background Gradient */}
      <div className="relative min-h-screen bg-gradient-to-br from-[#020617] via-[#030b2c] to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#00ffff33,transparent_60%)]"></div>

        {/* 🏢 Header Section */}
        <section className="container mx-auto px-6 py-24 text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-white">CodizyTech</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-neutral-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            We blend creativity, design, and cutting-edge technology to help
            startups and enterprises thrive in the modern digital world. Our
            journey is driven by passion, precision, and purpose.
          </motion.p>
        </section>

        {/* 💎 Highlight Cards */}
        <section className="container mx-auto px-6 grid md:grid-cols-3 sm:grid-cols-2 gap-8 pb-24 relative z-10">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* 🖼️ Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* 🧠 Text */}
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* 🚀 Footer Message */}
        <motion.div
          className="text-center py-10 border-t border-white/10 text-neutral-500 text-sm relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          © {new Date().getFullYear()} CodizyTech — Empowering Ideas with
          Technology.
        </motion.div>
      </div>
    </>
  );
}
