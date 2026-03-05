// src/App.jsx
import React from 'react';
import Island from './features/typograghy-tool/Island';

import './App.css';

function App() {
  return (
    <div className="app">
      {/* Aquí luego envolveremos con MainLayout */}
      <Island />
    </div>
  );
}

export default App;