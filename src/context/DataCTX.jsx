import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios";

export const FIREBASE_URL = "https://cortx-app-v1-default-rtdb.firebaseio.com";

const DataCTX = createContext({});

export const DataProvider = ({ children }) => {
  const [todoData, setTodoData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [completeCount, setCompleteCount] = useState(0);
  const [incompleteCount, setIncompleteCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const setTodoCounts = useCallback(
    (data) => {
      const newData = [...data];

      const setAllCounts = () => {
        const iCR = newData.filter((todo) => todo.isComplete === false);
        const cCR = newData.filter((todo) => todo.isComplete === true);
        setTotalCount(newData.length);
        setIncompleteCount(iCR.length);
        setCompleteCount(cCR.length);
      };

      setAllCounts();
    },
    [todoData, incompleteCount, completeCount, totalCount]
  );

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
      getAllTodos();
      setIsLoading(false);
    }
  };

  const deleteTodo = async (todoId) => {
    console.log(todoId);
    setIsLoading(true);
    try {
      const res = axios.delete(`${FIREBASE_URL}/todos/${todoId}.json`);
      console.log(res);
      const newData = [...todoData];
      const filterTodos = newData.filter((todo) => todo.id !== todoId);
      setTodoData(filterTodos);
    } catch (err) {
      setError(true);
      setErrorMsg("Failed to delete Todo");
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  useEffect(() => {
    setTodoCounts(todoData);
  }, [todoData]);

  // console.log("totalCount", totalCount);
  // console.log("completeCount", completeCount);
  // console.log("incompleteCount", incompleteCount);

  return (
    <DataCTX.Provider
      value={{
        getAllTodos,
        addNewTodo,
        changeTodoStatus,
        editTodo,
        deleteTodo,

        todoData,
        totalCount,
        completeCount,
        incompleteCount,
        isLoading,
        errorMsg,
        error,
      }}
    >
      {children}
    </DataCTX.Provider>
  );
};
export default DataCTX;
