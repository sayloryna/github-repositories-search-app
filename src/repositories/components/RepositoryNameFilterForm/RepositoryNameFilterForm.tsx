import React, { useState } from "react";
import SearchIcon from "../SearchIcon/SearchIcon";

const RepositoryNameFilterForm = (): React.ReactElement => {
  const initialFilterState = "";
  const [filter, setFilter] = useState(initialFilterState);

  return (
    <form className="filter-form">
      <div className="form__searchbox">
        <input
          aria-label="Find a repository"
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
          aria-label="Search user repositories"
        >
          <SearchIcon color="grey" name="Search repositories" />
        </button>
      </div>
    </form>
  );
};

export default RepositoryNameFilterForm;
