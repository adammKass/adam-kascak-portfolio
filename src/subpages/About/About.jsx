import React from "react";

import { useTranslation } from "react-i18next";
import { Footer, Navbar } from "../../components";
import styles from "../../style";
import { artstation, linkedin, profile } from "../../assets";

const About = () => {
  const { t } = useTranslation();
  return (
    <div
      className={`absolute top-0 left-0 w-full min-h-screen overflow-hidden bg-PWhite ${styles.cursorAuto}`}
    >
      <Navbar />
      <main
        id="main-content"
        className={`flex flex-col md:flex-row gap-2 md:gap-10 ${styles.boxWidth} ${styles.paddingXA} mx-auto mb-10 lg:mb-44 mt-10 lg:mt-32 justify-center items-center md:justify-start md:items-start`}
      >
        <h1 className="sr-only">{t(`navbar.aboutMe`)}</h1>
        <div className="w-96 h-w-96 px-4 lg:px-0 shrink-0 rounded-lg ">
          <img
            src={profile}
            alt={t(`about.alt`)}
            className="object-fill saturate-0 rounded-lg"
            loading="lazy"
          />
        </div>
        <section className="flex flex-col justify-between py-4 md:py-16 text-PBlack">
          <p className={` font-bold ${styles.cursorText} `}>
            {t(`about.intro`)}
            <br />
            <br />
          </p>
          <p className={` mb-4 ${styles.cursorText}`}>{t(`about.hobbies`)}</p>
          <div className="flex flex-col justify-center border-t border-PBlack">
            <a
              href="mailto:adam.kascak@protonmail.com"
              className={`text-center mb-2 mt-4 hover:opacity-50 transition-all duration-300 ease-in-out ${styles.focus} ${styles.cursorPointer}`}
            >
              adam.kascak@protonmail.com
            </a>

            <div className="flex flex-row justify-center gap-12">
              <a href="https://www.artstation.com/adamkascak1">
                <img
                  src={artstation}
                  alt="Artstation profile"
                  className={`w-10 h-10 saturate-0 hover:saturate-100 transition-all duration-300 ease-in-out ${styles.focus} ${styles.cursorPointer}`}
                />
              </a>

              <a
                href="https://www.artstation.com/adamkascak1"
                className="flex items-center"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn profile"
                  className={`w-7 h-6 saturate-0 hover:saturate-100 transition-all duration-300 ease-in-out ${styles.focus} ${styles.cursorPointer}`}
                />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default About;
