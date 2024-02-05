import React from 'react';
import { Input } from './component/Input';
import { Form } from './component/Form';
import Login from './component/Login';
import  Stopwatch  from "./component/Stopwatch";


function App() {
  return (
    <>
      <div>
      {/* //   className='text-white h-[100vh] flex items-center justify-center bg-cover'
      //   style={{ backgroundImage: "url('../src/assets/nat.png')" }}
      // 
      //   <Login /> */}
      <Stopwatch />
      </div>
    </>
  );
}

export default App;
