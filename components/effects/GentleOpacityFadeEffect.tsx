'use client';

import { useAppStore } from '@/lib/store';
import { motion } from 'framer-motion';

export const GentleOpacityFadeEffect = () => {
  const { text } = useAppStore();

  return (
    <div className="h-full flex flex-wrap items-center justify-center p-4 overflow-auto">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block text-2xl m-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
            delay: index * 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};
