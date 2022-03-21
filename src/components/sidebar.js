import React from "react";

const Sidebar = (menuToggle) => {
  return (
    <>
      <ul
        className={menuToggle.eventAction ? "navigation active" : "navigation "}
      >
        <li className="li">
          <span className="span">Home</span>
        </li>
        <li className="li">
          <span className="span">About</span>
        </li>
        <li className="li">
          <span className="span">Contact</span>
        </li>
        <li className="li">
          <span className="span">ComeToUs</span>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
