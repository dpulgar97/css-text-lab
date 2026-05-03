// src/utils/conversions.js

// Base font size por defecto (puede ser personalizado por el usuario)
export const DEFAULT_BASE_FONT_SIZE = 16;
export const DEFAULT_VIEWPORT_WIDTH = 1920;
export const DEFAULT_VIEWPORT_HEIGHT = 1080;

export const UNITS = [
  { value: 'px', label: 'Pixels (px)' },
  { value: 'rem', label: 'Root EM (rem)' },
  { value: 'em', label: 'EM (em)' },
  { value: 'pt', label: 'Points (pt)' },
  { value: 'vh', label: 'Viewport Height (vh)' },
  { value: 'vw', label: 'Viewport Width (vw)' },
];

/**
 * Convierte un valor de una unidad a otra
 * @param {number} value - El valor numérico a convertir
 * @param {string} fromUnit - Unidad de origen
 * @param {string} toUnit - Unidad de destino
 * @param {number} baseFontSize - Tamaño base de fuente (para rem/em)
 * @param {number} viewportWidth - Ancho del viewport (para vw, en px)
 * @param {number} viewportHeight - Alto del viewport (para vh, en px)
 * @returns {number} - El valor convertido
 */
export const convertUnit = (
  value,
  fromUnit,
  toUnit,
  baseFontSize = DEFAULT_BASE_FONT_SIZE,
  viewportWidth = DEFAULT_VIEWPORT_WIDTH,
  viewportHeight = DEFAULT_VIEWPORT_HEIGHT,
) => {
  if (fromUnit === toUnit) return value;

  // Primero convertimos todo a px como unidad base intermedia
  const valueInPx = toPixels(value, fromUnit, baseFontSize, viewportWidth, viewportHeight);

  // Luego convertimos de px a la unidad destino
  return fromPixels(valueInPx, toUnit, baseFontSize, viewportWidth, viewportHeight);
};

/**
 * Convierte cualquier unidad a pixels
 */
const toPixels = (value, unit, baseFontSize, viewportWidth, viewportHeight) => {
  switch (unit) {
    case "px":
      return value;
    case "rem":
    case "em":
      return value * baseFontSize;
    case "pt":
      return value * (4 / 3); // 1pt = 4/3 px (exact CSS value)
    case "vh":
      return (value / 100) * viewportHeight;
    case "vw":
      return (value / 100) * viewportWidth;
    default:
      return value;
  }
};

/**
 * Convierte desde pixels a cualquier unidad
 */
const fromPixels = (valueInPx, unit, baseFontSize, viewportWidth, viewportHeight) => {
  switch (unit) {
    case "px":
      return valueInPx;
    case "rem":
    case "em":
      return valueInPx / baseFontSize;
    case "pt":
      return valueInPx / (4 / 3);
    case "vh":
      return (valueInPx / viewportHeight) * 100;
    case "vw":
      return (valueInPx / viewportWidth) * 100;
    default:
      return valueInPx;
  }
};

/**
 * Formatea el resultado para mostrarlo (máximo 4 decimales, sin ceros innecesarios)
 */
export const formatResult = (value) => {
  return parseFloat(value.toFixed(4));
};
