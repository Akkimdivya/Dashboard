import React from 'react';
import { motion } from 'framer-motion';

interface SlideInProps {
  children: React.ReactNode;
}

const SlideIn: React.FC<SlideInProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
