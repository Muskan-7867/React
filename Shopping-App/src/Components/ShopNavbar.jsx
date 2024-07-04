import React, { useEffect, useState } from 'react';

export const ShopNavbar = () => {
//   const [theme, setTheme] = useState("light");

  const themeChange = () => {
      let theme = localStorage.getItem("theme");

      if(theme === "dark"){

        localStorage.setItem("theme","light")
        // setTheme("light")
    }
    else{
        localStorage.setItem("theme","dark")
        // setTheme("dark")

      }
    };

// kl dekh lyuge je koi uth gya glan ph jniya okh kl krde a f hn theme variable nu shi krna ok
    useEffect(()=>{
    localStorage.setItem("theme","dark");
    
},[])
  
return (
    <div className={`h-screen flex flex-col justify-between`}>
      <div className={`${ theme === "dark"?" bg-slate-800" : "bg-slate-200"} h-12 flex items-center justify-between `}>
        <h1 className={`font-bold text-3xl ml-2 italic `}>Shopping APP</h1>
        <ul className={`flex ml-4 mr-10 `}>
          <li className={`text-xl mr-8 italic `}>HOME</li>
          <li className={`text-xl mr-8 italic `}>PRICE</li>
          <li className={`text-xl mr-8 italic `}>ABOUT</li>
          <li className={`text-xl mr-8 italic `}>CARD</li>
        </ul>
      </div>

      <div className='flex flex-col items-center justify-center text-5xl italic h-full'>
        <div>WELCOME TO SHOPPING APP</div>
        <button onClick={themeChange} className={`bg-slate-500 p-4 text-2xl text-white mt-28 rounded-lg italic `}>
           Theme
        </button>
      </div>
    </div>
  );
};

export default ShopNavbar;

// import { useState, useEffect } from "react";


// export default function App() {
//   const [theme, setTheme] = useState(
//     () => localStorage.getItem("theme") || "light"
//   );

//   useEffect(() => {
//     // Update the document body class based on the theme
//     document.body.className = theme === "dark" ? "dark" : "light";
//     // Save the selected theme to localStorage
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   function toggleTheme() {
//     // Toggle between light and dark themes
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//   }

//   return (
//     <div className={`App ${theme === "dark" ? "light" : "dark"}`}>
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </div>
//   );
// }
