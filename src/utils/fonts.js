// src/utils/fonts.js

export const GOOGLE_FONTS = [
  { value: "Inter", label: "Inter", api: "Inter:wght@300;400;500;600;700" },
  { value: "Roboto", label: "Roboto", api: "Roboto:wght@300;400;500;700" },
  {
    value: "Open Sans",
    label: "Open Sans",
    api: "Open+Sans:wght@300;400;600;700",
  },
  { value: "Lato", label: "Lato", api: "Lato:wght@300;400;700" },
  {
    value: "Poppins",
    label: "Poppins",
    api: "Poppins:wght@300;400;500;600;700",
  },
  {
    value: "Montserrat",
    label: "Montserrat",
    api: "Montserrat:wght@300;400;500;600;700",
  },
  { value: "system-ui", label: "System UI", api: null }, // Fuente por defecto del sistema
];

// Cache para no cargar la misma fuente múltiples veces
const loadedFonts = new Set();

/**
 * Carga una fuente de Google Fonts dinámicamente
 * @param {string} fontApi - El valor de la propiedad 'api' de GOOGLE_FONTS
 * @returns {Promise<void>}
 */
export const loadGoogleFont = (fontApi) => {
  // Si es system-ui o ya está cargada, no hacemos nada
  if (!fontApi || loadedFonts.has(fontApi)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${fontApi}&display=swap`;

    link.onload = () => {
      loadedFonts.add(fontApi);
      resolve();
    };

    link.onerror = (error) => {
      console.error("Failed to load Google Font:", fontApi, error);
      reject(error);
    };

    document.head.appendChild(link);
  });
};
