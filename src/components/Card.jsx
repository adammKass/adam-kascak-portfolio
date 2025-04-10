import { Tab, TabGroup, TabList } from "@headlessui/react";
import {
  AboutMeOff,
  AboutMeOn,
  GraphicDesignOff,
  GraphicDesignOn,
  IllustrationsOff,
  IllustrationsOn,
} from "../assets";
import { useNavigate } from "react-router-dom";
import styles from "../style";
import { useRef } from "react";
import { useIsVisible } from "./isVisible";
import { useTranslation } from "react-i18next";

const Card = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <TabGroup>
      <TabList
        as="main"
        id="main-content"
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 h-full mb-10 lg:mb-[20vh] ${styles.boxWidth} ${styles.paddingXA} mx-auto mt-10 lg:mt-[20vh]`}
      >
        {/* 3D Graphics Tab */}
        <Tab
          aria-label="3D Graphics Tab"
          className={`group flex-1 flex-col justify-center items-center ${styles.cards} ${styles.transitionTransform} ${styles.focus}`}
          onClick={() => navigate(`/adam-kascak-portfolio/dgraphics`)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate(`/adam-kascak-portfolio/dgraphics`);
            }
          }}
        >
          {({ hover }) => {
            const ref = useRef(null);
            const isVisible = useIsVisible(ref);
            return (
              <>
                <div className="relative mx-4 mt-4 mb-4 bg-PGrey py-20 flex items-center justify-center h-80 transition-transform duration-300 ease-in-out">
                  <div className="scene">
                    <div
                      className={`cube transition-transform duration-500 ease-in-out`}
                    >
                      <div
                        className={`hidden lg:block face front transition-colors duration-300 ease-in-out ${
                          hover ? "bg-[#DADADA]" : "bg-[#A6a6a6]"
                        }`}
                      ></div>
                      <div
                        className={`lg:hidden face front transition-colors duration-300 ease-in-out bg-[#DADADA]`}
                      ></div>
                      <div className="face back"></div>
                      <div className="face right"></div>
                      <div
                        className={`hidden lg:block face left transition-colors duration-300 ease-in-out  ${
                          hover ? "bg-[#000000]" : "bg-[#A6a6a6]"
                        }`}
                      ></div>
                      <div
                        className={`lg:hidden face left transition-colors duration-300 ease-in-out bg-[#000000]`}
                      ></div>
                      <div
                        className={`hidden lg:block face top transition-colors duration-300 ease-in-out ${
                          hover ? "bg-[#ffffff]" : "bg-[#A6a6a6]"
                        }`}
                      ></div>
                      <div
                        className={`lg:hidden face top transition-colors duration-300 ease-in-out bg-[#ffffff]`}
                      ></div>
                      <div className="face bottom"></div>
                    </div>
                  </div>
                </div>
                <h5 className="mb-4 text-center text-PBlack">
                  {t(`home.3dGraphics`)}
                </h5>
              </>
            );
          }}
        </Tab>

        {/* Graphic Design Tab */}
        <Tab
          aria-label="Graphic Design Tab"
          className={`group flex-1 flex-col justify-center items-center ${styles.cards} ${styles.transitionTransform} ${styles.focus}`}
          onClick={() => navigate(`/adam-kascak-portfolio/graphicdesign`)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate(`/adam-kascak-portfolio/graphicdesign`);
            }
          }}
        >
          {({ hover }) => {
            const ref = useRef(null);
            const isVisible = useIsVisible(ref);

            return (
              <>
                <div
                  ref={ref}
                  className="relative mx-4 mt-4 mb-4 bg-PGrey py-20 flex items-center justify-center h-80 transition-transform duration-300 ease-in-out"
                >
                  {/* For smaller screens, change image based on visibility */}
                  <img
                    src={GraphicDesignOn}
                    alt="Graphic Design - Highlighted state"
                    className={`lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 transition-opacity duration-300 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <img
                    src={GraphicDesignOff}
                    alt="Graphic Design - Default state"
                    className={`lg:hidden dark:brightness-[0.7] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 transition-opacity duration-300 ${
                      isVisible ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* For larger screens, change image based on hover */}
                  <img
                    src={GraphicDesignOff}
                    alt="Graphic Design - Default state"
                    className={`hidden lg:block dark:brightness-[0.7] ${
                      hover ? "opacity-0" : "opacity-100"
                    } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 ${
                      styles.transitionOpacity
                    }`}
                  />
                  <img
                    src={GraphicDesignOn}
                    alt="Graphic Design - Highlighted state"
                    className={`hidden lg:block ${
                      hover ? "opacity-100" : "opacity-0"
                    } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 ${
                      styles.transitionOpacity
                    }`}
                  />
                </div>
                <h5 className="mb-4 text-center text-PBlack">
                  {t(`home.graphicDesign`)}
                </h5>
              </>
            );
          }}
        </Tab>

        {/* Illustrations Tab */}
        <Tab
          aria-label="Illustrations Tab"
          className={`group flex-1 flex-col justify-center items-center ${styles.cards} ${styles.transitionTransform} ${styles.focus}`}
          onClick={() => navigate(`/adam-kascak-portfolio/illustrations`)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate(`/adam-kascak-portfolio/illustrations`);
            }
          }}
        >
          {({ hover }) => {
            const ref = useRef(null);
            const isVisible = useIsVisible(ref);

            return (
              <>
                <div
                  ref={ref}
                  className="relative mx-4 mt-4 mb-4 bg-PGrey py-20 flex items-center justify-center h-80 transition-transform duration-300 ease-in-out"
                >
                  {/* For smaller screens, change image based on visibility */}
                  <img
                    src={IllustrationsOn}
                    alt="Illustrations - Highlighted state"
                    className={`lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 transition-opacity duration-300 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <img
                    src={IllustrationsOff}
                    alt="Illustrations - Default state"
                    className={`lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 transition-opacity duration-300 ${
                      isVisible ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* For larger screens, change image based on hover */}
                  <img
                    src={IllustrationsOff}
                    alt="Illustrations - Default state"
                    className={`hidden lg:block ${
                      hover ? "opacity-0" : "opacity-100"
                    } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 ${
                      styles.transitionOpacity
                    }`}
                  />
                  <img
                    src={IllustrationsOn}
                    alt="Illustrations - Highlighted state"
                    className={`hidden lg:block ${
                      hover ? "opacity-100" : "opacity-0"
                    } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 ${
                      styles.transitionOpacity
                    }`}
                  />
                </div>
                <h5 className="mb-4 text-center text-PBlack">
                  {t(`home.illustrations`)}
                </h5>
              </>
            );
          }}
        </Tab>

        {/* About Me Tab */}
        <Tab
          aria-label="About Me Tab"
          className={`group flex-1 flex-col justify-center items-center ${styles.cards} ${styles.transitionTransform} ${styles.focus}`}
          onClick={() => navigate(`/adam-kascak-portfolio/about`)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate(`/adam-kascak-portfolio/about`);
            }
          }}
        >
          {({ hover }) => {
            const ref = useRef(null);
            const isVisible = useIsVisible(ref);

            return (
              <>
                <div
                  ref={ref}
                  className="relative mx-4 mt-4 mb-4 bg-PGrey py-20 flex items-center justify-center h-80 transition-transform duration-300 ease-in-out"
                >
                  {/* For smaller screens, change image based on visibility */}
                  <img
                    src={AboutMeOn}
                    alt="About Me - Highlighted state"
                    className={`lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 transition-opacity duration-300 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <img
                    src={AboutMeOff}
                    alt="About Me - Default state"
                    className={`lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 transition-opacity duration-300 ${
                      isVisible ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* For larger screens, change image based on hover */}
                  <img
                    src={AboutMeOff}
                    alt="About Me - Default state"
                    className={`hidden lg:block ${
                      hover ? "opacity-0" : "opacity-100"
                    } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 ${
                      styles.transitionOpacity
                    }`}
                  />
                  <img
                    src={AboutMeOn}
                    alt="About Me - Highlighted state"
                    className={`hidden lg:block ${
                      hover ? "opacity-100" : "opacity-0"
                    } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 ${
                      styles.transitionOpacity
                    }`}
                  />
                </div>
                <h5 className="mb-4 text-center text-PBlack">
                  {t(`home.aboutMe`)}
                </h5>
              </>
            );
          }}
        </Tab>
      </TabList>
    </TabGroup>
  );
};

export default Card;
