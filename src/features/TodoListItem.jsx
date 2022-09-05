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
    <li className="todoListItem">
      <div className="todoListItem__checkbox--wrapper">
        <input
          type="checkbox"
          onChange={(e) => handleChangeStatus(e)}
          checked={todo?.isComplete}
          value={todo?.isComplete}
          id={todo?.id}
        />
      </div>

      <Link className="todoListItem__link--wrapper" to={`todo/${todo?.id}`}>
        <h4 className="todoListItem__link--title">{todo?.title}</h4>
        <p>{todo?.dateTime}</p>
        <Icons className="todoListItem__link--icon" name="Link" />
      </Link>
    </li>
  );
};
export default TodoListItem;
