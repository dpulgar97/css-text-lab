// src/features/typography-tool/ClampGenerator.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useClamp } from '../../hooks/useClamp';
import './ClampGenerator.css';

const ClampGenerator = ({ onClampChange }) => {
    const { t } = useTranslation();
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

    const [isCopied, setIsCopied] = useState(false);

    // Notificar al padre cuando cambia el clamp generado
    useEffect(() => {
        if (clampResult?.full && onClampChange) {
            onClampChange(clampResult.full, fontUnit);
        }
    }, [clampResult, fontUnit, onClampChange]);

    const handleCopy = async () => {
        if (!clampResult) return;

        try {
            const textToCopy = `font-size: ${clampResult.full};`;
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
        <div className="clamp-generator">
            {/* Título - TRADUCIDO */}
            <h2 className="generator-title">{t('tool.clampGenerator.title')}</h2>

            {/* Fila 1: Viewport */}
            <div className="clamp-row">
                <div className="input-group-with-unit">
                    {/* Label "Viewport Min" - TRADUCIDO */}
                    <label htmlFor="viewportMin" className="input-label">
                        {t('tool.clampGenerator.viewportMin')}
                    </label>
                    <div className="input-with-unit">
                        <input
                            type="text"
                            id="viewportMin"
                            value={viewportMin}
                            onChange={handleViewportMinChange}
                            className="input-field"
                            placeholder="0"
                            inputMode="numeric"
                            lang="en-US"
                        />
                        <span className="input-unit">{viewportUnit}</span>
                    </div>
                </div>

                <div className="input-group-with-unit">
                    {/* Label "Viewport Max" - TRADUCIDO */}
                    <label htmlFor="viewportMax" className="input-label">
                        {t('tool.clampGenerator.viewportMax')}
                    </label>
                    <div className="input-with-unit">
                        <input
                            type="text"
                            id="viewportMax"
                            value={viewportMax}
                            onChange={handleViewportMaxChange}
                            className="input-field"
                            placeholder="0"
                            inputMode="numeric"
                            lang="en-US"
                        />
                        <span className="input-unit">{viewportUnit}</span>
                    </div>
                </div>
            </div>

            {/* Fila 2: Font Size */}
            <div className="clamp-row">
                <div className="input-group-with-unit">
                    {/* Label "Font Size Min" - TRADUCIDO */}
                    <label htmlFor="fontSizeMin" className="input-label">
                        {t('tool.clampGenerator.fontSizeMin')}
                    </label>
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
                        {/* Selector de unidad - El label "Unit" se traduce, las opciones (px, rem) NO */}
                        <select
                            value={fontUnit}
                            onChange={handleFontUnitChange}
                            className="unit-select"
                            aria-label={t('tool.clampGenerator.unit')}
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
                    {/* Label "Font Size Max" - TRADUCIDO */}
                    <label htmlFor="fontSizeMax" className="input-label">
                        {t('tool.clampGenerator.fontSizeMax')}
                    </label>
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
                            aria-label={t('tool.clampGenerator.unit')}
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

            {/* Mensaje de Error - TRADUCIDO (si agregas la key al JSON) */}
            {error && (
                <div className="clamp-error">
                    <span className="error-message">{error}</span>
                </div>
            )}

            {/* Output - Solo se muestra si hay resultado */}
            {clampResult && (
                <div className="clamp-output">
                    <div className="output-header">
                        {/* Label "CSS Output" - TRADUCIDO */}
                        <span className="output-label">{t('tool.clampGenerator.cssOutput')}</span>

                        {/* Botón Copy - TRADUCIDO con estado */}
                        <button
                            type="button"
                            onClick={handleCopy}
                            className={`copy-btn ${isCopied ? 'copied' : ''}`}
                            aria-label={t('tool.clampGenerator.copy')}
                            title={t('tool.clampGenerator.copy')}
                        >
                            {isCopied ? (
                                <>
                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{t('tool.clampGenerator.copied')}</span>
                                </>
                            ) : (
                                <>
                                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                                    </svg>
                                    <span>{t('tool.clampGenerator.copy')}</span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* El código CSS generado NO se traduce (es código) */}
                    <code className="output-code">font-size: {clampResult.full};</code>

                    {/* Breakdown - Los labels "Min", "Ideal", "Max" se traducen, los valores NO */}
                    <div className="output-breakdown">
                        <span className="breakdown-item">
                            <strong>{t('tool.clampGenerator.min')}:</strong> {clampResult.min}
                        </span>
                        <span className="breakdown-item">
                            <strong>{t('tool.clampGenerator.ideal')}:</strong> {clampResult.ideal}
                        </span>
                        <span className="breakdown-item">
                            <strong>{t('tool.clampGenerator.max')}:</strong> {clampResult.max}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClampGenerator;