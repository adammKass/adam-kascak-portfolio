import { Tab, TabGroup, TabList } from "@headlessui/react";
import {
  AboutMeOff,
  AboutMeOn,
  GraphicDesignOff,
  GraphicDesignOn,
  GraphicDesignOn1,
  GraphicDesignOn2,
  IllustrationsOff,
  IllustrationsOn,
  service,
  serviceIllustration,
  serviceIllustrationOff,
  serviceOff,
  serviceWeb,
  serviceWebOff,
} from "../../assets";
import { useNavigate } from "react-router-dom";

import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useIsVisible } from "../../components";
import styles from "../../style";

// Home Cards Container Component

const Card = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <TabGroup className={`flex flex-col flex-grow items-center justify-center`}>
      {/* Main Content - Tabs seperate for illustration handling*/}
      <TabList
        as="main"
        id="main-content"
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 h-full mb-10 lg:mb-0 ${styles.boxWidth} ${styles.paddingXA} mx-auto mt-10 mb-10 lg:mb-0 lg:mt-0`}
      >
        {/* Graphic Design Tab */}
        <Tab
          aria-label="Web Design Tab"
          className={`group flex-1 flex-col justify-center items-center ${styles.cards} ${styles.transitionTransform} ${styles.focus} ${styles.cursorPointer} `}
          onClick={() => navigate(`/graphicdesign`)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate(`/graphicdesign`);
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
                  className="relative min-w-[80%] mx-4 mt-4 mb-4 bg-PGrey py-20 flex items-center justify-center h-80 transition-transform duration-300 ease-in-out"
                >
                  {/* For smaller screens, change image based on visibility */}
                  <img
                    src={serviceWebOff.src}
                    alt="Graphic Design - Highlighted state"
                    className={`lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 transition-opacity duration-300 ${
                      isVisible ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <img
                    src={serviceWeb.src}
                    alt="Graphic Design - Default state"
                    className={`lg:hidden dark:brightness-[0.9] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 transition-opacity duration-300 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {/* For larger screens, change image based on hover */}
                  <img
                    src={serviceWebOff.src}
                    alt="Graphic Design - Default state"
                    className={`hidden lg:block  ${
                      hover ? "opacity-0" : "opacity-100"
                    } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-40 ${
                      styles.transitionOpacity
                    }`}
                  />
                  <img
                    src={serviceWeb.src}
                    alt="Graphic Design - Highlighted state"
                    className={`hidden lg:block dark:brightness-[0.9] ${
                      hover ? "opacity-100" : "opacity-0"
                    } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-40 ${
                      styles.transitionOpacity
                    }`}
                  />
                </div>
                <h2 className="mb-4 uppercase font-bold text-center text-PBlack text-base">
                  {t(`home.graphicDesign`)}
                </h2>
              </>
            );
          }}
        </Tab>

        {/* 3D Graphics Tab */}
        <Tab
          aria-label="3D Graphics Tab"
          className={`group flex-1 flex-col justify-center items-center ${styles.cards} ${styles.transitionTransform} ${styles.focus} ${styles.cursorPointer}`}
          onClick={() => navigate(`/dgraphics`)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate(`/dgraphics`);
            }
          }}
        >
          {({ hover }) => {
            const ref = useRef(null);
            const isVisible = useIsVisible(ref);
            return (
              <>
                <div className="relative min-w-[20%] mx-4 mt-4 mb-4 bg-PGrey py-20 flex items-center justify-center h-80 transition-transform duration-300 ease-in-out">
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
                <h2 className="mb-4 uppercase font-bold text-center text-PBlack text-base">
                  {t(`home.3dGraphics`)}
                </h2>
              </>
            );
          }}
        </Tab>

        {/* Illustrations Tab */}
        <Tab
          aria-label="Illustrations Tab"
          className={`group flex-1 flex-col justify-center items-center ${styles.cards} ${styles.transitionTransform} ${styles.focus} ${styles.cursorPointer}`}
          onClick={() => navigate(`/illustrations`)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate(`/illustrations`);
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
                  className="relative min-w-[80%] mx-4 mt-4 mb-4 bg-PGrey py-20 flex items-center justify-center h-80 transition-transform duration-300 ease-in-out"
                >
                  {/* For smaller screens, change image based on visibility */}
                  <img
                    src={serviceIllustration.src}
                    alt="Illustrations - Highlighted state"
                    className={`lg:hidden dark:brightness-[0.9] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 transition-opacity duration-300 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <img
                    src={serviceIllustrationOff.src}
                    alt="Illustrations - Default state"
                    className={`lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 transition-opacity duration-300 ${
                      isVisible ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  {/* For larger screens, change image based on hover */}
                  <img
                    src={serviceIllustrationOff.src}
                    alt="Illustrations - Default state"
                    className={`hidden lg:block ${
                      hover ? "opacity-0" : "opacity-100"
                    } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-40 ${
                      styles.transitionOpacity
                    }`}
                  />
                  <img
                    src={serviceIllustration.src}
                    alt="Illustrations - Default state"
                    className={`hidden dark:brightness-[0.9] lg:block ${
                      hover ? "opacity-100" : "opacity-0"
                    } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-40 ${
                      styles.transitionOpacity
                    }`}
                  />
                </div>
                <h2 className="mb-4 uppercase font-bold text-center text-PBlack text-base">
                  {t(`home.illustrations`)}
                </h2>
              </>
            );
          }}
        </Tab>

        {/* Services Tab */}
        <Tab
          aria-label="Services Tab"
          className={`group flex-1 flex-col justify-center items-center ${styles.cards} ${styles.transitionTransform} ${styles.focus} ${styles.cursorPointer}`}
          onClick={() => navigate(`/services`)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate(`/services`);
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
                  className="relative min-w-[80%] mx-4 mt-4 mb-4 bg-PGrey py-20 flex items-center justify-center h-80 transition-transform duration-300 ease-in-out"
                >
                  {/* For smaller screens, change image based on visibility */}
                  <img
                    src={service.src}
                    alt="About Me - Highlighted state"
                    className={`lg:hidden dark:brightness-[0.9] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 transition-opacity duration-300 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <img
                    src={serviceOff.src}
                    alt="About Me - Default state"
                    className={`lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 transition-opacity duration-300 ${
                      isVisible ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* For larger screens, change image based on hover */}
                  <img
                    src={serviceOff.src}
                    alt="About Me - Default state"
                    className={`hidden lg:block ${
                      hover ? "opacity-0" : "opacity-100"
                    } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-40 ${
                      styles.transitionOpacity
                    }`}
                  />
                  <img
                    src={service.src}
                    alt="About Me - Highlighted state"
                    className={`hidden lg:block dark:brightness-[0.9] ${
                      hover ? "opacity-100" : "opacity-0"
                    } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-40 ${
                      styles.transitionOpacity
                    }`}
                  />
                </div>
                <h2 className="mb-4 uppercase font-bold text-center text-PBlack text-base">
                  {t(`home.services`)}
                </h2>
              </>
            );
          }}
        </Tab>

        {/* About Me Tab */}
        <Tab
          aria-label="About Me Tab"
          className={`group flex-1 flex-col justify-center items-center ${styles.cards} ${styles.transitionTransform} ${styles.focus} ${styles.cursorPointer}`}
          onClick={() => navigate(`/about`)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate(`/about`);
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
                  className="relative min-w-[80%] mx-4 mt-4 mb-4 bg-PGrey py-20 flex items-center justify-center h-80 transition-transform duration-300 ease-in-out"
                >
                  {/* For smaller screens, change image based on visibility */}
                  <img
                    src={AboutMeOn.src}
                    alt="About Me - Highlighted state"
                    className={`lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 transition-opacity duration-300 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <img
                    src={AboutMeOff.src}
                    alt="About Me - Default state"
                    className={`lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 transition-opacity duration-300 ${
                      isVisible ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* For larger screens, change image based on hover */}
                  <img
                    src={AboutMeOff.src}
                    alt="About Me - Default state"
                    className={`hidden lg:block ${
                      hover ? "opacity-0" : "opacity-100"
                    } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 ${
                      styles.transitionOpacity
                    }`}
                  />
                  <img
                    src={AboutMeOn.src}
                    alt="About Me - Highlighted state"
                    className={`hidden lg:block ${
                      hover ? "opacity-100" : "opacity-0"
                    } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 ${
                      styles.transitionOpacity
                    }`}
                  />
                </div>
                <h2 className="mb-4 uppercase font-bold text-center text-PBlack text-base">
                  {t(`home.aboutMe`)}
                </h2>
              </>
            );
          }}
        </Tab>
      </TabList>
    </TabGroup>
  );
};

export default Card;
