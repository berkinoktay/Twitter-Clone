import React from 'react';
import { MENU } from '../constants';
import Sidelink from './Sidelink';
import { TwitterIcon, DotsIcon } from './icons';
import ProfilePicture from '../img/profilePicture.jpeg';
const Sidebar = () => {
  return (
    <div className="w-72 flex flex-col justify-between px-3">
      <div>
        <a href="#/" className="inline-block">
          <div className="w-12 h-12 flex justify-center items-center rounded-full transform transition-colors duration-200 hover:bg-primary-lighten ">
            <TwitterIcon />
          </div>
        </a>

        <nav>
          <ul>
            {MENU.map((link) => (
              <Sidelink
                key={link.key}
                title={link.title}
                Icon={link.icon}
                path={link.path}
              />
            ))}
          </ul>
        </nav>
        <button className="mt-6 bg-primary-base w-10/12 py-3 rounded-full font-bold text-white text-base hover:bg-primary-darken transform transition-colors duration-300">
          Tweet
        </button>
      </div>
      <div className="my-3 p-3 flex items-center rounded-full cursor-pointer transform transition-colors duration-300 hover:bg-secondary-extraLightGray">
        <img src={ProfilePicture} alt="" className="w-10 h-10 rounded-full" />
        <div className="mx-3 flex flex-col">
          <span className="text-sm font-bold text-secondary-black">
            Berkin Oktay
          </span>
          <span className="text-sm text-secondary-darkGray">@berkinoktayy</span>
        </div>
        <div className="flex flex-1 justify-end">
          <DotsIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
