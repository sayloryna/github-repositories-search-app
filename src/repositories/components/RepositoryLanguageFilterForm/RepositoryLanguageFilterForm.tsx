import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

import "./RepositoryLanguageFilterForm.scss";
import { loadRepositoryLanguageFilterActionCreator } from "../../slice/repositoriesSlice";

const RepositoryLanguageFilterForm = (): React.ReactElement => {
  const { languagesUsed } = useAppSelector(
    (state) => state.repositoriesReducer,
  );
  const dispatch = useAppDispatch();

  const initialFilter = "";
  const [filter, setFilter] = useState(initialFilter);

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
        <option defaultChecked value={""}>
          Language
        </option>
        {languagesUsed.map((language) => {
          if (!language) {
            return <option value={""}>All</option>;
          }

          return (
            <option id="language" value={language}>
              {language}
            </option>
          );
        })}
      </select>
      <button type="submit" hidden></button>
    </form>
  );
};

export default RepositoryLanguageFilterForm;
