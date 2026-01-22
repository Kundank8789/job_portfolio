import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mt-24">
      {/* Heading */}
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            About Me
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            A quick introduction about who I am and what I do 👨‍💻
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side */}
        <Reveal>
          <div className="bg-white dark:bg-[#0f0f0f] rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
              👋 Hi, I'm Kundan
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m a Full Stack MERN Developer who loves building modern, responsive,
              and scalable web applications. I enjoy working on real-world projects
              like dashboards, authentication systems, API integrations, and AI-based
              applications.
            </p>

            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              My focus is writing clean code, improving UI/UX, and delivering fast,
              reliable applications. I’m actively looking for opportunities to grow
              as a developer and contribute to impactful projects.
            </p>
          </div>
        </Reveal>

        {/* Right Side */}
        <Reveal delay={0.1}>
          <div className="bg-white dark:bg-[#0f0f0f] rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              🎓 Education & Highlights
            </h3>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex gap-2">
                <span>✅</span>
                <span>
                  B.Tech (CSE/IT) — <b>I.K. Gujral Punjab Technical University</b>
                </span>
              </li>

              <li className="flex gap-2">
                <span>✅</span>
                <span>
                  Built multiple full-stack projects using{" "}
                  <b>React, Next.js, Node.js</b>
                </span>
              </li>

              <li className="flex gap-2">
                <span>✅</span>
                <span>
                  Comfortable with <b>MongoDB, PostgreSQL, Prisma</b>
                </span>
              </li>

              <li className="flex gap-2">
                <span>✅</span>
                <span>
                  Deployments on <b>Vercel</b> with clean UI & responsive design
                </span>
              </li>
            </ul>

            {/* Resume Button */}
            <div className="mt-6">
              <a
                href="/Kundan_Kumar_Resume_FINAL(1).pdf"
                download
                className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 
                text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Download Resume 📄
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
