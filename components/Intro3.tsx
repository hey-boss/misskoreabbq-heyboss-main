import React, { useEffect, useState } from 'react';

const Intro3 = ({
  IMOR,
  IMOL,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Trigger the "doors" to open after the component is mounted
    setTimeout(() => {
      setIsOpen(true);
    }, 100); // Small delay to ensure the transition is smooth
  }, []);

  // Calculate the position of doors based on the "isOpen" state
  const leftDoorStyle = {
    transform: isOpen ? 'translateX(-100%)' : 'translateX(0)',
    transition: 'transform 2s ease',
  };

  const rightDoorStyle = {
    transform: isOpen ? 'translateX(100%)' : 'translateX(0)',
    transition: 'transform 2s ease',
  };

  return (
    <div className="z-[100] fixed top-0 left-0 h-full w-full pointer-events-none">
      {/* Left Door Image */}
      <div
        className="absolute top-0 left-0 h-full w-1/2 bg-cover bg-center"
        style={{
          ...leftDoorStyle,
          backgroundImage: `url("${IMOL}")`,
        }}
      />

      {/* Right Door Image */}
      <div
        className="absolute top-0 right-0 h-full w-1/2 bg-cover bg-center"
        style={{
          ...rightDoorStyle,
          backgroundImage: `url("${IMOR}")`,
        }}
      />
    </div>
  );
};

export default Intro3;
