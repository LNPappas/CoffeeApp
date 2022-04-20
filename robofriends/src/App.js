import "./App.css";
import React from "react";
import CardList from "./components/CardList";
import { robots } from "./components/robots";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
