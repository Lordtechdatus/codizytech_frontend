// FULL MERGED Home.jsx (Hero + App Mockup + All Sections)
// --- START ---

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { FaLightbulb, FaCogs, FaGem, FaHandshake } from "react-icons/fa";
import SEO from "../components/SEO";
import Footer from "../components/Footer";

// ============= Small Hook: Desktop Detection (for perf) =============
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => {
      if (typeof window !== "undefined") {
        setIsDesktop(window.innerWidth >= 768);
      }
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isDesktop;
};

// ============= Galaxy Stars BG (optimized) =============
const GalaxyStarsBackground = ({ count = 80 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const effectiveCount = isMobile ? Math.floor(count * 0.4) : count;

    const stars = [];
    for (let i = 0; i < effectiveCount; i++) {
      const star = document.createElement("div");
      const size = gsap.utils.random(1, 2.5);
      const color = ["#80dfff", "#00ffff", "#66ccff", "#99ffff"]
[
        Math.floor(Math.random() * 4)
      ];

      Object.assign(star.style, {
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        position: "absolute",
        top: `${gsap.utils.random(0, window.innerHeight)}px`,
        left: `${gsap.utils.random(0, window.innerWidth)}px`,
        borderRadius: "50%",
        opacity: Math.random(),
        boxShadow: `0 0 ${size * 5}px ${color}`,
      });

      container.appendChild(star);
      stars.push(star);

      gsap.to(star, {
        opacity: gsap.utils.random(0.3, 1),
        duration: gsap.utils.random(1.5, 3),
        repeat: -1,
        yoyo: true,
      });
    }

    return () => stars.forEach((s) => s.remove());
  }, [count]);

  return <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" />;
};

// ============= Animated Tech BG (desktop-only, optimized) =============
const AnimatedTechBackground = ({ count = 12 }) => {
  const ref = useRef(null);
  const techImages = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
  ];

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    if (isMobile) return; // no DOM / animations on mobile

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const elements = [];

    const effectiveCount = count; // already low

    for (let i = 0; i < effectiveCount; i++) {
      const img = document.createElement("img");
      const src = techImages[i % techImages.length];
      Object.assign(img.style, {
        width: "60px",
        height: "60px",
        position: "absolute",
        top: `${gsap.utils.random(0, screenHeight)}px`,
        left: `${gsap.utils.random(0, screenWidth)}px`,
        objectFit: "contain",
        opacity: 0.8,
        willChange: "transform",
      });
      img.src = src;
      container.appendChild(img);
      elements.push(img);

      gsap.to(img, {
        y: -screenHeight - 100,
        duration: gsap.utils.random(15, 30),
        repeat: -1,
        ease: "none",
        force3D: true,
        stagger: 0.2,
      });
      
    }

    return () => elements.forEach((el) => el.remove());
  }, [count, techImages]);

  // hidden on mobile by CSS bhi + logic upar bhi safe
  return <div ref={ref} className="hidden md:block absolute inset-0 overflow-hidden" />;
};

// ============= Typing Text =============
const TextType = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentText = text[textIndex];
    let timeout;
    if (isDeleting) {
      if (displayedText.length > 0) {
        timeout = setTimeout(
          () => setDisplayedText((p) => p.slice(0, -1)),
          30
        );
      } else {
        setIsDeleting(false);
        setTextIndex((p) => (p + 1) % text.length);
      }
    } else {
      if (index < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText((p) => p + currentText[index]);
          setIndex((p) => p + 1);
        }, 60);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
          setIndex(0);
        }, 1200);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, text, textIndex]);

  return (
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cyan-300 leading-tight">
  {displayedText}
</h1>


  
  );
};

