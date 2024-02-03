import React, { useState } from "react";
import { Navbar } from "./Navbar";

export const Input = () => {
  const [data, setData] = useState("");
  const [print, setPrint] = useState(false);

  function getData(val) {
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <>
      <Navbar />
      <div className="App flex flex-col items-center mt-20">
        <div className="flex flex-col items-center mb-4">
          <input
            className="border border-solid border-black-800 bg-gray-200 p-2 rounded"
            type="text"
            onChange={getData}
          />
          <button
            className="bg-black text-white p-2 rounded mt-2"
            onClick={() => setPrint(true)}
          >
            Print data
          </button>
        </div>
        {print && (
          <h1 className="text-white bg-gray-600 text-4xl font-bold p-4 rounded">
            {data}
          </h1>
        )}
      </div>
    </>
  );
};

export default Input;
