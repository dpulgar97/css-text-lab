import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "instant", block: "start" });
          }, 100);
        }
      }
    };

    scrollToHash();

    const timeout = setTimeout(scrollToHash, 300);
    return () => clearTimeout(timeout);
  }, [location]);
};

export default useScrollToHash;
