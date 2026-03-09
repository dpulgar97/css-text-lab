// src/utils/evaluateClamp.js

/**
 * Evalúa una expresión clamp() usando un viewport simulado
 * @param {string} clampString - Ej: "clamp(1rem, 0.5rem + 1vw, 1.5rem)"
 * @param {number} viewportWidth - Ancho simulado en px
 * @param {number} baseFontSize - Base para rem/em (default 16)
 * @returns {string} - Valor calculado en px para aplicar como estilo inline
 */
export const evaluateClamp = (
  clampString,
  viewportWidth,
  baseFontSize = 16,
) => {
  if (!clampString) return null;

  // Extraer los 3 valores del clamp: min, ideal, max
  const match = clampString.match(/clamp\(([^,]+),\s*([^,]+),\s*([^)]+)\)/i);
  if (!match) return null;

  const [, minStr, idealStr, maxStr] = match;

  // Función para convertir cualquier valor CSS a px
  const toPx = (value) => {
    value = value.trim();

    // Caso 1: Valor simple con unidad (ej: "16px", "1rem")
    const simpleMatch = value.match(/^([\d.]+)(px|rem|em)$/i);
    if (simpleMatch) {
      const [, num, unit] = simpleMatch;
      const parsed = parseFloat(num);
      if (unit === "px") return parsed;
      if (unit === "rem" || unit === "em") return parsed * baseFontSize;
    }

    // Caso 2: Expresión con vw (ej: "0.5rem + 1vw" o "1vw + 0.5rem")
    // Patrón: [valor][unidad]? + [valor]vw
    const exprMatch =
      value.match(/^([\d.]+)?(px|rem|em)?\s*\+\s*([\d.]+)vw$/i) ||
      value.match(/^([\d.]+)vw\s*\+\s*([\d.]+)?(px|rem|em)?$/i);

    if (exprMatch) {
      // Si coincide el primer patrón: base + vw
      if (exprMatch[1] !== undefined) {
        const baseValue = exprMatch[1] ? parseFloat(exprMatch[1]) : 0;
        const baseUnit = exprMatch[2] || "rem";
        const vwCoeff = parseFloat(exprMatch[3]);
        const basePx = baseUnit === "px" ? baseValue : baseValue * baseFontSize;
        const vwPx = (vwCoeff / 100) * viewportWidth;
        return basePx + vwPx;
      }
      // Si coincide el segundo patrón: vw + base
      else {
        const vwCoeff = parseFloat(exprMatch[1]);
        const baseValue = exprMatch[2] ? parseFloat(exprMatch[2]) : 0;
        const baseUnit = exprMatch[3] || "rem";
        const vwPx = (vwCoeff / 100) * viewportWidth;
        const basePx = baseUnit === "px" ? baseValue : baseValue * baseFontSize;
        return vwPx + basePx;
      }
    }

    // Si no reconoce el formato, retorna null
    return null;
  };

  // Convertir los 3 valores a px
  const minPx = toPx(minStr);
  const idealPx = toPx(idealStr);
  const maxPx = toPx(maxStr);

  // Si algo falló al parsear, retornamos null
  if (minPx === null || idealPx === null || maxPx === null) {
    return null;
  }

  // Aplicar la lógica de clamp: min(max(min, ideal), max)
  const clamped = Math.max(minPx, Math.min(idealPx, maxPx));

  return `${clamped}px`;
};
