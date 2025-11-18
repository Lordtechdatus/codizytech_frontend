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
    formData.append("resume", e.target.resume.files[0]);

    try {
      const res = await fetch("http://localhost/codizytech-backend/career.php", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.status === "success") {
        setStatus("sent");
        e.target.reset();
      } else {
        alert(data.message || "Something went wrong!");
        setStatus("idle");
      }
    } catch {
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

      {/* FAST Background */}
      <div className="relative min-h-screen overflow-hidden text-white bg-[#0b0b0b]">
        {/* Neon Glow (very light) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_70%)]"></div>

        <section className="container relative z-10 py-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-cyan-400 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Join Our Team
          </motion.h1>

          <motion.p
            className="mt-3 text-neutral-300 max-w-2xl text-center mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Be part of <span className="text-cyan-400 font-semibold">CODIZYTECH</span> — 
            where innovation, teamwork, and technology come together.
          </motion.p>

          {/* Form + Image */}
          <div className="mt-14 grid md:grid-cols-2 gap-12 items-start">

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="text-sm text-neutral-300">Full Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input-box"
                  />
                </div>

                <div>
                  <label className="text-sm text-neutral-300">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="input-box"
                  />
                </div>

                <div>
                  <label className="text-sm text-neutral-300">Contact Number</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="+91 9876543210"
                    className="input-box"
                  />
                </div>

                <div>
                  <label className="text-sm text-neutral-300">Applying For</label>
                  <select
                    required
                    name="position"
                    className="input-box text-neutral-300"
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

                <div className="md:col-span-2">
                  <label className="text-sm text-neutral-300">Upload Resume</label>
                  <input
                    required
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    className="mt-1 w-full text-sm bg-white/5 border border-white/10 text-neutral-300 file:bg-cyan-400 file:text-black file:px-4 file:py-2 file:rounded-md file:border-0 cursor-pointer"
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
                  className="input-box h-auto"
                ></textarea>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-cyan"
                >
                  {status === "loading" ? "Submitting…" : "Submit Application"}
                </button>

                {status === "sent" && (
                  <span className="text-sm text-cyan-300">
                    ✅ Application submitted!
                  </span>
                )}
              </div>
            </motion.form>

            {/* Right Image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden border border-white/10 md:h-[360px] h-[260px]"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&w=900&q=70&fm=webp"
                alt="Career at CodizyTech"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60"></div>

              <div className="absolute bottom-5 left-5">
                <h3 className="text-xl font-semibold text-cyan-300">
                  Build Your Future with CodizyTech
                </h3>
                <p className="text-sm text-neutral-300">
                  Work with innovators and bring your ideas to life.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            className="mt-14 text-center text-sm text-neutral-500 border-t border-white/10 pt-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            © {new Date().getFullYear()} CODIZYTECH — Empowering Ideas with Technology.
          </motion.div>
        </section>
      </div>

      {/* REUSABLE INPUT STYLE */}
      <style>{`
        .input-box {
          margin-top: 4px;
          width: 100%;
          border-radius: 6px;
          padding: 10px 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          outline: none;
          color: #e5e5e5;
        }
        .input-box:focus {
          border-color: #22d3ee;
        }
        .btn-cyan {
          background: linear-gradient(to right, #22d3ee, #3b82f6);
          padding: 9px 20px;
          border-radius: 6px;
          font-weight: 600;
          color: black;
          transition: 0.25s;
        }
        .btn-cyan:hover {
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
}
