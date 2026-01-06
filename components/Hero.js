import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="mt-8 grid md:grid-cols-3 gap-6 items-center">
      <div className="md:col-span-2">
        <h1 className="text-4xl font-bold text-black dark:text-white">Kundan Kumar</h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
          Full Stack Developer — MERN / Next.js | AI Integration
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="/assets/resume/Kundan_Kumar_Resume_Balanced_Spaced_BlackLinks.pdf"
            download
            className="inline-block bg-black dark:bg-white dark:text-black text-white px-5 py-2 rounded-md hover:opacity-90 transition"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="inline-block border px-5 py-2 rounded-md dark:border-gray-600 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            View Projects
          </a>
        </div>
        {/* ✅ Email section — Copy to clipboard, NOT open Gmail */}
        <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
          <strong>Email:</strong>{" "}
          <button
            type="button"  // ✅ prevents opening mail app
            className="underline hover:text-blue-500 cursor-pointer"
            onClick={() => {
              navigator.clipboard
                .writeText("kundansinghh87@gmail.com")
                .then(() => alert("✅ Email copied to clipboard!"))
                .catch(() => alert("❌ Copy failed. Try manually."));
            }}
          >
            kundansinghh87@gmail.com
          </button>
        </div>



      </div>

      {/* ✅ Modern Contact Card */}
      <div className="hidden md:flex flex-col gap-4 hero-right p-6 rounded-xl shadow bg-white dark:bg-[#1a1a1a]">
        <div className="font-semibold text-gray-800 dark:text-white text-lg">
          Let’s Connect 🚀
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          I’m open for freelance, job opportunities, or collaboration.
        </p>

        {/* Social Icons */}
        <div className="flex flex-col gap-3">
          <a
            href="https://github.com/Kundank8789"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <FaGithub size={18} />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/kundan-kumar-3907a3352"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-blue-600 hover:text-white transition"
          >
            <FaLinkedin size={18} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://x.com/Rajputkund69519"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-black hover:text-white transition"
          >
            <FaTwitter size={18} />
            <span>Twitter / X</span>
          </a>
        </div>
      </div>
    </section>
  );
}
