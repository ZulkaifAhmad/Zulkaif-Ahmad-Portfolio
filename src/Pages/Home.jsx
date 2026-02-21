import React from "react";
import { Dot, MoveUpRight, ExternalLink, Github, Briefcase, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { skillsData } from "./About";
import SkillBadge from "../Components/SkillBadge";
import { pic } from "../assets/assets";

const projects = [
  {
    id: 1,
    title: "E-Learning Platform",
    description:
      "A responsive educational platform featuring a shopping cart and dedicated blog section.",
    image: "./src/assets/E.png",
    techStack: ["React", "Tailwind CSS", "React Router Dom", "Redux Toolkit"],
    liveLink: "https://e-learning-five-blond.vercel.app/",
    githubLink: "https://github.com/ZulkaifAhmad/E-Learning.git",
  },
  {
    id: 2,
    title: "Textora",
    description:
      "A blog-themed frontend design project with a modern, clean, and responsive UI.",
    image: "./src/assets/textora.png",
    techStack: ["React", "Redux Toolkit", "React Router Dom", "Tailwind CSS"],
    liveLink: "https://textoria-tawny.vercel.app/",
    githubLink: "https://github.com/ZulkaifAhmad/Textora.git",
  },
];

const experienceData = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Freelance / Self-Employed",
    period: "2023 - Present",
    description: "Building modern, responsive, and interactive web applications using React, Tailwind CSS, and Redux. Focusing on clean UI/UX and scalable code.",
  },
];

const educationData = [
  {
    id: 1,
    degree: "BS Computer Science",
    institution: "University of Agriculture Peshawar",
    period: "Ongoing",
    description: "Studying core computer science concepts, software engineering principles, and advanced web development technologies.",
  },
];

function Home() {
  const naviagte = useNavigate();

  return (
    <div className="px-4 py-8 md:p-10 overflow-x-hidden">
      <div className="flex items-center gap-0 bg-gray-50 border border-gray-200 mb-4 rounded-full w-fit px-0 py-0">
        <Dot size={38} color="#22c55e" />
        <p className="text-sm font-medium text-slate-800 m-0 py-0 pr-3">
          Available for work
        </p>
      </div>

      <h1 className="text-3xl font-semibold w-full md:w-2/3 tracking-tight">
        Frontend Web Developer | Creating Modern and Responsive Web Interfaces
      </h1>

      <div className="flex w-full gap-3 items-center pb-6 mt-6">
        <img
          className="w-16 h-16 rounded-full object-cover shadow-sm"
          src={pic}
          alt="Zulkaif Ahmad"
        />
        <div className="flex flex-col items-start justify-center">
          <p className="text-lg leading-5 font-medium text-gray-900">
            Zulkaif Ahmad
          </p>
          <p className="text-sm leading-5 font-medium text-gray-500 uppercase tracking-tight mt-0.5">
            Frontend Developer
          </p>
        </div>
      </div>

      <p className="text-lg w-full md:w-4/5 tracking-tight text-gray-700">
        I am a Frontend Developer specializing in React, Tailwind CSS, and
        Redux. I build modern, interactive web applications from the ground up,
        focusing on clean code and intuitive design. Building Fast, Responsive,
        and Engaging User Experiences.
      </p>

      <div className="flex gap-3 items-center justify-start mt-6">
        <button
          onClick={() => naviagte("/about")}
          className="flex items-center bg-gray-900 text-white gap-2 text-sm font-medium hover:bg-black transition-colors px-4 py-2.5 rounded-lg cursor-pointer"
        >
          More about me
          <MoveUpRight size={15} />
        </button>
        <button
          onClick={() => naviagte("/contact")}
          className="flex items-center bg-white border border-gray-200 gap-2 text-sm font-medium hover:bg-gray-50 transition-colors px-4 py-2.5 rounded-lg cursor-pointer"
        >
          Contact Me
        </button>
      </div>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Technical Arsenal
          </h2>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {skillsData.map((skill, index) => (
              <SkillBadge
                key={index}
                name={skill.name}
                url={skill.url}
                Icon={skill.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase size={24} className="text-gray-700" />
            Experience
          </h2>
          <div className="flex flex-col gap-4">
            {experienceData.map((exp) => (
              <div key={exp.id} className="p-5 md:p-6 bg-gray-50 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-1 md:gap-0">
                  <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                  <span className="text-xs font-semibold bg-gray-200 text-gray-700 px-2.5 py-1 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-500 mb-3">{exp.company}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 mt-8 lg:mt-0">
            <GraduationCap size={24} className="text-gray-700" />
            Education
          </h2>
          <div className="flex flex-col gap-4">
            {educationData.map((edu) => (
              <div key={edu.id} className="p-5 md:p-6 bg-gray-50 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-1 md:gap-0">
                  <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                  <span className="text-xs font-semibold bg-gray-200 text-gray-700 px-2.5 py-1 rounded-full w-fit">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-500 mb-3">{edu.institution}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="work">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          Recent Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="h-48 md:h-64 w-full bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5 flex-grow">
                  {project.description}
                </p>

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

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
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
    </div>
  );
}

export default Home;