import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
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
  } else {
    <nav>
      <p
        className="f3 mr4 link dim white underline pa3 pointer "
        onClick={() => onRouteChange("home")}
      >
        Sign In
      </p>
      <p
        className="f3 mr4 link dim white underline pa3 pointer "
        onClick={() => onRouteChange("home")}
      >
        Register
      </p>
    </nav>;
  }
};

export default Navigation;
