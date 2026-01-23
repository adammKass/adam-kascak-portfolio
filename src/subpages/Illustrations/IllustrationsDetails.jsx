"use client";
import { useRouter } from "../../i18n/navigation";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { arrowLeft, arrowRight, cross } from "../../assets";
import { IllustrationLinks } from "../../constants";
import styles from "../../style";
import { Link } from "../../i18n/navigation";
import Image from "next/image";

// Illustration Details Subpage Component

const IllustrationsDetails = ({ id }) => {
  const router = useRouter();
  const t = useTranslations(); // Translation hook

  // Find the current illustration based on the ID
  const currentIndex = IllustrationLinks.findIndex((item) => item.id === id);
  const ilu = IllustrationLinks[currentIndex];

  // Calculate the previous and next illustration indices
  const prevIndex =
    (currentIndex - 1 + IllustrationLinks.length) % IllustrationLinks.length;
  const nextIndex = (currentIndex + 1) % IllustrationLinks.length;

  return (
    <main
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          router.push(`/illustrations/${IllustrationLinks[prevIndex].id}`);
        }
        if (e.key === "ArrowRight") {
          router.push(`/illustrations/${IllustrationLinks[nextIndex].id}`);
        }
        if (e.key === "Escape") {
          router.push("/illustrations/");
        }
      }}
      className={`relative flex flex-grow w-full  bg-PWhite overflow-hidden flex items-center outline-none justify-center ${styles.cursorAuto} z-100 py-10`}
    >
      {/* Close Button */}
      <Link
        className="absolute top-4 right-4 lg:top-25 lg:right-20"
        href={`/illustrations/`}
      >
        <img
          src={cross.src}
          alt="Close image"
          className={`${styles.iconSize} ${styles.iconHover} ${styles.cursorPointer}`}
        />
      </Link>

      <section
        className={`flex flex-row w-full justify-between items-center gap-4 lg:gap-16 px-4 lg:px-20`}
      >
        {/* Previous Button */}
        <Link href={`/illustrations/${IllustrationLinks[prevIndex].id}`}>
          <img
            src={arrowLeft.src}
            alt="Previous Image"
            className={`${styles.iconSize} ${styles.iconHover} ${styles.cursorPointer}`}
          />
        </Link>

        {/* Illustration Display */}
        <figure className="flex flex-col items-center">
          <Image
            src={ilu.image.webp}
            alt={t(`illustrationLinks.${ilu.id}.alt`)}
            className="max-h-[90vh] max-w-screen object-contain"
            width={ilu.image.width}
            height={ilu.image.height}
          />

          <h1 className={`mt-4 text-sm text-PBlack ${styles.cursorText}`}>
            {t(`illustrationLinks.${ilu.id}.title`)}
          </h1>
        </figure>

        {/* Next Button */}
        <Link href={`/illustrations/${IllustrationLinks[nextIndex].id}`}>
          <img
            src={arrowRight.src}
            alt="Next Image"
            className={`${styles.iconSize} ${styles.iconHover} ${styles.cursorPointer}`}
          />
        </Link>
      </section>
    </main>
  );
};

export default IllustrationsDetails;
