import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { notifyError } from "../../../notify/notifyError";
import SearchIcon from "../../../components/SearchIcon/SearchIcon";
import { useAppDispatch } from "../../../store/hooks";
import { loadRepositoriesActionCreator } from "../../slice/repositoriesSlice";
import { Repository } from "../../types";
import "./SearchRepositoriesForm.scss";
import { client } from "../../client/RepositoriesClient";

const SearchRepositoriesForm = (): React.ReactElement => {
  const initialUsernameState = "";
  const [username, setUsername] = useState(initialUsernameState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <form
      className="form"
      onSubmit={async (event) => {
        event.preventDefault();

        try {
          const newRepositories = await client.getAllRepos(username.trim());

          const loadRepositories =
            loadRepositoriesActionCreator(newRepositories);

          dispatch(loadRepositories);
          navigate(`/search/${username.trim()}`);
        } catch {
          const emptyRepositoriesList: Repository[] = [];

          const loadEmptyRepositoriesList = loadRepositoriesActionCreator(
            emptyRepositoriesList,
          );

          notifyError(`Unable to get repositories from user: ${username}`);

          dispatch(loadEmptyRepositoriesList);
        }

        setUsername(initialUsernameState);
      }}
    >
      <div className="form__searchbox">
        <input
          required
          autoFocus
          maxLength={39}
          className="username"
          type="text"
          aria-label="username"
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
