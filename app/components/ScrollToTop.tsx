"use client";

import { useEffect } from "react";

/**
 * Scrolls the window to top when the component mounts.
 * Use on project detail (and similar) pages so "Next project" opens at the top, especially on mobile.
 */
export function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}
