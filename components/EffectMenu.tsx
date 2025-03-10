// src/components/EffectMenu.tsx
'use client';

import { useAppStore } from '@/lib/store';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Effects } from '@/components/effects';

export const EffectMenu = () => {
  const { selectedEffect, setSelectedEffect } = useAppStore();
  //console.log('Current selectedEffect:', selectedEffect);

  return (
    <div className="mb-4">
      <label className="block mb-2 text-lg font-medium">Select Text Effect:</label>
      <Select value={selectedEffect} onValueChange={setSelectedEffect}>
        <SelectTrigger>
          <SelectValue placeholder="Choose an effect" />
        </SelectTrigger>
        <SelectContent>
          {Effects.map((effect) => (
            <SelectItem key={effect.name} value={effect.name}>
              {effect.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};