import { Component } from "react";
import "./App.css";
import Napchart from "napchart";
import TestObject from "./components/TestObject";
import { TwitterPicker } from "react-color";

const defaultData = {
  elements: [],
  shape: "circle",
  lanes: 1,
  colorTags: [
    { color: "red", tag: "Red" },
    { color: "blue", tag: "Blue" },
    { color: "orange", tag: "Orange" }
  ]
};

class App extends Component {
  state = { ...defaultData };

  componentDidMount() {
    const chartEl = document.getElementById("myNapchart").getContext("2d");
    // eslint-disable-next-line no-unused-vars
    const myNapchart = Napchart.init(
      chartEl,
      {
        data: defaultData,
        elements: this.state.elements,
        lanes: this.state.lanes
      },
      {
        interaction: true,
        penMode: true,
        background: "transparent",
        fontColor: "#aaaaaa"
      }
    );
    this.setState({ chart: chartEl });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("We updated something");
    const myNapchart = Napchart.init(
      this.state.chart,
      {
        data: this.state,
        elements: this.state.elements,
        lanes: this.state.lanes
      },
      {
        interaction: true,
        penMode: true,
        background: "transparent",
        fontColor: "#aaaaaa"
      }
    );
  }
  addLane = () => {
    this.setState((currState) => {
      const lanes = currState.lanes + 1;
      const ele = { text: currState.name, start: 0, end: 1440, lane: lanes - 1, color: currState.color };
      return { ...currState, lanes, elements: [...currState.elements, ele] };
    });
  };

  render() {
    return (
      <div className="App">
        <div style={{ width: "100%", height: "80vh" }}>
          <canvas id="myNapchart"></canvas>
        </div>
        Napchart
        <input placeholder="Type name here" type="text" onChange={(e) => this.setState({ name: e.target.value })} />
        <TwitterPicker onChange={(color) => this.setState({ color: color.hex })} />
        <button onClick={this.addLane}>add person</button>
        <TestObject numbers={[1, 2, 6, 6]} others="asd" hello="world" />
      </div>
    );
  }
}

export default App;
