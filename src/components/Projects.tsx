import React, { useEffect, useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  return (
    <section id="projects" className="py-16 px-4 bg-gray-900 text-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-800 rounded-lg shadow p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-600/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
