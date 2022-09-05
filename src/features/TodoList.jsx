import { useCallback, useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import DataCTX from "../context/DataCTX";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { todoData } = useContext(DataCTX);
  const [sortKey, setSortKey] = useState("all"); //
  const [sortOrder, setSortOrder] = useState("newest"); // newest // oldest

  const filterAllTodos = useCallback(() => {
    const filteredTodos = () => {
      const newData = [...todoData];

      if (sortKey === "incomplete") {
        return newData.filter((todo) => (todo.isComplete === false ? 1 : 0));
      }
      if (sortKey === "complete") {
        return newData.filter((todo) => (todo.isComplete === true ? 1 : 0));
      }
      return newData;
    };

    if (sortOrder === "newest") {
      return filteredTodos().reverse();
    }
    return filteredTodos();
  }, [todoData, sortOrder, sortKey]);

  const handleChangeOrder = () => {
    if (sortOrder === "newest") {
      return setSortOrder("oldest");
    }
    return setSortOrder("newest");
  };

  const handleChangeSortKey = (e) => {
    e.preventDefault();
    setSortKey(e.target.value);
  };

  return (
    <section className="todoList">
      <header className="todoList__header">
        <h2>Todos</h2>
      </header>

      <div className="controls">
        <button className="controls__order" onClick={handleChangeOrder}>
          {sortOrder.charAt(0).toLocaleUpperCase() + sortOrder.slice(1)}
        </button>
        <button
          className="controls__all"
          value="all"
          onClick={(e) => handleChangeSortKey(e)}
        >
          All
        </button>
        <button
          className="controls__incomplete"
          value="incomplete"
          onClick={(e) => handleChangeSortKey(e)}
        >
          Incomplete
        </button>
        <button
          className="controls__complete"
          value="complete"
          onClick={(e) => handleChangeSortKey(e)}
        >
          Complete
        </button>
      </div>

      <ul className="todoList__Table">
        {filterAllTodos().map((todo) => (
          <TodoListItem key={`todo-${todo?.id}`} todo={todo} />
        ))}
      </ul>
    </section>
  );
};
export default TodoList;
