import { setRequestLocale } from "next-intl/server";
import { Contact } from "../../../subpages";
import { use } from "react";

export default function Page({ params }) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return <Contact />;
}
