import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Navbar({ toggleTheme, theme }) {
  return (
    <nav className="bg-white dark:bg-[#0f0f0f] shadow-sm border-b border-gray-200 dark:border-gray-800 transition-all">
      <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
        <div className="text-lg font-semibold text-black dark:text-white">
          Kundan Kumar
        </div>

        <div className="flex items-center gap-4 text-black dark:text-white">
          <Link href="#projects" className="text-sm hover:opacity-80">
            Projects
          </Link>
          <Link href="#about" className="text-sm hover:opacity-80">
            About
          </Link>
          <Link href="/contact" className="text-sm hover:opacity-80">
            Contact
          </Link>

          <a
            href="/assets/resume/Kundan_Kumar_resume.pdf"
            download
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Download Resume
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-3 text-black dark:text-white text-lg">
            <a href="https://github.com/Kundank8789" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kundan-kumar-3907a3352/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://x.com/Rajputkund69519" target="_blank">
              <FaTwitter />
            </a>
          </div>

          {/* ✅ Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-3 text-black dark:text-yellow-300 transition"
          >
            {theme === "dark" ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
