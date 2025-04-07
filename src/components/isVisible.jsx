import { useEffect, useState } from "react";

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return; // Ensure ref.current is not null

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.intersectionRatio >= 0.5); // Trigger only if 75% is visible
      },
      { threshold: [0.5] } // Set threshold to 75%
    );

    observer.observe(ref.current); // Observe the DOM element

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, [ref]);

  return isIntersecting;
}
