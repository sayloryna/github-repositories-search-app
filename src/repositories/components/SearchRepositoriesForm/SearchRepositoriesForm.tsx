import React, { useState } from "react";
import RepositoriesClient from "../../client/RepositoriesClient";
import "./SearchRepositoriesForm.scss";
import SearchIcon from "../SearchIcon";

const client = new RepositoriesClient();

const SearchRepositoriesForm = (): React.ReactElement => {
  const [username, setUsername] = useState("");

  return (
    <form
      className="form"
      onSubmit={async (event) => {
        event.preventDefault();
        await client.getAllRepos(username.trim());
      }}
    >
      <div className="form__searchbox">
        <input
          autoFocus
          aria-label="introduce a github username"
          className="username"
          type="text"
          id="username"
          placeholder="Introduce a Github username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          className="submitButton"
          type="submit"
          aria-label="Search user repositories"
        >
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchRepositoriesForm;
