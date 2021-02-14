import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import TimerScreen from "./screens/TimerScreen";
import HistoryScreen from "./screens/HistoryScreen";

//Global context to share history state
export const HistoryContext = React.createContext();

const App = () => {
  //Initial history state
  const [historyArr, setHistoryArr] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <HistoryContext.Provider value={{ historyArr, setHistoryArr }}>
          <Route path="/history" component={HistoryScreen} exact></Route>
          <Route path="/" component={TimerScreen} exact></Route>
        </HistoryContext.Provider>
      </div>
    </BrowserRouter>
  );
};

export default App;
