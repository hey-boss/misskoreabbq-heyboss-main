import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FadeInEffect = ({ children, once, AMEFF }) => {
  if(AMEFF != null) {
  
  return (
    <>{children}</>
  )
  }
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1, transition: { duration: 1 } } : { y: 0 }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default FadeInEffect;
