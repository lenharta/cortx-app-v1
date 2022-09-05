import { useContext, useCallback, Fragment } from "react";
import { useParams } from "react-router-dom";
import DataCTX from "../context/DataCTX";
import { Link } from "react-router-dom";

import { pageTransitionLeft } from "../utils/motionConfig";
import { MotionRoute } from "../components";
import { Icons } from "../components";

const Todo = () => {
  const { todoData, changeTodoStatus } = useContext(DataCTX);
  const newData = [...todoData];
  const params = useParams();
  const id = params.todoId;

  const filterTodos = useCallback(() => {
    const todo = newData.filter((todo) => (todo.id === id ? 1 : 0));
    return todo
  }, [todoData]);

  const handleChangeStatus = (e) => {
    const { id, checked } = e.target;
    const initialTodo = { id: id, isComplete: checked };
    changeTodoStatus(initialTodo);
  };

  return (
    <section className="Todo">
      <MotionRoute animation={pageTransitionLeft}>
        {filterTodos().map((todo) => (
          <Fragment key={`currentTodo-${todo?.id}`}>
            <div className="todo__title">
              <h1>{todo?.title}</h1>
            </div>
            <div className="todo__status">
              <input
                type="checkbox"
                id={todo?.id}
                checked={todo?.isComplete}
                onChange={(e) => handleChangeStatus(e)}
              />
              <span>{todo?.isComplete ? `Complete` : `Incomplete`}</span>
            </div>
            <div className="todo__dateTime">
              <p>{todo?.dateTime}</p>
            </div>
            <div className="todo__description">
              <p>{todo?.description}</p>
            </div>
            <div className="todo__controls">
              
            </div>
          </Fragment>
        ))}
      </MotionRoute>
    </section>
  );
};
export default Todo;

// {/* <EditLink to={`/edit/${todo.id}`}>Edit</EditLink> */}
// {/* <DeleteButton id={todo.id} onClick={handleTodoDelete}>Delete</DeleteButton> */}
