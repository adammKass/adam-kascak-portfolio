import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Starting state
      animate={{ opacity: 1 }} // Final state
      exit={{ opacity: 0 }} // Exit stat
      transition={{ duration: 0.3, ease: "easeInOut" }} // Animation duration
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
