// components/BooleanToggle.tsx
 "use client"
import { useBooleanContext } from '@/context/boolcontext';
// components/BooleanToggle.tsx
import React from 'react';

const BooleanToggle: React.FC = () => {
  const { booleanState, toggleBooleanState } = useBooleanContext();

  return (
    <div>
      <p>The boolean state is: {booleanState.toString()}</p>
      <button onClick={toggleBooleanState}>Toggle Boolean State</button>
    </div>
  );
};

export default BooleanToggle;
