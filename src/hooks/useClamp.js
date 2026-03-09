// src/hooks/useClamp.js
import { useState, useEffect, useCallback } from "react";
import { calculateClamp, FONT_UNITS } from "../utils/clamp";

export const useClamp = () => {
  // Viewport (enteros, pueden ser number)
  const [viewportMin, setViewportMin] = useState(600);
  const [viewportMax, setViewportMax] = useState(1400);
  const [viewportUnit, setViewportUnit] = useState("px");

  // Font Size (strings para permitir vacío temporalmente)
  const [fontSizeMin, setFontSizeMin] = useState("16");
  const [fontSizeMax, setFontSizeMax] = useState("24");
  const [fontUnit, setFontUnit] = useState("px");

  // Resultado
  const [clampResult, setClampResult] = useState(null);
  const [error, setError] = useState(null);

  // Calcular clamp cuando cambian los valores
  const calculate = useCallback(() => {
    // Convertir strings a números para el cálculo (si están vacíos, usar 0)
    const min = fontSizeMin === "" ? 0 : parseFloat(fontSizeMin);
    const max = fontSizeMax === "" ? 0 : parseFloat(fontSizeMax);

    // Validar que sean números válidos
    if (isNaN(min) || isNaN(max)) {
      setError("Invalid font size values");
      setClampResult(null);
      return;
    }

    const result = calculateClamp(viewportMin, viewportMax, min, max, fontUnit);

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

  // Handlers para Viewport (enteros, se mantienen como number)
  const handleViewportMinChange = (e) => {
    const value = parseInt(e.target.value);
    setViewportMin(isNaN(value) ? 0 : value);
  };

  const handleViewportMaxChange = (e) => {
    const value = parseInt(e.target.value);
    setViewportMax(isNaN(value) ? 0 : value);
  };

  // Handlers para Font Size (strings con validación manual)
  const handleFontSizeMinChange = (e) => {
    const value = e.target.value;
    // Permitir: vacío, números, y un solo punto decimal
    // Regex: empieza con cualquier cantidad de dígitos, opcionalmente seguido de un punto y más dígitos
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
