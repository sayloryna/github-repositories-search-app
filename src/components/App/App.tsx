import React from "react";
import { Bounce, ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import SearchRepositoriesForm from "../../repositories/components/SearchRepositoriesForm/SearchRepositoriesForm";
import "./App.scss";

const App = (): React.ReactElement => {
  return (
    <div className="app">
      <h1 className="main-title">Github Repositories</h1>
      <SearchRepositoriesForm />
      <Outlet />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        theme="colored"
        transition={Bounce}
        role="alert"
        limit={3}
      />
    </div>
  );
};

export default App;
