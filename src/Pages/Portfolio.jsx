import React from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { E , textora , portfolio , gemini , todo } from '../assets/assets.js'

const projects = [
  {
    id: 1,
    title: 'E-Learning Platform',
    description: 'A responsive educational platform featuring a shopping cart and dedicated blog section.',
    image: E,
    techStack: ['React', 'Tailwind CSS', 'React Router Dom' , 'Redux Toolkit'],
    liveLink: 'https://e-learning-five-blond.vercel.app/',
    githubLink: 'https://github.com/ZulkaifAhmad/E-Learning.git'
  },
  {
    id: 2,
    title: 'Textora',
    description: 'A blog-themed frontend design project with a modern, clean, and responsive UI.',
    image: textora,
    techStack: ['React', 'Redux Toolkit' , 'React Router Dom', 'Tailwind CSS'],
    liveLink: 'https://textoria-tawny.vercel.app/',
    githubLink: 'https://github.com/ZulkaifAhmad/Textora.git'
  },
  {
    id: 3,
    title: 'Gemini AI Clone',
    description: 'An interactive chat application integrating real-time API responses with custom state management.',
    image: gemini,
    techStack: ['React', 'Tailwind CSS', 'API Integration'],
    liveLink: 'https://google-gemini-clone-tau.vercel.app/',
    githubLink: 'https://github.com/ZulkaifAhmad/Google-Gemini-Clone.git'
  },
  {
    id: 4,
    title: 'Todo App',
    description: 'A fully functional todo application with local storage persistence and drag-and-drop functionality.',
    image: todo,
    techStack: ['React', 'Tailwind CSS', 'useContext API'],
    liveLink: `https://todo-sigma-sage-54.vercel.app/`,
    githubLink: 'https://github.com/ZulkaifAhmad/Todo-App-React_Practice.git'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing my projects and skills.',
    image: portfolio,
    techStack: ['React', 'Tailwind CSS', 'Lucide React' , 'Tanstack Query' , 'React Router Dom'],
    liveLink: `#`,
    githubLink: 'https://github.com/ZulkaifAhmad/Zulkaif-Ahmad-Portfolio.git'
  }
];

function Portfolio() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-3">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl text-base leading-relaxed">
            A selection of my recent frontend development work. These projects demonstrate my ability to build responsive interfaces, manage application state, and integrate modern web technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="h-56 w-full bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-5 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-200 text-gray-800 text-[11px] px-2.5 py-1 rounded-md font-semibold tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-gray-900 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-white text-gray-900 border border-gray-300 py-2 px-4 rounded-md text-sm font-medium hover:border-gray-900 hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio