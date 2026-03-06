// src/hooks/useClamp.js
import { useState, useEffect, useCallback } from "react";
import { calculateClamp, FONT_UNITS } from "../utils/clamp";

export const useClamp = () => {
  // Viewport
  const [viewportMin, setViewportMin] = useState(320);
  const [viewportMax, setViewportMax] = useState(1920);
  const [viewportUnit, setViewportUnit] = useState("px"); // px es el estándar para viewport

  // Font Size
  const [fontSizeMin, setFontSizeMin] = useState(16);
  const [fontSizeMax, setFontSizeMax] = useState(24);
  const [fontUnit, setFontUnit] = useState("rem");

  // Resultado
  const [clampResult, setClampResult] = useState(null);
  const [error, setError] = useState(null);

  // Calcular clamp cuando cambian los valores
  const calculate = useCallback(() => {
    const result = calculateClamp(
      viewportMin,
      viewportMax,
      fontSizeMin,
      fontSizeMax,
      fontUnit,
    );

    if (result.error) {
      setError(result.error);
      setClampResult(null);
    } else {
      setError(null);
      setClampResult(result);
    }
  }, [viewportMin, viewportMax, fontSizeMin, fontSizeMax, fontUnit]);

  useEffect(() => {
    calculate();
  }, [calculate]);

  // Handlers
  const handleViewportMinChange = (e) => {
    const value = parseInt(e.target.value);
    setViewportMin(isNaN(value) ? 0 : value);
  };

  const handleViewportMaxChange = (e) => {
    const value = parseInt(e.target.value);
    setViewportMax(isNaN(value) ? 0 : value);
  };

  const handleFontSizeMinChange = (e) => {
    const value = parseFloat(e.target.value);
    setFontSizeMin(isNaN(value) ? 0 : value);
  };

  const handleFontSizeMaxChange = (e) => {
    const value = parseFloat(e.target.value);
    setFontSizeMax(isNaN(value) ? 0 : value);
  };

  const handleFontUnitChange = (e) => {
    setFontUnit(e.target.value);
  };

  // Viewport unit es fijo en px por ahora (es el estándar)
  // Pero dejamos la estructura por si quieres hacerlo editable después

  return {
    // Valores
    viewportMin,
    viewportMax,
    viewportUnit,
    fontSizeMin,
    fontSizeMax,
    fontUnit,
    clampResult,
    error,
    fontUnits: FONT_UNITS,
    // Handlers
    handleViewportMinChange,
    handleViewportMaxChange,
    handleFontSizeMinChange,
    handleFontSizeMaxChange,
    handleFontUnitChange,
  };
};
