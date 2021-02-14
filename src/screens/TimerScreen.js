import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { HistoryContext } from "../App";
import Clock from "../components/Clock";

const TimerScreen = () => {
  //Accessing Global state with useContext Hook
  const { setHistoryArr } = useContext(HistoryContext);

  //Setting up intial timer state
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [milSec, setMilSec] = useState(0);

  //State for storing setInterval id
  const [intervalId, setIntervalId] = useState(null);

  //timer running state
  const [running, setRunning] = useState(false);

  useEffect(() => {
    //This useEffect will run on every re-render cycle and determines new state for all time values
    if (milSec > 100) {
      setSec((prevSec) => prevSec + 1);
      setMilSec(0);
    }
    if (sec > 60) {
      setMin((prevMin) => prevMin + 1);
      setSec(0);
    }
    if (min > 60) {
      setHour((prevHr) => prevHr + 1);
      setMin(0);
    }
  }, [milSec, sec, min]);

  ////////Start////////
  const start = () => {
    if (running) {
      //If timer is already running, simply return
      return;
    }
    let id = setInterval(() => {
      //Otherwise setup a setInterval which will increment milSec state by one and thus triggering a re-render cycle will then use useEffect Hook to update timer
      setMilSec((prevMilSec) => prevMilSec + 1);
    }, 10);

    setIntervalId(id);

    setRunning(true);
  };

  ////////Stop////////
  const stop = () => {
    setRunning(false);

    clearInterval(intervalId); //Clear setInterval

    let time = { hour, min, sec, milSec };
    //Add current time to global history state
    setHistoryArr((prevHistory) => [...prevHistory, time]);
  };

  ////////Reset////////
  const reset = () => {
    //Clear setInterval and reset all timer values to 0
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

      {/* Link to view all stop History */}
      <Link to="/history">
        <button>History</button>
      </Link>
    </div>
  );
};

export default TimerScreen;
