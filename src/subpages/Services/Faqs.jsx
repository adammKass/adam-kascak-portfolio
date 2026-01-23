// src/components/ScrollToTopButton.jsx
"use client"; // <-- makes this a client component

import { useTranslations } from "next-intl";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Fragment } from "react";
import * as motion from "motion/react-client";
import { fadeUp, viewportOnce } from "../../constants/variants";
import { faqs } from "../../constants";
import { AnimatePresence } from "framer-motion";

export default function Faqs() {
  const t = useTranslations("services.faqs");
  return (
    <motion.aside
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp(0.3)}
      className="col-span-full lg:col-span-1 mt-6 lg:mt-0 pt-6 lg:pt-0 lg:pl-12 border-t-2 lg:border-l-2 lg:border-t-0 border-PBlack flex flex-col gap-4"
    >
      <h2 className="font-bold text-center lg:text-left">{t(`title`)}</h2>
      <motion.div className="w-full space-y-2">
        {faqs.map((faq) => (
          <Disclosure key={faq.id} as="div">
            {({ open }) => (
              <>
                <DisclosureButton className="w-full border-b pb-2 border-PBlack text-left font-medium uppercase">
                  {t(`questions.${faq.id}.question`)}
                </DisclosureButton>

                <AnimatePresence initial={false}>
                  {open && (
                    <DisclosurePanel static as={Fragment}>
                      <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="py-2 text-sm text-PGreyDark"
                      >
                        {t(`questions.${faq.id}.answer`)}
                      </motion.div>
                    </DisclosurePanel>
                  )}
                </AnimatePresence>
              </>
            )}
          </Disclosure>
        ))}
      </motion.div>
    </motion.aside>
  );
}
