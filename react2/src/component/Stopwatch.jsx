import React, { useState, useEffect } from "react";

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [running]);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl  font-semibold pb-2 ">Stopwatch</h1>
      <div className="text-xl font-semibold">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}:</span>
      </div>
      <div className=" w-1/3 max-w-sm flex justify-evenly mt-5  flex-row">
        {running ? (
          <button
            onClick={() => setRunning(false)}
            className="border rounded-lg py-1 px-2  border-black"
          >
            Stop
          </button>
        ) : (
          <button
            onClick={() => setRunning(true)}
            className=" border rounded-lg py-1 px-2   border-black"
          >
            Start
          </button>
        )}

        <button
          onClick={() => setTime(0)}
          className="border rounded-lg py-1 px-2  border-black  "
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Stopwatch;
