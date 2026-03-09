// src/hooks/useViewportPreview.js
import { useState, useEffect, useCallback } from "react";
import { loadGoogleFont, GOOGLE_FONTS } from "../utils/fonts";

export const useViewportPreview = (initialClamp = "") => {
  const [selectedFont, setSelectedFont] = useState("Inter");
  const [clampValue, setClampValue] = useState(initialClamp);

  // Cargar fuente cuando cambia
  useEffect(() => {
    const font = GOOGLE_FONTS.find((f) => f.value === selectedFont);
    if (font?.api) {
      loadGoogleFont(font.api).catch(console.error);
    }
  }, [selectedFont]);

  const handleFontChange = useCallback((e) => {
    setSelectedFont(e.target.value);
  }, []);

  const updateClamp = useCallback((newClamp) => {
    setClampValue(newClamp);
  }, []);

  // Estilo directo con el clamp
  const previewStyle = {
    fontSize: clampValue || "1rem",
    fontFamily:
      selectedFont === "system-ui"
        ? "system-ui, -apple-system, sans-serif"
        : selectedFont,
  };

  return {
    selectedFont,
    clampValue,
    fonts: GOOGLE_FONTS,
    previewStyle,
    handleFontChange,
    updateClamp,
  };
};
