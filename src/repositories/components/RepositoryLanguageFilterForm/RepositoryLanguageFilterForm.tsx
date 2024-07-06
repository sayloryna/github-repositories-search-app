import React, { useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import "./RepositoryLanguageFilterForm.scss";

const RepositoryLanguageFilterForm = (): React.ReactElement => {
  const { languagesUsed } = useAppSelector(
    (state) => state.repositoriesReducer,
  );
  const initialFilter = "";

  const [filter, setFilter] = useState(initialFilter);

  let key = 0;
  return (
    <form
      className="selector-form"
      onChange={(event) => {
        event.preventDefault();
      }}
    >
      <select
        className="selector-form__group"
        name="language"
        id="language"
        aria-label="Select a Language to filter"
        onChange={(event) => {
          setFilter(event.target.value);
        }}
        value={filter}
      >
        <option defaultChecked value={""}>
          Language
        </option>
        {languagesUsed.toSorted().map((language) => {
          if (!language) {
            key++;
            return (
              <option key={key} value={""}>
                All
              </option>
            );
          }
          key++;
          return (
            <option key={key} value={language}>
              {language}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default RepositoryLanguageFilterForm;
