// pass function as props 
import React from 'react'

export const Props = (props) => {
  return (
    <> 
        <h1>Pass function as Props</h1>
    <div>
        <button onClick={props.data}>Call Data function</button>
    </div>
    </>
  )
}
export default Props

