import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HistoryContext } from "../App";

const HistoryScreen = () => {
  //Using global history state with useContext Hook
  const { historyArr } = useContext(HistoryContext);

  return (
    <div className="history">
      <h2>Timer History</h2>

      {/* Go back to timer page */}
      <Link to="/">
        <button>Go Back</button>
      </Link>

      {/* List all previous time stops */}
      <ul>
        {historyArr.map((el, i) => (
          <li key={i}>
            {el.hour} : {el.min} : {el.sec} : {el.milSec}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryScreen;
