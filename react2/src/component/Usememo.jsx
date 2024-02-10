import React, { useState , useMemo } from "react";
//usememo hook enhance application performance
// use in functonal component
// jb hum props ya states  ke sath kam krte hai toh hmara component unwantedly update hota rhta hai tab hum usememo us krte hai
// jb koi function br br unwantedly call ho rya hu
//in this code multicount function is unwantedly call in item state but not update anything 
//isko remove krne ke liye usememo use kiya hai

export const Usememo = () => {
  const [count, setcount] = useState(0);
  const [item, setitem] = useState(5);

    const multicountMemo =useMemo(function multicount() {
     console.warn("hlooo");
     return count * 2;
  },[count])

  return (
    <div>
      <h2 className="mb-4 mt-3">Count:{count}</h2>
      <h2 className="mb-4">item:{item}</h2>
      <h2 className="mb-4">{multicountMemo}</h2>
      <button
        className=" bg-gray-400  rounded mr-5 p-2"
        onClick={() => setcount(count + 1)}
      >
        Update count
      </button>
      <button
        className=" bg-gray-400  rounded mr-5 p-2"
        onClick={() => setitem(item + 1)}
      >
        Update item
      </button>
    </div>
  );
};
