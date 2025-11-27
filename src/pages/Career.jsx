import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

export default function Career() {
  const [form, setForm] = React.useState({
    fullName: "",
    email: "",
    contact: "",
    position: "",
    message: "",
    resume: null,
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let formData = new FormData();
    formData.append("fullName", form.fullName);
    formData.append("email", form.email);
    formData.append("contact", form.contact);
    formData.append("position", form.position);
    formData.append("message", form.message);
    formData.append("resume", form.resume);
  
    const res = await fetch("https://codizytech.com/backend/career_submit.php", {
      method: "POST",
      body: formData,
    });
  
    const data = await res.json();
    alert(data.message);
  };
  

  return (
    <>
      <SEO
        title="Career"
        description="Join CODIZYTECH — build products that matter and shape the digital future."
      />
      

      {/* NEW Updated Background (Same as Services) */}
      <div className="relative min-h-screen overflow-hidden text-white bg-black">

        {/* Layer 1 */}
        <div className="absolute inset-0 bg-black z-0"></div>

        {/* Layer 2: Deep gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/95 via-[#030b2c]/95 to-black/95 z-0"></div>

        {/* Layer 3: Neon Glow Radials */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.25),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(0,123,255,0.25),transparent_70%)] z-0"></div>

        <section className="container relative z-10 py-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-cyan-400 text-center drop-shadow-lg"
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
            Be part of{" "}
            <span className="text-cyan-400 font-semibold">CODIZYTECH</span> — 
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
        placeholder="Your Name"
        className="input-box"
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
      />
    </div>

    <div>
      <label className="text-sm text-neutral-300">Email</label>
      <input
        required
        type="email"
        placeholder="you@example.com"
        className="input-box"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
    </div>

    <div>
      <label className="text-sm text-neutral-300">Contact Number</label>
      <input
        required
        type="tel"
        placeholder="+91 9876543210"
        className="input-box"
        onChange={(e) => setForm({ ...form, contact: e.target.value })}
      />
    </div>

    <div>
      <label className="text-sm text-neutral-300">Applying For</label>
      <select
        required
        className="input-box text-neutral-300"
        onChange={(e) => setForm({ ...form, position: e.target.value })}
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
        accept=".pdf,.doc,.docx"
        className="mt-1 w-full text-sm bg-white/5 border border-white/10 text-neutral-300 file:bg-cyan-400 file:text-black file:px-4 file:py-2 file:rounded-md file:border-0 cursor-pointer"
        onChange={(e) => setForm({ ...form, resume: e.target.files[0] })}
      />
    </div>
  </div>

  <div className="mt-6">
    <label className="text-sm text-neutral-300">Message</label>
    <textarea
      required
      rows="5"
      placeholder="Why do you want to join us?"
      className="input-box h-auto"
      onChange={(e) => setForm({ ...form, message: e.target.value })}
    ></textarea>
  </div>

  <div className="mt-6">
    <button type="submit" className="btn-cyan w-full">
      Submit Application
    </button>
  </div>
</motion.form>


            {/* Right Image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden border border-white/10 md:h-[460px] h-[320px]"
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
          padding: 12px;
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
