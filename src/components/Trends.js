import React from 'react';
import { SearchIcon } from './icons';
import { trends } from '../constants';
import Trend from './Trend';
const Trends = () => {
  return (
    <aside className="w-80">
      <div className="py-1 bg-white sticky top-0 z-10 mb-3">
        <div className="flex items-center bg-secondary-lightestGray rounded-full">
          <SearchIcon className="h-5 pl-5 text-secondary-darkGray" />
          <input
            type="text"
            placeholder="Search Twitter"
            className="bg-transparent outline-none p-3 placeholder:text-secondary-darkGray"
          />
        </div>
      </div>

      <div className="bg-secondary-trendsColor border border-secondary-trendsColor rounded-2xl">
        <h2 className="text-xl font-extrabold px-4 py-3 text-secondary-black">
          Trends for you
        </h2>
        <ul>
          {trends.map((trend, index) => (
            <Trend key={index} {...trend} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Trends;
