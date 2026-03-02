"use client";

import { useEffect } from "react";

/**
 * Applies deferred font/stylesheet links so they don't block first paint.
 * Call once after mount to switch media="print" -> "all" for data-defer-css links.
 */
export function DeferFonts() {
  useEffect(() => {
    document
      .querySelectorAll<HTMLLinkElement>('link[data-defer-css="true"]')
      .forEach((link) => {
        link.media = "all";
      });
  }, []);
  return null;
}
