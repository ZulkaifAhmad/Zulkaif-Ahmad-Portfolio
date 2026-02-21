import React, { useState } from 'react'
import "./Layout.css"
import { NavLink } from 'react-router-dom'
import { House, User, Phone, MoveUpRight, Github , Target, MoveRight, Facebook, Linkedin, Instagram, Menu, X } from 'lucide-react'
import { pic } from '../assets/assets'

const navLinks = [
  { name: 'Home', path: '/', Icon: House },
  { name: 'About', path: '/about', Icon: User },
  { name: 'Portfolio', path: '/portfolio', Icon: Target },
  { name: 'Contact', path: '/contact', Icon: Phone },
  { name: 'Github', path: '/github', Icon: Github },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 w-full bg-white z-50 px-4 py-3 flex justify-between items-center border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-2">
          <img 
            className='w-8 h-8 rounded-full object-cover'
            src="/src/assets/avtar.avif" alt="Zulkaif Ahmad" 
          />
          <p className='text-sm font-semibold'>Zulkaif Ahmad</p>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="p-1 rounded-md hover:bg-gray-100 transition-colors">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}

      <div 
        id='navbar' 
        className={`fixed md:sticky top-0 left-0 z-40 h-screen w-64 md:w-full bg-white px-5 py-6 md:py-8 flex flex-col justify-start items-center border-r border-gray-100 md:border-none shadow-xl md:shadow-none transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="hidden md:flex w-full gap-3 items-center pb-6 border-b border-gray-100">
          <img 
            className='w-12 h-12 rounded-full object-cover shadow-sm'
            src={pic} alt="Zulkaif Ahmad" 
          />
          <div className="flex flex-col items-start justify-center">
            <p className='text-base leading-4 font-medium text-gray-900'>Zulkaif Ahmad</p>
            <p className='text-xs leading-4 font-medium text-gray-500 uppercase tracking-wide mt-0.5'>Frontend Developer</p>
          </div>
        </div>

        <div className="links w-full flex flex-col gap-1 mt-8 md:mt-6">
          {navLinks.map(({ name, path, Icon }) => (
            <NavLink 
              key={name} 
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `group p-3 rounded-sm w-full flex items-center justify-between gap-3 transition-all duration-300 ${
                  isActive 
                    ? 'bg-gray-900 text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                }`
              }
            >
              <div className='flex items-center gap-3'>
                <Icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
                <span className='text-sm font-medium'>{name}</span>
              </div>
              <div className="opacity-70">
                <MoveUpRight size={16} className="block group-hover:hidden transition-all" />
                <MoveRight size={16} className="hidden group-hover:block transition-all" />
              </div>
            </NavLink>
          ))}
        </div>
          
        <div className="online pt-6 w-full mt-auto flex flex-col items-start gap-3 border-t border-gray-100">
          <p className='text-xs font-bold text-gray-400 uppercase tracking-wider'>Let's Connect</p>
          <div className="flex gap-4 w-full items-center justify-start mt-1">
            <a href="https://www.linkedin.com/in/zulkaif-ahmad-28a0512b7/" target="_blank" rel="noreferrer" className="p-2 bg-gray-50 rounded-lg hover:bg-[#000000] hover:text-white text-gray-600 transition-all duration-300 shadow-sm">
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a href="https://github.com/ZulkaifAhmad" target="_blank" rel="noreferrer" className="p-2 bg-gray-50 rounded-lg hover:bg-[#0A66C2] hover:text-white text-gray-600 transition-all duration-300 shadow-sm">
              <Github size={20} strokeWidth={1.5} />
            </a>
            <a href="https://web.facebook.com/zulkaif.ahmad.149176" target="_blank" rel="noreferrer" className="p-2 bg-gray-50 rounded-lg hover:bg-[#1877F2] hover:text-white text-gray-600 transition-all duration-300 shadow-sm">
              <Facebook size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.instagram.com/zulkaif497/" target="_blank" rel="noreferrer" className="p-2 bg-gray-50 rounded-lg hover:bg-[#E4405F] hover:text-white text-gray-600 transition-all duration-300 shadow-sm">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar