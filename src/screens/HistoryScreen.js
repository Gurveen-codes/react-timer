import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HistoryContext } from "../App";

const HistoryScreen = () => {
  const { historyArr } = useContext(HistoryContext);
  return (
    <div>
      <button>
        <Link to="/">Go Back</Link>
      </button>
      <ul>
        {historyArr.map((el, i) => (
          <ul key={i}>
            {el.hour} : {el.min} : {el.sec} : {el.milSec}
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default HistoryScreen;
