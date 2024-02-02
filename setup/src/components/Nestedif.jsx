
import React, { useState } from "react";

function Nestedif() {
  const [Login, setLogin] = useState();
// 1,2,3 users
  return (
    <div>
        // basically it is a ternary operator
        
      {
      Login==1?
      <h1>Thanks user 1</h1>
      :Login==2?<h1>thanks user 2</h1>
      :<h1>Thanks user 3</h1>
      }
    </div>
  );
}
export default Nestedif;