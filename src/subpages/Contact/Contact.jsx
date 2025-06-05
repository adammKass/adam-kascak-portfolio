import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { artstation, behance, linkedin } from "../../assets";
import styles from "../../style";
import { t } from "i18next";
const Contact = () => {
  return (
    <div
      className={`absolute top-0 left-0 flex flex-col w-full min-h-screen overflow-hidden bg-PWhite ${styles.cursorAuto}`}
    >
      <Navbar />
      <main
        id="main-content"
        className={`flex-grow flex flex-col justify-center items-center gap-2 h-full ${styles.boxWidth} ${styles.paddingXA} mx-auto mt-10 mb-10 lg:mb-0 lg:mt-0 text-PBlack`}
      >
        <h1 className="sr-only">{t(`navbar.contact`)}</h1>
        <a
          href="mailto:adam.kascak@protonmail.com"
          className={`text-center mb-2 mt-4 hover:opacity-80 transition-all duration-300 ease-in-out ${styles.focus} ${styles.cursorPointer}`}
        >
          adam.kascak@protonmail.com
        </a>

        <div className="flex flex-row justify-center gap-12">
          <a
            href="https://www.artstation.com/adamkascak1"
            className="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={artstation}
              alt="artstation"
              className={`w-10 h-10 saturate-0 hover:saturate-100 transition-all duration-300 ease-in-out ${styles.focus} ${styles.cursorPointer}`}
            />
          </a>

          <a
            href="www.linkedin.com/in/adam-kascak-2006b3350"
            className="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="linkedin"
              className={`w-7 h-6 saturate-0 hover:saturate-100 transition-all duration-300 ease-in-out ${styles.focus} ${styles.cursorPointer}`}
            />
          </a>
          <a
            href="https://www.behance.net/adamkascak#"
            className="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={behance}
              alt="behance"
              className={`w-7 h-6 saturate-0 hover:saturate-100 transition-all duration-300 ease-in-out ${styles.focus} ${styles.cursorPointer}`}
            />
          </a>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
