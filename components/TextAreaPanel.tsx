// src/components/TextAreaPanel.tsx
'use client';

import { useAppStore } from '@/lib/store';
import { Effects } from './effects';

export default function TextAreaPanel() {
  const { text, setText, selectedEffect } = useAppStore();
  const SelectedEffectComponent = Effects.find(
    (effect) => effect.name === selectedEffect
  )?.component || Effects[0].component;

  return (
    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          position: 'absolute',
          inset: 0,
          fontFamily: 'monospace',
          fontSize: '16px',
          lineHeight: '1.5',
          width: '100%',
          height: '100%',
          background: 'transparent',
          color: 'transparent', // Hide textarea text
          caretColor: 'black', // Keep cursor visible
          resize: 'none',
          border: '1px solid #ccc',
          padding: '8px',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          fontFamily: 'monospace',
          fontSize: '16px',
          lineHeight: '1.5',
          padding: '8px',
          pointerEvents: 'none', // Allow clicks to pass to textarea
          whiteSpace: 'pre-wrap', // Match textarea wrapping
        }}
      >
        <SelectedEffectComponent text={text} />
      </div>
    </div>
  );
}