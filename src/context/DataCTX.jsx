import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const FIREBASE_URL = "https://cortx-app-v1-default-rtdb.firebaseio.com";

const DataCTX = createContext({});

export const DataProvider = ({ children }) => {
  const [todoData, setTodoData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const getAllTodos = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${FIREBASE_URL}/todos.json`);
      const data = await res.data;
      const loadedTodos = Object.entries(data).map((entry) =>
        Object.assign(entry[1], { id: entry[0] })
      );
      setTodoData(loadedTodos);
    } catch (err) {
      setError(true);
      setErrorMsg("Error creating new todo");
    } finally {
      setIsLoading(false);
    }
  };

  const addNewTodo = async (newTodo) => {
    setIsLoading(true);
    try {
      const res = await axios.post(`${FIREBASE_URL}/todos.json`, newTodo);
      console.log(res);
    } catch (err) {
      setError(true);
      setErrorMsg("Error creating new todo");
    } finally {
      setIsLoading(false);
      getAllTodos();
    }
  };

  const changeTodoStatus = async (initialTodo) => {
    setIsLoading(true);
    const { id, isComplete } = initialTodo;
    const todoToComplete = { isComplete: isComplete };

    try {
      const res = await axios.patch(
        `${FIREBASE_URL}/todos/${id}.json`,
        todoToComplete
      );
      return res.data;
    } catch (err) {
      setError(true);
      setErrorMsg("Failed to update Todo Status");
      console.log(err.message);
    } finally {
      setIsLoading(false);
      getAllTodos();
    }
  };

  const editTodo = async (initialTodo) => {
    console.log(initialTodo);
    setIsLoading(true);
    const { id, dateTime, title, description, isComplete } = initialTodo;
    const todoToEdit = {
      dateTime: dateTime,
      description: description,
      isComplete: isComplete,
      title: title,
    };

    try {
      const res = await axios.put(
        `${FIREBASE_URL}/todos/${id}.json`,
        todoToEdit
      );
      console.log(res);
    } catch (err) {
      setError(true);
      setErrorMsg("Failed to update Todo Status");
      console.log(err.message);
    } finally {
      setIsLoading(false);
      getAllTodos();
    }
  };

  const deleteTodo = async () => {}

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <DataCTX.Provider
      value={{
        getAllTodos,
        addNewTodo,
        changeTodoStatus,
        editTodo,
        deleteTodo,

        todoData,
        isLoading,
        error,
        errorMsg,
      }}
    >
      {children}
    </DataCTX.Provider>
  );
};
export default DataCTX;
