import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          className="f3 mr4 link dim white underline pa3 pointer "
          onClick={() => onRouteChange("signout")}
        >
          Sign out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          className="f3 mr4 link dim white underline pa3 pointer "
          onClick={() => onRouteChange("signin")}
        >
          Sign In
        </p>
        <p
          className="f3 mr4 link dim white underline pa3 pointer "
          onClick={() => onRouteChange("register")}
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
