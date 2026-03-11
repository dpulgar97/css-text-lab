export const FONT_UNITS = [
  { value: "px", label: "px" },
  { value: "rem", label: "rem" },
];

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
  const slope = (fontSizeMax - fontSizeMin) / (viewportMax - viewportMin);

  // Calcular el intercepto
  const intercept = fontSizeMin - slope * viewportMin;

  // Formatear valores
  const format = (num) => parseFloat(num.toFixed(4));

  return {
    min: `${format(fontSizeMin)}${fontUnit}`,
    max: `${format(fontSizeMax)}${fontUnit}`,
    ideal: `${format(intercept)}${fontUnit} + ${format(slope * 100)}vw`,
    full: `clamp(${format(fontSizeMin)}${fontUnit}, ${format(intercept)}${fontUnit} + ${format(slope * 100)}vw, ${format(fontSizeMax)}${fontUnit})`,
  };
};
