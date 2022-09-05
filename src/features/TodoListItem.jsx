import { useContext } from "react";
import { Link } from "react-router-dom";
import { Icons } from "../components";
import DataCTX from "../context/DataCTX";

const TodoListItem = ({ todo }) => {
  const { changeTodoStatus } = useContext(DataCTX);

  const handleChangeStatus = (e) => {
    const { id, checked } = e.target;
    console.log("checked", checked);
    const initialTodo = { id: id, isComplete: checked };
    console.log(initialTodo);
    changeTodoStatus(initialTodo);
  };

  return (
    <li className="TodoListItem">
      <div
        className={
          todo.isComplete
            ? `TodoListItem__checkbox--complete`
            : `TodoListItem__checkbox--incomplete`
        }
      >
        <input
          type="checkbox"
          onChange={(e) => handleChangeStatus(e)}
          checked={todo?.isComplete}
          value={todo?.isComplete}
          id={todo?.id}
        />
        <Icons name={todo.isComplete ? `Complete` : `Incomplete`} />
      </div>

      <Link className="TodoListItem__link--wrapper" to={`todo/${todo?.id}`}>
        <div>
          <h4 className="TodoListItem__link--title">{todo?.title}</h4>
          <p>{todo?.dateTime}</p>
        </div>
        <Icons className="TodoListItem__link--icon" name="Link" />
      </Link>
    </li>
  );
};
export default TodoListItem;
