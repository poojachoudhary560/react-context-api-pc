import React from 'react';
import ContextApiBasic from './ContextApiBasic';
import ContextApiValueUpdate from './ContextApiValueUpdate';
import './style.css';

export default function App() {
  return (
    <div>
      <h4>Basic Context val Demo</h4>
      <ContextApiBasic />

      <h4>Update Context val Demo</h4>
      <ContextApiValueUpdate />
    </div>
  );
}
