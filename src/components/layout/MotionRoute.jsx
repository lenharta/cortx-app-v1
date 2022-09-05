import { motion } from "framer-motion";

const MotionRoute = ({ variants, children }) => {
  return (
    <motion.div variants={variants} initial="hidden" animate="show">
      {children}
    </motion.div>
  );
};
export default MotionRoute;