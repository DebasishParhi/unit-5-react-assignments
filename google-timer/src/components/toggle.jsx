import { useContext, useState } from "react";
import { ToggleContext } from "./context/toggleContext";
import "./toggle.css";

export const Toggle = () => {
  const { toggle, toggleChange } = useContext(ToggleContext);

  return (
    <div id="toggleDiv">
      <div id="text">{toggle ? "Dark Mode" : "Light Mode"}</div>
      <div
        className="switch-container"
        style={
          toggle
            ? { backgroundColor: "#C4C4C4", border: "1px solid white" }
            : { backgroundColor: "#C4C4C4", border: "1px solid black" }
        }
      >
        <input type="checkbox" id="switch" onChange={toggleChange} />
        <div className="switch-color"></div>

        <label
          htmlFor="switch"
          style={
            toggle
              ? { backgroundColor: "#29CB97" }
              : { backgroundColor: "#2991CB" }
          }
        >
          {" "}
        </label>
      </div>
    </div>
  );
};