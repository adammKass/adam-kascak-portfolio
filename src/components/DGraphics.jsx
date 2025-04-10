import React, { useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { GraphicsLinks } from "../constants";
import styles from "../style";
import { useNavigate } from "react-router-dom";
import { useIsVisible } from "./isVisible";
import { useTranslation } from "react-i18next";

const DGraphics = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden bg-PWhite">
      <Navbar />
      <main
        id="main-content"
        className={`flex flex-col gap-8 md:gap-16 ${styles.boxWidth} ${styles.paddingXA} mx-auto mb-10 lg:mb-52 mt-10 lg:mt-32`}
      >
        {GraphicsLinks.map((link, index) => {
          const ref = useRef(null); // Create a ref for each container
          const isVisible = useIsVisible(ref); // Check visibility using the hook

          return (
            <article
              ref={ref} // Attach the ref to the container
              key={index}
              className={`flex flex-col md:flex-row justify-center items-center md:justify-start md:items-center gap-2 md:gap-11 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }  ${styles.tabHover}`}
              onClick={() => window.open(link.href, "_blank")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  window.open(link.href, "_blank");
                }
              }}
            >
              <div className="w-72 h-72 shrink-0 rounded-lg">
                <img
                  src={link.thumb}
                  alt={t(`graphicsLinks.${link.id}.alt`)}
                  className="object-fill saturate-0 group-hover:saturate-100 rounded-lg"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col pt-2 md:pt-10 justify-center items-center md:justify-between md:items-start text-center md:text-start">
                <div>
                  {/* Responsive title text */}
                  <h2>{t(`graphicsLinks.${link.id}.title`)}</h2>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-PBlack mt-2 mb-4"></span>
                  {/* Responsive paragraph text */}
                  <p>{t(`graphicsLinks.${link.id}.text`)}</p>
                </div>

                <a
                  aria-label="More about project on Artstation"
                  href={link.href}
                  className={`pb-10 pt-2 font-bold text-lg sm:text-xl lg:text-2xl text-PBlack group-hover:text-PBlack ${styles.focus}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(`graphicsLinks.more`)}
                </a>
              </div>
            </article>
          );
        })}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default DGraphics;
