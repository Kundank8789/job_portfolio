'use client'

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion } from "framer-motion";

export default function Navbar({ toggleTheme, theme }) {

  /* ---------------- Animations ---------------- */
  const navVariants = {
    hidden: { y: -40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="bg-white dark:bg-[#0f0f0f] shadow-sm border-b border-gray-200 dark:border-gray-800 transition-all"
    >
      <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">

        {/* Logo */}
        <motion.div
          variants={itemVariants}
          className="text-lg font-semibold text-black dark:text-white"
        >
          Kundan Kumar
        </motion.div>

        {/* Right section */}
        <motion.div
          className="flex items-center gap-4 text-black dark:text-white"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Links */}
          <motion.div variants={itemVariants}>
            <Link href="#projects" className="text-sm hover:opacity-80">
              Projects
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href="#about" className="text-sm hover:opacity-80">
              About
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href="/contact" className="text-sm hover:opacity-80">
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
            {theme === "dark"
              ? <MdLightMode size={22} />
              : <MdDarkMode size={22} />}
          </motion.button>

        </motion.div>
      </div>
    </motion.nav>
  );
}
