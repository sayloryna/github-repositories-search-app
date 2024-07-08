import React from "react";
import SearchIcon from "../SearchIcon/SearchIcon";
import "./SearchBar.scss";

type SearchBarProps = {
  submitAction: () => void;
  placeholder: string;
  className: string;
  inputClassName?: string;
  buttonLabel: string;
  maxLength: number;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({
  submitAction,
  placeholder,
  className = "",
  inputClassName = "",
  buttonLabel,
  maxLength = 200,
  state,
  setState,
}: SearchBarProps): React.ReactElement => {
  return (
    <form
      className={"form form__searchbox" + " " + className}
      onSubmit={(event) => {
        event.preventDefault();

        submitAction();
      }}
    >
      <input
        maxLength={maxLength}
        aria-label={placeholder}
        className={"form__searchbox__input" + " " + inputClassName}
        type="text"
        placeholder={placeholder}
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <button className="submit-button" type="submit" aria-label={buttonLabel}>
        <SearchIcon color="grey" name={buttonLabel} />
      </button>
    </form>
  );
};

export default SearchBar;
