"use client";

import { useEffect, useState } from "react";

// Utility hook to determine if a component is visible in the viewport

function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.intersectionRatio >= 0.25); // Adjust value to control threshold
      },
      { threshold: [0.25] },
    );

    observer.observe(ref.current); // Observe the DOM element

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, [ref]);

  return isIntersecting;
}

export default useIsVisible;
