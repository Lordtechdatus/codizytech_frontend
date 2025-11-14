import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-white/10 bg-black text-white relative z-10 mt-0 pt-0">
      
      {/* 🌈 Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse" />

      {/* ⭐ Footer Grid with Perfect Spacing */}
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 md:gap-16 lg:gap-20 gap-10">
        
        {/* 🏢 Company Info */}
        <div className="space-y-4">

          {/* ⭐ Logo + Text shifted upward */}
          <div
            className="flex items-center gap-4 cursor-pointer -mt-3"
            onClick={() => navigate("/")}
          >
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-20 w-20 object-contain"
            />

            <span className="font-semibold tracking-wide text-2xl text-cyan-300 hover:text-cyan-200 transition">
              CODIZYTECH
            </span>
          </div>

          <div className="space-y-2 text-neutral-300 text-sm leading-relaxed">
            <p>
              📍 <strong>Office:</strong> G1, Akansha Apartment, Patel Nagar, City Centre,
              Gwalior, Near Raj Rajeshwari Apartment – 474002
            </p>

            <p>
              📧 <strong>Email:</strong>{" "}
              <a href="mailto:pushpendrac081@gmail.com" className="text-cyan-400 hover:text-cyan-300">
                pushpendrac081@gmail.com
              </a>
            </p>

            <p>
              📞 <strong>Phone:</strong>{" "}
              <a href="tel:+918770182940" className="text-cyan-400 hover:text-cyan-300">
                +91 87701 82940
              </a>
            </p>
          </div>

        </div>

        {/* 🧭 Company Links */}
        <div>
          <h4 className="font-semibold mb-4 text-cyan-400 text-lg">Company</h4>
          <ul className="space-y-2 text-neutral-300">
            <li><FooterLink to="/">Home</FooterLink></li>
            <li><FooterLink to="/about">About</FooterLink></li>
            <li><FooterLink to="/services">Services</FooterLink></li>
            <li><FooterLink to="/career">Career</FooterLink></li>
            <li><FooterLink to="/contact">Contact</FooterLink></li>
          </ul>
        </div>

        {/* 🧠 Services */}
        <div>
          <h4 className="font-semibold mb-4 text-cyan-400 text-lg">Services</h4>
          <ul className="space-y-2 text-neutral-300">
            <li><FooterLink to="/services#web">Web & App Development</FooterLink></li>
            <li><FooterLink to="/services#marketing">Digital Marketing</FooterLink></li>
            <li><FooterLink to="/services#thesis">Thesis Writing</FooterLink></li>
            <li><FooterLink to="/services#data">Data Analysis</FooterLink></li>
            <li><FooterLink to="/services#training">Training & Internship</FooterLink></li>
          </ul>
        </div>

        {/* 🌐 Connect With Us */}
        <div>
          <h4 className="font-semibold mb-4 text-cyan-400 text-lg">Connect with Us</h4>
          
          <div className="flex gap-5">
            <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                alt="Instagram"
                className="w-10 h-10"
              />
            </a>

            <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="w-10 h-10"
              />
            </a>

            <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>

      </div>

      {/* 🧾 Footer Bottom */}
      <div className="border-t border-white/10 py-5 text-center text-neutral-400 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-cyan-400">CODIZYTECH</span>. All rights reserved.
      </div>
    </footer>
  );
}

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="hover:text-cyan-400 transition-colors duration-300 inline-block"
    >
      {children}
    </Link>
  );
}
