import { MotionRoute } from "../components";
import { pageTransitionLeft } from "../utils/motionConfig";

const NotFound = () => {
  return (
    <MotionRoute animation={pageTransitionLeft}>
      <h1>NotFound</h1>
    </MotionRoute>
  );
};
export default NotFound;
