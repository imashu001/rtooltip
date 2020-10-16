import React from "react";
import "./App.css";
import Tooltip from "./Tooltip";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showTtip: false,
      position: "top",
    };
  }
  togglettip = (e) => {
    if (this.state.position === "") {
      this.setState({
        position: "top",
      });
    }
    this.setState({
      showTtip: !this.state.showTtip,
    });
  };
  handleChange = (e) => {
    const a = e.target.value;
    console.log(a);
    if (a !== null) {
      this.setState({
        position: a,
      });
    }
  };
  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.position}
          placeholder="Position"
        />
        <br />
        <br />
        <p> Current position of tooltip is {this.state.position}</p>
        <div
          className="ttip"
          onMouseOver={this.togglettip}
          onMouseOut={this.togglettip}
        >
          Hover Over
          {this.state.showTtip && <Tooltip position={this.state.position} />}
        </div>
      </div>
    );
  }
}

export default App;
