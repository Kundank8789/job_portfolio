"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white dark:bg-[#0f0f0f] rounded-xl shadow border border-gray-200 dark:border-gray-800 transition">
      <h1 className="text-3xl font-semibold text-black dark:text-white">
        Contact Me
      </h1>

      <p className="mt-3 text-gray-600 dark:text-gray-400">
        I usually reply within a few hours 🙂
      </p>

      {/* Email Section */}
      <div className="mt-6">
        <h2 className="font-semibold text-lg text-black dark:text-white flex items-center gap-2">
          <FaEnvelope /> Email
        </h2>

        <button
          className="mt-2 underline text-blue-600 dark:text-blue-400 text-sm hover:opacity-80"
          onClick={() => {
            navigator.clipboard.writeText("kundansinghh87@gmail.com");
            alert("✅ Email copied!");
          }}
        >
          kundansinghh87@gmail.com
        </button>
      </div>

      {/* Social */}
      <div className="mt-6">
        <h2 className="font-semibold text-lg text-black dark:text-white">
          Social Media Links
        </h2>

        <div className="mt-3 flex flex-col gap-3">
          <a
            href="https://github.com/Kundank8789"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-3 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-[#181818] transition cursor-pointer"
          >
            <FaGithub size={20} /> <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/kundan-kumar-3907a3352/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-3 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-blue-600 hover:text-white transition cursor-pointer"
          >
            <FaLinkedin size={20} /> <span>LinkedIn</span>
          </a>

          <a
            href="https://x.com/Rajputkund69519"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-3 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-black hover:text-white transition cursor-pointer"
          >
            <FaTwitter size={20} /> <span>Twitter / X</span>
          </a>
        </div>
      </div>
    </div>
  );
}
