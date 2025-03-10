'use client';

import { useAppStore } from '@/lib/store';
import { motion } from 'framer-motion';

export const MicroTextWeightShiftEffect = () => {
  const { text } = useAppStore();

  return (
    <div className="h-full flex flex-wrap items-center justify-center p-4 overflow-auto">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block text-2xl m-1 font-light"
          whileHover={{ fontWeight: 700 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};
