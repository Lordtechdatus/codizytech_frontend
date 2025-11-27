import React, { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import SEO from "../components/SEO";

// 🔢 Animated Counter Component (FIXED)
function Counter({ from = 0, to, duration = 2 }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    animate(count, to, {
      duration,
      ease: "easeOut",
    });
  }, [to]);

  return <motion.span>{rounded}</motion.span>;
}

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
      img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80",

    },
    {
      title: "Our Values",
      desc: "Integrity, innovation, collaboration, and excellence form the foundation of every project we build and deliver.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
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
      <SEO title="About Us" description="Learn more about CodizyTech — our mission, values, and expertise." />

      <div className="relative min-h-screen bg-gradient-to-br from-[#020617] via-[#030b2c] to-black overflow-hidden">
        
        {/* Header Section */}
        <section className="container mx-auto px-6 py-24 text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About <span className="text-white">CodizyTech</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-neutral-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            We blend creativity, design, and cutting-edge technology to help startups and enterprises thrive.
          </motion.p>
        </section>
{/* Founder Section */}
<section className="container mx-auto px-6 py-24 relative z-10">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[30px] p-10 md:p-14 shadow-[0_0_40px_#00ffff20] relative overflow-hidden"
  >
    {/* Glow Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center relative z-10">

      {/* Left Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-4">
          Meet Our Founder
        </h2>

        <h3 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Pushpendra Prajapati
        </h3>

        <p className="text-neutral-300 leading-relaxed text-lg mb-4">
          A visionary entrepreneur, creative strategist, and technology
          innovator passionate about building meaningful digital experiences.
          With a strong belief in design-first development and intelligent
          automation, Pushpendra founded CodizyTech to empower businesses
          with next-gen digital transformation.
        </p>

        <p className="text-neutral-400 text-sm">
          His leadership continues to drive CodizyTech toward delivering
          world-class products with precision, performance, and purpose.
        </p>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center relative"
      >
        {/* Outer Glow Ring */}
        <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-400/40 to-cyan-600/20 blur-xl"></div>

        <motion.img
          src="/images/push.jpg"
          alt="Founder"
          whileHover={{ scale: 1.05, rotate: 0.5 }}
          transition={{ duration: 0.4 }}
          className="w-72 h-72 md:w-80 md:h-80 rounded-[28px] object-cover border border-white/20 shadow-xl relative z-10"
        />
      </motion.div>

    </div>
  </motion.div>
</section>


        {/* Highlight Cards */}
        <section className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition"
              >
                <img
                  src={item.img}
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-cyan-400">{item.title}</h3>
                  <p className="text-neutral-300 mt-2 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Our <span className="text-cyan-400">Impact</span> in Numbers
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Cards */}
            {[ 
              { label: "Happy Clients", value: 150 },
              { label: "Projects Delivered", value: 220 },
              { label: "Countries Served", value: 12 },
              { label: "Years Experience", value: 5 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl"
              >
                <h3 className="text-4xl font-bold text-cyan-400">
                  <Counter to={item.value} />+
                </h3>
                <p className="text-neutral-300 mt-2 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Partners */}
        {/*<section className="container mx-auto px-6 py-20 relative z-10">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Trusted By <span className="text-cyan-400">Leading Brands</span>
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center">
            {[
              "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
              "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
              "https://upload.wikimedia.org/wikipedia/commons/0/08/Spotify_logo_with_text.svg",
              "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            ].map((logo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-xl hover:border-cyan-400/40 transition flex items-center justify-center w-32 h-20">
                  <img src={logo} className="w-full h-full object-contain opacity-70 hover:opacity-100" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>*/}

        {/* Footer */}
        <motion.div className="text-center py-10 border-t border-white/10 text-neutral-500 text-sm">
          © {new Date().getFullYear()} CodizyTech — Empowering Ideas with Technology.
        </motion.div>

      </div>
    </>
  );
}
