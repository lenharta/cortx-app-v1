import { useContext, useCallback, Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import DataCTX from "../context/DataCTX";

import { pageTransitionLeft } from "../utils/motionConfig";
import {
  Checkbox,
  DeleteButton,
  MotionRoute,
  PrimaryLink,
} from "../components";
import { Icons } from "../components";
import TodoDeleteModal from "./TodoDeleteModal";

const Todo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { todoData, changeTodoStatus } = useContext(DataCTX);
  const newData = [...todoData];
  const params = useParams();
  const id = params.todoId;

  const filterTodos = useCallback(() => {
    const todo = newData.filter((todo) => (todo.id === id ? 1 : 0));
    return todo;
  }, [todoData]);

  const handleChangeStatus = (e) => {
    const { id, checked } = e.target;
    const initialTodo = { id: id, isComplete: checked };
    changeTodoStatus(initialTodo);
  };

  const handleDeleteTodo = (e) => {
    const { id } = e.target;
    console.log(id);
  };

  const toggleModal = () => setModalOpen(!modalOpen)

  return (
    <section className="Todo">
      <MotionRoute animation={pageTransitionLeft}>
        {filterTodos().map((todo) => (
          <Fragment key={`currentTodo-${todo?.id}`}>
            <header
              className={`Todo__title_${
                todo?.isComplete ? `Complete` : `Incomplete`
              }`}
            >
              <h2>{todo?.title}</h2>
            </header>

            <div
              className={`Todo__status_${
                todo?.isComplete ? `Complete` : `Incomplete`
              }`}
            >
              <Checkbox
                id={todo?.id}
                value={todo?.isComplete}
                checked={todo?.isComplete}
                onChange={(e) => handleChangeStatus(e)}
                icon={todo?.isComplete ? `Complete` : `Incomplete`}
              />

              <span>{todo?.isComplete ? `Complete` : `Incomplete`}</span>
            </div>

            <div className="Todo__date">
              <Icons name="Calendar" />
              <h3>{todo?.dateTime}</h3>
            </div>

            <div className="Todo__description">
              <p>{todo?.description}</p>
            </div>

            <div className="Todo__controls">
              <PrimaryLink
                title={`Edit`}
                variant={`default`}
                url={`/edit/${todo?.id}`}
              />
              <DeleteButton onClick={toggleModal} />
            </div>

            {modalOpen && (
              <TodoDeleteModal
                todoId={todo?.id}
                toggleModal={toggleModal}
              />
            )}
          </Fragment>
        ))}
      </MotionRoute>
    </section>
  );
};
export default Todo;
