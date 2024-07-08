import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

import "./RepositoryLanguageFilterForm.scss";
import { loadRepositoryLanguageFilterActionCreator } from "../../slice/repositoriesSlice";

const RepositoryLanguageFilterForm = (): React.ReactElement => {
  const { languagesUsed } = useAppSelector((state) => state.repositories);
  const dispatch = useAppDispatch();

  const initialFilter = "";
  const [filter, setFilter] = useState(initialFilter);

  const loadOptions = languagesUsed.map((language) => {
    if (!language) {
      return (
        <option key="all" value={""}>
          All
        </option>
      );
    }

    return (
      <option key={language} id="language" value={language}>
        {language}
      </option>
    );
  });

  return (
    <form
      className="selector-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <select
        className="selector-form__group"
        name="language"
        id="language"
        aria-label="Select a Language to filter"
        value={filter}
        onChange={(event) => {
          setFilter(event.target.value);
          const action = loadRepositoryLanguageFilterActionCreator(
            event.target.value,
          );
          dispatch(action);
        }}
      >
        <option defaultChecked key="language" value={""}>
          Language
        </option>
        {loadOptions}
      </select>
      <button type="submit" hidden></button>
    </form>
  );
};

export default RepositoryLanguageFilterForm;
