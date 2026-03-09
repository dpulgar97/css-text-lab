// src/features/typography-tool/ViewportPreview.jsx
import React, { useEffect } from 'react';
import { useViewportPreview } from '../../hooks/useViewportPreview';
import './ViewportPreview.css';

const ViewportPreview = ({ clampValue, fontUnit }) => {
    const {
        selectedFont,
        clampValue: currentClamp,
        fonts,
        previewStyle,
        handleFontChange,
        updateClamp,
    } = useViewportPreview(clampValue);

    // Actualizar cuando cambie la prop
    useEffect(() => {
        if (clampValue) {
            updateClamp(clampValue);
        }
    }, [clampValue, updateClamp]);

    // Texto de prueba más realista
    const previewText = "The quick brown fox jumps over the lazy dog. 0123456789";
    const previewParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    return (
        <div className="viewport-preview">
            {/* Header con controles */}
            <div className="preview-header">
                <h2 className="preview-title">Live Preview</h2>

                <div className="font-selector">
                    <label htmlFor="fontSelect" className="input-label">Font Family</label>
                    <select
                        id="fontSelect"
                        value={selectedFont}
                        onChange={handleFontChange}
                        className="select-field"
                    >
                        {fonts.map((font) => (
                            <option key={font.value} value={font.value}>
                                {font.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Área de preview */}
            <div className="preview-area">
                <div className="preview-content">
                    {/* Heading con el clamp aplicado */}
                    <h1 className="preview-heading" style={previewStyle}>
                        {previewText}
                    </h1>

                    {/* Párrafo adicional para ver contexto */}
                    <p className="preview-paragraph" style={{ ...previewStyle, fontSize: 'calc(1em * 0.75)', marginTop: '1rem' }}>
                        {previewParagraph}
                    </p>
                </div>
            </div>

            {/* Nota para desarrolladores */}
            <div className="preview-note">
                <span className="note-text">
                    <strong>Note:</strong> The <code>vw</code> unit is relative to your browser viewport.
                    Inspect this element to see the clamp() applied. Test in your own project for accurate responsive behavior.
                </span>
            </div>
        </div>
    );
};

export default ViewportPreview;