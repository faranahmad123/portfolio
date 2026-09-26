"use client";

import { useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "portfolio_intro_seen";

/**
 * Hook to manage whether the full-screen intro sequence should play.
 * - Tracks session state via sessionStorage (key: "portfolio_intro_seen").
 * - Wraps all storage access in try/catch to safely handle strict privacy modes.
 * - Respects prefers-reduced-motion: skips straight to hero if user prefers reduced motion.
 * - Resolves on mount (useEffect) to prevent hydration mismatches between SSR and client.
 */
export function useIntroSeen() {
  const [isReady, setIsReady] = useState(false);
  const [shouldShowIntro, setShouldShowIntro] = useState(false);

  useEffect(() => {
    try {
      // 1. Accessibility: Check prefers-reduced-motion
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // 2. Session check: Has intro played in this session?
      const seen = sessionStorage.getItem(STORAGE_KEY) === "true";

      if (seen || prefersReducedMotion) {
        setShouldShowIntro(false);
      } else {
        setShouldShowIntro(true);
      }
    } catch {
      // Safe fallback: if sessionStorage is disabled/blocked in privacy mode, show intro
      setShouldShowIntro(true);
    } finally {
      setIsReady(true);
    }
  }, []);

  const markSeen = useCallback(() => {
    setShouldShowIntro(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Safe fallback: ignore write failure in restricted environments
    }
  }, []);

  return {
    isReady,
    shouldShowIntro,
    markSeen,
    // Backwards-compatibility alias
    seen: !shouldShowIntro,
  };
}
