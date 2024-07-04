import React, { useState } from "react";
import RepositoriesClient from "../../client/RepositoriesClient";
import SearchIcon from "../SearchIcon/SearchIcon";
import "./SearchRepositoriesForm.scss";
import { useAppDispatch } from "../../../store/hooks";
import { loadRepositoriesActionCreator } from "../../slice/repositoriesSlice";

const client = new RepositoriesClient();

const SearchRepositoriesForm = (): React.ReactElement => {
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();
  return (
    <form
      className="form"
      onSubmit={async (event) => {
        event.preventDefault();

        const repositories = await client.getAllRepos(username.trim());
        const loadRepositories = loadRepositoriesActionCreator(repositories);
        dispatch(loadRepositories);
        setUsername("");
      }}
    >
      <div className="form__searchbox">
        <input
          required
          autoFocus
          maxLength={39}
          aria-label="introduce a github username"
          className="username"
          type="text"
          id="username"
          placeholder="Introduce a Github username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
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

export default SearchRepositoriesForm;
