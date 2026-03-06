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
  const [inputValue, setInputValue] = useState(16);
  const [fromUnit, setFromUnit] = useState("px");
  const [toUnit, setToUnit] = useState("rem");
  const [baseFontSize, setBaseFontSize] = useState(DEFAULT_BASE_FONT_SIZE);
  const [result, setResult] = useState(0);

  // Nuevo estado para viewport
  const [viewportSize, setViewportSize] = useState(DEFAULT_VIEWPORT_SIZE);

  // ... (estados de edición y toast)
  const [isBaseFontSizeEditable, setIsBaseFontSizeEditable] = useState(false);
  const [tempBaseFontSize, setTempBaseFontSize] = useState(
    DEFAULT_BASE_FONT_SIZE.toString(),
  );
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
    const converted = convertUnit(
      inputValue,
      fromUnit,
      toUnit,
      baseFontSize,
      viewportSize,
    );
    setResult(formatResult(converted));
  }, [inputValue, fromUnit, toUnit, baseFontSize, viewportSize]);

  useEffect(() => {
    calculate();
  }, [calculate]);

  // ... (handlers anteriores: handleInputChange, handleFromUnitChange, handleToUnitChange, etc.)
  const handleInputChange = (e) => {
    const value = parseFloat(e.target.value);
    setInputValue(isNaN(value) ? 0 : value);
  };

  const handleFromUnitChange = (e) => setFromUnit(e.target.value);
  const handleToUnitChange = (e) => setToUnit(e.target.value);

  // Nuevo handler para viewport
  const handleViewportSizeChange = (e) => {
    const value = parseFloat(e.target.value);
    setViewportSize(isNaN(value) ? DEFAULT_VIEWPORT_SIZE : value);
  };

  // ... (resto de funciones: toggleBaseFontSizeEdit, saveBaseFontSize, cancelBaseFontSizeEdit, showToast)
  const toggleBaseFontSizeEdit = () => {
    if (isBaseFontSizeEditable) {
      saveBaseFontSize();
    } else {
      setTempBaseFontSize(baseFontSize.toString());
      setIsBaseFontSizeEditable(true);
    }
  };

  const handleTempBaseFontSizeChange = (e) => {
    setTempBaseFontSize(e.target.value);
  };

  const saveBaseFontSize = () => {
    const trimmed = tempBaseFontSize.trim();
    if (trimmed === "" || isNaN(parseFloat(trimmed))) {
      showToast("Base font size cannot be empty", "error");
      return;
    }
    const value = parseFloat(trimmed);
    if (value < 8) {
      showToast("Minimum value is 8px", "error");
      return;
    }
    if (value > 100) {
      showToast("Maximum value is 100px", "error");
      return;
    }
    setBaseFontSize(value);
    setIsBaseFontSizeEditable(false);
  };

  const cancelBaseFontSizeEdit = () => {
    setTempBaseFontSize(baseFontSize.toString());
    setIsBaseFontSizeEditable(false);
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
    tempBaseFontSize,
    viewportSize,
    result,
    units: UNITS,
    isBaseFontSizeEditable,
    needsViewportInput,
    viewportLabel,
    toast,
    handleInputChange,
    handleFromUnitChange,
    handleToUnitChange,
    handleViewportSizeChange,
    toggleBaseFontSizeEdit,
    handleTempBaseFontSizeChange,
    cancelBaseFontSizeEdit,
    saveBaseFontSize,
    hideToast: () => setToast({ ...toast, show: false }),
  };
};
