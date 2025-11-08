'use client'
export default function About(){
  return (
    <section id="about" className="mt-20 p-6 bg-white dark:bg-[#0f0f0f] transition-all rounded-xl shadow-sm">
      <h2 className="text-3xl font-semibold text-black dark:text-white">About</h2>
      <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        Passionate Full Stack Developer specializing in the MERN stack and AI-based applications. Skilled in building scalable, responsive, and efficient systems. Adept at integrating machine learning APIs and automating workflows to enhance web functionality. Strong problem-solving mindset with experience delivering real-world projects using modern development practices.
      </p>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-semibold">Skills</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>HTML, CSS, JAvaScript, Tailwind CSS, React, Next.js, Node.js, Express,TypeScript, MongoDB</li>
            <li>TypeScript (basic), Prisma</li>
            <li>OpenAI API, LangChain, TensorFlow</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Certifications</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>AWS Academy Cloud Foundation</li>
            <li>Hands-on Web Development with Hyperapp – Infosys Springboard</li>
            <li>Getting Started with MongoDB Atlas</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Languages</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>English, Hindi, Bhojpuri</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
