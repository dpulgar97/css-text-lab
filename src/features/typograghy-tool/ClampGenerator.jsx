// src/features/typography-tool/ClampGenerator.jsx
import React, { useState } from 'react';
import { useClamp } from '../../hooks/useClamp';
import './ClampGenerator.css';

const ClampGenerator = ({ onClampChange }) => {
    const {
        viewportMin,
        viewportMax,
        viewportUnit,
        fontSizeMin,
        fontSizeMax,
        fontUnit,
        clampResult,
        error,
        fontUnits,
        handleViewportMinChange,
        handleViewportMaxChange,
        handleFontSizeMinChange,
        handleFontSizeMaxChange,
        handleFontUnitChange,
    } = useClamp();

    React.useEffect(() => {
        if (clampResult?.full && onClampChange) {
            onClampChange(clampResult.full, fontUnit);
        }
    }, [clampResult, fontUnit, onClampChange]);

    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        if (!clampResult) return;

        try {
            await navigator.clipboard.writeText(`font-size: ${clampResult.full};`);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="clamp-generator">
            <h2 className="generator-title">Clamp Generator</h2>

            {/* Fila 1: Viewport */}
            <div className="clamp-row">
                <div className="input-group-with-unit">
                    <label htmlFor="viewportMin" className="input-label">Viewport Min</label>
                    <div className="input-with-unit">
                        <input
                            type="number"
                            id="viewportMin"
                            value={viewportMin}
                            onChange={handleViewportMinChange}
                            className="input-field"
                            min="0"
                            step="10"
                            lang="en-US"
                        />
                        <span className="input-unit">{viewportUnit}</span>
                    </div>
                </div>

                <div className="input-group-with-unit">
                    <label htmlFor="viewportMax" className="input-label">Viewport Max</label>
                    <div className="input-with-unit">
                        <input
                            type="number"
                            id="viewportMax"
                            value={viewportMax}
                            onChange={handleViewportMaxChange}
                            className="input-field"
                            min="0"
                            step="10"
                            lang="en-US"
                        />
                        <span className="input-unit">{viewportUnit}</span>
                    </div>
                </div>
            </div>

            {/* Fila 2: Font Size */}
            <div className="clamp-row">
                <div className="input-group-with-unit">
                    <label htmlFor="fontSizeMin" className="input-label">Font Size Min</label>
                    <div className="input-with-unit">
                        <input
                            type="text"
                            id="fontSizeMin"
                            value={fontSizeMin}
                            onChange={handleFontSizeMinChange}
                            className="input-field"
                            inputMode="decimal"
                            lang="en-US"
                            placeholder="0"
                        />
                        <select
                            value={fontUnit}
                            onChange={handleFontUnitChange}
                            className="unit-select"
                            lang="en-US"
                        >
                            {fontUnits.map((unit) => (
                                <option key={unit.value} value={unit.value}>
                                    {unit.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="input-group-with-unit">
                    <label htmlFor="fontSizeMax" className="input-label">Font Size Max</label>
                    <div className="input-with-unit">
                        <input
                            type="text"
                            id="fontSizeMax"
                            value={fontSizeMax}
                            onChange={handleFontSizeMaxChange}
                            className="input-field"
                            inputMode="decimal"
                            lang="en-US"
                            placeholder="0"
                        />
                        <select
                            value={fontUnit}
                            onChange={handleFontUnitChange}
                            className="unit-select"
                            lang="en-US"
                        >
                            {fontUnits.map((unit) => (
                                <option key={unit.value} value={unit.value}>
                                    {unit.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="clamp-error">
                    <span className="error-message">{error}</span>
                </div>
            )}

            {/* Output */}
            {clampResult && (
                <div className="clamp-output">
                    <div className="output-header">
                        <span className="output-label">CSS Output</span>
                        <button
                            type="button"
                            onClick={handleCopy}
                            className={`copy-btn ${isCopied ? 'copied' : ''}`}
                            aria-label="Copy CSS to clipboard"
                        >
                            {isCopied ? (
                                <>
                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Copied!</span>
                                </>
                            ) : (
                                <>
                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                                    </svg>
                                    <span>Copy</span>
                                </>
                            )}
                        </button>
                    </div>
                    <code className="output-code">font-size: {clampResult.full};</code>
                    <div className="output-breakdown">
                        <span className="breakdown-item">
                            <strong>Min:</strong> {clampResult.min}
                        </span>
                        <span className="breakdown-item">
                            <strong>Ideal:</strong> {clampResult.ideal}
                        </span>
                        <span className="breakdown-item">
                            <strong>Max:</strong> {clampResult.max}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClampGenerator;