// src/features/typography-tool/Island.jsx
import React from 'react';
import UnitConverter from './UnitConverter';
import ClampGenerator from './ClampGenerator';

import './Island.css';


const Island = () => {
  return (
    <div className="island-container">
      {/* Header de la herramienta */}
      <header className="island-header">
        <h1 className="island-title">Typography Tool</h1>
        <p className="island-subtitle">
          Convert units, generate clamp() and preview in real-time
        </p>
      </header>

      {/* Cuerpo principal dividido en 2 columnas */}
      <div className="island-body">
        
        <section className="island-controls">
           <div className="control-section">
            <UnitConverter />
          </div>

          <div className="control-section">
            <ClampGenerator />
          </div>

          {/* Aquí irá el Output de código */}
          <div className="control-section">
            <h2 className="section-title">CSS Output</h2>
            <div className="placeholder-box code-placeholder">
              font-size: clamp(...);
            </div>
          </div>
        </section>

        {/* Columna Derecha: Preview Dinámico */}
        <section className="island-preview">
          {/* Aquí irá ViewportPreview.jsx */}
          <div className="preview-container">
            <h2 className="section-title">Live Preview</h2>
            <div className="placeholder-box preview-placeholder">
              Viewport Preview Component
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Island;