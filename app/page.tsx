//app/page.tsx
'use client';


import { CodeEditorPanel } from '@/components/CodeEditorPanel';
import { EffectMenu } from '@/components/EffectMenu';
import { TextAreaPanel } from '@/components/TextAreaPanel';
import { useState } from 'react';

const HomePage = () => {
  return (
    <main className="flex h-screen w-screen overflow-hidden">
      {/* Left Panel: Text Area */}
      <section className="flex-1 bg-gray-100 p-4">
        <TextAreaPanel />
      </section>

      {/* Right Panel: Code Editor and Effect Menu */}
      <section className="flex w-1/3 flex-col bg-white p-4 border-l border-gray-300">
        <EffectMenu />
        <CodeEditorPanel />
      </section>
    </main>
  );
};

export default HomePage;
