import React from "react";
import "../App.css";
import { useState, useEffect } from "react";

export const Counter = () => {
  //js code

  // hook
  const [count, setCount] = useState(0);
  const [data, setdata] = useState(10);
  useEffect(() => {
    console.warn("use effect called with data only");
  },[data]);

  // one or more useeffects is used.
  //useeffect works with initalization,mount,update and unmount.
  // useeffect hr bar run hoga jitni br bhi hum page render(when we recheck the output in browser) krenge
  // usestate return an array

  // first value for show data
  // second for update

  // code run when btn hit
  // const incrementCount = () => {
  //   setCount(count + 1);
  // };

  // const incrementdata = () => {
  //   setdata(data + 1);
  // };

  

return (
  <div>
    {/* here we write html code  */}
    <div>count: {count} </div>
    <div>data: {data} </div>
    <button onClick={()=> setCount(count+1)}> Increment </button>
    <button onClick={()=>setdata(data+1)}> Increment data</button>

    
  </div>
);
}

// return should be one value but we have to
// create multiple div which disobey the return
// so we wrape all html code in one div

// {/* html me js use krne ke liye { }  */}
