// src/features/typography-tool/Island.jsx
import React, { useState, useCallback } from 'react';
import UnitConverter from './UnitConverter';
import ClampGenerator from './ClampGenerator';
import ViewportPreview from './ViewportPreview';

import './Island.css';

const Island = () => {
  // Estado compartido para el clamp generado
  const [generatedClamp, setGeneratedClamp] = useState('');
  const [fontUnit, setFontUnit] = useState('rem');

  // Callback que recibe ClampGenerator
  const handleClampChange = useCallback((clamp, unit) => {
    setGeneratedClamp(clamp);
    setFontUnit(unit);
  }, []);

  return (
    <div className="island-container">
      <header className="island-header">
        <h1 className="island-title">Typography Tool</h1>
        <p className="island-subtitle">
          Convert units, generate clamp() and preview in real-time
        </p>
      </header>

      <div className="island-body">

        {/* Sección de Controles */}
        <section className="island-controls">
          <div className="control-section">
            <UnitConverter />
          </div>

          <div className="control-section">
            {/* Pasamos el callback al generador */}
            <ClampGenerator onClampChange={handleClampChange} />
          </div>
        </section>

        {/* Sección de Preview (recibe los valores) */}
        <section className="island-preview">
          <ViewportPreview
            clampValue={generatedClamp}
            fontUnit={fontUnit}
          />
        </section>

      </div>
    </div>
  );
};

export default Island;