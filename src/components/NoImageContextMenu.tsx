"use client";

import { useEffect } from "react";

// Blocks right-click "Save Image As" on <img> elements only — everything
// else on the page keeps its normal context menu. Deterrent, not DRM.
export default function NoImageContextMenu() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.tagName === "IMG") {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", handler);
    return () => document.removeEventListener("contextmenu", handler);
  }, []);

  return null;
}
