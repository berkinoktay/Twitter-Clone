import React from 'react';
import Counter from './Counter';
import { PlusIcon } from './icons';
const CounterContainer = ({ counter, styleRing }) => {
  return (
    <>
      <Counter counter={counter} styleRing={styleRing} />
      <div className="h-8 bg-secondary-lightGray w-px mx-3"></div>
      <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-full border border-secondary-extraLightGray hover:bg-tweetFooter-secondary-blue transform transition-colors duration-200 ">
        <PlusIcon className="w-4 h-4 text-primary-base" />
      </div>
    </>
  );
};

export default CounterContainer;
