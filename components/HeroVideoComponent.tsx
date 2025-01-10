import React, { useEffect, useState } from 'react';

const HeroVideoComponent = ({
  url,
  poster,
  autoPlay,
  muted,
  loop,
}) => {
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    setIsRender(true);
  }, []);

  if (url == null || isRender === false) {
    return <div />;
  }

  // Define default values based on props or isRender
  const videoProps = {
    autoPlay: autoPlay ?? isRender,
    muted: muted ?? isRender,
    loop: loop ?? isRender,
  };

  return (
    <video
      className="min-w-full min-h-full absolute object-cover"
      controls={false}
      poster={poster}
      muted={isRender}
      data-autoplay=""
      playsInline
      src={url}
      {...videoProps}
    >
      <track kind="captions" srcLang="en" label="English" />
    </video>
  );
};

export default HeroVideoComponent;
