import React from 'react';

import { ReplyIcon, ReTweetIcon, LikeIcon, ShareIcon } from './icons';
import ProfilePicture from '../img/profilePicture.jpeg';
import BlowMind from '../img/blow-mind.gif';
import { formatDistanceToNowStrict } from 'date-fns';
const FeedItem = ({ displayName, username, formText, timestamp, avatar }) => {
  return (
    <div className="flex items-start py-3 px-4 cursor-pointer hover:bg-secondary-hoverGray ">
      <a href="#/" className="relative mr-3">
        <img src={avatar} alt="" className="w-12 h-12 rounded-full" />
        <div className="w-12 h-12 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 imgShadow transition-all duration-200 hover:imgBackground"></div>
      </a>

      <div className="flex flex-1 flex-col items-start">
        <div className="flex items-center gap-1 text-sm text-secondary-darkGray">
          <a
            href="#/"
            className="font-bold text-secondary-black hover:underline"
          >
            {displayName}
          </a>
          <span>{username}</span>
          <span> · </span>
          <time>
            {timestamp &&
              formatDistanceToNowStrict(new Date(timestamp.seconds * 1000), {
                addSuffix: true,
              })}
          </time>
        </div>
        <p className="text-sm text-secondary-black whitespace-pre-wrap">
          {formText}
        </p>
        {/* <img src={BlowMind} alt="" className="max-h-96 mt-3 rounded-xl" /> */}
        <ul className="pt-3 flex items-center justify-between w-full max-w-md">
          <li className="flex items-center group text-secondary-darkGray">
            <div className="w-9 h-9 flex items-center justify-center rounded-full group-hover:bg-tweetFooter-secondary-blue">
              <ReplyIcon className="w-5 h-5 group-hover:text-tweetFooter-primary-blue" />
            </div>
            <span className="px-3 text-sm group-hover:text-tweetFooter-primary-blue">
              22
            </span>
          </li>
          <li className="flex items-center group text-secondary-darkGray">
            <div className="w-9 h-9 flex items-center justify-center rounded-full group-hover:bg-tweetFooter-secondary-green">
              <ReTweetIcon className="w-5 h-5 group-hover:text-tweetFooter-primary-green" />
            </div>
            <span className="px-3 text-sm group-hover:text-tweetFooter-primary-green">
              91
            </span>
          </li>
          <li className="flex items-center group text-secondary-darkGray">
            <div className="w-9 h-9 flex items-center justify-center rounded-full group-hover:bg-tweetFooter-secondary-red">
              <LikeIcon className="w-5 h-5 group-hover:text-tweetFooter-primary-red" />
            </div>
            <span className="px-3 text-sm group-hover:text-tweetFooter-primary-red">
              2,345
            </span>
          </li>
          <li className="flex items-center group text-secondary-darkGray">
            <div className="w-9 h-9 flex items-center justify-center rounded-full group-hover:bg-tweetFooter-secondary-blue">
              <ShareIcon className="w-5 h-5 group-hover:text-tweetFooter-primary-blue" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeedItem;
