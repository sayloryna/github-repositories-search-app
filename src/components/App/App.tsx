import React from "react";
import { Bounce, ToastContainer } from "react-toastify";
import SearchRepositoriesForm from "../../repositories/components/SearchRepositoriesForm/SearchRepositoriesForm";
import RepositoriesList from "../../repositories/components/RepositoriesList/RepositoriesList";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

const App = (): React.ReactElement => {
  return (
    <div className="app">
      <h1 className="main-title">Github Repositories</h1>
      <SearchRepositoriesForm />
      <RepositoriesList />
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
