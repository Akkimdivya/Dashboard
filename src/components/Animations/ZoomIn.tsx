import React from 'react';
import { motion } from 'framer-motion';

interface ZoomInProps {
  children: React.ReactNode;
}

const ZoomIn: React.FC<ZoomInProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomIn;
