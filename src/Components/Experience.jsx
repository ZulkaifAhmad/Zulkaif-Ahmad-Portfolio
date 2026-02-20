import { Move, MoveUpRight } from 'lucide-react';
import React from 'react';

const ExperienceCard = ({
  startDate,
  endDate,
  role,
  company,
  description,
  link
}) => {
  return (
    <div className="flex flex-col mt-4 md:flex-row gap-4 md:gap-8 py-1">
      <div className="md:w-1/4 flex-shrink-0">
        <p className="text-gray-600 text-sm md:text-base font-medium">
          {startDate} -  {endDate}
        </p>
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
  );
};

export default ExperienceCard;