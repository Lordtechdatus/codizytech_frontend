import React, { useState } from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with CODIZYTECH for projects and partnerships."
      />

      <div className="relative min-h-screen overflow-hidden text-white bg-black">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-black z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/95 via-[#030b2c]/95 to-black/95 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.25),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(0,123,255,0.25),transparent_70%)] z-0"></div>
        <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.08),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(0,123,255,0.1),transparent_70%)] z-0"></div>

        <section className="container relative z-10 py-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-lg text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>

          <motion.p
            className="mt-3 text-neutral-300 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Let’s talk about your next big idea — reach us by filling the form, 
            visiting our office, or connecting through phone or email.
          </motion.p>

          {/* Form + Map */}
          <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">
            <ContactForm />

            {/* Map */}
            <motion.div
              className="glass rounded-2xl overflow-hidden border border-white/10 shadow-lg h-[400px]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <iframe
                title="CODIZYTECH Office Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition duration-500"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.597342625845!2d78.18833419344783!3d26.209773684130333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c41cce3cd799%3A0x184f3cb9095a386c!2zQWthbnNoYSBBcGFydG1lbnQgKOCkhuCkleCkvuCkguCktuCkviDgpIXgpKrgpL7gpLDgpY3gpJ_gpK7gpYfgpILgpJ8p!5e0!3m2!1sen!2sin!4v1762507380211!5m2!1sen!2sin"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>

          {/* Bottom Info Cards */}
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {/* Office */}
            <motion.div
              className="glass rounded-2xl p-6 border border-white/10 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-cyan-400 font-semibold text-lg mb-2">
                Office Location
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                G1, Akansha Apartment, Patel Nagar, City Centre, Gwalior,
                Near Raj Rajeshwari Apartment - 474002
              </p>
            </motion.div>

            {/* Call */}
            <motion.div
              className="glass rounded-2xl p-6 border border-white/10 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-cyan-400 font-semibold text-lg mb-2">
                Make a Call
              </h3>
              <p className="text-neutral-300 text-sm">Call us anytime:</p>
              <p className="text-cyan-300 font-medium mt-2 text-sm">
                +91-8770182940
              </p>
              <p className="text-xs text-neutral-400 mt-1">
                Mon - Sat: 09:00 AM to 6:00 PM
              </p>
            </motion.div>

            {/* Email */}
            <motion.div
              className="glass rounded-2xl p-6 border border-white/10 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-cyan-400 font-semibold text-lg mb-2">
                Send a Mail
              </h3>
              <p className="text-neutral-300 text-sm">
                Reach us at:
              </p>
              <p className="text-cyan-300 font-medium mt-2 text-sm">
                pushpendrac081@gmail.com
              </p>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            className="mt-16 text-center text-sm text-neutral-500 border-t border-white/10 pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            © {new Date().getFullYear()} CODIZYTECH — Empowering Ideas with Technology.
          </motion.div>
        </section>
      </div>
    </>
  );
}

/* 🌐 Backend-Connected Contact Form Component */
function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("email", e.target.email.value);
    formData.append("message", e.target.message.value);

    try {
      const res = await fetch("http://localhost/codizytech-backend/contact.php", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.status === "success") {
        setStatus("sent");
        e.target.reset();
      } else {
        alert(data.message);
        setStatus("idle");
      }
    } catch (error) {
      alert("Server unreachable. Check XAMPP or backend folder.");
      setStatus("idle");
    }
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      className="glass rounded-2xl p-8 border border-white/10 backdrop-blur-lg"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid gap-5">
        <div>
          <label className="text-sm text-neutral-300">Name</label>
          <input
            required
            type="text"
            name="name"
            placeholder="Your name"
            className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="text-sm text-neutral-300">Email</label>
          <input
            required
            type="email"
            name="email"
            placeholder="you@example.com"
            className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="text-sm text-neutral-300">Message</label>
          <textarea
            required
            name="message"
            rows="5"
            placeholder="How can we help?"
            className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-6 py-2 rounded-md hover:scale-105 transition"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending…" : "Send Message"}
          </button>

          {status === "sent" && (
            <span className="text-sm text-cyan-300">
              ✅ Message sent successfully!
            </span>
          )}
        </div>
      </div>
    </motion.form>
  );
}