// ============= Phone Mockup =============
const MobileMockup = () => {
  return (
    <motion.div
    className="relative border-gray-800 bg-gray-900 border-[10px] rounded-[2.3rem]
    h-[470px] w-[260px]
    sm:h-[528px] sm:w-[280px]
    shadow-[0_0_40px_rgba(0,255,255,0.25)]"
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-[110px] h-[20px] bg-gray-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl" />
      <div className="rounded-[1.8rem] overflow-hidden w-full h-full bg-black relative p-4 sm:p-5 space-y-2">
      <div className="flex items-center justify-between -mt-2">
  <h1 className="text-white font-bold text-lg sm:text-xl tracking-wide">
    CODIZYTECH
  </h1>
  <div className="relative w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <svg width="22" height="22" fill="white">
              <path d="M10 2C6 2 3 5.1 3 8.9v3.4l-1.5 2c-.4.6 0 1.4.8 1.4h15.4c.8 0 1.3-.9.8-1.4L18 12.3V8.9C18 5.1 14 2 10 2z" />
            </svg>
            <span className="absolute bg-red-500 w-2 h-2 right-0 top-0 rounded-full"></span>
          </div>
        </div>

        <div className="w-full h-32 sm:h-36 rounded-xl overflow-hidden relative bg-gradient-to-r from-purple-900 to-indigo-900 shadow-lg -mt-2">
          <img
            loading="lazy"
            decoding="async"
            src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=600&q=80&fm=webp"
            className="absolute inset-0 w-full h-full object-cover opacity-75"
            alt="Modern Solutions"
          />
          <div className="absolute bottom-6 left-2 text-white">
            <span className="bg-cyan-500 text-[9px] sm:text-[10px] px-2 py-0.5 rounded-lg font-semibold">
              TRENDING
            </span>
            <h2 className="text-sm sm:text-lg font-bold mt-1">
              Modern Solutions
            </h2>
            <p className="text-[10px] sm:text-xs text-gray-200">
              Building the future today.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 -mt-6">
          {[
            { label: "Development", icon: "💻" },
            { label: "AI Solution", icon: "⚙️" },
            { label: "Analytics", icon: "📊" },
            { label: "Security", icon: "🛡️" },
            { label: "Digital Marketing", icon: "📣" },
            { label: "Thesis Writing", icon: "📝" },
          ].map((item, i) => (
            <div
              className="bg-gray-900 border border-gray-700 rounded-xl p-2 sm:p-3 flex flex-col justify-between shadow-lg"
              key={i}
            >
              <div className="text-cyan-400 text-xl sm:text-2xl">
                {item.icon}
              </div>
              <p className="text-[11px] sm:text-sm text-white font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full flex justify-around text-gray-500 text-lg">
          <span className="text-cyan-400">💎</span>
          <span>📈</span>
          <span>👥</span>
          <span>⚙️</span>
        </div>
      </div>
    </motion.div>
  );
};

// ============= HERO SECTION (responsive, lighter) =============
function Hero() {
  const isDesktop = useIsDesktop();

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center md:justify-end bg-black overflow-hidden pb-20 md:pb-28">
      <GalaxyStarsBackground count={isDesktop ? 180 : 80} />
      {isDesktop && <AnimatedTechBackground count={10} />}

      {/* PHONE */}
      <div className="absolute top-16 sm:top-10 md:top-[6%] flex justify-center w-full pointer-events-none">
        <div className="pointer-events-auto">
          <MobileMockup />
        </div>
      </div>

      {/* TEXT */}
      <div className="relative z-10 text-center container mx-auto px-4 
pt-[500px] sm:pt-[520px] md:pt-0 md:translate-y-32">

        <TextType text={["Empowering", "Ideas", "with", "CODIZYTECH"]} />
        <p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-xl mx-auto">
          
        </p>
      </div>
    </section>
  );
}

/* 🌟 About CodizyTech Section — Updated Version */
function AboutUsSection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-black border-t border-cyan-500/20 overflow-hidden">
      <GalaxyStarsBackground count={90} />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.1)] border border-cyan-400/30"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            loading="lazy"
            decoding="async"
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80&fm=webp"
            alt="About CodizyTech"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-transparent" />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-200 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            About <span className="text-cyan-400">CodizyTech</span>
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            At <span className="text-cyan-400 font-semibold">CodizyTech</span>,
            we don’t just build technology — we build digital ecosystems that
            empower innovation, accelerate growth, and transform businesses for
            the future.
          </p>

          <div className="space-y-4 mt-4">
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl sm:text-2xl">🚀</span>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                  Our Mission
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  To empower startups and enterprises with creative digital
                  solutions that drive measurable results.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl sm:text-2xl">💡</span>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                  Our Expertise
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  From{" "}
                  <span className="text-cyan-400">Web & App Development</span>{" "}
                  to <span className="text-cyan-400">AI, Data, and Marketing</span>, 
                  we ship high-performance solutions with precision.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl sm:text-2xl">🌍</span>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                  Our Vision
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  To be a global name in tech innovation — where creativity
                  meets technology to make a real impact.
                </p>
              </div>
            </div>
          </div>

          <a
            href="/about"
            className="inline-block mt-6 px-7 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm sm:text-base font-semibold hover:scale-105 transition shadow-lg"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* 💼 Our Services Section */
