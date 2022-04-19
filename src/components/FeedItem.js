import React from 'react';
import ProfilePicture from '../img/profilePicture.jpeg';
const FeedItem = () => {
  return (
    <div className="flex items-start py-3 px-4 cursor-pointer hover:bg-secondary-hoverGray ">
      <a href="#/" className="relative mr-3">
        <img src={ProfilePicture} alt="" className="w-12 h-12 rounded-full" />
        <div className="w-12 h-12 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 imgShadow transition-all duration-200 hover:imgBackground"></div>
      </a>

      <div className="flex flex-1 flex-col items-start">
        <div className="flex items-center gap-1 text-sm text-secondary-darkGray">
          <a
            href="#/"
            className="font-bold text-secondary-black hover:underline"
          >
            Berkin Oktay
          </a>
          <span>@berkinoktayy</span>
          <span> · </span>
          <time>1h</time>
        </div>
        <div className="text-sm text-secondary-black">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
          incidunt reiciendis voluptatem dolor voluptatum? Nihil tempore nam
          cupiditate ipsum modi a, recusandae excepturi in, labore molestias
          magnam deserunt doloremque natus.
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
