import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Starting state
      animate={{ opacity: 1, y: 0 }} // Final state
      exit={{ opacity: 0, y: -20 }} // Exit stat
      transition={{ duration: 0.5, ease: "easeInOut" }} // Animation duration
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
