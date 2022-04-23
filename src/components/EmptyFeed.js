import React from 'react';

const EmptyFeed = () => {
  return (
    <div className="flex flex-col items-start max-w-md mx-auto my-8 px-8">
      <h2 className="text-3xl font-extrabold mb-2 ">Welcome to Twitter!</h2>
      <p className="text-sm text-secondary-darkGray mb-7">
        This is the best place to see what’s happening in your world. Find some
        people and topics to follow now.
      </p>
      <button className=" px-8 py-4 text-white text-base font-bold rounded-full bg-primary-base hover:bg-primary-darken transform transition-colors duration-200">
        Let's go!
      </button>
    </div>
  );
};

export default EmptyFeed;
