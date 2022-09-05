import { Fragment, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import DataCTX from "../context/DataCTX";

import { pageTransitionLeft } from "../utils/motionConfig";
import { MotionRoute } from "../components";

const TodoEdit = () => {
  const { todoData } = useContext(DataCTX);
  const newData = [...todoData];
  const params = useParams();
  const id = params.todoId;

  const filterTodos = useCallback(() => {
    const todo = newData.filter((todo) => (todo.id === id ? 1 : 0));
    return todo
  }, [todoData]);

  return (
    <section className="TodoEdit">
      <MotionRoute animation={pageTransitionLeft}>
        
      </MotionRoute>
    </section>
  );
};
export default TodoEdit;
