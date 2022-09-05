import { MotionRoute } from "../components";
import { pageTransitionLeft } from "../utils/motionConfig";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import DataCTX from "../context/DataCTX";
import { setTodaysDate } from "../utils/dateConfig";

const TodoNew = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { addNewTodo } = useContext(DataCTX);

  const handleAddTodo = () => {
    const dateTime = setTodaysDate();
    const newTodo = { title, description, dateTime, isComplete: false };
    addNewTodo(newTodo);

    setTitle("");
    setDescription("");
    navigate("/");
  };

  return (
    <section className="TodoNew">
      <MotionRoute animation={pageTransitionLeft}>
        <header className="TodoNew__header">
          <h1>Add A Todo</h1>
        </header>

        <form action="sumbitTodoNew" className="TodoNew__form" onSubmit={handleAddTodo}>
          <label htmlFor="" className="TodoNew__form--label">
            Title
          </label>
          <input
            type="text"
            className="TodoNew__form--input_title"
            placeholder="Enter a title..."
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="" className="TodoNew__form--label">
            Description
          </label>
          <input
            type="text"
            className="TodoNew__form--input_description"
            placeholder="Enter a description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit" className="TodoNew__form--btn">
            Add Todo
          </button>
        </form>
      </MotionRoute>
    </section>
  );
};
export default TodoNew;
