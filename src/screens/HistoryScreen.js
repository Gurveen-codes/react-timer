import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HistoryContext } from "../App";

const HistoryScreen = () => {
  const { historyArr } = useContext(HistoryContext);
  return (
    <div className="history">
      <h2>Timer History</h2>

      <Link to="/">
        <button>Go Back</button>
      </Link>

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
