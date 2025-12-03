import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-white/10 bg-black text-white relative z-10">

      {/* Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse" />

      {/* GRID (Mobile = 1 col / Desktop = 5 col) */}
      <div className="container py-12 grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* Column 1 — Company Info */}
        <div className="space-y-4">
          <div
            className="flex items-center gap-4 cursor-pointer -mt-3"
            onClick={() => navigate("/")}
          >
            <img src="/images/logo.png" className="h-16 w-16 object-contain" />
            <span className="font-semibold tracking-wide text-2xl text-cyan-300">
              CODIZYTECH
            </span>
          </div>

          <div className="space-y-2 text-neutral-300 text-sm leading-relaxed">
            <p>📍 <strong>Office:</strong> G1, Akansha Apartment, Patel Nagar, City Centre, Gwalior — 474002</p>

            <p>
              📧 <strong>Email:</strong>{" "}
              <a href="mailto:pushpendrac081@gmail.com" className="text-cyan-400">
                pushpendrac081@gmail.com
              </a>
            </p>

            <p>
              📞 <strong>Phone:</strong>{" "}
              <a href="tel:+918770182940" className="text-cyan-400">
                +91 87701 82940
              </a>
            </p>
          </div>
        </div>

        {/* Column 2 — Company Links */}
        <div className="ml-8 md:ml-14">
  <h4 className="font-semibold mb-4 text-cyan-400 text-lg">Company</h4>
  <ul className="space-y-2 text-neutral-300">
    <li><FooterLink to="/">Home</FooterLink></li>
    <li><FooterLink to="/about">About</FooterLink></li>
    <li><FooterLink to="/services">Services</FooterLink></li>
    <li><FooterLink to="/career">Career</FooterLink></li>
    <li><FooterLink to="/contact">Contact</FooterLink></li>
  </ul>
</div>

        {/* Column 3 — Services */}
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

        {/* Column 4 — Social Icons */}
        <div>
          <h4 className="font-semibold mb-4 text-cyan-400 text-lg">Connect with Us</h4>

          <div className="flex gap-4">
            <a href="#" className="hover:scale-110 transition-transform">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" className="w-10 h-10" />
            </a>

            <a href="#" className="hover:scale-110 transition-transform">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="w-10 h-10" />
            </a>

            <a href="#" className="hover:scale-110 transition-transform">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="w-10 h-10" />
            </a>
          </div>
        </div>

        {/* Column 5 — QR Code */}
        <div className="flex flex-col items-center -ml-6 md:-ml-10">

          <h4 className="text-cyan-400 font-semibold text-lg mb-2 tracking-wide text-center">
            Scan/click to Review on Google
          </h4>

          <a
            href="https://www.google.com/search?q=codizytech.com+research+%26+it+solutions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/qrcode.jpg"
              className="w-48 h-48 rounded-xl shadow-lg hover:scale-105 transition border border-white/10"
            />
          </a>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-5 text-center text-neutral-400 text-sm">
        © {new Date().getFullYear()} <span className="text-cyan-400">CODIZYTECH</span>. All rights reserved.
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