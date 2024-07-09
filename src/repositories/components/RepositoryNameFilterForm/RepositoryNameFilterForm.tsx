import React, { useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { loadRepositoryNameFilterActionCreator } from "../../slice/repositoriesSlice";
import SearchBar from "../../../components/SearchBar/SearchBar";
import "./RepositoryNameFilter.scss";

const RepositoryNameFilterForm = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const initialFilterState = "";
  const [filter, setFilter] = useState(initialFilterState);

  const loadRepositories = () => {
    const loadFilter = loadRepositoryNameFilterActionCreator(filter);

    dispatch(loadFilter);
  };
  return (
    <SearchBar
      autofocus
      maxLength={100}
      className=" form__searchbox--small"
      buttonLabel="Find Repository"
      inputClassName="repository-name"
      placeholder="Find Repository..."
      submitAction={loadRepositories}
      setState={setFilter}
      state={filter}
    />
  );
};

export default RepositoryNameFilterForm;
