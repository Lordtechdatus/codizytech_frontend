import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";

// 🧩 Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const TeamMembers = lazy(() => import("./pages/TeamMembers")); 
const Services = lazy(() => import("./pages/Services"));
const Career = lazy(() => import("./pages/Career"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  return (
    <div className="min-h-screen bg-animated">
      {/* ✨ Background Grid Overlay */}
      <div
        className="fixed inset-0 -z-10 bg-grid-overlay opacity-40"
        aria-hidden="true"
      />

      {/* 🧭 Navbar */}
      <Navbar />

      {/* 🌐 Page Transitions + Suspense Fallback */}
      <main className="pt-16">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes>
              {/* Home */}
              <Route index element={<PageWrap><Home /></PageWrap>} />

              {/* About Us */}
              <Route path="/about" element={<PageWrap><AboutUs /></PageWrap>} />

              {/* ✅ Team Members */}
              <Route path="/team" element={<PageWrap><TeamMembers /></PageWrap>} />

              {/* Services */}
              <Route path="/services" element={<PageWrap><Services /></PageWrap>} />

              {/* Career */}
              <Route path="/career" element={<PageWrap><Career /></PageWrap>} />

              {/* Contact */}
              <Route path="/contact" element={<PageWrap><Contact /></PageWrap>} />

              {/* Default Redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

  
    </div>
  );
}

/* 🌈 Page Transition Animation Wrapper */
function PageWrap({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ⏳ Animated Loader */
function PageLoader() {
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <motion.div
        className="h-12 w-12 rounded-full border-4 border-cyan-400 border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        aria-label="Loading"
      />
    </div>
  );
}
