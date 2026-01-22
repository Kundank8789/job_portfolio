export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 dark:border-gray-800 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Kundan. All rights reserved.
        </p>

        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/Kundank8789"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
