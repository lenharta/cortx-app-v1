import React from "react";
import { Link, Outlet } from "react-router-dom";
import AddNewTodo from "../links/AddNewTodo";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <AddNewTodo />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
