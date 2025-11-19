import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { arrowLeft, arrowRight, cross } from "../../assets";
import { IllustrationLinks } from "../../constants";
import styles from "../../style";

// Illustration Details Subpage Component

const IllustrationsDetails = () => {
  const { id } = useParams(); // Get the current illustration ID from the URL
  const navigate = useNavigate(); // Navigation handler
  const { t } = useTranslation(); // Translation hook

  // Find the current illustration based on the ID
  const currentIndex = IllustrationLinks.findIndex((item) => item.id === id);
  const ilu = IllustrationLinks[currentIndex];

  // Calculate the previous and next illustration indices
  const prevIndex =
    (currentIndex - 1 + IllustrationLinks.length) % IllustrationLinks.length;
  const nextIndex = (currentIndex + 1) % IllustrationLinks.length;

  // Handle keyboard navigation (ArrowLeft, ArrowRight, Escape) for better UX
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        navigate(
          `/adam-kascak-portfolio/illustrations/${IllustrationLinks[prevIndex].id}`
        );
      } else if (e.key === "ArrowRight") {
        navigate(
          `/adam-kascak-portfolio/illustrations/${IllustrationLinks[nextIndex].id}`
        );
      } else if (e.key === "Escape") {
        navigate(`/adam-kascak-portfolio/illustrations/`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown); // Cleanup event listener
    };
  }, [navigate, prevIndex, nextIndex]);

  // If the illustration is not found, display an error message
  if (!ilu) {
    return (
      <h1 className="text-center text-2xl mt-20">Illustration Not Found</h1>
    );
  }

  return (
    <main
      className={`absolute top-0 left-0 w-full min-h-screen bg-PWhite overflow-hidden flex items-center justify-center ${styles.cursorAuto}`}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 lg:top-12 lg:right-20"
        onClick={() => navigate(`/adam-kascak-portfolio/illustrations/`)} // Go back to the illustrations list
      >
        <img
          src={cross}
          alt="Close image"
          className={`${styles.iconSize} ${styles.iconHover} ${styles.cursorPointer}`}
        />
      </button>

      <section
        className={`flex flex-row w-full justify-between items-center gap-4 lg:gap-16 px-4 lg:px-20`}
      >
        {/* Previous Button */}
        <button
          onClick={() =>
            navigate(
              `/adam-kascak-portfolio/illustrations/${IllustrationLinks[prevIndex].id}`
            )
          }
        >
          <img
            src={arrowLeft}
            alt="Previous Image"
            className={`${styles.iconSize} ${styles.iconHover} ${styles.cursorPointer}`}
          />
        </button>

        {/* Illustration Display */}
        <figure className="flex flex-col items-center">
          <picture>
            {/* AVIF format */}
            <source srcSet={ilu.image.avif} type="image/avif" />
            {/* WebP format */}
            <source srcSet={ilu.image.webp} type="image/webp" />
            {/* Fallback to JPG */}
            <img
              src={ilu.image.jpg}
              alt={t(`illustrationLinks.${ilu.id}.alt`)}
              className="max-h-[90vh] max-w-screen object-contain"
              loading="lazy"
            />
          </picture>

          <h1 className={`mt-4 text-sm text-PBlack ${styles.cursorText}`}>
            {t(`illustrationLinks.${ilu.id}.title`)}
          </h1>
        </figure>

        {/* Next Button */}
        <button
          onClick={() =>
            navigate(
              `/adam-kascak-portfolio/illustrations/${IllustrationLinks[nextIndex].id}`
            )
          }
        >
          <img
            src={arrowRight}
            alt="Next Image"
            className={`${styles.iconSize} ${styles.iconHover} ${styles.cursorPointer}`}
          />
        </button>
      </section>
    </main>
  );
};

export default IllustrationsDetails;
