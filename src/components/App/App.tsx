import React from "react";
import SearchRepositoriesForm from "../../repositories/components/SearchRepositoriesForm/SearchRepositoriesForm";
import "./App.scss";

const App = (): React.ReactElement => {
  return (
    <div className="app">
      <h1 className="main-title">Github Repositories</h1>
      <SearchRepositoriesForm />
    </div>
  );
};

export default App;
