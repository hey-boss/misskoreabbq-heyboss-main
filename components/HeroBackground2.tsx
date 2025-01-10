import React from 'react';

const HeroBackground2 = ({
  IMGRR,
  MVTTT,
  BGMHE = 300,
}) => (
  <>
    <div style={{ height: `${BGMHE}px` }} className="w-full relative" ref={MVTTT}>
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ clip: 'rect(0, auto, auto, 0)' }}
      >
        <div
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `url(${IMGRR})`,
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
          className="fixed block top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  </>
);

export default HeroBackground2;
