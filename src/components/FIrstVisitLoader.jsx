"use client";

import { useEffect, useState } from "react";
import { sign } from "../assets";
import { motion, AnimatePresence } from "motion/react";

export default function FirstVisitLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      sessionStorage.setItem("hasVisited", "true");
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 2000);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-PWhite z-[999]"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100vh", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
        >
          <div className="flex flex-col items-center">
            <img
              src={sign.src}
              alt="načítavanie..."
              className="w-[58px] h-[58px] mb-4 dark:invert animate-pulse"
            />
            <div className="w-24 h-1 bg-PGrey overflow-hidden">
              <div className="h-full bg-PBlack animate-pulse" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
