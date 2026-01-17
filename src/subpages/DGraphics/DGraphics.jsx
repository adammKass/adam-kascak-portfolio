import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { GraphicsLinks } from "../../constants";
import styles from "../../style";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import { motion } from "framer-motion";
import {
  containerFadeStagger,
  fadeUp,
  fadeUpSmall,
  staggerContainer,
  viewportOnce,
} from "../../constants/variants";

// 3D Graphics Subpage Component

const DGraphics = () => {
  const navigate = useNavigate(); // Navigation handler
  const { t } = useTranslation(); // Translation hook

  return (
    <div
      className={`absolute top-0 left-0 w-full bg-PWhite ${styles.cursorAuto}`}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <TabGroup
        as="main"
        id="main-content"
        className={`flex flex-col ${styles.boxWidth} ${styles.paddingXA} mx-auto ${styles.mainMarginY}`}
      >
        <h1 className={`${styles.headingMain} ${styles.paddingB}`}>
          {t(`navbar.3dGraphics`)}
        </h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp(0.3)}
        >
          <TabList
            className={`flex flex-col gap-4 md:gap-8 ${styles.mainMarginY}`}
          >
            {/* Render Graphics Links */}
            {GraphicsLinks.map((link, index) => {
              return (
                <Tab
                  key={index}
                  className={`flex flex-col md:flex-row justify-center items-center md:justify-start md:items-center gap-2 md:gap-11 ${styles.tabHover} ${styles.cursorPointer}`}
                  onClick={() => window.open(link.href, "_blank")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      window.open(link.href, "_blank");
                    }
                  }}
                >
                  {/* Thumbnail Image */}
                  <div className="w-72 h-72 shrink-0 rounded-lg">
                    <img
                      src={link.thumb.src}
                      alt={t(`graphicsLinks.${link.id}.alt`)}
                      className="object-fill saturate-0 group-hover:saturate-100 rounded-lg"
                      loading="lazy"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col pt-2 md:pt-10 justify-center items-center md:justify-between md:items-start text-center md:text-start">
                    <div>
                      {/* Title */}
                      <h2 className="uppercase">
                        {t(`graphicsLinks.${link.id}.title`)}
                      </h2>
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-PBlack mt-2 mb-4"></span>
                      {/* Description */}
                      <p>{t(`graphicsLinks.${link.id}.text`)}</p>
                    </div>

                    {/* External Link */}
                    <p
                      className={`pb-10 pt-2 font-bold text-lg sm:text-xl lg:text-2xl text-PBlack group-hover:text-PBlack ${styles.focus} ${styles.cursorPointer}`}
                    >
                      {t(`graphicsLinks.more`)}
                    </p>
                  </div>
                </Tab>
              );
            })}
          </TabList>
        </motion.div>
      </TabGroup>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DGraphics;
