import React, { useState } from 'react'
import  projects  from '../../assets/assets.js';

const Projects = ({Darkmode}) => {
  const [selectedCategory, setSelectedCategory] = useState("frontend");

  return (
    <section id="projects" className="py-20 px-6 text-center">
      <h2 className={`text-4xl font-bold mb-12 text-center ${
        Darkmode ? "text-white glow-text" : "text-gray-900"
      }`}>Projects</h2>


      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {["frontend", "full-stack"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-white ${
              selectedCategory === category ? "bg-purple-600" : "bg-gray-700"
            } transition duration-300`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects
          .filter((project) => project.category === selectedCategory)
          .map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg m-2 hover:bg-purple-700 transition"
                  >
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg m-2 hover:bg-gray-600 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700 text-xs text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Projects
