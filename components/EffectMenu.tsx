'use client';

import { useState } from 'react';
import { Select, SelectContent, SelectItem } from './ui/select';

const effectOptions = [
  'Subtle Cursor Movement',
  'Micro Text Weight Shift',
  'Soft Focus Pulse',
];

export const EffectMenu = () => {
  const [selectedEffect, setSelectedEffect] = useState('');

  return (
    <div className="mb-4">
      <label className="block mb-2 text-lg font-medium">Select Text Effect:</label>
      <Select value={selectedEffect} onValueChange={setSelectedEffect}>
        <SelectContent>
          <SelectItem value="!">None</SelectItem>
          {effectOptions.map((effect) => (
            <SelectItem key={effect} value={effect}>
              {effect}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
