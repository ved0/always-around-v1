import React from "react";
import Navigation from "./Navigation";
import TopPanel from "./TopPanel";

const Header = () => {
  return (
        <header className="header">
          <div className="header-container">
          <TopPanel />
          <Navigation />
          </div>
        </header>
  );
};

export default Header;
