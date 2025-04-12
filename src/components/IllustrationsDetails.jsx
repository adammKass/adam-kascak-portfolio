import { useParams, useNavigate } from "react-router-dom";
import { arrowLeft, arrowRight, cross } from "../assets";
import { IllustrationLinks } from "../constants";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import styles from "../style";

const IllustrationsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const currentIndex = IllustrationLinks.findIndex((item) => item.id === id);
  const ilu = IllustrationLinks[currentIndex];

  const prevIndex =
    (currentIndex - 1 + IllustrationLinks.length) % IllustrationLinks.length;
  const nextIndex = (currentIndex + 1) % IllustrationLinks.length;

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
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate, prevIndex, nextIndex]);

  if (!ilu) {
    return (
      <h1 className="text-center text-2xl mt-20">Illustration Not Found</h1>
    );
  }

  return (
    <header className="absolute top-0 left-0 w-full min-h-screen bg-PWhite overflow-hidden flex items-center justify-center">
      {/* Close button */}
      <button className="absolute top-4 right-4 lg:top-12 lg:right-20">
        <img
          src={cross}
          alt="Close image"
          className={`${styles.iconSize} ${styles.iconHover}`}
          onClick={() => navigate(`/adam-kascak-portfolio/illustrations/`)} // Go back to the previous page
        />
      </button>

      <main className="flex flex-row w-full justify-between items-center gap-4 lg:gap-16 px-4 lg:px-20">
        <button>
          <img
            src={arrowLeft}
            alt="Previous Image"
            className={`${styles.iconSize} ${styles.iconHover}`}
            onClick={() =>
              navigate(
                `/adam-kascak-portfolio/illustrations/${IllustrationLinks[prevIndex].id}`
              )
            }
          />
        </button>
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
          <figcaption className="mt-4 text-sm text-PBlack">
            {t(`illustrationLinks.${ilu.id}.title`)}
          </figcaption>
        </figure>
        <button>
          <img
            src={arrowRight}
            alt="Next Image"
            className={`${styles.iconSize} ${styles.iconHover}`}
            onClick={() =>
              navigate(
                `/adam-kascak-portfolio/illustrations/${IllustrationLinks[nextIndex].id}`
              )
            }
          />
        </button>
      </main>

      {/* Main image */}
    </header>
  );
};

export default IllustrationsDetails;
