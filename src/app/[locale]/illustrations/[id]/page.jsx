import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import { IllustrationsDetails } from "../../../../subpages";
import { IllustrationLinks } from "../../../../constants";

export function generateStaticParams() {
  return IllustrationLinks.map((item) => ({
    id: item.id,
  }));
}

export default function Page({ params }) {
  const { locale, id } = use(params);

  setRequestLocale(locale);

  return <IllustrationsDetails id={id} />;
}
