import React from "react";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav>
      <p
        className="f3 mr4 link dim white underline pa3 pointer "
        onClick={() => onRouteChange("signin")}
      >
        Sign out
      </p>
    </nav>
  );
};

export default Navigation;
