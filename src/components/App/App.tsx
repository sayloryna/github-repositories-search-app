import React from "react";
import "./App.scss";
import SearchRepositoriesForm from "../../repositories/components/SearchRepositoriesForm/SearchRepositoriesForm";
import RepositoryCard from "../../repositories/components/RepositoryCard/RepositoryCard";
import { testRepository1 } from "../../mocks/mockRepositories";

const App = (): React.ReactElement => {
  return (
    <div className="app">
      <h1 className="main-title">Github Repositories</h1>
      <SearchRepositoriesForm />
      <RepositoryCard repository={testRepository1} />
    </div>
  );
};

export default App;
