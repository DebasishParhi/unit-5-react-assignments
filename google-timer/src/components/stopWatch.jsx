import { useEffect, useRef, useState } from "react";

export const Stopwatch = ()=>{
    const [msec, setMsec] = useState("00");
    const [sec, setSec] = useState("00");
    const [min, setMin] = useState("00");
    const [hour, setHour] = useState("00");
    const [click, setClick] = useState(0);
    const counterRef = useRef(null);
  
    useEffect(() => {
      start();
    }, []);
    const start = () => {
      setClick((prev) => prev + 1);
  
      if (click === 1) {
        counterRef.current = setInterval(() => {
          setMsec((msec) => {
            let a = +msec;
            if (a < 9) {
              return "0" + (a + 1);
            }
            return a + 1;
          });
        }, 10);
      }
    };
    if (msec > 99) {
      setMsec("00");
      let a = +sec;
      if (a < 9) {
        setSec("0" + (a + 1));
      } else {
        setSec(a + 1);
      }
    }
    if (sec > 59) {
      setSec("00");
      let a = +min;
      if (a < 9) {
        setMin("0" + (a + 1));
      } else {
        setMin(a + 1);
      }
    }
    if (min > 59) {
      setMin("00");
      let a = +hour;
      if (a < 9) {
        setHour("0" + (a + 1));
      } else {
        setHour(a + 1);
      }
    }
    return (
      <div>
        <h1>Stop Watch</h1>
        <div className="stopwatch">
          {hour}:{min}:{sec}:{msec}
        </div>
        <button className="pause" onClick={() => [clearInterval(counterRef.current), setClick(1)]}>
          Pause
        </button>
        <button onClick={start} className="start">Start</button>
        <button className="reset"
          onClick={() => {
            setMsec("00");
            clearInterval(counterRef.current);
            setClick(1);
            setSec("00");
            setMin("00");
            setHour("00");
          }}
        >
          Reset
        </button>
      </div>
    );
}