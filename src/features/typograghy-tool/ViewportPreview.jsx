import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useViewportPreview } from '../../hooks/useViewportPreview';
import { computeFontSizeAtViewport } from '../../utils/clamp';
import { Minus, Plus } from 'lucide-react';
import './ViewportPreview.css';

const SLIDER_MIN = 350;
const SLIDER_MAX = 1400;

const ViewportPreview = ({ clampData }) => {
  const { t } = useTranslation();
  const {
    selectedFont,
    fonts,
    previewStyle,
    handleFontChange,
    updateClamp,
  } = useViewportPreview(clampData?.clampValue);

  const { clampValue, fontUnit, viewportMin, viewportMax, fontSizeMin, fontSizeMax } = clampData || {};

  const [viewportWidth, setViewportWidth] = useState(() => {
    if (viewportMin && viewportMax) {
      return Math.round((viewportMin + viewportMax) / 2);
    }
    return 750;
  });

  useEffect(() => {
    if (clampValue) {
      updateClamp(clampValue);
    }
  }, [clampValue, updateClamp]);

  useEffect(() => {
    if (viewportMin && viewportMax) {
      setViewportWidth(Math.round((viewportMin + viewportMax) / 2));
    }
  }, [viewportMin, viewportMax]);

  const computedFontSize = clampValue
    ? computeFontSizeAtViewport(viewportWidth, viewportMin, viewportMax, fontSizeMin, fontSizeMax)
    : null;

  const previewFontSize = computedFontSize != null ? `${computedFontSize}${fontUnit}` : clampValue || '1rem';

  const sliderProgress = ((viewportWidth - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100;

  const handleSliderChange = useCallback((e) => {
    setViewportWidth(Number(e.target.value));
  }, []);

  const stepUp = useCallback(() => {
    setViewportWidth((prev) => Math.min(prev + 10, SLIDER_MAX));
  }, []);

  const stepDown = useCallback(() => {
    setViewportWidth((prev) => Math.max(prev - 10, SLIDER_MIN));
  }, []);

  const previewText = 'The quick brown fox jumps over the lazy dog. 0123456789';
  const previewParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  return (
    <div className="viewport-preview">
      <div className="preview-header">
        <h2 className="preview-title">{t('tool.viewportPreview.title')}</h2>

        <div className="font-selector">
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
                {font.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="viewport-controls">
        <div className="slider-info">
          <div className="slider-value-group">
            <span className="slider-label-text">{t('tool.viewportPreview.viewportWidth')}</span>
            <span className="slider-value">{viewportWidth}px</span>
          </div>
          {computedFontSize != null && (
            <div className="slider-value-group">
              <span className="slider-label-text">{t('tool.viewportPreview.computedSize')}</span>
              <span className="slider-value slider-value--accent">
                {computedFontSize}{fontUnit}
              </span>
            </div>
          )}
        </div>

        <div className="slider-row">
          <button
            className="slider-step-btn"
            onClick={stepDown}
            aria-label={t('tool.viewportPreview.decrease')}
          >
            <Minus size={16} />
          </button>

          <div className="slider-track-wrapper">
            <input
              type="range"
              className="viewport-slider"
              min={SLIDER_MIN}
              max={SLIDER_MAX}
              value={viewportWidth}
              onChange={handleSliderChange}
              style={{
                '--slider-progress': `${sliderProgress}%`,
              }}
              aria-label={t('tool.viewportPreview.viewportWidth')}
            />
            <div className="slider-ticks">
              <span className="slider-tick" style={{ left: '0%' }}>350</span>
              <span className="slider-tick" style={{ left: `${((768 - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100}%` }}>768</span>
              <span className="slider-tick" style={{ left: `${((1024 - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100}%` }}>1024</span>
              <span className="slider-tick" style={{ left: '100%' }}>1400</span>
            </div>
          </div>

          <button
            className="slider-step-btn"
            onClick={stepUp}
            aria-label={t('tool.viewportPreview.increase')}
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="preview-area">
        <div className="preview-topbar">
          <div className="topbar-dots">
            <span className="topbar-dot topbar-dot--red" />
            <span className="topbar-dot topbar-dot--yellow" />
            <span className="topbar-dot topbar-dot--green" />
          </div>
          <span className="topbar-width">{viewportWidth}px</span>
        </div>
        <div className="preview-content">
          <h1
            className="preview-heading"
            style={{
              ...previewStyle,
              fontSize: previewFontSize,
            }}
          >
            {previewText}
          </h1>
          <p
            className="preview-paragraph"
            style={{
              ...previewStyle,
              fontSize: computedFontSize != null
                ? `${parseFloat((computedFontSize * 0.75).toFixed(2))}${fontUnit}`
                : 'calc(1em * 0.75)',
              marginTop: '1rem',
            }}
          >
            {previewParagraph}
          </p>
        </div>
      </div>

      <div className="preview-note">
        <span
          className="note-text"
          dangerouslySetInnerHTML={{ __html: t('tool.viewportPreview.note') }}
        />
      </div>
    </div>
  );
};

export default ViewportPreview;
