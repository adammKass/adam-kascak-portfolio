import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { GraphicsLinks } from "../../constants";
import styles from "../../style";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useIsVisible } from "../../components";
import { Tab, TabGroup, TabList } from "@headlessui/react";

const DGraphics = () => {
  const navigate = useNavigate(); // Navigation handler
  const { t } = useTranslation(); // Translation hook

  return (
    <div
      className={`absolute top-0 left-0 w-full overflow-hidden bg-PWhite ${styles.cursorAuto}`}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <TabGroup
        as="main"
        id="main-content"
        className={`flex flex-col gap-8 md:gap-16 ${styles.boxWidth} ${styles.paddingXA} mx-auto mb-10 lg:mb-52 mt-10 lg:mt-32`}
      >
        <h1 className="sr-only">{t(`navbar.3dGraphics`)}</h1>
        <TabList className={`flex flex-col gap-8 md:gap-16`}>
          {/* Render Graphics Links */}
          {GraphicsLinks.map((link, index) => {
            const ref = useRef(null); // Create a ref for each container
            const isVisible = useIsVisible(ref); // Check visibility using the custom hook

            return (
              <Tab
                ref={ref} // Attach the ref to the container
                key={index}
                className={`flex flex-col md:flex-row justify-center items-center md:justify-start md:items-center gap-2 md:gap-11 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${styles.tabHover} ${styles.cursorPointer}`}
                onClick={() => window.open(link.href, "_blank")} // Open link in a new tab
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    window.open(link.href, "_blank");
                  }
                }}
              >
                {/* Thumbnail Image */}
                <div className="w-72 h-72 shrink-0 rounded-lg">
                  <img
                    src={link.thumb}
                    alt={t(`graphicsLinks.${link.id}.alt`)}
                    className="object-fill saturate-0 group-hover:saturate-100 rounded-lg"
                    loading="lazy"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col pt-2 md:pt-10 justify-center items-center md:justify-between md:items-start text-center md:text-start">
                  <div>
                    {/* Title */}
                    <h2>{t(`graphicsLinks.${link.id}.title`)}</h2>
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
      </TabGroup>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DGraphics;
