import { useContext, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DataCTX from "../context/DataCTX";

import { pageTransitionLeft } from "../utils/motionConfig";
import {
  InputDescription,
  InputTitle,
  MotionRoute,
  RouteHeader,
  SubmitButton,
  TodoForm,
} from "../components";
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
  const prevRef = useRef();

  const fillEditDetails = () => {
    let todoObj = {};
    const findTodo = () => {
      const todo = newData.filter((todo) => (todo.id === id ? 1 : 0));
      todoObj = todo[0];
    };
    findTodo();
    prevRef.current = todoObj.title;
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


  const handleDisabled = () => {
    if (editTitle === prevRef.current) {
      return true;
    }
    if (editTitle === "") {
      return true;
    }
    return false;
  }

  useEffect(() => {
    fillEditDetails();
  }, []);

  return (
    <section className="TodoEdit">
      <MotionRoute animation={pageTransitionLeft}>
        <RouteHeader title={`Edit Todo`} />

        <TodoForm onSubmit={handleSubmitEdit}>
          <InputTitle
            id={`EditTodoTitle`}
            label={`Title`}
            value={editTitle}
            onChange={(e) => handleEditTitle(e)}
            placeholder={`Enter a Title...`}
          />

          <InputDescription
            id={`EditTodoDescription`}
            label={`Description`}
            value={editDescription}
            onChange={(e) => handleEditDescription(e)}
            placeholder={`Enter a Description...`}
          />

          <SubmitButton
            title={`Submit Edit`}
            ariaLabel={`Submit To Do Edit`}
            disabled={handleDisabled()}
          />
        </TodoForm>
      </MotionRoute>
    </section>
  );
};
export default TodoEdit;