function ServicesSection() {
  const navigate = useNavigate();
  const services = [
    {
      icon: "💻",
      title: "Web & App Development",
      desc: "Modern, scalable and responsive applications.",
    },
    {
      icon: "📊",
      title: "Data Analysis",
      desc: "Transform raw data into actionable insights.",
    },
    {
      icon: "🚀",
      title: "Digital Marketing",
      desc: "SEO, SMM and strategy for your brand growth.",
    },
    {
      icon: "🧠",
      title: "AI & Automation",
      desc: "AI solutions that save time and boost output.",
    },
    {
      icon: "📚",
      title: "Research & Thesis",
      desc: "Expert support for academic research and writing.",
    },
    {
      icon: "🎓",
      title: "Training & Internship",
      desc: "Hands-on, industry-focused learning programs.",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-black border-t border-cyan-500/20 overflow-hidden">
      <GalaxyStarsBackground count={90} />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-300 mb-4 sm:mb-6"

          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <p className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-10 sm:mb-12">
          Empowering innovation with a complete suite of digital and technical
          services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="relative p-6 sm:p-7 rounded-2xl bg-black/80 border border-cyan-400/20 shadow-xl backdrop-blur-sm hover:border-cyan-400/50 hover:shadow-cyan-400/30 transition-all duration-500"

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{s.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-2">
  {s.title}
</h3>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-5">
                {s.desc}
              </p>
              <button
                onClick={() => navigate("/services")}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-400 text-white text-sm sm:text-base font-medium hover:scale-105 transition shadow-lg"

              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 💎 Why Choose Us Section */
function WhyChooseUsSection() {
  const features = [
    {
      icon: (
        <FaLightbulb className="text-cyan-300 text-3xl drop-shadow-[0_0_10px_#00ffff]" />
      ),
      title: "Innovative Solutions",
      desc: "We use next-gen technologies and creative ideas to deliver standout products.",
    },
    {
      icon: (
        <FaCogs className="text-cyan-300 text-3xl drop-shadow-[0_0_10px_#00ffff]" />
      ),
      title: "Proven Efficiency",
      desc: "Our streamlined process ensures both speed and quality — without compromise.",
    },
    {
      icon: (
        <FaGem className="text-cyan-300 text-3xl drop-shadow-[0_0_10px_#00ffff]" />
      ),
      title: "Long-Term Value",
      desc: "We build solutions that are scalable, secure and ready to grow with you.",
    },
    {
      icon: (
        <FaHandshake className="text-cyan-300 text-3xl drop-shadow-[0_0_10px_#00ffff]" />
      ),
      title: "Trusted Partnership",
      desc: "We collaborate closely, ensuring transparency, trust and shared success.",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-black border-t border-cyan-500/20 overflow-hidden">
      <GalaxyStarsBackground count={80} />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl grid md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
        {/* Left Column */}
        <div className="space-y-6">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose <span className="text-cyan-400">CodizyTech?</span>
          </motion.h2>

          {features.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-black/80 border border-cyan-400/20 shadow-[0_0_20px_rgba(0,255,255,0.05)] hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(0,255,255,0.25)] backdrop-blur-md transition-all duration-500"

              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="p-3 bg-black/60 border border-cyan-400/30 rounded-xl border border-cyan-500/30 shadow-inner flex items-center justify-center">
                {item.icon}
              </div>
              <div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
  {item.title}
</h3>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mt-1">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Image */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.15)] border border-cyan-400/30 mt-6 md:mt-0"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            loading="lazy"
            decoding="async"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80&fm=webp"
            alt="Why Choose Us"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

/* 📸 Gallery Section */
function GallerySection() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-black border-t border-cyan-500/20 overflow-hidden">
      <GalaxyStarsBackground count={70} />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.h2
         className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-300 mb-8 sm:mb-12"

          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Gallery(Updating soon….)
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-xl group border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
             <img
  loading="lazy"
  decoding="async"
  src={`${src}?auto=format&fit=crop&w=800&q=80&fm=webp`}
  alt={`Gallery ${i + 1}`}
  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
/>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 💼 Offerings */
function OfferingsSection() {
  const offerings = [
    {
      title: "Custom Web Solutions",
      desc: "Pixel-perfect, scalable web apps tailored to your brand.",
      img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80&fm=webp",
      btn: "Get Started",
      link: "/services#web",
    },
    {
      title: "AI & Data Analytics",
      desc: "Make smarter decisions with next-gen data insights.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80&fm=webp",
      btn: "Learn More",
      link: "/services#data",
    },
    {
      title: "Digital Marketing",
      desc: "Amplify your digital presence with powerful strategies.",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80&fm=webp",
      btn: "Explore",
      link: "/services#marketing",
    },
    {
      title: "Training & Internship",
      desc: "Gain hands-on experience with our guided programs.",
      img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80&fm=webp",
      btn: "Join Now",
      link: "/career",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-black border-t border-cyan-500/20 overflow-hidden">
    <GalaxyStarsBackground count={80} />
  
      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-300 mb-8 sm:mb-12">
          Our Offerings Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {offerings.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gradient-to-b from-white/5 to-black/80 border border-cyan-400/20 overflow-hidden hover:shadow-cyan-400/40 transition-all"
            >
              <img
                loading="lazy"
                decoding="async"
                src={item.img}
                alt={item.title}
                className="w-full h-44 sm:h-48 object-cover"
              />
          <div className="p-5 sm:p-6 text-center">
          <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-2">

    {item.title}
  </h3>
  <p className="text-neutral-300 text-sm sm:text-base mb-4">
    {item.desc}
  </p>

  <a
    href={item.link}
    className="px-5 py-2 rounded-full bg-black border border-cyan-100 text-cyan-300 text-sm sm:text-base font-medium hover:bg-cyan-500/10 hover:border-cyan-300 transition shadow-md hover:shadow-cyan-400/20"

  >
    {item.btn}
  </a>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 🌠 Updated Banner Section (responsive height + lazy) */
function BannerSection({ img }) {
  return (
    <section className="w-full overflow-hidden bg-black px-0">
      <div className="relative w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[400px]">
        <img
          src={img}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-contain object-center scale-100"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}


/* 💬 WhatsApp Floating Button */
const WhatsAppButton = () => (
  <motion.div
    className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
    initial={{ scale: 0 }}
    animate={{ scale: [0, 1.15, 1], transition: { duration: 0.6 } }}
  >
    <span className="absolute inset-0 flex items-center justify-center">
      <span className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#25D366]/30 animate-ping" />
      <span className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#25D366]/20 animate-ping delay-150" />
      <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#25D366]/10 animate-ping delay-300" />
    </span>

    <motion.a
      href="https://wa.me/918770182940"
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#25D366] shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:shadow-[0_0_40px_rgba(37,211,102,0.8)] transition-all duration-300"
      whileHover={{
        scale: 1.08,
        boxShadow: "0 0 45px rgba(37,211,102,0.9)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-6 h-6 sm:w-8 sm:h-8"
      >
        <path d="M16.001 3.2c-7.062 0-12.8 5.738-12.8 12.8 0 2.256.597 4.465 1.734 6.403L3.2 28.8l6.531-1.716A12.738 12.738 0 0 0 16 28.8c7.062 0 12.8-5.738 12.8-12.8S23.063 3.2 16.001 3.2zm6.541 18.472c-.272.767-1.6 1.419-2.239 1.453-.597.035-1.362.05-2.198-.15-.504-.12-1.151-.374-1.982-.733-3.487-1.51-5.75-4.976-5.925-5.209-.173-.233-1.413-1.877-1.413-3.579 0-1.701.893-2.541 1.21-2.888.317-.346.693-.433.924-.433.231 0 .462.002.665.012.213.01.497-.08.778.594.272.665.925 2.308 1.007 2.475.083.173.138.374.025.607-.11.233-.166.374-.317.578-.15.203-.317.457-.453.61-.15.173-.308.362-.132.696.173.334.769 1.267 1.652 2.053 1.136 1.014 2.093 1.334 2.426 1.508.334.173.526.15.718-.091.192-.231.834-.971 1.057-1.304.223-.334.446-.28.749-.163.308.12 1.944.917 2.278 1.083.334.166.557.25.638.385.086.138.086.798-.186 1.565z" />
      </svg>
    </motion.a>
  </motion.div>
);

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Modern technology solutions — web, mobile, AI, data."
      />
      <Hero />
      <BannerSection img="/images/c1.webp" />

      <AboutUsSection />
      <BannerSection img="/images/d3.png" />
      <ServicesSection />
      <BannerSection img="/images/d2.png" />
      <WhyChooseUsSection />
      <BannerSection img="/images/d4.png" />
      <GallerySection />
      <BannerSection img="/images/c4.webp" />
      <OfferingsSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
