import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { setTodaysDate } from "../utils/dateConfig";
import { pageTransitionLeft, pageTransitionRight } from "../utils/motionConfig";
import DataCTX from "../context/DataCTX";
import {
  InputDescription,
  InputTitle,
  MotionRoute,
  SubmitButton,
  TodoForm,
} from "../components";

const TodoNew = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addNewTodo } = useContext(DataCTX);
  const navigate = useNavigate();

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
      <MotionRoute animation={pageTransitionRight}>
        <header className="TodoNew__header">
          <h1>Add Todo</h1>
        </header>

        <TodoForm onSubmit={handleAddTodo}>
          <InputTitle
            id={`addTodoTitle`}
            label={`Title`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={`Enter a Title...`}
          />

          <InputDescription
            id={`addTodoDescription`}
            label={`Description`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={`Enter a Description...`}
          />

          <SubmitButton
            title={`Submit Todo`}
            ariaLabel={`Submit To Do`}
            disabled={title === "" ? 1 : 0}
          />
        </TodoForm>
      </MotionRoute>
    </section>
  );
};
export default TodoNew;
