import { useTranslation } from "react-i18next";
import {
  containerFadeStagger,
  fadeUpSmall,
  staggerContainer,
  viewportOnce,
} from "../../constants/variants";
import styles from "../../style";
import { motion } from "framer-motion";

const Form = () => {
  const { t } = useTranslation();
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!subject.trim()) {
      setError(formText[currentLang].errors.emptySubject);
      return;
    }

    if (!message.trim()) {
      setError(formText[currentLang].errors.emptyMessage);
      return;
    }

    if (!isValidEmail(email)) {
      setError(formText[currentLang].errors.invalidEmail);
      return;
    }
  };
  return (
    <motion.form
      variants={containerFadeStagger({ delay: 0.1, stagger: 0.2 })}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="w-full"
      onSubmit={handleSubmit}
    >
      <motion.h1
        variants={fadeUpSmall}
        className={`${styles.headingMain} ${styles.paddingB}`}
      >
        {t(`form.title`)}
      </motion.h1>
      <motion.p variants={fadeUpSmall} className="max-w-prose mt-8 lg:mt-10">
        {t(`form.description`)}
        <a href="mailto:adam.kascak@protonmail.com" className="font-bold">
          {" "}
          adam.kascak@protonmail.com
        </a>
      </motion.p>

      <motion.div
        variants={staggerContainer(0.15)}
        className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8"
      >
        <motion.div
          variants={fadeUpSmall}
          className="col-span-full md:col-span-1"
        >
          <label htmlFor="name" className="block text-sm/6 font-medium">
            {t(`form.name`)}
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              className="block w-full border border-PBlack bg-PWhite px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-PBlack sm:text-sm/6"
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeUpSmall}
          className="col-span-full md:col-span-1"
        >
          <label htmlFor="email" className="block text-sm/6 font-medium ">
            {t(`form.email`)}
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full border border-PBlack bg-PWhite px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-PBlack sm:text-sm/6"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpSmall}
          className="col-span-full md:col-span-1"
        >
          <label
            htmlFor="phone"
            className="block text-sm/6 font-medium text-PBlack"
          >
            {t(`form.phone`)}
          </label>
          <div className="mt-2">
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="phone"
              className="block w-full border border-PBlack bg-PWhite px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-PBlack sm:text-sm/6"
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeUpSmall}
          className="col-span-full md:col-span-1"
        >
          <label htmlFor="subject" className="block text-sm/6 font-medium">
            {t(`form.subject`)}
          </label>
          <div className="mt-2">
            <input
              id="subject"
              name="subject"
              type="text"
              className="block w-full border border-PBlack bg-PWhite px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-PBlack sm:text-sm/6"
            />
          </div>
        </motion.div>

        <motion.div variants={fadeUpSmall} className="col-span-full">
          <label
            htmlFor="message"
            className="block text-sm/6 font-medium text-PBlack"
          >
            {t(`form.message`)}
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              rows={3}
              className="block w-full border border-PBlack 
              bg-PWhite px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-PBlack sm:text-sm/6"
              defaultValue={""}
            />
          </div>
          <p className="mt-3 text-sm/6 text-gray-600">
            {t(`form.messageHint`)}
          </p>
        </motion.div>
      </motion.div>

      <div className="mt-6 flex items-center justify-center md:justify-start">
        <button
          type="submit"
          className={`rounded-md bg-PBlack px-6 py-2 text-PWhite transition-colors duration-300 hover:bg-PGrey w-fit focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-PBlack ${styles.focus} ${styles.cursorPointer} uppercase font-medium`}
        >
          {t(`form.submit`)}
        </button>
      </div>
    </motion.form>
  );
};
export default Form;
