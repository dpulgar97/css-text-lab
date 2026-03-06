// src/features/typography-tool/UnitConverter.jsx
import React, { useState } from 'react';
import { useConverter } from '../../hooks/useConverter';
import './UnitConverter.css';


const UnitConverter = () => {
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

  // ... (estado isCopied y handleCopyResult igual)
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

      <h2 className="converter-title">Unit Converter</h2>
      
      {/* Fila de entrada y unidades */}
      <div className="converter-row">
        {/* ... (inputs de Value, From, To iguales) ... */}
        <div className="input-group">
          <label htmlFor="inputValue" className="input-label">Value</label>
          <input
            type="number"
            id="inputValue"
            value={inputValue}
            onChange={handleInputChange}
            className="input-field"
            min="0"
            step="0.1"
          />
        </div>

        <div className="input-group">
          <label htmlFor="fromUnit" className="input-label">From</label>
          <select
            id="fromUnit"
            value={fromUnit}
            onChange={handleFromUnitChange}
            className="select-field"
          >
            {units.map((unit) => (
              <option key={unit.value} value={unit.value}>
                {unit.label}
              </option>
            ))}
          </select>
        </div>

        <div className="converter-arrow">→</div>

        <div className="input-group">
          <label htmlFor="toUnit" className="input-label">To</label>
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

      {/* Input condicional de Viewport (NUEVO) */}
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
            />
          </div>
        </div>
      )}

      {/* Base font size con toggle */}
      {/* ... (igual que antes) ... */}
      <div className="converter-row">
        <div className="input-group full-width">
          <div className="base-font-header">
            <label className="input-label">
              Base Font Size (px)
              <span className="input-hint">Used for rem/em calculations (8-100px)</span>
            </label>
            
            <button
              type="button"
              onClick={toggleBaseFontSizeEdit}
              className={`toggle-btn ${isBaseFontSizeEditable ? 'active' : ''}`}
              aria-label={isBaseFontSizeEditable ? 'Save base font size' : 'Edit base font size'}
            >
              {isBaseFontSizeEditable ? (
                <>
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Save</span>
                </>
              ) : (
                <>
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                  <span>Edit</span>
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
              />
              <button
                type="button"
                onClick={cancelBaseFontSizeEdit}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="base-font-display">
              <span className="display-value">{baseFontSize}px</span>
              <span className="display-hint">Click "Edit" to change (8-100px)</span>
            </div>
          )}
        </div>
      </div>

      {/* Resultado con botón de copiar */}
      {/* ... (igual que antes) ... */}
      <div className="converter-result">
        <div className="result-header">
          <span className="result-label">Result:</span>
          <button
            type="button"
            onClick={handleCopyResult}
            className={`copy-btn ${isCopied ? 'copied' : ''}`}
            aria-label="Copy result to clipboard"
            title="Copy to clipboard"
          >
            {isCopied ? (
              <>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <span className="result-value">{result} {toUnit}</span>
        <span className="result-formula">
          {inputValue} {fromUnit} = {result} {toUnit}
        </span>
      </div>
    </div>
  );
};

export default UnitConverter;