import React, { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';

import db from '../../firebase';
import { PopulerIcon } from '../icons';
import ProfilePicture from '../../img/profilePicture.jpeg';
import TweetBox from '../TweetBox';
import FeedList from '../FeedList';
const Main = () => {
  const [tweets, setTweets] = useState([]);

  const getTweets = async () => {
    try {
      const q = query(collection(db, 'tweet'), orderBy('timestamp', 'desc'));
      // const querySnapshot = await getDocs(q);
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setTweets(querySnapshot.docs.map((tweet) => tweet.data()));
      });
    } catch (e) {
      console.error('Error getting documents: ', e);
    }
  };
  useEffect(() => {
    getTweets();
  }, []);
  return (
    <main className="flex-1 border-x border-secondary-lightestGray mr-8">
      <header className="p-4 sticky top-0 z-10 flex items-center justify-between bg-white/80 backdrop-blur-md">
        <h2 className="text-xl font-bold text-secondary-black">Home</h2>
        <div className="w-9 h-9 flex items-center justify-center rounded-full cursor-pointer hover:bg-secondary-extraLightGray">
          <PopulerIcon className="w-5 h-5 text-secondary-black" />
        </div>
      </header>
      {/* Form Area */}
      <div className="px-4 flex items-start">
        <img src={ProfilePicture} alt="" className="w-12 h-12 rounded-full" />
        <TweetBox />
      </div>
      <div className="w-full h-px bg-secondary-lightestGray my-1"></div>

      {/* Feeds */}
      <FeedList tweets={tweets} />
    </main>
  );
};

export default Main;
