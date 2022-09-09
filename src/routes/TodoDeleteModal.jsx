import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Icons } from "../components";
import DataCTX from "../context/DataCTX";

const TodoDeleteModal = ({ todoId, toggleModal }) => {
  const navigate = useNavigate();
  const { deleteTodo } = useContext(DataCTX);
  console.log(todoId);

  const handleDeleteTodo = () => {
    deleteTodo(todoId);
    navigate("/");
  };

  return (
    <section className="TodoDeleteModal">
      <div className="TodoDeleteModal__wrapper">
        <div className="TodoDeleteModal__message">
          <h3 className="TodoDeleteModal__message_title">
            Are you sure you want to delete?
          </h3>

          <div className="TodoDeleteModal__message_btns">
            <button onClick={() => toggleModal()} className="TodoDeleteModal__message_btns-cancel">
              <Icons name="Back" />
              <p>Cancel</p>
            </button>
            <button onClick={handleDeleteTodo} className="TodoDeleteModal__message_btns-delete">
              <Icons name="Delete" />
              <p>Delete</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TodoDeleteModal;
