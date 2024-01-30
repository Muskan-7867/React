import React from 'react'
import "../App.css"
import { useState } from "react";

 export const Counter = () => {
  //js code

  // hook
  const [count, setCount] = useState(0);
  // usestate return an array

  // first value for show data
  // second for update


    // code run when btn hit 
  const updatecount = () => {
    setCount(count + 1);
  };

  const minusValue = ()=>{
    setCount(count-1);
  }
  return (
    // return should be one value but we have to
    // create multiple div which disobey the return
    // so we wrape all html code in one div
    <div>
      {/* here we write html code  */}

      <div>count: {count} </div>
      {/* <button onClick={()=>setCount(1)} > Tap  </button> */}
      <button onClick={updatecount}> Tap </button>
      <br></br>
      <br></br>
      <button onClick={minusValue}> Minus </button>
      {/* html me js use krne ke liye { }  */}
    </div>
  );
};


