import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center 
      bg-gradient-to-b from-white to-gray-50 
      dark:from-black dark:to-zinc-950"
    >
      <div className="w-full max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              🚀 Available for Internship / Full-Time
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              Hi, I’m <span className="text-blue-600 dark:text-blue-400">Kundan</span> 👋
            </h1>

            <h2 className="mt-3 text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300">
              Full Stack MERN Developer | React • Node.js • MongoDB
            </h2>

            <p className="mt-4 leading-relaxed max-w-xl text-gray-600 dark:text-gray-400">
              I build modern, responsive web applications with clean UI, secure APIs,
              and real-world features like authentication, dashboards, and integrations.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl 
                bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                View Projects <ArrowRight size={18} />
              </a>

              <a
                href="/Kundan_Kumar_Resume_FINAL(1).pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl 
                border border-gray-300 dark:border-zinc-700 
                text-gray-900 dark:text-white font-semibold 
                hover:bg-gray-100 dark:hover:bg-zinc-900 transition"
              >
                Download Resume <Download size={18} />
              </a>
            </div>

            {/* Social */}
            <div className="mt-7 flex items-center gap-4">
              <a
                href="https://github.com/Kundank8789"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-gray-200 dark:border-zinc-700 
                hover:bg-gray-100 dark:hover:bg-zinc-900 transition
                text-gray-900 dark:text-white"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-gray-200 dark:border-zinc-700 
                hover:bg-gray-100 dark:hover:bg-zinc-900 transition
                text-gray-900 dark:text-white"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:yourmail@gmail.com"
                className="p-3 rounded-xl border border-gray-200 dark:border-zinc-700 
                hover:bg-gray-100 dark:hover:bg-zinc-900 transition
                text-gray-900 dark:text-white"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center md:justify-end"
          >
            <div
              className="w-full max-w-sm rounded-2xl border 
              border-gray-200 dark:border-zinc-800
              bg-white dark:bg-zinc-950
              shadow-sm p-6"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">Tech Stack</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "MongoDB", "Express", "Tailwind"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full 
                      bg-gray-100 text-gray-700 
                      dark:bg-zinc-900 dark:text-gray-200"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Currently Working On
                </p>
                <p className="mt-2 font-semibold text-gray-900 dark:text-white">
                  AI Code Review Platform 🚀
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
