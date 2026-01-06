'use client'

export default function About() {
  return (
    <section id="about" className="mt-20 p-6 bg-white dark:bg-[#0f0f0f] transition-all rounded-xl shadow-sm">
      <h2 className="text-3xl font-semibold text-black dark:text-white">About</h2>

      <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        I am a Full Stack Developer specializing in the MERN stack and Next.js, with a strong focus on
        building scalable web applications and solving real-world problems through clean architecture,
        performance optimization, and intuitive user experience.
      </p>

      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        I’ve worked on projects such as a Grocery Delivery Platform, AI Fitness Tracker, URL Shortener,
        and LinkedIn Clone — where I implemented authentication, database modeling, admin dashboards,
        API integrations, and real-time user features.
      </p>

      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        I enjoy working across both frontend and backend, improving system performance, structuring
        reusable components, and writing maintainable code. I am continuously learning system design,
        DevOps basics, and AI-driven application workflows to build more production-ready solutions.
      </p>

      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
        I'm actively seeking full-time opportunities where I can contribute to impactful projects, collaborate with talented teams, and continue growing as a developer.
      </p>

      <div className="mt-6 grid md:grid-cols-3 gap-4">

        <div>
          <h3 className="font-semibold text-black dark:text-white">Skills</h3>
          <ul className="text-sm mt-2 space-y-1 text-gray-700 dark:text-gray-300">
            <li>MERN Stack • Next.js • TypeScript • Prisma</li>
            <li>Node.js • Express • REST APIs • MongoDB</li>
            <li>Tailwind CSS • Responsive UI • Reusable Components</li>
            <li>Authentication (JWT, OAuth, NextAuth)</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-black dark:text-white">Certifications</h3>
          <ul className="text-sm mt-2 space-y-1 text-gray-700 dark:text-gray-300">
            <li>AWS Academy Cloud Foundation</li>
            <li>Hands-on Web Development — Infosys Springboard</li>
            <li>Getting Started with MongoDB Atlas</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-black dark:text-white"></h3>
          <ul className="text-sm mt-2 space-y-1 text-gray-700 dark:text-gray-300">
            <li></li>
          </ul>
        </div>

      </div>
    </section>
  )
}
