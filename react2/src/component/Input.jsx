import React, { useState } from "react";

export const Input = () => {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(val) 
  {
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false)
  }

  return (

    <div className='App flex justify-center items-center h-screen flex-col'>
      {
        print?
        <h1 className="text-black-400 bg-gray-500 my-2   text-4xl font-bold">{data}</h1>
        :null
      }
     
      <input className="border-blue-500  border-8" type='text' onChange={getData} />
      <button className="border-gray-300 2px solid gray my-5 border-8" onClick={()=>setPrint(true)}>Print data</button>
    </div>
  );
}

export default Input;

