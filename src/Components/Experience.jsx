import { MoveUpRight, X } from 'lucide-react';
import React, { useState } from 'react';

const ExperienceCard = ({
  startDate,
  endDate,
  role,
  img,
  company,
  description,
  link
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col mt-4 md:flex-row gap-4 md:gap-8 py-1">
        <div className="md:w-1/4 flex-shrink-0">
          <p className="text-gray-600 text-sm md:text-base font-medium">
            {startDate} -  {endDate}
          </p>
          <img 
            src={img} 
            alt="certificate" 
            className="w-25 mt-5 h-20 object-cover object-top cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => setIsModalOpen(true)}
          />
        </div>

        <div className="md:w-3/4 flex flex-col gap-0">
          <a 
            href={link || '#'} 
            className="group flex items-center gap-1.5 text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors w-fit"
            target="_blank"
            rel="noopener noreferrer"
          >
            {role}
            <MoveUpRight size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />   
          </a>

          <h3 className="text-base font-semibold text-gray-900">
            {company}
          </h3>

          <p className="text-gray-600 leading-relaxed text-base mt-2">
            {description}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 p-2 text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsModalOpen(false)}
          >
            <X size={32} />
          </button>
          
          <img 
            src={img} 
            alt="certificate fullscreen" 
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ExperienceCard;