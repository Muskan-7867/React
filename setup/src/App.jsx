import React,{useState} from 'react';
import { Map } from './components/Map';
import './App.css';

export const App = () => {
  const [data , setdata] = useState(false)
  return (
    <div className="App">
      {
        data ? <h1>Hide and show button</h1>:null
      }
      
      <button onClick={()=> setdata(false)}>Hide</button>
      <button onClick={()=> setdata(true)}>Show</button> <br /> <br />
      <div>
        <button onClick={()=> setdata(!data)}>Toggle</button>
      </div>
      {/* same function with toggle */}
    </div>
  );
};
