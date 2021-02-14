import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { HistoryContext } from "../App";
import Clock from "../components/Clock";

const TimerScreen = () => {
  const { setHistoryArr } = useContext(HistoryContext);

  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [milSec, setMilSec] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (milSec > 100) {
      setSec((prevSec) => prevSec + 1);
      setMilSec(0);
    }
    if (sec > 10) {
      setMin((prevMin) => prevMin + 1);
      setSec(0);
    }
    if (min > 10) {
      setHour((prevHr) => prevHr + 1);
      setMin(0);
    }
  }, [milSec, sec, min]);

  ////////Start////////
  const start = () => {
    if (running) {
      return;
    }
    let id = setInterval(() => {
      setMilSec((prevMilSec) => prevMilSec + 1);
    }, 10);

    setIntervalId(id);
    setRunning(true);
  };

  ////////Stop////////
  const stop = () => {
    setRunning(false);
    clearInterval(intervalId);
    let time = { hour, min, sec, milSec };
    setHistoryArr((prevHistory) => [...prevHistory, time]);
  };

  ////////Reset////////
  const reset = () => {
    setRunning(false);
    clearInterval(intervalId);
    setMilSec(0);
    setSec(0);
    setMin(0);
    setHour(0);
  };
  return (
    <div className="timer">
      <Clock ms={milSec} sec={sec} min={min} hour={hour}></Clock>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>

      <Link to="/history">
        <button>History</button>
      </Link>
    </div>
  );
};

export default TimerScreen;
