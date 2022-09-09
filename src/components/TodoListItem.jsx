import { useContext } from "react";
import { Link } from "react-router-dom";
import { Checkbox, Icons } from "../components";
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
      <Checkbox
        id={todo?.id}
        value={todo?.isComplete}
        checked={todo?.isComplete}
        onChange={(e) => handleChangeStatus(e)}
        icon={todo?.isComplete ? `Complete` : `Incomplete`}
      />

      <Link className="TodoListItem__link" to={`todo/${todo?.id}`}>
        <div className="TodoListItem__link_content">
          <h3
            className={
              todo?.isComplete
                ? `TodoListItem__link_title-complete`
                : `TodoListItem__link_title-incomplete`
            }
          >
            {todo?.title}
          </h3>
          <h4 className="TodoListItem__link_date">{todo?.dateTime}</h4>
        </div>

        <div className="TodoListItem__link_icon">
          <Icons name="Link" />
        </div>
      </Link>
    </li>
  );
};
export default TodoListItem;
