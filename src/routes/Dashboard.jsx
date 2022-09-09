import {
  Clock,
  CounterBoard,
  MotionRoute,
  RouteHeader,
  TodoList,
} from "../components";
import { pageTransitionLeft } from "../utils/motionConfig";

const Dashboard = () => {
  return (
    <MotionRoute animation={pageTransitionLeft}>
      <div className="Dashboard">
        <RouteHeader title={`Dashboard`} />

        <Clock />
        <CounterBoard />
        <TodoList />
        {/* FOOTER */}
      </div>
    </MotionRoute>
  );
};
export default Dashboard;
