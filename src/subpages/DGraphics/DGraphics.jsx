import { useTranslations } from "next-intl";

import { GraphicsLinks } from "../../constants";
import styles from "../../style";
import * as motion from "motion/react-client";
import {
  containerFadeStagger,
  fadeUp,
  fadeUpSmall,
  staggerContainer,
  viewportOnce,
} from "../../constants/variants";

// 3D Graphics Subpage Component

const DGraphics = () => {
  const t = useTranslations("graphicsLinks"); // Translation hook

  return (
    <div className={`flex flex-grow w-full bg-PWhite ${styles.cursorAuto}`}>
      {/* Main Content */}
      <motion.main
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp(0.3)}
        id="main-content"
        className={`flex flex-col ${styles.boxWidth} ${styles.paddingXA} mx-auto ${styles.mainMarginY}`}
      >
        <h1 className={`${styles.headingMain} ${styles.paddingB}`}>
          {t(`title`)}
        </h1>
        <div>
          <div className={`flex flex-col gap-4 md:gap-8 ${styles.mainMarginY}`}>
            {/* Render Graphics Links */}
            {GraphicsLinks.map((link, index) => {
              return (
                <a
                  href={link.href}
                  target="_blank"
                  key={index}
                  className={`flex flex-col md:flex-row justify-center items-center md:justify-start md:items-center gap-2 md:gap-11 ${styles.tabHover} ${styles.cursorPointer}`}
                >
                  {/* Thumbnail Image */}
                  <div className="w-72 h-72 shrink-0 rounded-lg">
                    <img
                      src={link.thumb.src}
                      alt={t(`${link.id}.alt`)}
                      className="object-fill saturate-0 group-hover:saturate-100 rounded-lg transition-all duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col pt-2 md:pt-10 justify-center items-center md:justify-between md:items-start text-center md:text-start">
                    <div>
                      {/* Title */}
                      <h2 className="uppercase">{t(`${link.id}.title`)}</h2>
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-PBlack mt-2 mb-4"></span>
                      {/* Description */}
                      <p>{t(`${link.id}.text`)}</p>
                    </div>

                    {/* External Link */}
                    <p
                      className={`pb-10 pt-2 font-bold text-lg sm:text-xl lg:text-2xl text-PBlack group-hover:text-PBlack ${styles.focus} ${styles.cursorPointer}`}
                    >
                      {t(`more`)}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default DGraphics;
