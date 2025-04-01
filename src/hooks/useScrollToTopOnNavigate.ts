import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to allow page content to load
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);
};
