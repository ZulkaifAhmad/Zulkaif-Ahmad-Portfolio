import React from "react";
import { Dot , MoveUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


function Home() {
  const naviagte = useNavigate()
  return (
    <div className="p-10">

      <div className="flex items-center gap-0 bg-gray-50 border border-gray-200 mb-4 rounded-full w-fit px-0 py-0">
        <Dot size={38} color="#22c55e" />
        <p className="text-sm font-medium text-slate-800 m-0 py-0 pr-3">
          Available for work
        </p>
      </div>

      <h1 className="text-3xl font-semibold w-2/3 tracking-tight">
        Frontend Web Developer | Creating Modern and Responsive Web Interfaces
      </h1>

      <div className="md:flex w-full gap-3 items-center pb-6 mt-4">
        <img
          className="w-16 h-16 rounded-full object-cover shadow-sm"
          src="/src/assets/avtar.avif"
          alt="Zulkaif Ahmad"
        />
        <div className="flex flex-col items-start justify-center">
          <p className="text-lg leading-5 font-medium text-gray-900">Zulkaif Ahmad</p>
          <p className="text-sm leading-5 font-medium text-gray-500 uppercase tracking-tight mt-0.5">
            Frontend Developer
          </p>
        </div>
      </div>

      <p className="text-lg w-4/5 tracking-tight">I am a Frontend Developer specializing in React, Tailwind CSS, and Redux. I build modern, interactive web applications from the ground up, focusing on clean code and intuitive design. Building Fast, Responsive, and Engaging User Experiences.</p>

      <div className="flex gap-2 items-center justify-start">
      <button
        onClick={()=> naviagte("/about")}
       className="mt-4 flex items-center bg-gray-900 text-white gap-2 text-sm font-medium  hover:bg-black transition-colors p-2 rounded-lg cursor-pointer">
        More about me 
        <MoveUpRight size={15} />
      </button>
      <button onClick={()=> naviagte("/contact")} className="mt-4 flex items-center bg-gray-50 border border-gray-200 gap-2 text-sm font-medium  transition-colors p-2 rounded-lg cursor-pointer">
        Contact Me
      </button>
      </div>

      <div className="work">
        <h2 className="text-2xl font-semibold mt-10 tracking-tight mb-4">Recent Work</h2>
        <div className="flex flex-col md:flex-row gap-4">

          <div className="bg-gray-100 cursor-pointer p-4 rounded-lg shadow-sm w-full md:w-1/2">
            <img src="./src/assets/work.avif" alt="" 
              className="w-full h-60 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-medium mb-2">E-Learning Site</h3>
            <p className="text-sm text-gray-700">A modern e-commerce website built with React and Tailwind CSS.</p>
          </div>

          <div className="bg-gray-100 cursor-pointer p-4 rounded-lg shadow-sm w-full md:w-1/2">
            <img src="./src/assets/work.avif" alt="" 
              className="w-full h-60 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-medium mb-2">Textora</h3>
            <p className="text-sm text-gray-700">A responsive portfolio site showcasing my work and skills.</p>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default Home;
