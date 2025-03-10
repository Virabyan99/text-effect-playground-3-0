'use client';

import { useAppStore } from '@/lib/store';
import { motion } from 'framer-motion';

export const MicroScaleOnTypingEffect = () => {
  const { text } = useAppStore();

  return (
    <div className="h-full flex flex-wrap items-center justify-center p-4 overflow-auto">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block text-2xl m-1"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
            delay: index * 0.02,
          }}
          whileHover={{ scale: 1.3 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};
