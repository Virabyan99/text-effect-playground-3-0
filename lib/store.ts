// src/lib/store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  text: string;
  effectCode: string;
  selectedEffect: string;
  setText: (text: string) => void;
  setEffectCode: (code: string) => void;
  setSelectedEffect: (effect: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      text: '',
      effectCode: `
import { motion } from 'framer-motion';

export const MicroGlideEffect = ({ text }) => (
  <div>
    {text.split('').map((char, index) => (
      <motion.span
        key={index}
        className="inline-block"
        initial={{ x: -5 }}
        animate={{ x: 0 }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 8,
          delay: index * 0.05,
        }}
      >
        {char}
      </motion.span>
    ))}
  </div>
);
`,
      selectedEffect: 'MicroGlideEffect',
      setText: (text) => set({ text }),
      setEffectCode: (code) => set({ effectCode: code }),
      setSelectedEffect: (effect) => set({ selectedEffect: effect }),
    }),
    { name: 'text-effect-playground' }
  )
);