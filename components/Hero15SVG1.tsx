import React from 'react';

const Hero15SVG1 = ({ circularTextFill, circularFontSize, circularText }) => (
  <svg
    viewBox="0 0 120 120"
    width={120}
    height={120}
    className={`${circularTextFill}`}
    fill="currentColor"
  >
    <defs>
      <path
        id="circle"
        d="M60,60
        m -45, 0
        a 45,45 0 1,1 90,0
        a 45,45 0 1,1 -90,0"
      />
    </defs>
    <text className={circularFontSize}>
      <textPath xlinkHref="#circle">
        {circularText}
      </textPath>
    </text>
  </svg>
);

export default Hero15SVG1;
