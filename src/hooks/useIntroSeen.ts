"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the cinematic intro should be skipped
 * (already shown this session). Wraps sessionStorage in try/catch
 * for SSR safety and privacy-mode browsers.
 */
export function useIntroSeen() {
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("intro_seen") === "1") {
        setSeen(true);
      }
    } catch {
      // sessionStorage unavailable — show intro anyway
    }
  }, []);

  const markSeen = () => {
    setSeen(true);
    try {
      sessionStorage.setItem("intro_seen", "1");
    } catch {
      // noop
    }
  };

  return { seen, markSeen };
}
