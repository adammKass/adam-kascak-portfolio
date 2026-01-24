import { useTranslations } from "next-intl";
import { DesignLinks } from "../../constants";
import { Link } from "../../i18n/navigation";
import styles from "../../style";
import * as motion from "motion/react-client";
import {
  containerFadeStagger,
  fadeUp,
  fadeUpSmall,
  staggerContainer,
  viewportOnce,
} from "../../constants/variants";

// Graphic Design Subpage Component

const GraphicDesign = () => {
  const t = useTranslations("designLinks");
  return (
    <div
      className={`flex flex-grow w-full overflow-hidden bg-PWhite ${styles.cursorAuto}`}
    >
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
            {DesignLinks.map((link, index) => (
              <Link
                className={`group flex flex-col md:flex-row justify-center items-center md:justify-start md:items-center gap-2 md:gap-11 ${styles.tabHover} ${styles.cursorPointer}`}
                key={index}
                href={link.id}
              >
                <div className="w-72 h-72 shrink-0 rounded-lg">
                  <img
                    src={link.thumb.src}
                    alt={t(`${link.id}.alt`)}
                    className="object-fill saturate-0 group-hover:saturate-100 rounded-lg"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col pt-2 md:pt-10 justify-center items-center md:justify-between md:items-start text-center md:text-start">
                  <div>
                    <h2 className="uppercase">{t(`${link.id}.title`)}</h2>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-PBlack mb-4 mt-2"></span>
                    <p>{t(`${link.id}.textShort`)}</p>
                  </div>
                  <p
                    className={`pb-10 pt-2 font-bold text-lg sm:text-xl lg:text-2xl group-hover:text-PBlack text-PBlack ${styles.focus} ${styles.cursorPointer}`}
                  >
                    {t(`more`)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default GraphicDesign;
