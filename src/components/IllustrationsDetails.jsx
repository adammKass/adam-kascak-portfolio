import { useParams, useNavigate } from "react-router-dom";
import { arrowLeft, arrowRight, cross } from "../assets";
import { IllustrationLinks } from "../constants";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

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
        navigate(`/illustrations/${IllustrationLinks[prevIndex].id}`);
      } else if (e.key === "ArrowRight") {
        navigate(`/illustrations/${IllustrationLinks[nextIndex].id}`);
      } else if (e.key === "Escape") {
        navigate(`/illustrations/`);
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
    <div className="absolute top-0 left-0 w-full min-h-screen bg-PWhite overflow-hidden flex items-center justify-center">
      {/* Close button */}
      <img
        src={cross}
        alt="close"
        className="absolute top-4 right-4 lg:top-12 lg:right-20 w-[42px] h-[42px] cursor-pointer dark:brightness-[4] dark:saturate-0 dark:opacity-100 hover:opacity-50 dark:hover:opacity-50 transition-opacity duration-300 ease-in-out"
        onClick={() => navigate(`/illustrations/`)} // Go back to the previous page
      />
      <div className="flex flex-row justify-between items-center gap-4 lg:gap-16 px-4 lg:px-20">
        <img
          src={arrowLeft}
          alt="previous"
          className="w-[42px] h-[42px] cursor-pointer dark:brightness-[4] dark:saturate-0 dark:opacity-100 hover:opacity-50 dark:hover:opacity-50 transition-opacity duration-300 ease-in-out"
          onClick={() =>
            navigate(`/illustrations/${IllustrationLinks[prevIndex].id}`)
          }
        />
        <figure className="flex flex-col items-center">
          <img
            src={ilu.image.jpg}
            alt={t(`illustrationLinks.${ilu.id}.title`)}
            className="max-h-[90vh] max-w-screen object-contain"
          />
          <figcaption className="mt-4 text-sm text-PBlack">
            {t(`illustrationLinks.${ilu.id}.title`)}
          </figcaption>
        </figure>
        <img
          src={arrowRight}
          alt="next"
          className="w-[42px] h-[42px] cursor-pointer dark:brightness-[4] dark:saturate-0 dark:opacity-100 hover:opacity-50 dark:hover:opacity-50 transition-opacity duration-300 ease-in-out"
          onClick={() =>
            navigate(`/illustrations/${IllustrationLinks[nextIndex].id}`)
          }
        />
      </div>

      {/* Main image */}
    </div>
  );
};

export default IllustrationsDetails;
