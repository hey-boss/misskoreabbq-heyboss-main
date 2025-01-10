import React, { useEffect, useState } from 'react';

const VideoPlayer2 = ({
  VOOPURL,
  isAutoplay = false,
  hasControl = false,
  isPlayLoop = false,
  VOOP,
  videoStyle,
  VRHQ = 9,
  VRHQD = 16,
}) => {
  const [isRender, setIsRender] = useState(false);
  const isYouTubeVideo = VOOPURL.includes('youtube.com');

  useEffect(() => {
    setIsRender(true);
  }, []);

  if (!isRender) {
    return null;
  }
  return (
    <div className={`aspect-w-${VRHQD} aspect-h-${VRHQ} w-full ${videoStyle}`}>
      {isYouTubeVideo
        ? (
          <iframe
            className="h-full w-full aspect-video"
            title="video"
            src={isAutoplay ? `${VOOPURL}${isAutoplay && '?autoplay=1&mute=1'}` : VOOPURL}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        )
        : (
          <video
            className="h-full w-full aspect-video"
            controls={hasControl}
            poster={VOOP}
            autoPlay={isAutoplay}
            muted={isAutoplay}
            // eslint-disable-next-line react/no-unknown-property
            loop={isPlayLoop}
            data-autoplay=""
            playsInline
            src={VOOPURL}
          >
            <track kind="captions" srcLang="en" label="English" />
          </video>
        )}
    </div>
  );
};

export default VideoPlayer2;
