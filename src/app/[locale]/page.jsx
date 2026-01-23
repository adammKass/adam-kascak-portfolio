import { Home } from "../../subpages";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";

export default function Page({ params }) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return <Home />;
}
