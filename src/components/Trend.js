import React from 'react';
import { DotsIcon } from './icons';

const Trend = ({ name, url, tweetCount, tweetCountText }) => {
  return (
    <li className="px-4 py-3 hover:bg-secondary-lightestGray transform transition-colors duration-200">
      <a href={url} className="flex flex-col items-start relative">
        <div className="w-8 h-8 group rounded-full flex items-center justify-center absolute top-0 right-0 text-secondary-darkGray hover:bg-tweetFooter-secondary-blue hover:text-tweetFooter-primary-blue transform transition-colors duration-200">
          <DotsIcon className="w-5 h-5" />
        </div>

        <div className="text-secondary-black text-base font-bold">{name}</div>
        <div className="flex items-center text-sm text-secondary-darkGray">
          <span>{tweetCount}</span>
          <span className="capitalize ml-1">{tweetCountText}</span>
        </div>
      </a>
    </li>
  );
};

export default Trend;
