// src/utils/conversions.js

// Base font size por defecto (puede ser personalizado por el usuario)
export const DEFAULT_BASE_FONT_SIZE = 16;
export const DEFAULT_VIEWPORT_SIZE = 1920; // Solo como fallback

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
 * @param {number} viewportSize - Tamaño del viewport (para vh/vw, en px)
 * @returns {number} - El valor convertido
 */
export const convertUnit = (
  value,
  fromUnit,
  toUnit,
  baseFontSize = DEFAULT_BASE_FONT_SIZE,
  viewportSize = 1920, // Default viewport width para cálculos
) => {
  if (fromUnit === toUnit) return value;

  // Primero convertimos todo a px como unidad base intermedia
  const valueInPx = toPixels(value, fromUnit, baseFontSize, viewportSize);

  // Luego convertimos de px a la unidad destino
  return fromPixels(valueInPx, toUnit, baseFontSize, viewportSize);
};

/**
 * Convierte cualquier unidad a pixels
 */
const toPixels = (value, unit, baseFontSize, viewportSize) => {
  switch (unit) {
    case "px":
      return value;
    case "rem":
    case "em":
      return value * baseFontSize;
    case "pt":
      return value * 1.333333; // 1pt = 1.333px
    case "vh":
      return (value / 100) * viewportSize; // Asumimos viewport cuadrado para simplificar
    case "vw":
      return (value / 100) * viewportSize;
    default:
      return value;
  }
};

/**
 * Convierte desde pixels a cualquier unidad
 */
const fromPixels = (valueInPx, unit, baseFontSize, viewportSize) => {
  switch (unit) {
    case "px":
      return valueInPx;
    case "rem":
    case "em":
      return valueInPx / baseFontSize;
    case "pt":
      return valueInPx / 1.333333;
    case "vh":
      return (valueInPx / viewportSize) * 100;
    case "vw":
      return (valueInPx / viewportSize) * 100;
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
