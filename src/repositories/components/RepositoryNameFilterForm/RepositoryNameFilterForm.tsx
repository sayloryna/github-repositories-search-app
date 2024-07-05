import React, { useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { loadRepositoryNameFilterActionCreator } from "../../slice/repositoriesSlice";
import "./RepositoryNameFilter.scss";
import SearchIcon from "../SearchIcon/SearchIcon";

const RepositoryNameFilterForm = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const initialFilterState = "";
  const [filter, setFilter] = useState(initialFilterState);

  return (
    <form
      className="filter-form"
      onSubmit={(event) => {
        event.preventDefault();

        const loadFilter = loadRepositoryNameFilterActionCreator(filter);

        dispatch(loadFilter);
      }}
    >
      <div className="form__searchbox form__searchbox--small">
        <input
          aria-label="repository name"
          className="repository-name"
          type="text"
          id="name"
          placeholder="Find a repository..."
          value={filter}
          onChange={(event) => {
            setFilter(event.target.value);
          }}
        />
        <button
          className="submitButton"
          type="submit"
          aria-label="Find repository"
        >
          <SearchIcon color="grey" name="Find repository" />
        </button>
      </div>
    </form>
  );
};

export default RepositoryNameFilterForm;
