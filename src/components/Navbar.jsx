import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const { pathname } = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setOpen(false);
    setAboutOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        if (!e.target.closest("button")) {
          setAboutOpen(false);
        }
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md hover:bg-white/5 transition cursor-pointer ${
      isActive ? "text-cyan-400" : "text-white/80"
    }`;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="backdrop-blur-xl bg-neutral-900/40 border-b border-white/10">
        
        {/* ⭐ Navbar height updated to h-20 */}
        <nav className="container flex items-center justify-between h-20">
          
          {/* 🌟 Updated Logo - full navbar height */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-20 w-20 object-contain"
            />
            <span className="font-semibold tracking-wide text-lg md:text-xl text-white group-hover:text-cyan-300 transition">
              CODIZYTECH
            </span>
          </Link>

          {/* 💻 Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setAboutOpen(v => !v)}
                className="px-3 py-2 rounded-md hover:bg-white/5 transition text-white/80 cursor-pointer inline-flex items-center gap-1"
              >
                About Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 mt-2 w-56 bg-black border border-cyan-500/30 rounded-lg shadow-xl p-2 z-50"
                  >
                    <DropdownLink to="/about">About Us</DropdownLink>
                    <DropdownLink to="/team">Team Members</DropdownLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/career" className={navLinkClass}>Career</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </div>

          {/* 📱 Mobile Button */}
          <div className="md:hidden">
            <button
              aria-label="Open menu"
              onClick={() => setOpen(v => !v)}
              className="p-2 rounded-md hover:bg-white/5 text-white"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </nav>

        {/* 📱 Mobile Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-white/10"
            >
              <div className="container py-2 flex flex-col">
                <MobileLink to="/">Home</MobileLink>

                <details className="group">
                  <summary className="px-2 py-2 cursor-pointer text-white/80 hover:text-white">
                    About Us
                  </summary>
                  <div className="pl-4 pb-2 flex flex-col">
                    <MobileLink to="/about">About Us</MobileLink>
                    <MobileLink to="/team">Team Members</MobileLink>
                  </div>
                </details>

                <MobileLink to="/services">Services</MobileLink>
                <MobileLink to="/career">Career</MobileLink>
                <MobileLink to="/contact">Contact</MobileLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}

function DropdownLink({ to, children }) {
  return (
    <Link to={to} className="block px-3 py-2 rounded-md hover:bg-white/10 text-white/90">
      {children}
    </Link>
  );
}

function MobileLink({ to, children }) {
  return (
    <Link to={to} className="px-2 py-2 rounded-md hover:bg-white/5 text-white/90">
      {children}
    </Link>
  );
}
