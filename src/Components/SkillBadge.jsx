import React from 'react';

const SkillBadge = ({ name, url, Icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2.5 px-5 py-2.5 bg-white shadow-sm border border-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:-translate-y-1 hover:shadow-md hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
    >
      <span className="group-hover:scale-110 transition-transform duration-300">
        <Icon size={18} />
      </span>
      {name}
    </a>
  );
};

export default SkillBadge;