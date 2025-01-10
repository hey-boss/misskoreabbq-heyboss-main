import React from 'react';
import { motion } from 'framer-motion';
import { classNames } from '../utility/util';

const RotatingEffectMid = ({ children }) => (
  <motion.div
    className={
      classNames('absolute',
        'sm:bottom-0 sm:right-6 sm:top-auto md:left-auto',
        'md:bottom-auto md:right-auto md:top-1/2 md:left-1/2 md:-m-20',
      )
}
    animate={{
      rotate: [0, 360],
    }}
    transition={{ ease: 'linear', duration: 8, repeat: Infinity }}
  >
    {children}
  </motion.div>
);

export default RotatingEffectMid;
