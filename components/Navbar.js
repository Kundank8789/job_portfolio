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
    const sectionIds = ["home", "projects", "about", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  /* ---------------- Mobile Menu State ---------------- */
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  /* ---------------- Navbar Scroll Animation ---------------- */
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -15, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -15, scale: 0.98, transition: { duration: 0.2 } },
  };

  const links = [
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`sticky top-0 z-50 transition-all duration-300
      backdrop-blur bg-white/70 dark:bg-[#0f0f0f]/70 
      border-b border-gray-200 dark:border-gray-800
      ${scrolled ? "shadow-md py-1" : "shadow-sm py-0"}`}
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="text-lg font-semibold text-black dark:text-white"
        >
          <Link href="#home" className="relative group">
            <span className="transition">
              Kundan <span className="text-blue-600 dark:text-blue-400">Kumar</span>
            </span>

            {/* small underline glow */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          className="hidden md:flex items-center gap-6 text-black dark:text-white"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08 }}
        >
          {/* Links */}
          <div className="flex items-center gap-5 relative">
            {links.map((link) => (
              <motion.div key={link.id} variants={itemVariants}>
                <Link
                  href={link.href}
                  className={`relative text-sm transition font-medium
                  ${
                    activeSection === link.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-800 dark:text-gray-200 hover:opacity-80"
                  }`}
                >
                  {link.name}

                  {/* Animated underline */}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 dark:bg-blue-400 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Resume Button */}
          <motion.a
            variants={itemVariants}
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            href="/assets/resume/Kundan_Kumar_Resume_Final(1).pdf"
            download
            className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 text-sm 
            hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
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
                whileHover={{ scale: 1.2, rotate: 4 }}
                whileTap={{ scale: 0.9 }}
                className="hover:opacity-90 transition"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Dark Mode Toggle */}
          <motion.button
            variants={itemVariants}
            onClick={toggleTheme}
            whileHover={{ rotate: 20, scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="ml-2 text-black dark:text-yellow-300 transition"
          >
            {theme === "dark" ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
          </motion.button>
        </motion.div>

        {/* Mobile Right Controls */}
        <div className="flex md:hidden items-center gap-3">
          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className="text-black dark:text-yellow-300 transition"
          >
            {theme === "dark" ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
          </motion.button>

          {/* Hamburger */}
          <motion.button
            onClick={() => setMenuOpen((prev) => !prev)}
            whileTap={{ scale: 0.9 }}
            className="text-black dark:text-white text-2xl"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </motion.button>
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
            <div className="bg-white dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-800 rounded-2xl p-4 shadow-md space-y-3">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block text-sm transition font-medium
                  ${
                    activeSection === link.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="public/assets/resume/Kundan_Kumar_Resume_FINAL(1).pdf"
                download
                className="block text-sm text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition"
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
