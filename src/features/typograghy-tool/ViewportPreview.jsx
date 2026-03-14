// src/features/typography-tool/ViewportPreview.jsx
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useViewportPreview } from '../../hooks/useViewportPreview';
import './ViewportPreview.css';

const ViewportPreview = ({ clampValue, fontUnit }) => {
    const { t } = useTranslation();
    const {
        selectedFont,
        clampValue: currentClamp,
        fonts,
        previewStyle,
        handleFontChange,
        updateClamp,
    } = useViewportPreview(clampValue);

    // Actualizar el clamp cuando cambie la prop
    useEffect(() => {
        if (clampValue) {
            updateClamp(clampValue);
        }
    }, [clampValue, updateClamp]);

    // Texto de prueba (se mantiene en inglés para consistencia)
    const previewText = "The quick brown fox jumps over the lazy dog. 0123456789";
    const previewParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    return (
        <div className="viewport-preview">
            {/* Header con controles */}
            <div className="preview-header">
                {/* Título - TRADUCIDO */}
                <h2 className="preview-title">{t('tool.viewportPreview.title')}</h2>

                {/* Selector de fuente */}
                <div className="font-selector">
                    {/* Label "Font Family" - TRADUCIDO */}
                    <label htmlFor="fontSelect" className="input-label">
                        {t('tool.viewportPreview.font')}
                    </label>
                    <select
                        id="fontSelect"
                        value={selectedFont}
                        onChange={handleFontChange}
                        className="select-field"
                    >
                        {fonts.map((font) => (
                            <option key={font.value} value={font.value}>
                                {/* Los nombres de fuentes NO se traducen (Inter, Roboto, etc.) */}
                                {font.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Área de preview */}
            <div className="preview-area">
                <div className="preview-content">
                    {/* Heading con el clamp aplicado (el estilo viene del hook) */}
                    <h1 className="preview-heading" style={previewStyle}>
                        {previewText}
                    </h1>

                    {/* Párrafo adicional para ver contexto */}
                    <p className="preview-paragraph" style={{ ...previewStyle, fontSize: 'calc(1em * 0.75)', marginTop: '1rem' }}>
                        {previewParagraph}
                    </p>
                </div>
            </div>

            {/* Nota informativa - TRADUCIDA con HTML para el <code> */}
            <div className="preview-note">
                <span className="note-icon">ℹ️</span>
                <span
                    className="note-text"
                    dangerouslySetInnerHTML={{ __html: t('tool.viewportPreview.note') }}
                />
            </div>
        </div>
    );
};

export default ViewportPreview;