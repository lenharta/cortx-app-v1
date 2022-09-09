import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components";
import { AnimatePresence } from "framer-motion";
import { DataProvider } from "./context/DataCTX";
import {
  Dashboard,
  TodoNew,
  Todo,
  TodoEdit,
  NotFound,
  TodoDeleteModal,
} from "./routes";
import "./scss/_index.scss";

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <DataProvider>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />

              <Route path="todo">
                <Route index element={<TodoNew />} />
                <Route path=":todoId" element={<Todo />} />
              </Route>

              <Route path="edit/:todoId" element={<TodoEdit />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </DataProvider>
      </AnimatePresence>
    </>
  );
};
export default App;
