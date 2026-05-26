// src/hooks/useClamp.js
import { useState, useMemo } from "react";
import { calculateClamp, FONT_UNITS } from "../utils/clamp";

export const useClamp = () => {
  // Viewport (strings para permitir vacío y mostrar placeholder)
  const [viewportMin, setViewportMin] = useState("600");
  const [viewportMax, setViewportMax] = useState("1400");
  const [viewportUnit] = useState("px");

  // Font Size (strings para permitir vacío temporalmente)
  const [fontSizeMin, setFontSizeMin] = useState("16");
  const [fontSizeMax, setFontSizeMax] = useState("24");
  const [fontUnit, setFontUnit] = useState("px");

  // Resultado como estado derivado (useMemo en lugar de useState + useEffect)
  const { clampResult, error } = useMemo(() => {
    const min = fontSizeMin === "" ? 0 : parseFloat(fontSizeMin);
    const max = fontSizeMax === "" ? 0 : parseFloat(fontSizeMax);

    if (isNaN(min) || isNaN(max)) {
      return { clampResult: null, error: "Invalid font size values" };
    }

    const vpMin = viewportMin === "" ? 0 : parseFloat(viewportMin);
    const vpMax = viewportMax === "" ? 0 : parseFloat(viewportMax);
    const vpMinFinal = isNaN(vpMin) ? 0 : vpMin;
    const vpMaxFinal = isNaN(vpMax) ? 0 : vpMax;

    const result = calculateClamp(vpMinFinal, vpMaxFinal, min, max, fontUnit);

    if (result.error) {
      return { clampResult: null, error: result.error };
    }

    return { clampResult: result, error: null };
  }, [viewportMin, viewportMax, fontSizeMin, fontSizeMax, fontUnit]);

  // Handlers para Viewport (enteros, se mantienen como number)
  const handleViewportMinChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d*$/.test(value)) {
      setViewportMin(value);
    }
  };

  const handleViewportMaxChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d*$/.test(value)) {
      setViewportMax(value);
    }
  };

  // Handlers para Font Size (strings con validación manual)
  const handleFontSizeMinChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setFontSizeMin(value);
    }
  };

  const handleFontSizeMaxChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setFontSizeMax(value);
    }
  };

  const handleFontUnitChange = (e) => {
    setFontUnit(e.target.value);
  };

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
