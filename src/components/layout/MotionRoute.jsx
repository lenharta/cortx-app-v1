import { motion } from "framer-motion";

const MotionRoute = ({ animation, children }) => {
  return (
    <motion.div variants={animation} initial="hidden" animate="show">
      {children}
    </motion.div>
  );
};
export default MotionRoute;