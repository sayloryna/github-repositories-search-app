import React from "react";
import SearchIcon from "../SearchIcon/SearchIcon";

type SearchBarProps = {
  submitAction: () => void;

  placeholder: string;
  className: string;
  inputClassName: string;
  buttonLabel: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({
  submitAction,
  placeholder,
  className = "",
  inputClassName,
  buttonLabel,
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
        aria-label={inputClassName.split("-").join(" ")}
        className={inputClassName}
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
