// components/Projects.js

import Image from "next/image";
import { projects } from "../data/projects";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mt-20">
      {/* Heading */}
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Projects
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Some of my best work with real-world features 🚀
          </p>
        </div>
      </Reveal>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <div className="bg-white dark:bg-[#0f0f0f] rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              {/* Project Thumbnail */}
              {project.image && (
                <div className="mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={350}
                    className="rounded-lg object-cover border border-gray-200 dark:border-gray-700"
                  />
                </div>
              )}

              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                {project.description}
              </p>

              {/* 🔹 Highlights */}
              {project.highlights && (
                <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 text-sm mb-4 space-y-1">
                  {project.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                  >
                    Live Demo →
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    project.live ? "flex-1" : "w-full"
                  } bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium`}
                >
                  Code ↗
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
