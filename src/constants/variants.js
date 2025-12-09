// src/motion/variants.js

// Fade + slide up for entire items (cards, sections, images, etc.)
export const fadeUp = (delay = 0, y = 40) => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  },
});

// Stagger children inside a parent container
export const staggerContainer = (stagger = 0.15, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

// Simple fade-up for small text elements
export const fadeUpSmall = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

// Reusable viewport settings
export const viewportOnce = {
  once: true,
  margin: "-100px",
};

export const containerFadeStagger = ({
  delay = 0,
  y = 40,
  stagger = 0.15,
  delayChildren = 0,
} = {}) => ({
  hidden: {
    opacity: 0,
    y,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
      staggerChildren: stagger,
      delayChildren,
    },
  },
});
