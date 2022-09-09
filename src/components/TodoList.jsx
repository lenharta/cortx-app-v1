import { useCallback, useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ControlButton, SectionHeader } from "../components";
import DataCTX from "../context/DataCTX";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { todoData } = useContext(DataCTX);
  const [sortKey, setSortKey] = useState("all"); // all // incomplete // complete
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
    <section className="TodoList">
      <SectionHeader title={`Todos`} />

      <div className="TodoList__controls">
        <ControlButton
          value={`all`}
          onClick={handleChangeOrder}
          title={sortOrder.charAt(0).toLocaleUpperCase() + sortOrder.slice(1)}
        />
        <ControlButton
          value={`all`}
          onClick={(e) => handleChangeSortKey(e)}
          title={`All`}
        />
        <ControlButton
          value={`incomplete`}
          onClick={(e) => handleChangeSortKey(e)}
          title={`Incomplete`}
        />
        <ControlButton
          value={`complete`}
          onClick={(e) => handleChangeSortKey(e)}
          title={`Complete`}
        />
      </div>

      <ul className="TodoList__data">
        {filterAllTodos().map((todo) => (
          <TodoListItem key={`todo-${todo?.id}`} todo={todo} />
        ))}
      </ul>
    </section>
  );
};
export default TodoList;
