'use client';

import { useAppStore } from '@/lib/store';
import { motion } from 'framer-motion';

export const SoftFocusPulseEffect = () => {
  const { text } = useAppStore();

  return (
    <div className="h-full flex flex-wrap items-center justify-center p-4 overflow-auto">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block text-2xl m-1"
          initial={{ filter: 'blur(2px)' }}
          animate={{ filter: 'blur(0px)' }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
            delay: index * 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};
