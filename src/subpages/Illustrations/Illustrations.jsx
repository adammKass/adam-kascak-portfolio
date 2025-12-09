import React from "react";
import { IllustrationLinks } from "../../constants";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import styles from "../../style";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import { t } from "i18next";
import { motion } from "framer-motion";
import {
  containerFadeStagger,
  fadeUp,
  fadeUpSmall,
  staggerContainer,
  viewportOnce,
} from "../../constants/variants";

// Illustrations Subpage Component

const Illustrations = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`absolute top-0 left-0 w-full overflow-hidden bg-PWhite ${styles.cursorAuto}`}
    >
      <Navbar />

      <div
        as="main"
        id="main-content"
        className={`${styles.boxWidth} ${styles.paddingXA} ${styles.mainMarginY} mx-auto`}
      >
        <h1 className={`${styles.headingMain} ${styles.paddingB}`}>
          {t(`navbar.illustrations`)}
        </h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp(0.3)}
          className={`columns-xs mx-auto ${styles.mainMarginY}`}
        >
          {IllustrationLinks.map((ilu, index) => {
            return (
              <motion.div
                aria-label="Image fullscreen"
                key={ilu.id}
                className={`w-full opacity-60 mb-10 border-4 shadow-2xl rounded-sm border-PBlack cursor-pointer ${styles.illustHover} ${styles.focus} ${styles.cursorPointer}`}
                onClick={() =>
                  navigate(`/adam-kascak-portfolio/illustrations/${ilu.id}`)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate(`/adam-kascak-portfolio/illustrations/${ilu.id}`);
                  }
                }}
              >
                <picture>
                  <img
                    src={ilu.image.jpg}
                    alt={ilu.title}
                    className="w-full "
                    loading="lazy"
                  />
                </picture>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Illustrations;
