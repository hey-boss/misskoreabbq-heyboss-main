import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Intro2 = ({ BGCR, CNFBGC, duration = 5 }) => {
  const [verticalHeight, setVerticalHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const topOffset = 2 * 16;// + 3.1 * 16; // Top offset in pixels
      const bottomOffset = 9 * 16; // Bottom offset in pixels
      const newHeight = window.innerHeight - topOffset - bottomOffset; // Calculate the height in pixels
      setVerticalHeight(newHeight);
    };

    // Initial calculation
    updateHeight();

    // Add event listener to update height on window resize
    window.addEventListener('resize', updateHeight);

    // Clean up the event listener
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <header className="lg:block hidden">
      {/* Top bar */}
      <div style={{ zIndex: '100', height: '2px' }} className={`fixed inset-x-[calc(3.1rem+4rem)] top-5 m-auto ${BGCR}`} />
      {/* left Upper Corner */}
      <svg
        version="1.1"
        id="Layer_1"
        focusable="false"
        style={{ 'zIndex': '100'}}
        className={`fixed top-5 left-14 h-16 w-16 origin-center ${CNFBGC}`}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 36.3 36"
        xmlSpace="preserve"
      >
        <path
          className="st0"
          d="M28.9-0.2c-0.5,0.4-0.9,0.9-1.3,1.3c-0.4,0.4-0.6,0.5-1.2,0.2c-2.1-1-4.4,0.1-5.1,2.3c-0.3,1-0.4,2.1-0.4,3.2
          c0,0.4-0.1,0.5-0.5,0.5c-1.1,0-2.3,0-3.4,0c-1.4,0-1.4,0-1.4-1.4c-0.1-2.2-1.8-4-4-4c-2.2,0-4,1.7-4.1,3.9c0,0.5,0.2,1-0.1,1.3
          C7,7.6,6.4,7.3,6,7.4C4.4,7.5,3.1,8.2,2.4,9.7c-0.7,1.4-0.5,2.9,0.4,4.1c0.9,1.3,2.3,1.7,3.8,1.6c0.5,0,0.8,0.1,0.7,0.7
          c0,1.4,0,2.7,0,4.1c0,0.5-0.1,0.6-0.6,0.6c-1.1,0-2.2,0.1-3.3,0.4c-1.9,0.6-3.1,2.5-2.4,4.5c0.4,1.1,0.1,1.7-0.7,2.3
          c-0.1,0.1-0.2,0.2-0.3,0.3C0,28.4,0,28.5-0.1,28.5l-0.4,0.4v1.7v6.8H1v-8.1c0.3-0.3,0.7-0.7,1-1C2.4,28,2.7,28,3.2,28.2
          c2.2,1,4.5-0.1,5.1-2.4c0.3-1,0.4-2.1,0.4-3.1c0-0.4,0.1-0.5,0.5-0.5c1.1,0,2.2,0,3.3,0c1.5,0,1.5,0,1.6,1.5c0,0,0,0.1,0,0.1
          c0.2,2.1,1.9,3.7,3.9,3.7c2.1,0,3.9-1.5,4.1-3.6c0-0.5-0.1-1.2,0.1-1.5c0.3-0.4,1-0.1,1.6-0.2c2.1-0.2,3.7-1.9,3.7-4
          c0-2.1-1.6-3.9-3.8-4c-0.4,0-0.7,0-1.1,0c-0.4,0-0.5-0.1-0.5-0.5c0-1.4,0-2.9,0-4.3c0-0.5,0.2-0.6,0.6-0.6c1,0,2-0.1,2.9-0.3
          c2.5-0.6,3.6-2.9,2.6-5.2c-0.2-0.4-0.1-0.7,0.2-1c0.4-0.4,0.7-0.7,1.1-1.1h8.3v-1.5h-7.1h-1.7C29-0.3,29-0.2,28.9-0.2z M13.7,7.4
          c-1.5,0-2.9,0-4.4,0c-0.2,0-0.4,0.1-0.4-0.2c0-1.1-0.1-2.1,0.8-2.9c1-1,2.7-1,3.8,0.1c0.7,0.7,0.7,1.8,0.6,2.8
          C14.1,7.4,13.9,7.4,13.7,7.4z M7.2,22.6c0,1.2-0.1,2.3-0.5,3.4c-0.1,0.2-0.2,0.3-0.2,0.4c-0.8,0.7-1.9,0.9-2.8,0.5
          c-0.9-0.4-1.4-1.4-1.3-2.4c0.1-1,0.7-1.7,1.7-2c0.9-0.2,1.8-0.3,2.7-0.3C7,22.2,7.2,22.2,7.2,22.6z M20.2,22.2
          c0.4,0,0.6,0.1,0.6,0.5c0,1,0,1.9-1.1,2.9c-0.5,0.5-1.4,0.7-2.4,0.3c-1-0.4-1.6-1.1-1.7-2.2c-0.2-1.6-0.2-1.6,1.4-1.6
          C18,22.2,19.1,22.2,20.2,22.2z M25.3,16.3C26,17.1,26.3,18,26,19c-0.3,1-1.1,1.6-2.1,1.8c-1.6,0.2-1.7,0.2-1.7-1.4
          c0-1.1,0-2.2,0-3.3c0-0.4,0.1-0.5,0.5-0.5C23.6,15.5,24.6,15.5,25.3,16.3z M15.9,15.5c1.4,0,2.9,0,4.3,0c0.4,0,0.5,0.1,0.5,0.5
          c0,1.4,0,2.8,0,4.2c0,0.4-0.1,0.5-0.5,0.5c-1.4,0-2.8,0-4.2,0c-0.2,0-0.5,0-0.5-0.3c0-1.5,0-3,0-4.5c0-0.1,0-0.2,0-0.3
          C15.6,15.5,15.8,15.5,15.9,15.5z M13.6,15.5c0.3,0,0.5,0,0.5,0.4c0,1.5,0,3,0,4.4c0,0.1,0,0.2-0.1,0.4c-0.2,0-0.3,0-0.5,0
          c-1.4,0-2.7,0-4.1,0c-0.4,0-0.6-0.1-0.6-0.6c0-1.4,0-2.8,0-4.2c0-0.4,0.1-0.5,0.5-0.5C10.7,15.5,12.1,15.5,13.6,15.5z M20.3,8.8
          c0.4,0,0.5,0.1,0.5,0.5c0,1.4,0,2.8,0,4.2c0,0.4-0.1,0.5-0.5,0.5c-1.4,0-2.9,0-4.3,0c-0.3,0-0.5-0.1-0.5-0.5c0-1.4,0-2.9,0-4.3
          c0-0.1,0-0.3,0.1-0.4c0.2,0,0.3,0,0.4,0C17.4,8.8,18.8,8.8,20.3,8.8z M13.7,8.8c0.1,0,0.2,0,0.3,0c0,0.1,0,0.3,0,0.4
          c0,1.4,0,2.8,0,4.2c0,0.4-0.1,0.5-0.5,0.5c-1.4,0-2.8,0-4.2,0c-0.4,0-0.5-0.1-0.5-0.5c0-1.4,0-2.9,0-4.3c0-0.3,0-0.5,0.4-0.5
          C10.7,8.8,12.2,8.8,13.7,8.8z M7.2,8.8c0.2,0,0.2,0.2,0.2,0.4c0,1.5,0,3,0,4.5c0,0.2,0,0.3-0.3,0.4c-1.7,0.5-3.5-0.7-3.7-2.4
          c-0.1-0.8,0.2-1.5,0.8-2.1C5.1,8.7,6.1,8.7,7.2,8.8z M26.6,3.1c1.2,1.3,0.7,3.5-1.1,3.9c-0.9,0.2-1.8,0.3-2.7,0.3
          c-0.3,0-0.5-0.1-0.5-0.4c0-0.9,0.1-1.9,0.3-2.8C23.2,2.4,25.3,1.8,26.6,3.1z"
        />
      </svg>
      {/* Bottom line */}
      <div style={{ 'zIndex': '100', height: '2px' }} className={`fixed inset-x-[calc(3.1rem+4rem)] bottom-9 m-auto ${BGCR}`} />
      {/* Right Upper Corner */}
      <svg
        style={{ 'zIndex': '100'}}
        className={`fixed top-5 right-14 h-16 w-16 origin-center ${CNFBGC}`}
        version="1.1"
        id="Layer_1"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 36.3 36"
        xmlSpace="preserve"
      >
        <path
          className="st0"
          d="M36.5,29c-0.4-0.5-0.9-0.9-1.3-1.3c-0.4-0.4-0.5-0.6-0.2-1.2c1-2.1-0.1-4.4-2.3-5.1c-1-0.3-2.1-0.4-3.2-0.4
            c-0.4,0-0.5-0.1-0.5-0.5c0-1.1,0-2.3,0-3.4c0-1.4,0-1.4,1.4-1.4c2.2-0.1,4-1.8,4-4c0-2.2-1.7-4-3.9-4.1c-0.5,0-1,0.2-1.3-0.1
            C28.7,7.1,29,6.5,28.9,6c-0.1-1.6-0.9-2.8-2.3-3.5C25.2,1.8,23.7,2,22.5,3c-1.3,0.9-1.7,2.3-1.6,3.8c0,0.5-0.1,0.8-0.7,0.7
            c-1.4,0-2.7,0-4.1,0c-0.5,0-0.6-0.1-0.6-0.6c0-1.1-0.1-2.2-0.4-3.3c-0.6-1.9-2.5-3.1-4.5-2.4C9.5,1.6,8.9,1.3,8.3,0.5
            C8.2,0.4,8.1,0.3,8,0.2C7.9,0.1,7.8,0,7.8,0L7.4-0.4H5.7h-6.8v1.5h8.1c0.3,0.3,0.7,0.7,1,1c0.4,0.4,0.4,0.7,0.2,1.2
            c-1,2.2,0.1,4.5,2.4,5.1c1,0.3,2.1,0.4,3.1,0.4c0.4,0,0.5,0.1,0.5,0.5c0,1.1,0,2.2,0,3.3c0,1.5,0,1.5-1.5,1.6c0,0-0.1,0-0.1,0
            c-2.1,0.2-3.7,1.9-3.7,3.9c0,2.1,1.5,3.9,3.6,4.1c0.5,0,1.2-0.1,1.5,0.1c0.4,0.3,0.1,1,0.2,1.6c0.2,2.1,1.9,3.7,4,3.7
            c2.1,0,3.9-1.6,4-3.8c0-0.4,0-0.7,0-1.1c0-0.4,0.1-0.5,0.5-0.5c1.4,0,2.9,0,4.3,0c0.5,0,0.6,0.2,0.6,0.6c0,1,0.1,2,0.3,2.9
            c0.6,2.5,2.9,3.6,5.2,2.6c0.4-0.2,0.7-0.1,1,0.2c0.4,0.4,0.7,0.7,1.1,1.1v8.3h1.5v-7.1v-1.7C36.6,29.1,36.5,29,36.5,29z M28.9,13.8
            c0-1.5,0-2.9,0-4.4c0-0.2-0.1-0.4,0.2-0.4c1.1,0,2.1-0.1,2.9,0.8c1,1,1,2.7-0.1,3.8c-0.7,0.7-1.8,0.7-2.8,0.6
            C28.9,14.2,28.9,13.9,28.9,13.8z M13.7,7.3c-1.2,0-2.3-0.1-3.4-0.5C10.1,6.7,10,6.5,9.9,6.5C9.2,5.8,9,4.6,9.4,3.8
            c0.4-0.9,1.4-1.4,2.4-1.3c1,0.1,1.7,0.7,2,1.7C14,5,14,5.9,14,6.8C14,7,14.1,7.3,13.7,7.3z M14.1,20.2c0,0.4-0.1,0.6-0.5,0.6
            c-1,0-1.9,0-2.9-1.1c-0.5-0.5-0.7-1.4-0.3-2.4c0.4-1,1.1-1.6,2.2-1.7c1.6-0.2,1.6-0.2,1.6,1.4C14.1,18,14.1,19.1,14.1,20.2z
            M20,25.4c-0.8,0.7-1.6,0.9-2.6,0.6c-1-0.3-1.6-1.1-1.8-2.1c-0.2-1.6-0.2-1.7,1.4-1.7c1.1,0,2.2,0,3.3,0c0.4,0,0.5,0.1,0.5,0.5
            C20.8,23.7,20.8,24.7,20,25.4z M20.8,16c0,1.4,0,2.9,0,4.3c0,0.4-0.1,0.5-0.5,0.5c-1.4,0-2.8,0-4.2,0c-0.4,0-0.5-0.1-0.5-0.5
            c0-1.4,0-2.8,0-4.2c0-0.2,0-0.5,0.3-0.5c1.5,0,3,0,4.5,0c0.1,0,0.2,0,0.3,0C20.8,15.7,20.8,15.9,20.8,16z M20.8,13.6
            c0,0.3,0,0.5-0.4,0.5c-1.5,0-3,0-4.4,0c-0.1,0-0.2,0-0.4-0.1c0-0.2,0-0.3,0-0.5c0-1.4,0-2.7,0-4.1c0-0.4,0.1-0.6,0.6-0.6
            c1.4,0,2.8,0,4.2,0c0.4,0,0.5,0.1,0.5,0.5C20.8,10.8,20.8,12.2,20.8,13.6z M27.5,20.3c0,0.4-0.1,0.5-0.5,0.5c-1.4,0-2.8,0-4.2,0
            c-0.4,0-0.5-0.1-0.5-0.5c0-1.4,0-2.9,0-4.3c0-0.3,0.1-0.5,0.5-0.5c1.4,0,2.9,0,4.3,0c0.1,0,0.3,0,0.4,0.1c0,0.2,0,0.3,0,0.4
            C27.5,17.5,27.5,18.9,27.5,20.3z M27.5,13.8c0,0.1,0,0.2,0,0.3c-0.1,0-0.3,0-0.4,0c-1.4,0-2.8,0-4.2,0c-0.4,0-0.5-0.1-0.5-0.5
            c0-1.4,0-2.8,0-4.2c0-0.4,0.1-0.5,0.5-0.5c1.4,0,2.9,0,4.3,0c0.3,0,0.5,0,0.5,0.4C27.5,10.8,27.5,12.3,27.5,13.8z M27.5,7.3
            c0,0.2-0.2,0.2-0.4,0.2c-1.5,0-3,0-4.5,0c-0.2,0-0.3,0-0.4-0.3c-0.5-1.7,0.7-3.5,2.4-3.7c0.8-0.1,1.5,0.2,2.1,0.8
            C27.6,5.2,27.6,6.2,27.5,7.3z M33.2,26.6c-1.3,1.2-3.5,0.7-3.9-1.1c-0.2-0.9-0.3-1.8-0.3-2.7c0-0.3,0.1-0.5,0.4-0.5
            c0.9,0,1.9,0.1,2.8,0.3C33.9,23.2,34.5,25.4,33.2,26.6z"
        />
      </svg>

      {/* Left column */}
      <motion.div
        style={{ 'zIndex': '100', width: '2px' }}
        className={`fixed top-[calc(3.1rem+2rem)] left-14 ${BGCR}`}
        initial={{ height: 0 }}
        animate={{ height: verticalHeight }}
        transition={{ duration, ease: 'easeInOut' }}
      />
      {/* Left Bottom corner */}
      <svg
        version="1.1"
        id="Layer_1"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 36.3 36"
        style={{ 'zIndex': '100'}}
        className={`fixed bottom-9 left-14 h-16 w-16 origin-center ${CNFBGC}`}
        xmlSpace="preserve"
      >
        <path
          className="st0"
          d="M-0.2,6.9c0.4,0.5,0.9,0.9,1.3,1.3c0.4,0.4,0.5,0.6,0.2,1.2c-1,2.1,0.1,4.4,2.3,5.1c1,0.3,2.1,0.4,3.2,0.4
c0.4,0,0.5,0.1,0.5,0.5c0,1.1,0,2.3,0,3.4c0,1.4,0,1.4-1.4,1.4c-2.2,0.1-4,1.8-4,4c0,2.2,1.7,4,3.9,4.1c0.5,0,1-0.2,1.3,0.1
c0.3,0.3,0.1,0.9,0.1,1.4c0.1,1.6,0.9,2.8,2.3,3.5c1.4,0.7,2.9,0.5,4.1-0.4c1.3-0.9,1.7-2.3,1.6-3.8c0-0.5,0.1-0.8,0.7-0.7
c1.4,0,2.7,0,4.1,0c0.5,0,0.6,0.1,0.6,0.6c0,1.1,0.1,2.2,0.4,3.3c0.6,1.9,2.5,3.1,4.5,2.4c1.1-0.4,1.7-0.1,2.3,0.7
c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.1,0.1,0.2,0.2l0.4,0.4h1.7h6.8v-1.5h-8.1c-0.3-0.3-0.7-0.7-1-1c-0.4-0.4-0.4-0.7-0.2-1.2
c1-2.2-0.1-4.5-2.4-5.1c-1-0.3-2.1-0.4-3.1-0.4c-0.4,0-0.5-0.1-0.5-0.5c0-1.1,0-2.2,0-3.3c0-1.5,0-1.5,1.5-1.6c0,0,0.1,0,0.1,0
c2.1-0.2,3.7-1.9,3.7-3.9c0-2.1-1.5-3.9-3.6-4.1c-0.5,0-1.2,0.1-1.5-0.1c-0.4-0.3-0.1-1-0.2-1.6c-0.2-2.1-1.9-3.7-4-3.7
c-2.1,0-3.9,1.6-4,3.8c0,0.4,0,0.7,0,1.1c0,0.4-0.1,0.5-0.5,0.5c-1.4,0-2.9,0-4.3,0c-0.5,0-0.6-0.2-0.6-0.6c0-1-0.1-2-0.3-2.9
C7.7,7.7,5.5,6.5,3.1,7.6c-0.4,0.2-0.7,0.1-1-0.2C1.8,7,1.4,6.6,1.1,6.3V-2h-1.5v7.1v1.7C-0.4,6.8-0.3,6.9-0.2,6.9z M7.3,22.2
c0,1.5,0,2.9,0,4.4c0,0.2,0.1,0.4-0.2,0.4C6,27,5,27,4.1,26.2c-1-1-1-2.7,0.1-3.8C5,21.6,6,21.7,7.1,21.7C7.4,21.7,7.3,22,7.3,22.2z
M22.5,28.6c1.2,0,2.3,0.1,3.4,0.5c0.2,0.1,0.3,0.2,0.4,0.2c0.7,0.8,0.9,1.9,0.5,2.8c-0.4,0.9-1.4,1.4-2.4,1.3c-1-0.1-1.7-0.7-2-1.7
c-0.2-0.9-0.3-1.8-0.3-2.7C22.2,28.9,22.2,28.6,22.5,28.6z M22.1,15.7c0-0.4,0.1-0.6,0.5-0.6c1,0,1.9,0,2.9,1.1
c0.5,0.5,0.7,1.4,0.3,2.4c-0.4,1-1.1,1.6-2.2,1.7c-1.6,0.2-1.6,0.2-1.6-1.4C22.1,17.9,22.1,16.8,22.1,15.7z M16.3,10.5
c0.8-0.7,1.6-0.9,2.6-0.6c1,0.3,1.6,1.1,1.8,2.1c0.2,1.6,0.2,1.7-1.4,1.7c-1.1,0-2.2,0-3.3,0c-0.4,0-0.5-0.1-0.5-0.5
C15.4,12.2,15.5,11.2,16.3,10.5z M15.4,19.9c0-1.4,0-2.9,0-4.3c0-0.4,0.1-0.5,0.5-0.5c1.4,0,2.8,0,4.2,0c0.4,0,0.5,0.1,0.5,0.5
c0,1.4,0,2.8,0,4.2c0,0.2,0,0.5-0.3,0.5c-1.5,0-3,0-4.5,0c-0.1,0-0.2,0-0.3,0C15.4,20.2,15.4,20,15.4,19.9z M15.4,22.3
c0-0.3,0-0.5,0.4-0.5c1.5,0,3,0,4.4,0c0.1,0,0.2,0,0.4,0.1c0,0.2,0,0.3,0,0.5c0,1.4,0,2.7,0,4.1c0,0.4-0.1,0.6-0.6,0.6
c-1.4,0-2.8,0-4.2,0c-0.4,0-0.5-0.1-0.5-0.5C15.4,25.1,15.4,23.7,15.4,22.3z M8.8,15.6c0-0.4,0.1-0.5,0.5-0.5c1.4,0,2.8,0,4.2,0
c0.4,0,0.5,0.1,0.5,0.5c0,1.4,0,2.9,0,4.3c0,0.3-0.1,0.5-0.5,0.5c-1.4,0-2.9,0-4.3,0c-0.1,0-0.3,0-0.4-0.1c0-0.2,0-0.3,0-0.4
C8.8,18.4,8.8,17,8.8,15.6z M8.8,22.1c0-0.1,0-0.2,0-0.3c0.1,0,0.3,0,0.4,0c1.4,0,2.8,0,4.2,0c0.4,0,0.5,0.1,0.5,0.5
c0,1.4,0,2.8,0,4.2c0,0.4-0.1,0.5-0.5,0.5c-1.4,0-2.9,0-4.3,0c-0.3,0-0.5,0-0.5-0.4C8.8,25.1,8.8,23.6,8.8,22.1z M8.7,28.6
c0-0.2,0.2-0.2,0.4-0.2c1.5,0,3,0,4.5,0c0.2,0,0.3,0,0.4,0.3c0.5,1.7-0.7,3.5-2.4,3.7c-0.8,0.1-1.5-0.2-2.1-0.8
C8.6,30.8,8.7,29.7,8.7,28.6z M3.1,9.3C4.4,8.1,6.6,8.6,7,10.3c0.2,0.9,0.3,1.8,0.3,2.7c0,0.3-0.1,0.5-0.4,0.5
c-0.9,0-1.9-0.1-2.8-0.3C2.3,12.7,1.8,10.5,3.1,9.3z"
        />
      </svg>
      {/* Right Column */}
      <motion.div
        style={{ 'zIndex': '100', width: '2px' }}
        className={`fixed inset-y-[calc(3.1rem+2rem)] right-14 ${BGCR}`}
        initial={{ height: 0 }}
        animate={{ height: verticalHeight }}
        transition={{ duration, ease: 'easeInOut' }}
      />
      {/* Right Bottom corner */}
      <svg
        version="1.1"
        id="Layer_1"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        style={{ 'zIndex': '100'}}
        className={`fixed bottom-9 right-14 h-16 w-16 origin-center ${CNFBGC}`}
        x="0px"
        y="0px"
        viewBox="0 0 36.3 36"
        xmlSpace="preserve"
      >
        <path
          className="st0"
          d="M7.5,36.3c0.5-0.4,0.9-0.9,1.3-1.3c0.4-0.4,0.6-0.5,1.2-0.2c2.1,1,4.4-0.1,5.1-2.3c0.3-1,0.4-2.1,0.4-3.2
            c0-0.4,0.1-0.5,0.5-0.5c1.1,0,2.3,0,3.4,0c1.4,0,1.4,0,1.4,1.4c0.1,2.2,1.8,4,4,4c2.2,0,4-1.7,4.1-3.9c0-0.5-0.2-1,0.1-1.3
            c0.3-0.3,0.9-0.1,1.4-0.1c1.6-0.1,2.8-0.9,3.5-2.3c0.7-1.4,0.5-2.9-0.4-4.1c-0.9-1.3-2.3-1.7-3.8-1.6c-0.5,0-0.8-0.1-0.7-0.7
            c0-1.4,0-2.7,0-4.1c0-0.5,0.1-0.6,0.6-0.6c1.1,0,2.2-0.1,3.3-0.4c1.9-0.6,3.1-2.5,2.4-4.5c-0.4-1.1-0.1-1.7,0.7-2.3
            C36,8,36.1,7.9,36.2,7.7c0.1-0.1,0.1-0.1,0.2-0.2l0.4-0.4V5.4v-6.8h-1.5v8.1c-0.3,0.3-0.7,0.7-1,1c-0.4,0.4-0.7,0.4-1.2,0.2
            c-2.2-1-4.5,0.1-5.1,2.4c-0.3,1-0.4,2.1-0.4,3.1c0,0.4-0.1,0.5-0.5,0.5c-1.1,0-2.2,0-3.3,0c-1.5,0-1.5,0-1.6-1.5c0,0,0-0.1,0-0.1
            c-0.2-2.1-1.9-3.7-3.9-3.7c-2.1,0-3.9,1.5-4.1,3.6c0,0.5,0.1,1.2-0.1,1.5c-0.3,0.4-1,0.1-1.6,0.2c-2.1,0.2-3.7,1.9-3.7,4
            c0,2.1,1.6,3.9,3.8,4c0.4,0,0.7,0,1.1,0c0.4,0,0.5,0.1,0.5,0.5c0,1.4,0,2.9,0,4.3c0,0.5-0.2,0.6-0.6,0.6c-1,0-2,0.1-2.9,0.3
            c-2.5,0.6-3.6,2.9-2.6,5.2c0.2,0.4,0.1,0.7-0.2,1c-0.4,0.4-0.7,0.7-1.1,1.1h-8.3v1.5h7.1h1.7C7.3,36.4,7.4,36.3,7.5,36.3z
            M22.7,28.7c1.5,0,2.9,0,4.4,0c0.2,0,0.4-0.1,0.4,0.2c0,1.1,0.1,2.1-0.8,2.9c-1,1-2.7,1-3.8-0.1c-0.7-0.7-0.7-1.8-0.6-2.8
            C22.3,28.6,22.5,28.7,22.7,28.7z M29.1,13.5c0-1.2,0.1-2.3,0.5-3.4c0.1-0.2,0.2-0.3,0.2-0.4c0.8-0.7,1.9-0.9,2.8-0.5
            c0.9,0.4,1.4,1.4,1.3,2.4c-0.1,1-0.7,1.7-1.7,2c-0.9,0.2-1.8,0.3-2.7,0.3C29.4,13.8,29.1,13.9,29.1,13.5z M16.2,13.9
            c-0.4,0-0.6-0.1-0.6-0.5c0-1,0-1.9,1.1-2.9c0.5-0.5,1.4-0.7,2.4-0.3c1,0.4,1.6,1.1,1.7,2.2c0.2,1.6,0.2,1.6-1.4,1.6
            C18.4,13.9,17.3,13.9,16.2,13.9z M11,19.8c-0.7-0.8-0.9-1.6-0.6-2.6c0.3-1,1.1-1.6,2.1-1.8c1.6-0.2,1.7-0.2,1.7,1.4
            c0,1.1,0,2.2,0,3.3c0,0.4-0.1,0.5-0.5,0.5C12.7,20.6,11.8,20.6,11,19.8z M20.4,20.6c-1.4,0-2.9,0-4.3,0c-0.4,0-0.5-0.1-0.5-0.5
            c0-1.4,0-2.8,0-4.2c0-0.4,0.1-0.5,0.5-0.5c1.4,0,2.8,0,4.2,0c0.2,0,0.5,0,0.5,0.3c0,1.5,0,3,0,4.5c0,0.1,0,0.2,0,0.3
            C20.7,20.6,20.6,20.6,20.4,20.6z M22.8,20.6c-0.3,0-0.5,0-0.5-0.4c0-1.5,0-3,0-4.4c0-0.1,0-0.2,0.1-0.4c0.2,0,0.3,0,0.5,0
            c1.4,0,2.7,0,4.1,0c0.4,0,0.6,0.1,0.6,0.6c0,1.4,0,2.8,0,4.2c0,0.4-0.1,0.5-0.5,0.5C25.6,20.6,24.2,20.6,22.8,20.6z M16.1,27.2
            c-0.4,0-0.5-0.1-0.5-0.5c0-1.4,0-2.8,0-4.2c0-0.4,0.1-0.5,0.5-0.5c1.4,0,2.9,0,4.3,0c0.3,0,0.5,0.1,0.5,0.5c0,1.4,0,2.9,0,4.3
            c0,0.1,0,0.3-0.1,0.4c-0.2,0-0.3,0-0.4,0C18.9,27.2,17.5,27.2,16.1,27.2z M22.6,27.2c-0.1,0-0.2,0-0.3,0c0-0.1,0-0.3,0-0.4
            c0-1.4,0-2.8,0-4.2c0-0.4,0.1-0.5,0.5-0.5c1.4,0,2.8,0,4.2,0c0.4,0,0.5,0.1,0.5,0.5c0,1.4,0,2.9,0,4.3c0,0.3,0,0.5-0.4,0.5
            C25.6,27.3,24.1,27.3,22.6,27.2z M29.2,27.3c-0.2,0-0.2-0.2-0.2-0.4c0-1.5,0-3,0-4.5c0-0.2,0-0.3,0.3-0.4c1.7-0.5,3.5,0.7,3.7,2.4
            c0.1,0.8-0.2,1.5-0.8,2.1C31.3,27.4,30.2,27.3,29.2,27.3z M9.8,32.9c-1.2-1.3-0.7-3.5,1.1-3.9c0.9-0.2,1.8-0.3,2.7-0.3
            c0.3,0,0.5,0.1,0.5,0.4c0,0.9-0.1,1.9-0.3,2.8C13.2,33.7,11.1,34.2,9.8,32.9z"
        />
      </svg>
    </header>
  );
};

export default Intro2;