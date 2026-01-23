"use client";

import { useTranslations } from "next-intl";
import { useRef } from "react";
import { useIsVisible } from "../../components";
import styles from "../../style";
import { Link } from "../../i18n/navigation";
import Image from "next/image";

const ServiceCard = ({
  titleKey,
  path,
  offImg,
  onImg,
  ariaLabel,
  isCube = false,
}) => {
  const t = useTranslations();
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);
  const defaultAlt = t(`home.${titleKey}Alt`);
  const highlightAlt = t(`home.${titleKey}AltHighlight`);

  return (
    <Link
      href={path}
      className={`group flex flex-1 flex-col justify-center items-center ${styles.cards} ${styles.transitionTransform} ${styles.focus} ${styles.cursorPointer} outline-none transition-transform duration-300 ease-in-out hover:translate-y-[-10px]`}
      aria-label={ariaLabel}
    >
      <div
        ref={ref}
        className={`relative group min-w-[80%] mx-4 mt-4 mb-4 bg-PGrey py-20 flex items-center justify-center h-80 transition-transform duration-300 ease-in-out ${isVisible ? "is-visible" : ""}`}
      >
        {isCube ? (
          // 3D Cube with consistent off/on states
          <div className="scene">
            <div
              className={`cube transition-transform duration-500 ease-in-out`}
            >
              <div
                className={`hidden lg:block face front transition-colors duration-300 ease-in-out bg-[#A6a6a6] group-hover:bg-[#DADADA]`}
              ></div>
              <div
                className={`lg:hidden face front transition-colors duration-300 ease-in-out bg-[#DADADA]`}
              ></div>
              <div className="face back"></div>
              <div className="face right"></div>
              <div
                className={`hidden lg:block face left transition-colors duration-300 ease-in-out bg-[#A6a6a6] group-hover:bg-[#000000]`}
              ></div>
              <div
                className={`lg:hidden face left transition-colors duration-300 ease-in-out bg-[#000000]`}
              ></div>
              <div
                className={`hidden lg:block face top transition-colors duration-300 ease-in-out bg-[#A6a6a6] group-hover:bg-[#ffffff]`}
              ></div>
              <div
                className={`lg:hidden face top transition-colors duration-300 ease-in-out bg-[#ffffff]`}
              ></div>
              <div className="face bottom"></div>
            </div>
          </div>
        ) : (
          // Image-based card
          <>
            {/* Mobile: Toggle based on visibility */}
            <Image
              src={offImg}
              alt={defaultAlt}
              width={300}
              height={400}
              className={`lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 transition-opacity duration-300 ${
                isVisible ? "opacity-0" : "opacity-100"
              }`}
            />
            <Image
              src={onImg}
              alt={highlightAlt}
              width={300}
              height={400}
              className={`lg:hidden dark:brightness-[0.9] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-44 transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            />
            {/* For larger screens, change image based on hover */}
            <Image
              src={offImg}
              alt={defaultAlt}
              width={300}
              height={400}
              className={`hidden lg:block opacity-100 group-hover:opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-40 ${
                styles.transitionOpacity
              }`}
            />
            <Image
              src={onImg}
              alt={highlightAlt}
              width={300}
              height={400}
              className={`hidden lg:block dark:brightness-[0.9] opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-40 ${
                styles.transitionOpacity
              }`}
            />
          </>
        )}
      </div>
      <h2 className="mb-4 uppercase font-bold text-center text-PBlack text-base">
        {t(`home.${titleKey}`)}
      </h2>
    </Link>
  );
};
export default ServiceCard;
