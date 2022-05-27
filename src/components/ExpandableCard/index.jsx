import React from "react";
import "./styles.css";

export const ExpandableCard = ({
  title,
  isCollapsed,
  children,
  handleClick,
}) => {
  return (
    <div className="expandablecard">
      <div className="expandablecard__header" onClick={handleClick}>
        ↘ &nbsp; {title}
      </div>
      <div
        className={`expandablecard__content ${isCollapsed ? "hide" : "show"}`}
      >
        {children}
      </div>
    </div>
  );
};
