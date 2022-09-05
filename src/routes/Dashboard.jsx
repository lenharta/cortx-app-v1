import { MotionRoute } from "../components";
import { TodoList } from "../features";
import { pageTransitionLeft } from "../utils/motionConfig";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <MotionRoute animation={pageTransitionLeft}>
        <header className="dashboard__header">
          <h1>Dashboard</h1>
        </header>



        {/* CLOCK */}
        {/* COUNTERBOARD */}
        {/* TODOLIST */}
        <TodoList />
        {/* FOOTER */}
      </MotionRoute>
    </div>
  );
};
export default Dashboard;
