import React from 'react';


export const Localstorage = () => {
  const handleSetItem = () => {
    const key = prompt("Enter key");
    const value = prompt("Enter value");
    if (key && value) {
      localStorage.setItem(key, value);
      const storedValue = localStorage.getItem(key);
      console.log(`The key is ${key} and the value is ${storedValue}`);
      console.log(key, value, "successfully stored in localStorage");
    } else {
      console.log("Invalid key or value");
    }
  };

  return (
    <div className='flex justify-center mt-80'>
      <button  onClick={handleSetItem}>Set LocalStorage Item</button>
    </div>
  );
};

export default Localstorage;
