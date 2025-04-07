import React from "react";
import { DesignLinks } from "../constants";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import styles from "../style";
import { useTranslation } from "react-i18next";

const GraphicDesign = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="absolute top-0 left-0 w-full  min-h-screen overflow-hidden bg-PWhite ">
      <Navbar />
      <div
        className={`flex flex-col gap-8 md:gap-16 ${styles.boxWidth} ${styles.paddingXA} mx-auto mb-52 mt-10 lg:mt-32 min-h-[480px]`}
      >
        {DesignLinks.map((link, index) => (
          <div
            className={`flex flex-col md:flex-row justify-center items-center md:justify-start md:items-center gap-2 md:gap-11 ${styles.tabHover}`}
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
                alt={t(`designLinks.${link.id}.title`)}
                className="object-fill saturate-0 rounded-lg"
              />
            </div>

            <div className="flex flex-col pt-2 md:pt-10 justify-center items-center md:justify-between md:items-start text-center md:text-start">
              <div>
                <h3 className="font-extralight text-3xl sm:text-4xl lg:text-5xl text-PBlack">
                  {t(`designLinks.${link.id}.title`)}
                </h3>
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-PBlack mb-4 mt-2"></span>
                <p className="text-base sm:text-lg lg:text-xl text-PBlack">
                  {t(`designLinks.${link.id}.textShort`)}
                </p>
              </div>
              <Link
                to={`/graphicdesign/${link.id}`}
                className="pb-10 pt-2 font-bold text-lg sm:text-xl lg:text-2xl group-hover:text-PBlack text-PBlack"
              >
                {t(`designLinks.more`)}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default GraphicDesign;
