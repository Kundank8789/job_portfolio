export default function About(){
  return (
    <section id="about" className="mt-12 bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="mt-3 text-sm leading-7">
        Passionate Full Stack Developer specializing in the MERN stack and AI-based applications. Skilled in building scalable, responsive, and efficient systems. Adept at integrating machine learning APIs and automating workflows to enhance web functionality. Strong problem-solving mindset with experience delivering real-world projects using modern development practices.
      </p>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-semibold">Skills</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>React, Next.js, Node.js, Express, MongoDB</li>
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
