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
    baseFontSize,
    tempBaseFontSize,
    viewportSize,
    result,
    units,
    handleInputChange,
    handleFromUnitChange,
    handleToUnitChange,
    handleViewportSizeChange,
    toggleBaseFontSizeEdit,
    handleTempBaseFontSizeChange,
    cancelBaseFontSizeEdit,
    saveBaseFontSize,
    isBaseFontSizeEditable,
    needsViewportInput,
    viewportLabel,
    toast,
    hideToast,
  } = useConverter();

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyResult = async () => {
    const textToCopy = `${result} ${toUnit}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      saveBaseFontSize();
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
              type="number"
              id="viewportSize"
              value={viewportSize}
              onChange={handleViewportSizeChange}
              className="input-field"
              min="100"
              step="10"
              lang="en-US"
            />
          </div>
        </div>
      )}

      {/* Base font size con toggle */}
      <div className="converter-row">
        <div className="input-group full-width">
          <div className="base-font-header">
            <label className="input-label">
              {/* "Base Font Size (px)" - TRADUCIDO */}
              {t('tool.unitConverter.baseFontSize')}
              {/* Hint - TRADUCIDO */}
              <span className="input-hint">{t('tool.unitConverter.baseFontSizeHint')}</span>
            </label>

            {/* Botón toggle - TRADUCIDO */}
            <button
              type="button"
              onClick={toggleBaseFontSizeEdit}
              className={`toggle-btn ${isBaseFontSizeEditable ? 'active' : ''}`}
              aria-label={isBaseFontSizeEditable ? t('tool.unitConverter.save') : t('tool.unitConverter.edit')}
            >
              {isBaseFontSizeEditable ? (
                <>
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('tool.unitConverter.save')}</span>
                </>
              ) : (
                <>
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                  <span>{t('tool.unitConverter.edit')}</span>
                </>
              )}
            </button>
          </div>

          {isBaseFontSizeEditable ? (
            <div className="base-font-edit-row">
              <input
                type="text"
                value={tempBaseFontSize}
                onChange={handleTempBaseFontSizeChange}
                onKeyDown={handleKeyDown}
                className="input-field editable"
                autoFocus
                placeholder="Enter value..."
                inputMode="decimal"
                lang="en-US"
              />
              {/* Botón Cancel - TRADUCIDO */}
              <button
                type="button"
                onClick={cancelBaseFontSizeEdit}
                className="cancel-btn"
              >
                {t('tool.unitConverter.cancel')}
              </button>
            </div>
          ) : (
            <div className="base-font-display">
              {/* El valor numérico (16px) NO se traduce */}
              <span className="display-value">{baseFontSize}px</span>
              {/* Hint - TRADUCIDO */}
              <span className="display-hint">{t('tool.unitConverter.baseFontSizeHint')}</span>
            </div>
          )}
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