import React, { useState } from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

export default function Career() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("email", e.target.email.value);
    formData.append("phone", e.target.phone.value);
    formData.append("position", e.target.position.value);
    formData.append("message", e.target.message.value);
    formData.append("resume", e.target.resume.files[0]); // FILE UPLOAD

    try {
      const res = await fetch("http://localhost/codizytech-backend/career.php", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.status === "success") {
        setStatus("sent");
        e.target.reset(); // clear form
      } else {
        alert(data.message || "Something went wrong!");
        setStatus("idle");
      }
    } catch (err) {
      alert("Server error: Could not connect to backend");
      setStatus("idle");
    }
  }

  return (
    <>
      <SEO
        title="Career"
        description="Join CODIZYTECH — build products that matter and shape the digital future."
      />

      {/* 🌌 Background */}
      <div className="relative min-h-screen overflow-hidden text-white bg-black">

        <div className="absolute inset-0 bg-black z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/95 via-[#030b2c]/95 to-black/95 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.25),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(0,123,255,0.25),transparent_70%)] z-0"></div>
        <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.08),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(0,123,255,0.1),transparent_70%)] z-0"></div>

        {/* 🧩 Main Section */}
        <section className="container relative z-10 py-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-lg text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Join Our Team
          </motion.h1>

          <motion.p
            className="mt-3 text-neutral-300 max-w-2xl text-center mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Be part of <span className="text-cyan-400 font-semibold">CODIZYTECH</span> — 
            where innovation, teamwork, and technology come together.
          </motion.p>

          {/* 💼 Form + Image Section */}
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">

            {/* 🧾 Backend-connected Application Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="glass p-8 rounded-2xl border border-white/10 backdrop-blur-xl relative"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-neutral-300">Full Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your Name"
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
                  <label className="text-sm text-neutral-300">Contact Number</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="+91 9876543210"
                    className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="text-sm text-neutral-300">Applying For</label>
                  <select
                    name="position"
                    required
                    className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400 text-neutral-300"
                  >
                    <option value="">Select position</option>
                    <option>Frontend Developer</option>
                    <option>Backend Developer</option>
                    <option>Data Analyst</option>
                    <option>UI/UX Designer</option>
                    <option>Digital Marketing</option>
                    <option>Internship</option>
                  </select>
                </div>

                {/* File Upload Connected */}
                <div className="md:col-span-2">
                  <label className="text-sm text-neutral-300">Upload Resume</label>
                  <input
                    required
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    className="mt-1 w-full text-sm file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-cyan-400 file:text-black hover:file:bg-cyan-300 file:cursor-pointer bg-white/5 border border-white/10 px-3 py-2 text-neutral-300"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="text-sm text-neutral-300">Message</label>
                <textarea
                  required
                  name="message"
                  rows="5"
                  placeholder="Why do you want to join us?"
                  className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400 text-neutral-300"
                ></textarea>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-6 py-2 rounded-md hover:scale-105 transition"
                >
                  {status === "loading" ? "Submitting…" : "Submit Application"}
                </button>

                {status === "sent" && (
                  <span className="text-sm text-cyan-300">
                    ✅ Application submitted successfully!
                  </span>
                )}
              </div>
            </motion.form>

            {/* 🖼️ Right Side Image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10 md:h-[400px] h-[280px]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                alt="Career at CodizyTech"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="text-xl font-semibold text-cyan-300">
                  Build Your Future with CodizyTech
                </h3>
                <p className="text-sm text-neutral-300">
                  Work with innovators and bring your ideas to life.
                </p>
              </div>
            </motion.div>
          </div>

          {/* 🚀 Footer */}
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
