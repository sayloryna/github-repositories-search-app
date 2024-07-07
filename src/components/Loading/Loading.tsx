import React from "react";
import "./Loading.scss";

const Loading = (): React.ReactElement => {
  return (
    <div className="loading">
      <div className="loader" aria-label="Loading"></div>;
    </div>
  );
};

export default Loading;
