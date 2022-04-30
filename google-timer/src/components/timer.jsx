import { useState, useEffect, useRef } from "react";

export const Timer = () => {
  const [sec, setSec] = useState("59");
  const [min, setMin] = useState("00");
  const [hour, setHour] = useState("00");
  const [buttonChange, setButtonChange] = useState(true);
  const [click, setClick] = useState(0);
  const [show, setShow] = useState(true);
  const counterRef = useRef(null);

  useEffect(() => {
    start();
  }, []);
  const start = () => {
    setClick((prev) => prev + 1);

    if (click === 1) {
      setButtonChange(!buttonChange);
      counterRef.current = setInterval(() => {
        setSec((sec) => {
          let a = +sec;
          if (a <= 10 && a > 0) {
            return "0" + (a - 1);
          } else if (a < 0) {
            return "59";
          }
          return a - 1;
        });
      }, 1000);
    } else if (click === 2) {
      setButtonChange(!buttonChange);
      setClick(1);
      pause();
    }
  };
  if (sec < 0) {
    setSec("59");

    let a = +min;
    if (a <= 10 && a > 0) {
      setMin("0" + (a - 1));
    } else {
      setMin(a - 1);
    }
  }
  if (min < 0) {
    setMin("59");
    let a = +hour;
    if (a <= 10 && a > 0) {
      setHour("0" + (a - 1));
    } else {
      setHour(a - 1);
    }
  }
  if (sec == 0 && min == 0 && hour == 0) {
    clearInterval(counterRef.current);
  }
  const pause = () => {
    clearInterval(counterRef.current);
  };
  const handleChange = (el) => {
    if (el.target.id === "sec") {
      if (el.target.value > 59) {
        setSec(59);
      } else if (el.target.value < 0) {
        setSec("00");
      } else {
        setSec(el.target.value);
      }
    }
    if (el.target.id === "min") {
      if (el.target.value > 59) {
        setMin(59);
      } else if (el.target.value < 0) {
        setMin("00");
      } else {
        setMin(el.target.value);
      }
    }
    if (el.target.id === "hour") {
      if (el.target.value > 23) {
        setHour(23);
      } else if (el.target.value < 0) {
        setHour("00");
      } else {
        setHour(el.target.value);
      }
    }
  };
  return (
    <div>
      {show ? null : (
        <form>
          <h1>Edit Timer</h1>
          <span>Hrs-</span>
          <input
            type="number"
            onChange={handleChange}
            placeholder="HH"
            id="hour"
          />
          <span> : Mins-</span>
          <input
            type="number"
            onChange={handleChange}
            placeholder="MM"
            id="min"
          />
          <span> : Secs-</span>
          <input
            type="number"
            onChange={handleChange}
            placeholder="SS"
            id="sec"
          />
        </form>
      )}

      {show ? (
        <div>
          <h1>Timer</h1>
          <div className="stopwatch">
            {hour}:{min}:{sec}
          </div>
          <button onClick={start} className="start">
            {buttonChange ? "start" : "Pause"}
          </button>
          <button
            className="reset"
            onClick={() => {
              clearInterval(counterRef.current);
              setHour("00");
              setMin("00");
              setSec("59");
              buttonChange(true);
            }}
          >
            Reset
          </button>{" "}
        </div>
      ) : null}
      <button
        className="edit"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Edit" : "Done"}
      </button>
    </div>
  );
};