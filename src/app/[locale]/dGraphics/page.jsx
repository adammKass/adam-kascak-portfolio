import { setRequestLocale } from "next-intl/server";
import { DGraphics } from "../../../subpages";
import { use } from "react";

export default function Page({ params }) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return <DGraphics />;
}
