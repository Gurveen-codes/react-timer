import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import TimerScreen from "./screens/TimerScreen";
import HistoryScreen from "./screens/HistoryScreen";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/history" component={HistoryScreen} exact></Route>
        <Route path="/" component={TimerScreen} exact></Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
