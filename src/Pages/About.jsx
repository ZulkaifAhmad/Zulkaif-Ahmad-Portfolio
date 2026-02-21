import React from "react";
import { MoveUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ExperienceCard from "../Components/Experience";
import {gojins , university, pic , college, school, hiskytech} from "../assets/assets.js";

import {
  Atom,
  FileJson,
  Palette,
  GitBranch,
  Triangle,
  Code2,
  Send,
  Globe,
  FileCode,
  Layers,
  Database,
  Waypoints,
} from "lucide-react";
import SkillBadge from "../Components/SkillBadge";

 export let skillsData = [
    {
      name: "HTML5",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      icon: FileCode,
    },
    {
      name: "CSS3",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      icon: Layers,
    },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: FileJson,
    },
    { name: "React.js", url: "https://react.dev/", icon: Atom },
    { name: "Next.js", url: "https://nextjs.org/", icon: Globe },
    {
      name: "Redux Toolkit",
      url: "https://redux-toolkit.js.org/",
      icon: Database,
    },
    { name: "React Router", url: "https://reactrouter.com/", icon: Waypoints },
    { name: "Tailwind CSS", url: "https://tailwindcss.com/", icon: Palette },
    { name: "Git", url: "https://git-scm.com/", icon: GitBranch },
    { name: "Vercel", url: "https://vercel.com/", icon: Triangle },
    { name: "VS Code", url: "https://code.visualstudio.com/", icon: Code2 },
    { name: "Postman", url: "https://www.postman.com/", icon: Send },
  ];

const About = () => {
  const naviagte = useNavigate();

  

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <section className="max-w-5xl mx-auto md:px-20 px-6 py-16 md:py-18 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-4xl md:tracking-tight font-extrabold text-gray-900 mb-3">
            Hi, I'm <br /> Zulkaif Ahmad.
          </h1>
          <p className="mb-5 text-lg tracking-tight font-medium">
            HTML | CSS | JavaScript | React.js | Redux-Toolkit |
            React-Router-DOM | Tailwind CSS | Git & Github{" "}
          </p>
          <p className="text-lg text-gray-600 md:tracking-tight leading-relaxed mb-2">
            I am a Frontend Developer based in Peshawar , Pakistan, passionate
            about crafting seamless, scalable, and intuitive web experiences. I
            bridge the gap between elegant design and robust engineering to
            build applications that users love.
          </p>

          <div className="flex gap-2 items-center justify-start">
            <button
              onClick={() => naviagte("/portfolio")}
              className="mt-4 flex items-center bg-gray-900 text-white gap-2 text-xs font-medium  hover:bg-black transition-colors p-2 rounded-lg cursor-pointer"
            >
              My Projects
              <MoveUpRight size={15} />
            </button>
            <button
              onClick={() => naviagte("/contact")}
              className="mt-4 flex items-center bg-gray-50 border border-gray-200 gap-2 text-xs font-medium  transition-colors p-2 rounded-lg cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="bg-gray-200 rounded-2xl aspect-square flex items-center justify-center text-gray-400 overflow-hidden shadow-lg border border-gray-300">
          <img
            src={pic}
            alt="Profile Image"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="bg-white px-20 py-16 md:py-16">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">My Experience</h1>
        <ExperienceCard
          startDate="Jan 2025"
          endDate="20 March 2025"
          role="Web Developer Intern"
          company="GO JINS "
          img={gojins}
          description="Developed responsive web applications using React.js and Next js. Collaborated with Team to implement pixel-perfect designs and optimized application performance."
          link="https://gojins.com/"
        />
        <ExperienceCard
          startDate="23 July 2024"
          endDate="23 Aug 2024"
          role="Frontend Developer Intern"
          company="HISKYTECH"
          img={hiskytech}
          description="Developed responsive web applications using React.js and Tailwind CSS. Collaborated with UX/UI designers to implement pixel-perfect designs and optimized application performance."
          link="https://hiskytechs.com/"
        />
      </section>

      <section className="bg-white px-20 py-16 md:py-16">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">My Education</h1>
        <ExperienceCard
          startDate="2023"
          endDate="Present (2027)"
          role="BS Computer Science"
          img={university}
          company="University of Agriculture Peshawar"
          description="Pursuing a comprehensive curriculum encompassing core computer science principles, software engineering methodologies, data structures, algorithms, and computational mathematics."
          link="https://www.aup.edu.pk/"
        />
        <ExperienceCard
          startDate="2021"
          endDate="2023"
          img={college}
          role="Computer Science (HSSC)"
          company="The Brilliant College Peshawar"
          description="Completed Higher Secondary School Certificate (ICS) with a focus on computer science, advanced mathematics, and foundational programming concepts, preparing for university-level software engineering."
          link="https://web.facebook.com/thebcp2"
        />
        <ExperienceCard
          startDate="2020"
          endDate="2021"
          role="Science Student (SSC)"
          img={school}
          company="Ittefaq Model School and College"
          description="Completed Secondary School Certificate (SSC) with a strong foundation in core science subjects, developing analytical and mathematical skills as a stepping stone for advanced studies."
          link="https://web.facebook.com/profile.php?id=100086016085094"
        />
        
      </section>

      <section className="py-16 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Technical Arsenal
          </h2>
          <div className="flex flex-wrap gap-4">
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

      <section className="bg-white py-16 md:py-15">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            My Journey & Vision
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            My journey in web development is driven by a constant desire to
            build and innovate. I have experience architecting comprehensive
            frontend solutions, ranging from interactive e-learning platforms
            and blog-themed web applications like Textoria to complex,
            AI-integrated chat applications.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            I focus on writing clean, maintainable code and building responsive
            user interfaces. Ultimately, my vision is to establish a global
            remote software company specializing in delivering top-tier app,
            web, cloud, and AI services.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-15">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Beyond the Screen
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            When I'm not debugging a tricky state management issue or refining a
            responsive layout, I enjoy diving deep into new technologies,
            exploring the intricacies of core JavaScript, and keeping up with
            the fast-paced tech landscape. I also appreciate a good programming
            roast and the humor that comes with life as a developer.
          </p>

          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Let's Build Something Great Together.
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're looking for a dedicated frontend developer for your
              next project or want to discuss the future of web technologies, my
              inbox is always open.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Reach Out
              </button>
              <button className="px-6 py-3 bg-transparent border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-400 hover:text-gray-100 transition-colors">
                View My Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
