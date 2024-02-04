import React ,{useState }from "react";
import './App.css';
// import{ Counters } from './components/Counters';
// import Funcomponents from "./components/Funcomponents";
// import { Counter } from "./components/Counter";
// import Comp from './components/Comp';              //class component
// import  Profile   from './components/Profile';        //ifelse
// import Nestedif   from "./components/nestedif";       //nestedif
import Student from "./components/Student";
export const App = () => {
  const[name,setname] = useState("Muskan")
  return (
    <div className="App">
      <h1>Props in react</h1>
      {/* <Counters />
      <Funcomponents />
      <Comp />
      <Counter />
       <Profile />
      <Nestedif /> */}
      
      <Student name={name} email='muskan@gmail.com'/>
      <Student name={name}  email='deepak@gmail.com'/>
      <button onClick={()=>{setname('friends')}}>Update Name</button>
    </div>
  );
};
