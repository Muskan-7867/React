import { useState } from "react"
import './App.css'
import Mul from './Mul'

export const App = ()=>{
// here we write js code

// hook
const [count , setCount ] = useState(0)
// usestate return an array 

// first value for show data 
// second for update

const updatecount = () =>{

  setCount(count+1)
}












  return(
        // return should be one value but we have to
        // create multiple div which disobey the return 
        // so we wrape all html code in one div
  <div>
    {/* here we write html code  */}

    <div>count: {count} </div>
    {/* <button onClick={()=>setCount(1)} > Tap  </button> */}
    <button onClick={updatecount} > Tap  </button>
    {/* html me js use krne ke liye { }  */}







    <Mul/>

  </div>

  )

}

