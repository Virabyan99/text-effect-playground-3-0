'use client';

import { useAppStore } from '@/lib/store';

export const CodeEditorPanel = () => {
  const { effectCode, setEffectCode } = useAppStore();

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-xl font-semibold mb-2">Effect Code Editor</h2>
      <textarea
        className="flex-1 p-2 bg-gray-200 border rounded-md resize-none overflow-auto focus:outline-none font-mono"
        value={effectCode}
        onChange={(e) => setEffectCode(e.target.value)}
      />
    </div>
  );
};
