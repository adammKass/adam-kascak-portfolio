import { useTranslation } from "react-i18next";
import { Footer, Navbar } from "../../components";

import styles from "../../style";
import {
  experienceTitles,
  faqs,
  navLinksContact,
  services,
} from "../../constants";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  containerFadeStagger,
  fadeUp,
  fadeUpSmall,
  staggerContainer,
  viewportOnce,
} from "../../constants/variants";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Fragment } from "react";

const Services = () => {
  const { t } = useTranslation();
  return (
    <div
      className={`absolute top-0 left-0 w-full bg-PWhite ${styles.cursorAuto}`}
    >
      <Navbar />
      <main
        id="main-content"
        className={`flex flex-col ${styles.boxWidth} ${styles.paddingXA} mx-auto ${styles.mainMarginY}`}
      >
        <h1 className={`${styles.headingMain} ${styles.paddingB}`}>
          {t(`services.title`)}
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
                        src={image}
                        alt={t(`services.services.${id}.title`)}
                        className="shrink-0 p-4 dark:brightness-[0.7]"
                        width={120}
                        height={120}
                        variants={fadeUpSmall}
                      />

                      <motion.h3
                        className="text-3xl font-bold uppercase max-w-[18ch] text-center sm:text-left"
                        variants={fadeUpSmall}
                      >
                        {t(`services.services.${id}.title`)}
                      </motion.h3>
                    </motion.div>

                    <motion.p
                      className="max-w-prose font-medium uppercase text-center sm:text-left"
                      variants={fadeUpSmall}
                    >
                      {t(`services.services.${id}.areas`)}
                    </motion.p>

                    <motion.p
                      className="max-w-prose text-center sm:text-left"
                      variants={fadeUpSmall}
                    >
                      {t(`services.services.${id}.about`)}
                    </motion.p>
                  </motion.article>
                );
              })}
            </div>
          </section>
          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp(0.3)}
            className="col-span-full lg:col-span-1 mt-6 lg:mt-0 pt-6 lg:pt-0 lg:pl-12 border-t-2 lg:border-l-2 lg:border-t-0 border-PBlack flex flex-col gap-4"
          >
            <h2 className="font-bold text-center lg:text-left">
              {t(`faqs.title`)}
            </h2>
            <motion.div className="w-full space-y-2">
              {faqs.map((faq, index) => (
                <Disclosure key={faq.id} as="div">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="w-full border-b pb-2 border-PBlack text-left font-medium uppercase">
                        {t(`faqs.questions.${faq.id}.question`)}
                      </DisclosureButton>

                      <AnimatePresence initial={false}>
                        {open && (
                          <DisclosurePanel static as={Fragment}>
                            <motion.div
                              initial={{ opacity: 0, y: -12 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -12 }}
                              transition={{ duration: 0.2, ease: "easeInOut" }}
                              className="py-2 text-sm text-PGreyDark"
                            >
                              {t(`faqs.questions.${faq.id}.answer`)}
                            </motion.div>
                          </DisclosurePanel>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </Disclosure>
              ))}
            </motion.div>
          </motion.aside>
        </div>
        <motion.div
          className="flex flex-col justify-center items-center gap-2 py-12 border-t-2 border-PBlack text-center "
          variants={containerFadeStagger({ delay: 0.1, stagger: 0.2 })}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p>{t(`services.getInTouch`)}</p>
          <Link
            to={navLinksContact.to}
            className={`rounded-md bg-PBlack px-6 py-2 text-PWhite transition-colors duration-300 hover:bg-PGrey w-fit focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-PBlack ${styles.focus} ${styles.cursorPointer} uppercase font-medium`}
          >
            {t(`services.getInTouchButton`)}
          </Link>
        </motion.div>
      </main>
      <Footer></Footer>
    </div>
  );
};
export default Services;
