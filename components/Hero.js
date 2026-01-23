import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const badgeAnim = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[90vh] flex items-center 
      bg-gradient-to-b from-white to-gray-50 
      dark:from-black dark:to-zinc-950"
    >
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-400/20 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-purple-400/20 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-sm font-medium text-gray-500 dark:text-gray-400"
            >
              🚀 Available for Internship / Full-Time
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-3 text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white"
            >
              Hi, I’m{" "}
              <span className="text-blue-600 dark:text-blue-400">Kundan</span> 👋
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="mt-3 text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300"
            >
              Full Stack Developer | MERN • Next.js • Generative AI
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="mt-4 leading-relaxed max-w-xl text-gray-600 dark:text-gray-400"
            >
              I build modern, responsive SaaS applications using the MERN stack and
              Next.js, with clean UI, secure APIs, authentication, dashboards, and{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Generative AI integrations
              </span>{" "}
              for smarter user experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
              className="mt-7 flex flex-wrap gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="relative inline-flex items-center gap-2 px-5 py-3 rounded-xl 
                bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                View Projects <ArrowRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="public/Kundan_Kumar_Resume_FINAL(1).pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl 
                border border-gray-300 dark:border-zinc-700 
                text-gray-900 dark:text-white font-semibold 
                hover:bg-gray-100 dark:hover:bg-zinc-900 transition"
              >
                Download Resume <Download size={18} />
              </motion.a>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-7 flex items-center gap-4"
            >
              {[
                {
                  href: "https://github.com/Kundank8789",
                  icon: <Github size={20} />,
                },
                {
                  href: "https://www.linkedin.com/in/your-linkedin",
                  icon: <Linkedin size={20} />,
                },
                {
                  href: "mailto:kundank8789@gmail.com",
                  icon: <Mail size={20} />,
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl border border-gray-200 dark:border-zinc-700 
                  hover:bg-gray-100 dark:hover:bg-zinc-900 transition
                  text-gray-900 dark:text-white"
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center md:justify-end"
          >
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-sm rounded-2xl border 
              border-gray-200 dark:border-zinc-800
              bg-white dark:bg-zinc-950
              shadow-sm p-6"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Tech Stack
                </p>

                <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full 
                bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                  <Sparkles size={14} />
                  Modern
                </span>
              </div>

              {/* Animated Skill Badges */}
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="mt-4 flex flex-wrap gap-2"
              >
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Prisma",
                  "Tailwind",
                  "Generative AI",
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    variants={badgeAnim}
                    whileHover={{ scale: 1.08 }}
                    className="px-3 py-1 text-sm rounded-full 
                    bg-gray-100 text-gray-700 
                    dark:bg-zinc-900 dark:text-gray-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              <div className="mt-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Currently Working On
                </p>

                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-2 font-semibold text-gray-900 dark:text-white"
                >
                  AI Code Review Platform 🚀
                </motion.p>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Building a SaaS-style product with authentication, dashboard & AI
                  features.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
