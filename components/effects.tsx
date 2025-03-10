// src/components/effects.tsx
'use client';

import { motion } from 'framer-motion';

// Define the shape of an effect
interface Effect {
  name: string;
  component: React.FC<{ text: string }>;
}

// Micro Glide Effect (existing)
const MicroGlideEffect: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50, damping: 8, delay: index * 0.05 }}
          style={{ display: 'inline-block' }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

// Simple Color Effect (existing)
const SimpleColorEffect: React.FC<{ text: string }> = ({ text }) => {
  return <div style={{ color: 'green' }}>{text}</div>;
};

// Micro Text Weight Shift Effect (from example)
const MicroTextWeightShiftEffect: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ fontWeight: 400 }}
          animate={{ fontWeight: 700 }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
            delay: index * 0.05,
          }}
          style={{ display: 'inline-block' }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

// Fader Effect: Fades in the entire text
const FaderEffect: React.FC<{ text: string }> = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {text}
    </motion.div>
  );
};

// Cascading Effect: Each character fades in with a stagger
const CascadingEffect: React.FC<{ text: string }> = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.05 }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05 }}
          style={{ display: 'inline-block' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Rotator Effect: Rotates the entire text 360 degrees
const RotatorEffect: React.FC<{ text: string }> = ({ text }) => {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 2 }}
    >
      {text}
    </motion.div>
  );
};

// Bouncy Text Effect: Bounces the entire text up and down infinitely
const BouncyTextEffect: React.FC<{ text: string }> = ({ text }) => {
  return (
    <motion.span
      style={{ display: 'inline-block' }}
      animate={{ y: [0, -30, 0] }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0.5,
      }}
    >
      {text}
    </motion.span>
  );
};

// Soft Focus Pulse Effect: Pulses each character’s font weight (adapted from hover)
const SoftFocusPulseEffect: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ fontWeight: 300 }}
          animate={{ fontWeight: 700 }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
            delay: index * 0.1,
          }}
          style={{ display: 'inline-block' }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

// Gentle Opacity Fade Effect: Fades in each character with a delay
const GentleOpacityFadeEffect: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
            delay: index * 0.05,
          }}
          style={{ display: 'inline-block' }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

// Define the Effects array with all effects
export const Effects: Effect[] = [
  { name: 'Micro Glide', component: MicroGlideEffect },
  { name: 'Text Weight Shift', component: MicroTextWeightShiftEffect },
  { name: 'Simple Color', component: SimpleColorEffect },
  { name: 'Fader', component: FaderEffect },
  { name: 'Cascading', component: CascadingEffect },
  { name: 'Rotator', component: RotatorEffect },
  { name: 'Bouncy Text', component: BouncyTextEffect },
  { name: 'Soft Focus Pulse', component: SoftFocusPulseEffect },
  { name: 'Gentle Opacity Fade', component: GentleOpacityFadeEffect },
];