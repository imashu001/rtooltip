import React from "react";
import "./App.css";
import ReactTooltip from "react-tooltip";

function App() {
  return (
    <div className="App">
      <ReactTooltip id="tooltip" place="top" effect="solid">
        Tooltip
      </ReactTooltip>
    </div>
  );
}

export default App;
