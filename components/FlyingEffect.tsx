import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FlyingEffect = ({
  children, once, style, flyingEffectClassName,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      style={style}
      className={flyingEffectClassName}
    >
      <motion.div
        variants={item}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default FlyingEffect;
