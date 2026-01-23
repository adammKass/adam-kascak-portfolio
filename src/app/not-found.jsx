import Link from "next/link";
import styles from "../style";
import "./globals.css";

export default function NotFound() {
  return (
    <div
      className={`absolute top-0 left-0 w-full min-h-screen h-dvh overflow-hidden bg-PWhite ${styles.cursorAuto}`}
    >
      <main
        className={`h-full flex flex-col justify-center items-center gap-2 h-full ${styles.boxWidth} text-center text-PBlack`}
      >
        <h1 className={`${styles.headingMain} ${styles.paddingB}`}>
          404 - Stránka sa nenašla
        </h1>

        <Link
          href={"/"}
          className={`max-w-prose font-bold uppercase text-center hover:opacity-50 ${styles.focus}`}
        >
          Späť na domovskú stránku
        </Link>
      </main>
    </div>
  );
}
