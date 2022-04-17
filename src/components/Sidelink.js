import React from 'react';

const Sidelink = ({ title, Icon, path }) => {
  return (
    <li className="group">
      <a href={path} className="block text-secondary-black">
        <div className="inline-block">
          <div className="flex items-center group-hover:bg-secondary-extraLightGray p-3 rounded-full transform transition-colors duration-150">
            <Icon /> <span className="text-xl ml-5 mr-4">{title}</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default Sidelink;
