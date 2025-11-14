import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { FaLightbulb, FaCogs, FaGem, FaHandshake } from "react-icons/fa";
import SEO from "../components/SEO";
import "./TextType.css";
import Footer from "../components/Footer";



/* 🌌 Galaxy Stars Background */
const GalaxyStarsBackground = ({ count = 250 }) => {
  const ref = useRef(null);
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const stars = [];
    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      const size = gsap.utils.random(1, 3);
      const color = ["#80dfff", "#00ffff", "#66ccff", "#99ffff"][
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
        boxShadow: `0 0 ${size * 6}px ${color}`,
      });
      container.appendChild(star);
      stars.push(star);
      gsap.to(star, {
        opacity: gsap.utils.random(0.3, 1),
        duration: gsap.utils.random(1, 3),
        repeat: -1,
        yoyo: true,
      });
    }
    return () => stars.forEach((s) => s.remove());
  }, [count]);
  return <div ref={ref} className="absolute inset-0 overflow-hidden" />;
};

/* ⚙️ Floating Tech Logos (Hero only) */
const AnimatedTechBackground = ({ count = 25 }) => {
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
    const elements = [];
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    for (let i = 0; i < count; i++) {
      const img = document.createElement("img");
      const src = techImages[i % techImages.length];
      Object.assign(img.style, {
        width: "70px",
        height: "70px",
        position: "absolute",
        top: `${gsap.utils.random(0, screenHeight)}px`,
        left: `${gsap.utils.random(0, screenWidth)}px`,
        objectFit: "contain",
        opacity: 0.85,
        filter: "drop-shadow(0 0 15px rgba(0,255,255,0.6)) brightness(1.2)",
      });
      img.src = src;
      container.appendChild(img);
      elements.push(img);
      gsap.to(img, {
        y: -screenHeight - 100,
        duration: gsap.utils.random(10, 16),
        repeat: -1,
        ease: "none",
        delay: gsap.utils.random(0, 3),
      });
    }
    return () => elements.forEach((el) => el.remove());
  }, [count, techImages]);

  return <div ref={ref} className="absolute inset-0 overflow-hidden" />;
};

/* ⌨️ Typing Animation (No Blink / Light Effect) */
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
        timeout = setTimeout(() => setDisplayedText((p) => p.slice(0, -1)), 30);
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
    <h1
      className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-cyan-200 tracking-wide"
    >
      {displayedText}
    </h1>
  );
};


/* 🚀 Hero Section */
function Hero() {
  return (
    <section className="relative h-[100vh] flex flex-col items-center justify-center bg-black overflow-hidden">
      <GalaxyStarsBackground count={220} />
      <AnimatedTechBackground count={35} />
      <div className="relative z-10 text-center container px-4 pt-12">
        <TextType text={["Empowering Ideas with Technology", "CODIZYTECH"]} />
        <p className="mt-8 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          We build digital solutions that drive innovation and success.
        </p>
      </div>
    </section>
  );
}


