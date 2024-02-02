import React, { useState } from "react";
import "../App.css";

export const Counters = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      {/* Display the count value */}
      <div>Count: {count}</div>
      {/* Button to increment count */}
      <button onClick={incrementCount}>Increment</button>
      {/* Button to decrement count */}
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};
