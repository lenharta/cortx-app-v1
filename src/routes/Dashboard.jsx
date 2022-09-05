import { MotionRoute } from "../components";
import { TodoList } from "../features";
import { pageTransitionLeft } from "../utils/motionConfig";

const Dashboard = () => {
  return (
    <MotionRoute animation={pageTransitionLeft}>
      <div className="Dashboard">
        <header className="Dashboard__header">
          <h1>Dashboard</h1>
        </header>

        {/* CLOCK */}
        {/* COUNTERBOARD */}
        <TodoList />
        {/* FOOTER */}
      </div>
    </MotionRoute>
  );
};
export default Dashboard;
