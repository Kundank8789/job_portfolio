import { skills } from "../data/skills";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mt-24">
      {/* Heading */}
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Skills
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Technologies I work with to build modern web applications ⚡
          </p>
        </div>
      </Reveal>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <div
              className="bg-white dark:bg-[#0f0f0f] rounded-xl shadow-sm p-6 
              border border-gray-200 dark:border-gray-800 
              hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-gray-100 dark:bg-gray-800 
                    text-gray-800 dark:text-gray-200 
                    px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
