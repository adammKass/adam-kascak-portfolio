import React from "react";
import { Link } from "react-router-dom";
import styles from "../../style";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div
      className={`absolute top-0 left-0 w-full min-h-screen h-dvh overflow-hidden bg-PWhite`}
    >
      <main
        className={`h-full flex flex-col justify-center items-center gap-2 h-full ${styles.boxWidth} text-center text-PBlack`}
      >
        <h1 className={`${styles.headingMain} ${styles.paddingB}`}>
          {t(`notFound.error`)}
        </h1>

        <Link
          to={"/"}
          className={`max-w-prose font-bold uppercase text-center hover:opacity-50 ${styles.focus}`}
        >
          {t(`notFound.return`)}
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
