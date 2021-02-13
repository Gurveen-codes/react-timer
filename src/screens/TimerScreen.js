import React, { useState, useEffect } from "react";
import Clock from "../components/Clock";

const TimerScreen = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [milSec, setMilSec] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (milSec > 10) {
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
  }, [milSec, sec, min, history]);

  const start = () => {
    let id = setInterval(() => {
      setMilSec((prevMilSec) => prevMilSec + 1);
    }, 100);
    setIntervalId(id);
  };

  const stop = () => {
    clearInterval(intervalId);
    let time = { hour, min, sec, milSec };
    setHistory((prevHistory) => [...prevHistory, time]);
  };

  const reset = () => {
    clearInterval(intervalId);
    setMilSec(0);
    setSec(0);
    setMin(0);
    setHour(0);
  };
  return (
    <div className="App">
      <Clock ms={milSec} sec={sec} min={min} hour={hour}></Clock>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
      <div>
        <ul>
          {history.map((el, i) => (
            <ul key={i}>
              {el.hour} : {el.min} : {el.sec} : {el.milSec}
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimerScreen;
