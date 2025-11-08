"use client";

import { projects } from "../data/projects";

function Tech({ name }) {
  return (
    <span className="inline-block text-xs px-2 py-1 mr-2 mb-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300">
      {name}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mt-12 p-6 bg-white dark:bg-[#0f0f0f] rounded-xl shadow-sm transition-all">
      <h2 className="text-2xl font-semibold text-black dark:text-white">Projects</h2>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-5 rounded-xl shadow border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#161616] hover:scale-[1.02] transition-transform"
          >
            <h3 className="text-xl font-semibold text-black dark:text-white">{p.title}</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">{p.description}</p>

            <div className="mt-3">
              {p.tech.map((t, idx) => (
                <Tech key={idx} name={t} />
              ))}
            </div>

            <div className="mt-4 flex gap-4">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline text-blue-600 dark:text-blue-400 hover:opacity-80"
                >
                  Live →
                </a>
              )}

              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline text-gray-700 dark:text-gray-300 hover:opacity-80"
                >
                  Code ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
