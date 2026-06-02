// src/features/typography-tool/Island.jsx
import React, { useState, useCallback } from 'react';
import UnitConverter from './UnitConverter';
import ClampGenerator from './ClampGenerator';
import ViewportPreview from './ViewportPreview';
import { useTranslation } from 'react-i18next';

import './Island.css';

const Island = () => {
  const [clampData, setClampData] = useState({
    clampValue: '',
    fontUnit: 'rem',
    viewportMin: 600,
    viewportMax: 1400,
    fontSizeMin: 16,
    fontSizeMax: 24,
  });
  const { t } = useTranslation();

  const handleClampChange = useCallback((data) => {
    setClampData(data);
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
          <ViewportPreview clampData={clampData} />
        </section>

      </div>
    </div>
  );
};

export default Island;