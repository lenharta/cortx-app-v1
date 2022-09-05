import Icons from "../assets/Icons";
import { Link } from "react-router-dom";

const AddNewTodo = () => {
  return (
    <Link className="AddNewTodo" to="todo">
      <Icons name="Add" />
    </Link>
  );
};
export default AddNewTodo;
