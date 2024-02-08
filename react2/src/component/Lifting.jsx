import React from 'react'

export const Lifting = (props) => {

  const data ='MUSKAN'
  return (
    <div>Lifting State up
      <h2>User name is: </h2>
      <button onClick={()=>props.alert(data)}>Click me</button>
    </div>

  )
}
export default Lifting;