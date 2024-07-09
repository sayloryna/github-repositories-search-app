import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { loadRepositoryLanguageFilterActionCreator } from "../../slice/repositoriesSlice";
import "./RepositoryLanguageFilterForm.scss";

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

  const changeAction = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setFilter(event.target.value);
    const action = loadRepositoryLanguageFilterActionCreator(
      event.target.value,
    );
    dispatch(action);
  };

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
        onChange={changeAction}
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
