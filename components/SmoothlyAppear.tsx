import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SmoothlyAppear = ({
  direction = 'down', duration = 1, from = 100, children, once=false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const [_direction] = useState(['down', 'up'].includes(direction) ? 'y' : 'x');
  const [_from] = useState(['down', 'right'].includes(direction) ? from : -1 * from);

  return (
    <motion.div
      initial={{ [_direction]: _from, opacity: 0.5 }}
      animate={isInView ? { [_direction]: 0, opacity: 1, transition: { duration } } : {}}
      exit={{ opacity: 0 }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default SmoothlyAppear;
