import styles from "../../style";

import Form from "./Form";

// Contact Subpage Component

const Contact = () => {
  return (
    <div
      className={`flex flex-grow flex-col w-full overflow-x-hidden bg-PWhite ${styles.cursorAuto}`}
    >
      <main
        id="main-content"
        className={`flex flex-col ${styles.boxWidth} ${styles.paddingXA} mx-auto ${styles.mainMarginY}`}
      >
        <Form></Form>
      </main>
    </div>
  );
};

export default Contact;
