import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DataCTX from "../context/DataCTX";

import { pageTransitionLeft } from "../utils/motionConfig";
import { MotionRoute } from "../components";
import { useState } from "react";
import { setTodaysDate } from "../utils/dateConfig";

const TodoEdit = () => {
  const { editTodo } = useContext(DataCTX);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const { todoData } = useContext(DataCTX);
  const newData = [...todoData];
  const navigate = useNavigate();
  const params = useParams();
  const id = params.todoId;

  const fillEditDetails = () => {
    let todoObj = {};
    const findTodo = () => {
      const todo = newData.filter((todo) => (todo.id === id ? 1 : 0));
      todoObj = todo[0];
    };
    findTodo();
    setEditTitle(todoObj.title);
    setEditDescription(todoObj.description);
  };

  const handleEditTitle = (e) => {
    setEditTitle(e.target.value);
  };
  const handleEditDescription = (e) => {
    setEditDescription(e.target.value);
  };

  const handleSubmitEdit = () => {
    const dateTime = setTodaysDate();
    const editedTodo = {
      id: id,
      dateTime: dateTime,
      title: editTitle,
      description: editDescription,
      isComplete: false,
    };

    editTodo(editedTodo);
    setEditTitle("");
    setEditDescription("");
    navigate("/");
  };

  useEffect(() => {
    fillEditDetails();
  }, []);

  return (
    <section className="TodoEdit">
      <MotionRoute animation={pageTransitionLeft}>
        <header className="TodoEdit__header">
          <h1>Edit Todo</h1>
        </header>

        <form
          action="submitTodoEdit"
          className="TodoEdit__form"
          onSubmit={handleSubmitEdit}
        >
          <label htmlFor="" className="TodoEdit__label">
            Edit Title
          </label>

          <input
            type="text"
            className="TodoEdit__form--title"
            value={editTitle}
            onChange={(e) => handleEditTitle(e)}
          />

          <label htmlFor="" className="TodoEdit__label">
            Edit Title
          </label>

          <textarea
            className="TodoEdit__form--description"
            value={editDescription}
            onChange={(e) => handleEditDescription(e)}
          />

          <button type="submit" className="TodoEdit__form--btn">
            Submit Edit
          </button>
        </form>
      </MotionRoute>
    </section>
  );
};
export default TodoEdit;
