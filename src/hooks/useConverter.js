// src/hooks/useConverter.js
import { useState, useEffect, useCallback, useMemo } from "react";
import {
  convertUnit,
  formatResult,
  UNITS,
  DEFAULT_BASE_FONT_SIZE,
  DEFAULT_VIEWPORT_WIDTH,
  DEFAULT_VIEWPORT_HEIGHT,
} from "../utils/convertions";

export const useConverter = () => {
  // ... (estados anteriores: inputValue, fromUnit, toUnit, baseFontSize, result, etc.)
  const [inputValue, setInputValue] = useState("16");
  const [fromUnit, setFromUnit] = useState("px");
  const [toUnit, setToUnit] = useState("rem");
  const [baseFontSize, setBaseFontSize] = useState(DEFAULT_BASE_FONT_SIZE);
  const [result, setResult] = useState(0);

  const [viewportWidth, setViewportWidth] = useState("");
  const [viewportHeight, setViewportHeight] = useState("");

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "error",
  });

  // Detectar si necesitamos el input de viewport
  const needsViewportInput = useMemo(() => {
    return (
      fromUnit === "vh" ||
      fromUnit === "vw" ||
      toUnit === "vh" ||
      toUnit === "vw"
    );
  }, [fromUnit, toUnit]);

  // Label dinámico para el viewport
  const viewportLabel = useMemo(() => {
    if (fromUnit === "vh" || toUnit === "vh") return "Viewport Height (px)";
    if (fromUnit === "vw" || toUnit === "vw") return "Viewport Width (px)";
    return "Viewport Size (px)";
  }, [fromUnit, toUnit]);

  const calculate = useCallback(() => {
    const value = inputValue === "" ? 0 : parseFloat(inputValue);
    const vw = viewportWidth === "" ? DEFAULT_VIEWPORT_WIDTH : parseFloat(viewportWidth);
    const vh = viewportHeight === "" ? DEFAULT_VIEWPORT_HEIGHT : parseFloat(viewportHeight);
    const converted = convertUnit(
      isNaN(value) ? 0 : value,
      fromUnit,
      toUnit,
      baseFontSize,
      isNaN(vw) ? DEFAULT_VIEWPORT_WIDTH : vw,
      isNaN(vh) ? DEFAULT_VIEWPORT_HEIGHT : vh,
    );
    setResult(formatResult(converted));
  }, [inputValue, fromUnit, toUnit, baseFontSize, viewportWidth, viewportHeight]);

  useEffect(() => {
    calculate();
  }, [calculate]);

  // ... (handlers anteriores: handleInputChange, handleFromUnitChange, handleToUnitChange, etc.)
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^(\d+\.?\d*|\.\d*)$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleFromUnitChange = (e) => setFromUnit(e.target.value);
  const handleToUnitChange = (e) => setToUnit(e.target.value);

  // Nuevos handlers para viewport
  const handleViewportWidthChange = (e) => {
    setViewportWidth(e.target.value);
  };
  const handleViewportHeightChange = (e) => {
    setViewportHeight(e.target.value);
  };

  const showToast = (message, type = "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "error" });
    }, 3000);
  };

  return {
    inputValue,
    fromUnit,
    toUnit,
    baseFontSize,
    viewportWidth,
    viewportHeight,
    result,
    units: UNITS,
    needsViewportInput,
    viewportLabel,
    toast,
    handleInputChange,
    handleFromUnitChange,
    handleToUnitChange,
    handleViewportWidthChange,
    handleViewportHeightChange,
    hideToast: () => setToast({ ...toast, show: false }),
  };
};
