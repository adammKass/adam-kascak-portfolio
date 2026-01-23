"use client";

import { useEffect, useState } from "react";
import { moon, sun } from "../assets";
import styles from "../style";
import useDarkMode from "./utils/useDarkMode";

const DarkModeSwitcher = () => {
  const [isDark, setIsDark] = useDarkMode();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null; // Don't render until client has mounted
  return (
    <div className="flex items-center gap-2">
      <img
        src={sun.src}
        alt="light mode"
        className="h-6 w-6 dark:brightness-[4] dark:saturate-0"
      />
      <button
        aria-label="Toggle dark mode"
        onClick={() => setIsDark(!isDark)}
        className={`relative inline-flex h-6 w-12 items-center rounded-full bg-PGreyDark transition`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-PGrey transition ${
            styles.cursorPointer
          } ${isDark ? "translate-x-6" : "translate-x-1"}`}
        />
      </button>
      <img
        src={moon.src}
        alt="dark mode"
        className="h-6 w-6 dark:brightness-[4] dark:saturate-0"
      />
    </div>
  );
};
export default DarkModeSwitcher;
