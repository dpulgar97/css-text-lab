// src/utils/clamp.js

export const FONT_UNITS = [
  { value: "px", label: "px" },
  { value: "rem", label: "rem" },
  { value: "em", label: "em" },
];

/**
 * Calcula los valores para la función clamp()
 * @param {number} viewportMin - Viewport mínimo en px
 * @param {number} viewportMax - Viewport máximo en px
 * @param {number} fontSizeMin - Tamaño de fuente mínimo
 * @param {number} fontSizeMax - Tamaño de fuente máximo
 * @param {string} fontUnit - Unidad de la fuente (px, rem, em)
 * @returns {object} - Objeto con los valores calculados
 */
export const calculateClamp = (
  viewportMin,
  viewportMax,
  fontSizeMin,
  fontSizeMax,
  fontUnit,
) => {
  // Validaciones básicas
  if (viewportMin >= viewportMax) {
    return { error: "Viewport min must be less than viewport max" };
  }

  if (fontSizeMin >= fontSizeMax) {
    return { error: "Font size min must be less than font size max" };
  }

  // Calcular la pendiente de la función lineal
  // pendiente = (fontMax - fontMin) / (viewportMax - viewportMin)
  const slope = (fontSizeMax - fontSizeMin) / (viewportMax - viewportMin);

  // Calcular el intercepto
  // intercepto = fontMin - (pendiente * viewportMin)
  const intercept = fontSizeMin - slope * viewportMin;

  // El valor ideal es: intercept + slope * 100vw
  // Pero lo expresamos como: intercept + slope * 100vw
  const idealValue = intercept;
  const idealVw = slope * 100;

  // Formatear valores (máximo 4 decimales, sin ceros innecesarios)
  const format = (num) => parseFloat(num.toFixed(4));

  return {
    min: `${format(fontSizeMin)}${fontUnit}`,
    max: `${format(fontSizeMax)}${fontUnit}`,
    ideal: `${format(idealValue)}${fontUnit} + ${format(idealVw)}vw`,
    full: `clamp(${format(fontSizeMin)}${fontUnit}, ${format(idealValue)}${fontUnit} + ${format(idealVw)}vw, ${format(fontSizeMax)}${fontUnit})`,
  };
};

/**
 * Convierte un valor a px para cálculos internos
 */
export const convertToPx = (value, unit, baseFontSize = 16) => {
  switch (unit) {
    case "rem":
    case "em":
      return value * baseFontSize;
    case "px":
    default:
      return value;
  }
};
