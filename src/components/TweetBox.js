import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import CounterContainer from './CounterContainer';
import {
  ImageIcon,
  GIFIcon,
  PollIcon,
  EmojiIcon,
  ScheduleIcon,
  PlusIcon,
} from './icons';
const TweetBox = () => {
  const [formText, setFormText] = useState('');
  const [counter, setCounter] = useState(0);

  const styleRing = () => {
    const characterLimit = 280;
    const characterLeft = characterLimit - counter;
    const r = characterLeft <= 20 ? 14 : 9;

    const circleLength = 2 * Math.PI * r;
    const colored = (circleLength * counter) / characterLimit;
    const gray = circleLength - colored;
    return {
      colored,
      gray,
      characterLeft,
      r,
    };
  };
  return (
    <div className="flex flex-1 flex-col items-start px-3">
      <TextareaAutosize
        placeholder="What's happening?"
        className="pt-3 w-full resize-none h-auto overflow-hidden bg-transparent outline-none text-xl placeholder:text-secondary-darkGray placeholder:text-xl"
        minRows={2}
        onChange={(e) => {
          setFormText(e.target.value);
          setCounter(e.target.value.length);
        }}
        value={formText}
      ></TextareaAutosize>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center mt-3 -ml-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full text-primary-base cursor-pointer hover:bg-primary-lighten ">
            <ImageIcon className="w-5 h-5" />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full text-primary-base cursor-pointer hover:bg-primary-lighten ">
            <GIFIcon className="w-5 h-5" />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full text-primary-base cursor-pointer hover:bg-primary-lighten ">
            <PollIcon className="w-5 h-5" />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full text-primary-base cursor-pointer hover:bg-primary-lighten ">
            <EmojiIcon className="w-5 h-5" />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full text-primary-base cursor-pointer hover:bg-primary-lighten ">
            <ScheduleIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="flex items-center">
          {counter > 0 && (
            <CounterContainer counter={counter} styleRing={styleRing} />
          )}
          <button
            className="px-4 py-2 ml-3 bg-primary-base text-white opacity-100 font-bold text-base  rounded-full hover:bg-primary-darken disabled:opacity-50 transform transition-colors duration-300"
            disabled={!formText}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;
