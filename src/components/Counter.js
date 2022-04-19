import React from 'react';

const Counter = ({ counter, styleRing }) => {
  const characterLeft = styleRing().characterLeft;
  return (
    <div className="flex items-center relative w-8 h-8">
      <span
        className="absolute w-8 h-8 flex items-center justify-center text-sm"
        style={characterLeft <= 0 ? { color: 'rgb(244, 33, 46)' } : {}}
      >
        {characterLeft <= 20 && characterLeft}
      </span>
      {characterLeft > -10 && (
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 30 30">
          <circle
            id="gray"
            fill="none"
            strokeWidth="2"
            cx="50%"
            cy="50%"
            r={styleRing().r}
            className="stroke-secondary-lightestGray"
          ></circle>
          <circle
            id="colored"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            cx="50%"
            cy="50%"
            r={styleRing().r}
            stroke={
              280 - counter <= 0
                ? '#F4212E'
                : 280 - counter <= 20
                ? '#FFD400'
                : '#1D9BF0'
            }
            strokeDasharray={`${styleRing().colored}, ${styleRing().gray} `}
          ></circle>
        </svg>
      )}
    </div>
  );
};

export default Counter;
