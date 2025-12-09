import { useTranslation } from "react-i18next";
import { Footer, Navbar } from "../../components";
import styles from "../../style";
import { portrait } from "../../assets";
import { experienceTitles, navLinksContact, services } from "../../constants";
import { Link } from "react-router-dom";
import {
  containerFadeStagger,
  fadeUp,
  fadeUpSmall,
  staggerContainer,
  viewportOnce,
} from "../../constants/variants";
import { motion } from "framer-motion";

// About Me Subpage Component

const About = () => {
  const { t } = useTranslation();
  return (
    <div
      className={`absolute top-0 left-0 w-full bg-PWhite ${styles.cursorAuto}`}
    >
      <Navbar />
      <main
        id="main-content"
        className={`flex flex-col ${styles.boxWidth} ${styles.paddingXA} mt-8 lg:mt-0  mx-auto`}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp(0.3)}
          className={`grid grid-cols-2 gap-x-8 pb-8 lg:pb-16`}
        >
          <section className="col-span-full md:col-span-1 flex flex-col gap-4 md:gap-8 text-PBlack justify-center text-center md:text-start ">
            <h1 className={`${styles.headingMain} ${styles.paddingB}`}>
              {t(`navbar.aboutMe`)}
            </h1>
            <p className={` font-bold ${styles.cursorText} `}>
              {t(`about.intro`)}
            </p>
            <p className={` ${styles.cursorText}`}>{t(`about.hobbies`)}</p>
            <section className="flex flex-col gap-8 mt-6 pt-6 border-t-2 border-PBlack items-center md:items-start text-center md:text-start">
              <h2 className={`text-2xl uppercase md:text-3xl font-bold`}>
                {t(`about.experienceTitle`)}
              </h2>

              <div
                variants={staggerContainer(0.3)}
                className="flex flex-col gap-4 max-w-prose"
              >
                {experienceTitles.map(({ id }) => {
                  return (
                    <article variants={staggerContainer(0.5)}>
                      <h3
                        variants={fadeUpSmall}
                        className="text-lg lg:text-2xl uppercase font-bold"
                      >
                        {t(`about.experience.${id}.company`)}
                      </h3>
                      <div
                        variants={fadeUpSmall}
                        className="flex flex-col sm:flex-row gap-0 sm:gap-8 max-w-prose
                    justify-center md:justify-start"
                      >
                        <span>{t(`about.experience.${id}.role`)}</span>
                        <span>{t(`about.experience.${id}.time`)}</span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </section>
          <div className="col-span-full md:col-span-1 aspect-square rounded-lg mx-auto self-center max-w-3xl dark:brightness-[0.7]">
            <img
              src={portrait}
              alt={t(`about.alt`)}
              className="object-fill rounded-lg"
              loading="lazy"
            />
          </div>
        </motion.div>
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

export default About;
