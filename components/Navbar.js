import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
        <div className="text-lg font-semibold">Kundan Kumar</div>
        <div className="flex items-center gap-3">
          <Link href="#projects" className="text-sm">Projects</Link>
          <Link href="#about" className="text-sm">About</Link>

          <a
            href="/assets/resume/Kundan_Kumar_resume.pdf"
            download
            className="px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-900 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
