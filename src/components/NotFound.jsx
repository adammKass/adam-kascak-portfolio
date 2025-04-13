import React from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div
      className={`absolute top-0 left-0 w-full min-h-screen overflow-hidden bg-PWhite ${styles.cursorAuto}`}
    >
      <main
        className={`flex flex-col justify-center items-center gap-2 h-full ${styles.boxWidth} ${styles.paddingXA} mx-auto mb-52 mt-10 lg:mt-32 border-y border-PBlack text-center text-PBlack`}
      >
        <h1 className={`text-lg ${styles.cursorText}`}>
          {t(`notFound.error`)}
        </h1>
        <Link
          to={"/adam-kascak-portfolio"}
          className={`font-bold text-lg sm:text-xl text-PBlack hover:opacity-80 lg:text-2xl w-fit ${styles.focus} ${styles.cursorPointer}`}
        >
          {t(`notFound.return`)}
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