/* 🌟 About CodizyTech Section — Updated Version */
function AboutUsSection() {
  return (
    <section className="relative py-32 bg-black border-t border-cyan-500/20 overflow-hidden">
      <GalaxyStarsBackground count={150} />

      <div className="container relative z-10 mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.1)] border border-cyan-400/30"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80"
            alt="About CodizyTech"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-transparent" />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            About <span className="text-cyan-400">CodizyTech</span>
          </h2>

          <p className="text-neutral-300 text-lg leading-relaxed">
            At <span className="text-cyan-400 font-semibold">CodizyTech</span>, we don’t just build technology —
            we build digital ecosystems that **empower innovation, accelerate growth, and transform businesses** for the future.
          </p>

          <div className="space-y-4 mt-6">
            <div className="flex items-start gap-4">
              <span className="text-cyan-400 text-2xl">🚀</span>
              <div>
                <h3 className="text-xl font-semibold text-cyan-300">Our Mission</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  To empower startups and enterprises with creative digital solutions that drive measurable results.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-cyan-400 text-2xl">💡</span>
              <div>
                <h3 className="text-xl font-semibold text-cyan-300">Our Expertise</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  From <span className="text-cyan-400">Web & App Development</span> to <span className="text-cyan-400">AI, Data, and Digital Marketing</span>, we deliver high-performance products with precision.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-cyan-400 text-2xl">🌍</span>
              <div>
                <h3 className="text-xl font-semibold text-cyan-300">Our Vision</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  To be a global name in tech innovation — where creativity meets technology to make a difference.
                </p>
              </div>
            </div>
          </div>

          <a
            href="/about"
            className="inline-block mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition shadow-lg"
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
    { icon: "💻", title: "Web & App Development", desc: "Building modern, scalable websites and apps." },
    { icon: "📊", title: "Data Analysis", desc: "Transforming raw data into actionable insights." },
    { icon: "🚀", title: "Digital Marketing", desc: "Boosting brands with SEO, SMM & strategy." },
    { icon: "🧠", title: "AI & Automation", desc: "Smart AI solutions to enhance efficiency." },
    { icon: "📚", title: "Research & Thesis", desc: "Expert assistance in research and writing." },
    { icon: "🎓", title: "Training & Internship", desc: "Practical learning for future professionals." },
  ];

  return (
    <section className="relative py-32 bg-black border-t border-cyan-500/20 overflow-hidden">
      <GalaxyStarsBackground count={150} />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Our Services
        </motion.h2>
        <p className="text-neutral-300 text-lg max-w-3xl mx-auto mb-12">
          Empowering innovation through a complete suite of digital and technical services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-black border border-cyan-400/30 shadow-xl backdrop-blur-sm hover:border-cyan-400 hover:shadow-cyan-400/40 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-2xl font-semibold text-cyan-300 mb-2">
                {s.title}
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                {s.desc}
              </p>
              <button
                onClick={() => navigate("/services")}
                className="mt-2 px-5 py-2 rounded-full bg-cyan-600 text-white font-medium hover:bg-cyan-400 transition"
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

/* 💎 Why Choose Us Section (with React Icons) */
function WhyChooseUsSection() {
  const features = [
    {
      icon: <FaLightbulb className="text-cyan-300 text-3xl drop-shadow-[0_0_10px_#00ffff]" />,
      title: "Innovative Solutions",
      desc: "We use next-gen technologies and creative ideas to deliver smart digital products that stand out.",
    },
    {
      icon: <FaCogs className="text-cyan-300 text-3xl drop-shadow-[0_0_10px_#00ffff]" />,
      title: "Proven Efficiency",
      desc: "Our streamlined process ensures quality and speed without compromising innovation or reliability.",
    },
    {
      icon: <FaGem className="text-cyan-300 text-3xl drop-shadow-[0_0_10px_#00ffff]" />,
      title: "Long-Term Value",
      desc: "We focus on scalable solutions that keep performing and growing along with your business.",
    },
    {
      icon: <FaHandshake className="text-cyan-300 text-3xl drop-shadow-[0_0_10px_#00ffff]" />,
      title: "Trusted Partnership",
      desc: "We collaborate closely with our clients, ensuring transparency, trust, and shared success.",
    },
  ];

  return (
    <section className="relative py-32 bg-black border-t border-cyan-500/20 overflow-hidden">
      <GalaxyStarsBackground count={120} />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column */}
        <div className="space-y-6">
          <motion.h2
            className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Why Choose <span className="text-cyan-400">CodizyTech?</span>
          </motion.h2>

          {features.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-5 p-5 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-black border border-cyan-400/20 shadow-[0_0_25px_rgba(0,255,255,0.05)] hover:shadow-[0_0_40px_rgba(0,255,255,0.2)] backdrop-blur-md transition-all duration-500"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="p-3 bg-cyan-950/50 rounded-xl border border-cyan-500/30 shadow-inner flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-cyan-200">
                  {item.title}
                </h3>
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed mt-1">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Image */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.15)] border border-cyan-400/30"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
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
   // "https://images.unsplash.com/photo-1518770660439-4636190af475",
    //"https://images.unsplash.com/photo-1551434678-e076c223a692",
    //"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    //"https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  ];

  return (
    <section className="relative py-24 bg-black border-t border-cyan-500/20 overflow-hidden">
      <GalaxyStarsBackground count={100} />
      <div className="relative z-10 container mx-auto px-6">
        <motion.h2
          className="text-center text-5xl font-extrabold mb-12 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Our Gallery
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-xl group border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <img
                src={`${src}?auto=format&fit=crop&w=800&q=80`}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
      img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80",
      btn: "Get Started",
      link: "/services#web",
    },
    {
      title: "AI & Data Analytics",
      desc: "Make smarter decisions with next-gen data insights.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      btn: "Learn More",
      link: "/services#data",
    },
    {
      title: "Digital Marketing",
      desc: "Amplify your digital presence with our strategies.",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
      btn: "Explore",
      link: "/services#marketing",
    },
    {
      title: "Training & Internship",
      desc: "Gain hands-on experience with our guided programs.",
      img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
      btn: "Join Now",
      link: "/career",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-cyan-950/20 to-black border-t border-cyan-500/20">
      <GalaxyStarsBackground count={120} />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Our Offerings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gradient-to-b from-white/5 to-black/60 border border-cyan-400/20 overflow-hidden hover:shadow-cyan-400/40 transition-all"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-300 mb-4">{item.desc}</p>
                <a
                  href={item.link}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:scale-105 transition"
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
/* 🌠 Updated Banner Section (HD + Clear + Neon Glow) */
function BannerSection({ img }) {
  return (
    <section className="relative h-[40vh] border-t border-blue-500/20 overflow-hidden bg-black">
      <img
        src={img}
        alt="Banner"
        className="w-full h-full object-cover 
        brightness-110 contrast-125 saturate-125 
        drop-shadow-[0_0_20px_rgba(0,200,255,0.3)]"
      />

      {/* Light Neon Overlay (very subtle, no darkness) */}
      <div className="absolute inset-0 bg-gradient-to-b 
      from-black/10 via-[#00eaff10] to-black/20 pointer-events-none"></div>

      {/* Soft Neon Blue Glow */}
      <div className="absolute inset-0 
      bg-[radial-gradient(circle_at_center,rgba(0,234,255,0.15),transparent_70%)]
      pointer-events-none"></div>
    </section>
  );
}

/* 💬 Realistic WhatsApp Floating Button with Glowing Ring Effect */
const WhatsAppButton = () => (
  <motion.div
    className="fixed bottom-6 right-6 z-50"
    initial={{ scale: 0 }}
    animate={{ scale: [0, 1.2, 1], transition: { duration: 0.6 } }}
  >
    {/* 🌊 Ring Wave Animation */}
    <span className="absolute inset-0 flex items-center justify-center">
      <span className="absolute w-16 h-16 rounded-full bg-[#25D366]/30 animate-ping" />
      <span className="absolute w-20 h-20 rounded-full bg-[#25D366]/20 animate-ping delay-150" />
      <span className="absolute w-24 h-24 rounded-full bg-[#25D366]/10 animate-ping delay-300" />
    </span>

    {/* 💬 Main WhatsApp Button */}
    <motion.a
      href="https://wa.me/918770182940"
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:shadow-[0_0_40px_rgba(37,211,102,0.8)] transition-all duration-300"
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 45px rgba(37,211,102,0.9)",
      }}
    >
      {/* ✅ Original WhatsApp Logo (SVG Vector) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-8 h-8"
      >
        <path d="M16.001 3.2c-7.062 0-12.8 5.738-12.8 12.8 0 2.256.597 4.465 1.734 6.403L3.2 28.8l6.531-1.716A12.738 12.738 0 0 0 16 28.8c7.062 0 12.8-5.738 12.8-12.8S23.063 3.2 16.001 3.2zm6.541 18.472c-.272.767-1.6 1.419-2.239 1.453-.597.035-1.362.05-2.198-.15-.504-.12-1.151-.374-1.982-.733-3.487-1.51-5.75-4.976-5.925-5.209-.173-.233-1.413-1.877-1.413-3.579 0-1.701.893-2.541 1.21-2.888.317-.346.693-.433.924-.433.231 0 .462.002.665.012.213.01.497-.08.778.594.272.665.925 2.308 1.007 2.475.083.173.138.374.025.607-.11.233-.166.374-.317.578-.15.203-.317.457-.453.61-.15.173-.308.362-.132.696.173.334.769 1.267 1.652 2.053 1.136 1.014 2.093 1.334 2.426 1.508.334.173.526.15.718-.091.192-.231.834-.971 1.057-1.304.223-.334.446-.28.749-.163.308.12 1.944.917 2.278 1.083.334.166.557.25.638.385.086.138.086.798-.186 1.565z" />
      </svg>
    </motion.a>
  </motion.div>
);



export default function Home() {
  return (
    <>
      <SEO title="Home" description="Modern technology solutions — web, mobile, AI, data." />
      <Hero />
      <BannerSection img="/images/b6.png" />
      <AboutUsSection />
      <BannerSection img="/images/b6.png" />
      <ServicesSection />
      <BannerSection img="/images/b5.jpg" />
      <WhyChooseUsSection />
      <BannerSection img="/images/b5.jpg" />
      <GallerySection />
      <BannerSection img="/images/b6.png" />
      <OfferingsSection />

      {/* 🦶 Footer Section Added */}
      <Footer />
      

      {/* 💬 Floating WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}

