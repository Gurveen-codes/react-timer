import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import TimerScreen from "./screens/TimerScreen";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route to="/" component={TimerScreen}></Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
