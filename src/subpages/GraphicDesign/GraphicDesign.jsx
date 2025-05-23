import React from "react";
import { DesignLinks } from "../../constants";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../style";
import { useTranslation } from "react-i18next";
import { Tab, TabGroup, TabList } from "@headlessui/react";

const GraphicDesign = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div
      className={`absolute top-0 left-0 w-full  min-h-screen overflow-hidden bg-PWhite ${styles.cursorAuto}`}
    >
      <Navbar />
      <TabGroup
        as="main"
        id="main-content"
        className={`flex flex-col ${styles.boxWidth} ${styles.paddingXA} mx-auto mb-52 mt-10 lg:mt-32 min-h-[480px]`}
      >
        <h1 className="sr-only">{t(`navbar.graphicDesign`)}</h1>
        <TabList className={`flex flex-col gap-8 md:gap-16`}>
          {DesignLinks.map((link, index) => (
            <Tab
              className={`flex flex-col md:flex-row justify-center items-center md:justify-start md:items-center gap-2 md:gap-11 ${styles.tabHover} ${styles.cursorPointer}`}
              key={index}
              onClick={() => navigate(link.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  navigate(link.id);
                }
              }}
            >
              <div className="w-72 h-72 shrink-0 rounded-lg">
                <img
                  src={link.thumb}
                  alt={t(`designLinks.${link.id}.alt`)}
                  className="object-fill saturate-0 rounded-lg"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col pt-2 md:pt-10 justify-center items-center md:justify-between md:items-start text-center md:text-start">
                <div>
                  <h2>{t(`designLinks.${link.id}.title`)}</h2>
                  <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-PBlack mb-4 mt-2"></span>
                  <p>{t(`designLinks.${link.id}.textShort`)}</p>
                </div>
                <p
                  className={`pb-10 pt-2 font-bold text-lg sm:text-xl lg:text-2xl group-hover:text-PBlack text-PBlack ${styles.focus} ${styles.cursorPointer}`}
                >
                  {t(`designLinks.more`)}
                </p>
              </div>
            </Tab>
          ))}
        </TabList>
      </TabGroup>
      <Footer></Footer>
    </div>
  );
};

export default GraphicDesign;
