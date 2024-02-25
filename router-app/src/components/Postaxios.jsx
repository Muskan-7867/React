import axios from 'axios'
import React, { useState } from 'react'

export const Postaxios = () => {
    const[title,settitle] = useState("")
    const[body,setbody] = useState("")

    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts",{
            title,
            body
        })
        .then((response)=> {
            console.log(response)
        })
       
    }
  return (
    <>
    <form onSubmit={handlesubmit}>
        <label>Enter Title:</label>
        <input type='text' name='Title' value={title} onChange={(e)=>settitle(e.target.value)}></input>
        <br/><br/>
        <label>Enter body:</label>
        <input type='text' name='body' value={body} onChange={(e)=>setbody(e.target.value)}></input>
        <br/><br/>
        <input type='submit' value="post"></input>
    </form>
    </>
    
  )
}
export default Postaxios;