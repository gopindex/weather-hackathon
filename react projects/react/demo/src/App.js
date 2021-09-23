import "./App.css";
import React, { Component } from "react";
import Demo from "./Demo";
import Body from "./Body";
import Footer from "./Footer";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        {/* inline CSS */}
        <h1
          style={{
            color: "white",
            backgroundColor: "tomato",
          }}
        >
          Hello world
        </h1>
        <h2>Iam from main function</h2>
        <Demo></Demo>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }
}
export default App