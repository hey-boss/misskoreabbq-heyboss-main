import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ListExitBeforeEnter = ({ key, children }) => (
  <AnimatePresence exitBeforeEnter>
    <motion.div
      key={key}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

export default ListExitBeforeEnter;
