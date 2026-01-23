import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import { DesignDetails } from "../../../../subpages";
import { DesignLinks } from "../../../../constants";

export function generateStaticParams() {
  return DesignLinks.map((item) => ({
    id: item.id,
  }));
}

export default function Page({ params }) {
  const { locale, id } = use(params);

  setRequestLocale(locale);

  return <DesignDetails id={id} />;
}
