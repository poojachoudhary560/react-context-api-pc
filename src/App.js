import React from 'react';
import ContextApiBasic from './ContextApiBasic';
import ContextApiValueUpdate from './ContextApiValueUpdate';
import './style.css';

export default function App() {
  return (
    <div>
      <ContextApiBasic />

      <p>Update Context val Demo</p>
      <ContextApiValueUpdate />
    </div>
  );
}
