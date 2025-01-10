import React, { useRef, useEffect, useState } from 'react';
import isSmallScreen from './isSmallScreen';

const CanvasScrollImages = ({ data, SCRPED, ISCVTR }) => {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const scrollPositions = useRef([]);
  const animationFrameId = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: 1024, height: 650 });
  const isSmallView = isSmallScreen();

  // Unified function for drawing images
  const drawImage = (ctx, img, x, y, width, height) => {
    ctx.drawImage(img, x, y, width, height);
  };

  // Draw function
  const draw = (ctx) => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    data?.images.forEach((image, index) => {
      const img = imagesRef.current[index];
      const originalWidth = parseInt(img.naturalWidth, 10);
      const originalHeight = parseInt(img.naturalHeight, 10);
      const aspectRatio = originalHeight / originalWidth;

      let imageWidth = parseInt(image.width, 10);
      if (isSmallView) {
        imageWidth = ISCVTR ? imageWidth / 2.8 : imageWidth * 1.5;
      }
      const imageHeight = imageWidth * aspectRatio;

      // Calculate position and draw
      const x = ISCVTR ? image.x : scrollPositions.current[index];
      const y = ISCVTR ? scrollPositions.current[index] : image.horizontaly;
      drawImage(ctx, img, x, y, imageWidth, imageHeight);

      // Update scroll positions
      scrollPositions.current[index] -= SCRPED;
      if (ISCVTR && scrollPositions.current[index] + imageHeight < 0) {
        scrollPositions.current[index] = canvasRef.current.height - imageHeight;
      } else if (!ISCVTR && scrollPositions.current[index] + imageWidth < 0) {
        scrollPositions.current[index] = canvasRef.current.width - imageWidth;
      }
    });

    animationFrameId.current = requestAnimationFrame(() => draw(ctx));
  };

  useEffect(() => {
    setCanvasSize({
      width: isSmallView ? window?.innerWidth : 1024,
      height: isSmallView ? window?.innerHeight : 650,
    });
  }, [isSmallView]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = ISCVTR ? canvasSize.width : canvasSize.width * 2;
    canvas.height = ISCVTR ? canvasSize.height * 2 : canvasSize.height;

    // Load images
    imagesRef.current = data?.images.map((image, index) => {
      const img = new Image();
      img.src = image?.url;
      scrollPositions.current[index] = ISCVTR ? image.y : image.horizontalx;
      return img;
    });

    // Start drawing
    draw(ctx);

    return () => cancelAnimationFrame(animationFrameId.current);
  }, [data, ISCVTR, canvasSize, isSmallView]);

  return <canvas className="block mx-auto" ref={canvasRef} />;
};

export default CanvasScrollImages;
