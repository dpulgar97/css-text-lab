// src/features/typography-tool/UnitConverter.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useConverter } from '../../hooks/useConverter';
import './UnitConverter.css';

const UnitConverter = () => {
  const { t } = useTranslation();
  const {
    inputValue,
    fromUnit,
    toUnit,
    viewportSize,
    result,
    units,
    handleInputChange,
    handleFromUnitChange,
    handleToUnitChange,
    handleViewportSizeChange,
    needsViewportInput,
    viewportLabel,
    toast,
    hideToast,
  } = useConverter();

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyResult = async () => {
    const textToCopy = `${result} ${toUnit}`;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="unit-converter">
      {/* Toast */}
      {toast.show && (
        <div className={`toast toast-${toast.type}`} role="alert">
          <span className="toast-message">{toast.message}</span>
          <button onClick={hideToast} className="toast-close" aria-label="Close">&times;</button>
        </div>
      )}

      {/* Título - TRADUCIDO */}
      <h2 className="converter-title">{t('tool.unitConverter.title')}</h2>

      {/* Fila de entrada y unidades */}
      <div className="converter-row">
        <div className="input-group">
          {/* Label "Value" - TRADUCIDO */}
          <label htmlFor="inputValue" className="input-label">{t('tool.unitConverter.value')}</label>
          <input
            type="text"
            id="inputValue"
            value={inputValue}
            onChange={handleInputChange}
            className="input-field"
            inputMode="decimal"
            lang="en-US"
            placeholder="0"
          />
        </div>

        <div className="input-group">
          {/* Label "From" - TRADUCIDO */}
          <label htmlFor="fromUnit" className="input-label">{t('tool.unitConverter.from')}</label>
          <select
            id="fromUnit"
            value={fromUnit}
            onChange={handleFromUnitChange}
            className="select-field"
          >
            {units.map((unit) => (
              <option key={unit.value} value={unit.value}>
                {/* Las unidades (px, rem, em) NO se traducen */}
                {unit.label}
              </option>
            ))}
          </select>
        </div>

        {/* Arrow (símbolo visual, no necesita traducción) */}
        <div className="converter-arrow">→</div>

        <div className="input-group">
          {/* Label "To" - TRADUCIDO */}
          <label htmlFor="toUnit" className="input-label">{t('tool.unitConverter.to')}</label>
          <select
            id="toUnit"
            value={toUnit}
            onChange={handleToUnitChange}
            className="select-field"
          >
            {units.map((unit) => (
              <option key={unit.value} value={unit.value}>
                {unit.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Input condicional de Viewport */}
      {needsViewportInput && (
        <div className="converter-row">
          <div className="input-group full-width">
            <label htmlFor="viewportSize" className="input-label">
              {viewportLabel}
              <span className="input-hint">Required for vh/vw calculations</span>
            </label>
            <input
              type="text"
              id="viewportSize"
              value={viewportSize}
              onChange={handleViewportSizeChange}
              className="input-field"
              placeholder="0"
              inputMode="decimal"
              lang="en-US"
            />
          </div>
        </div>
      )}

      {/* Base font size - Fixed default */}
      <div className="converter-row">
        <div className="input-group full-width">
          <div className="base-font-info">
            <span className="base-font-info-text">{t('tool.unitConverter.baseFontSizeDefault')}</span>
          </div>
        </div>
      </div>

      {/* Resultado con botón de copiar */}
      <div className="converter-result">
        <div className="result-header">
          {/* "Result:" - TRADUCIDO */}
          <span className="result-label">{t('tool.unitConverter.result')}:</span>
          {/* Botón Copy - TRADUCIDO con estado */}
          <button
            type="button"
            onClick={handleCopyResult}
            className={`copy-btn ${isCopied ? 'copied' : ''}`}
            aria-label={t('tool.unitConverter.copy')}
            title={t('tool.unitConverter.copy')}
          >
            {isCopied ? (
              <>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>{t('tool.unitConverter.copied')}</span>
              </>
            ) : (
              <>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
                <span>{t('tool.unitConverter.copy')}</span>
              </>
            )}
          </button>
        </div>
        {/* El resultado numérico (1 rem) NO se traduce */}
        <span className="result-value">{result} {toUnit}</span>
        {/* Fórmula - TRADUCIDA con interpolación de variables */}
        <span className="result-formula">
          {t('tool.unitConverter.formula', {
            value: inputValue === '' ? '0' : inputValue,
            from: fromUnit,
            result: result,
            to: toUnit
          })}
        </span>
      </div>
    </div>
  );
};

export default UnitConverter;