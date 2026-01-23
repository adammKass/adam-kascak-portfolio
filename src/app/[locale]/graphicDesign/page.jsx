import { setRequestLocale } from "next-intl/server";
import { GraphicDesign } from "../../../subpages";
import { use } from "react";

export default function Page({ params }) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return <GraphicDesign />;
}
