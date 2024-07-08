import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../../components/SearchBar/SearchBar";
import "./SearchRepositoriesForm.scss";

const SearchRepositoriesForm = (): React.ReactElement => {
  const initialUsernameState = "";
  const [username, setUsername] = useState(initialUsernameState);
  const navigate = useNavigate();

  const submitAction = (): void => {
    navigate(`/search/${username.trim()}`);

    setUsername(initialUsernameState);
  };

  return (
    <SearchBar
      autofocus
      required
      buttonLabel="Search user repositories"
      className=""
      maxLength={39}
      placeholder="Introduce a Github username"
      setState={setUsername}
      state={username}
      submitAction={submitAction}
    />
  );
};

export default SearchRepositoriesForm;
