import { useTranslations } from "next-intl";
import styles from "../../style";
import {
  experienceTitles,
  faqs,
  navLinksContact,
  services,
} from "../../constants";
import { Link } from "../../i18n/navigation";
import * as motion from "motion/react-client";
import { AnimatePresence } from "framer-motion";
import {
  containerFadeStagger,
  fadeUp,
  fadeUpSmall,
  staggerContainer,
  viewportOnce,
} from "../../constants/variants";
import Faqs from "./Faqs";

const Services = () => {
  const t = useTranslations("services");
  return (
    <div className={`flex flex-grow w-full bg-PWhite ${styles.cursorAuto}`}>
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
        <div className={`grid grid-cols-3 gap-x-8 ${styles.mainMarginY}`}>
          <section className="col-span-full lg:col-span-2  flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-14">
              {services.map(({ id, image }, index) => {
                return (
                  <motion.article
                    key={id}
                    className="flex flex-col justify-center gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp(index * 0.3)}
                  >
                    {/* Inner staggered content */}
                    <motion.div
                      className="flex flex-col sm:flex-row items-center gap-8"
                      variants={staggerContainer(0.3)}
                    >
                      <motion.img
                        src={image.src}
                        alt={t(`services.${id}.title`)}
                        className="shrink-0 p-4 dark:brightness-[0.7]"
                        width={120}
                        height={120}
                        variants={fadeUpSmall}
                      />

                      <motion.h3
                        className="text-3xl font-bold uppercase max-w-[18ch] text-center sm:text-left"
                        variants={fadeUpSmall}
                      >
                        {t(`services.${id}.title`)}
                      </motion.h3>
                    </motion.div>

                    <motion.p
                      className="max-w-prose font-medium uppercase text-center sm:text-left"
                      variants={fadeUpSmall}
                    >
                      {t(`services.${id}.areas`)}
                    </motion.p>

                    <motion.p
                      className="max-w-prose text-center sm:text-left"
                      variants={fadeUpSmall}
                    >
                      {t(`services.${id}.about`)}
                    </motion.p>
                  </motion.article>
                );
              })}
            </div>
          </section>
          <Faqs />
        </div>
        <motion.div
          className="flex flex-col justify-center items-center gap-2 py-12 border-t-2 border-PBlack text-center "
          variants={containerFadeStagger({ delay: 0.1, stagger: 0.2 })}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p>{t(`getInTouch`)}</p>
          <Link
            href={navLinksContact.to}
            className={`rounded-md bg-PBlack px-6 py-2 text-PWhite transition-colors duration-300 hover:bg-PGrey w-fit focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-PBlack ${styles.focus} ${styles.cursorPointer} uppercase font-medium`}
          >
            {t(`getInTouchButton`)}
          </Link>
        </motion.div>
      </motion.main>
    </div>
  );
};
export default Services;
