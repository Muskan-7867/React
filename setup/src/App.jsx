import React ,{useState }from "react";
import './App.css';

// import{ Counters } from './components/Counters';
// import Funcomponents from "./components/Funcomponents";
// import { Counter } from "./components/Counter";
// import Comp from './components/Comp';              //class component
// import  Profile   from './components/Profile';        //ifelse
// import Nestedif   from "./components/nestedif";       //nestedif
import Student from "./components/Student";
import Props from './components/Props';
export const App = () => {
  function getData(){
    alert("Hello!! Today topic is pss function as props")
  }
  // const[name,setname] = useState("Muskan")
  return (
    <div className="App">

     
      {/* <Counters />
      <Funcomponents />
      <Comp />
      <Counter />
       <Profile />
      <Nestedif /> */}
      <Props  data={getData}/>
      
      
      
    </div>
  );
};
