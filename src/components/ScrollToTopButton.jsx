// src/components/ScrollToTopButton.jsx
"use client"; // <-- makes this a client component

import { arrowLeft } from "../assets";
import styles from "../style";

export default function ScrollToTopButton({ label }) {
  return (
    <button
      className="flex flex-col cursor-pointer self-center transition-all duration-300 ease-in-out hover:opacity-50 hover:-translate-y-3"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <img
        src={arrowLeft.src}
        alt="To top"
        className={`rotate-90 self-center ${styles.iconSize} ${styles.iconHover}`}
      />
      <p>{label}</p>
    </button>
  );
}
