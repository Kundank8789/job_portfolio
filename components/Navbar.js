"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ toggleTheme, theme }) {
  /* ---------------- Active Section Highlight ---------------- */
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "projects", "about", "contact"]; // ✅ added contact
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  /* ---------------- Mobile Menu State ---------------- */
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  /* ---------------- Animations ---------------- */
  const navVariants = {
    hidden: { y: -40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.98 },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-[#0f0f0f]/70 shadow-sm border-b border-gray-200 dark:border-gray-800 transition-all"
    >
      <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          className="text-lg font-semibold text-black dark:text-white"
        >
          <Link href="#home">Kundan Kumar</Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          className="hidden md:flex items-center gap-4 text-black dark:text-white"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={itemVariants}>
            <Link
              href="#projects"
              className={`text-sm hover:opacity-80 transition ${
                activeSection === "projects"
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : ""
              }`}
            >
              Projects
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              href="#about"
              className={`text-sm hover:opacity-80 transition ${
                activeSection === "about"
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : ""
              }`}
            >
              About
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              href="#contact"
              className={`text-sm hover:opacity-80 transition ${
                activeSection === "contact"
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : ""
              }`}
            >
              Contact
            </Link>
          </motion.div>

          {/* Resume Button */}
          <motion.a
            variants={itemVariants}
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            href="/assets/resume/Kundan_Kumar_Resume_Final(1).pdf"
            download
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Download Resume
          </motion.a>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 text-lg"
          >
            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
              <motion.a
                key={i}
                href={
                  i === 0
                    ? "https://github.com/Kundank8789"
                    : i === 1
                    ? "https://www.linkedin.com/in/kundan-kumar-3907a3352/"
                    : "https://x.com/Rajputkund69519"
                }
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Dark Mode Toggle */}
          <motion.button
            variants={itemVariants}
            onClick={toggleTheme}
            whileHover={{ rotate: 20 }}
            whileTap={{ scale: 0.9 }}
            className="ml-3 text-black dark:text-yellow-300 transition"
          >
            {theme === "dark" ? (
              <MdLightMode size={22} />
            ) : (
              <MdDarkMode size={22} />
            )}
          </motion.button>
        </motion.div>

        {/* Mobile Right Controls */}
        <div className="flex md:hidden items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="text-black dark:text-yellow-300 transition"
          >
            {theme === "dark" ? (
              <MdLightMode size={22} />
            ) : (
              <MdDarkMode size={22} />
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-black dark:text-white text-2xl"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden px-4 pb-4"
          >
            <div className="bg-white dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-sm space-y-3">
              <Link
                href="#projects"
                onClick={closeMenu}
                className={`block text-sm transition ${
                  activeSection === "projects"
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Projects
              </Link>

              <Link
                href="#about"
                onClick={closeMenu}
                className={`block text-sm transition ${
                  activeSection === "about"
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                About
              </Link>

              {/* ✅ Mobile Contact fixed */}
              <Link
                href="#contact"
                onClick={closeMenu}
                className={`block text-sm transition ${
                  activeSection === "contact"
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Contact
              </Link>

              <a
                href="/assets/resume/Kundan_Kumar_Resume_Final(1).pdf"
                download
                className="block text-sm text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
                onClick={closeMenu}
              >
                Download Resume
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-2 text-xl text-black dark:text-white">
                <a
                  href="https://github.com/Kundank8789"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/kundan-kumar-3907a3352/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/Rajputkund69519"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
