import React from "react";
type SearchIconProps = {
  name: string;
  color: string;
};

const SearchIcon = ({ name, color }: SearchIconProps): React.ReactElement => {
  return (
    <svg
      role="img"
      viewBox="0 0 16 16"
      width="32"
      height="32"
      fill={color}
      aria-label={name}
    >
      <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
    </svg>
  );
};

export default SearchIcon;
