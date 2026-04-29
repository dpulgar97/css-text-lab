// src/hooks/useConverter.js
import { useState, useEffect, useCallback, useMemo } from "react";
import {
  convertUnit,
  formatResult,
  UNITS,
  DEFAULT_BASE_FONT_SIZE,
  DEFAULT_VIEWPORT_SIZE,
} from "../utils/convertions";

export const useConverter = () => {
  // ... (estados anteriores: inputValue, fromUnit, toUnit, baseFontSize, result, etc.)
  const [inputValue, setInputValue] = useState("16");
  const [fromUnit, setFromUnit] = useState("px");
  const [toUnit, setToUnit] = useState("rem");
  const [baseFontSize, setBaseFontSize] = useState(DEFAULT_BASE_FONT_SIZE);
  const [result, setResult] = useState(0);

  const [viewportSize, setViewportSize] = useState("");

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
    const vp = viewportSize === "" ? 0 : parseFloat(viewportSize);
    const converted = convertUnit(
      isNaN(value) ? 0 : value,
      fromUnit,
      toUnit,
      baseFontSize,
      isNaN(vp) ? DEFAULT_VIEWPORT_SIZE : vp,
    );
    setResult(formatResult(converted));
  }, [inputValue, fromUnit, toUnit, baseFontSize, viewportSize]);

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

  // Nuevo handler para viewport
  const handleViewportSizeChange = (e) => {
    setViewportSize(e.target.value);
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
    viewportSize,
    result,
    units: UNITS,
    needsViewportInput,
    viewportLabel,
    toast,
    handleInputChange,
    handleFromUnitChange,
    handleToUnitChange,
    handleViewportSizeChange,
    hideToast: () => setToast({ ...toast, show: false }),
  };
};
