import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields!");
      return;
    }

    // Temporary (for now)
    alert("Message sent successfully ✅");

    // Clear form
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="mt-24 mb-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
          Contact Me
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Feel free to reach out for opportunities, collaborations, or queries 📩
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Info */}
        <div className="bg-white dark:bg-[#0f0f0f] rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
            Let’s Connect 🤝
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your team.
          </p>

          <div className="mt-6 space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              📧 Email: <b>yourmail@gmail.com</b>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              🌐 GitHub: <b>github.com/Kundank8789</b>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              💼 LinkedIn: <b>linkedin.com</b>
            </p>
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="https://github.com/Kundank8789"
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-center py-2 px-4 rounded-lg transition text-sm font-medium"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition text-sm font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-[#0f0f0f] rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800"
        >
          <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
            Send a Message ✨
          </h3>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
              bg-white dark:bg-black text-black dark:text-white outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
              bg-white dark:bg-black text-black dark:text-white outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
              bg-white dark:bg-black text-black dark:text-white outline-none resize-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message 🚀
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
