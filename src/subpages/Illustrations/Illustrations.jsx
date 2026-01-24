import { useTranslations } from "next-intl";
import { Link } from "../../i18n/navigation";
import { IllustrationLinks } from "../../constants";

import styles from "../../style";

import * as motion from "motion/react-client";
import {
  containerFadeStagger,
  fadeUp,
  fadeUpSmall,
  staggerContainer,
  viewportOnce,
} from "../../constants/variants";
import Image from "next/image";

// Illustrations Subpage Component

const Illustrations = () => {
  const t = useTranslations("illustrationLinks");
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
        className={`${styles.boxWidth} ${styles.paddingXA} ${styles.mainMarginY} mx-auto`}
      >
        <h1 className={`${styles.headingMain} ${styles.paddingB}`}>
          {t(`title`)}
        </h1>
        <div className={`columns-xs mx-auto ${styles.mainMarginY}`}>
          {IllustrationLinks.map((ilu, index) => {
            return (
              <Link
                href={`/illustrations/${ilu.id}`}
                aria-label="Image fullscreen"
                role="button"
                key={ilu.id}
                className={`w-full opacity-60 my-10 ${styles.illustHover} ${styles.focus} ${styles.cursorPointer}`}
              >
                <Image
                  src={ilu.image.jpg}
                  alt={ilu.id}
                  width={ilu.image.jpg.width}
                  height={ilu.image.jpg.height}
                  className="w-full border-2 rounded-lg border-PBlack shadow-2xl"
                />
              </Link>
            );
          })}
        </div>
      </motion.main>
    </div>
  );
};

export default Illustrations;
