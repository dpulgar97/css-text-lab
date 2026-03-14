// src/features/typography-tool/Island.jsx
import React, { useState, useCallback } from 'react';
import UnitConverter from './UnitConverter';
import ClampGenerator from './ClampGenerator';
import ViewportPreview from './ViewportPreview';
import { useTranslation } from 'react-i18next';

import './Island.css';

const Island = () => {
  const [generatedClamp, setGeneratedClamp] = useState('');
  const [fontUnit, setFontUnit] = useState('rem');
  const {t} = useTranslation();


  const handleClampChange = useCallback((clamp, unit) => {
    setGeneratedClamp(clamp);
    setFontUnit(unit);
  }, []);

  return (
    <div className="island-container">
       <header className="island-header">
        <h1 className="island-title">{t('tool.island.title')}</h1>
        <p className="island-subtitle">
          {t('tool.island.subtitle')}
        </p>
      </header>

      <div className="island-body">

        <section className="island-controls">
          <div className="control-section">
            <UnitConverter />
          </div>

          <div className="control-section">
            <ClampGenerator onClampChange={handleClampChange} />
          </div>
        </section>

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