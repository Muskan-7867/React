//in react we only use map function.
// map function is used for looping.
//The .map() method allows you to run a function on each item
// in the array, returning a new array as the result.
import React from "react";

export const Map = () => {
//   const array = ["muskan", "deepak", "palak"];
  //similarly use objects for more info
const array = [
    {name:"musu",email:"musu@gmail.com" ,age:19},
    {name:"depk",email:"depk@gmail.com" ,age:19},
]

  //apply map method
//   array.map((data) => {
//     console.warn(data);
//   });
  //using for loop
//   for( let i=0;i<array;i++){
//     console.log(array[i])
//   }
  //output will be same but return always support map function
  // let see in return using example
  return( 
     <div>
        <table>
             {
               array.map((data)=>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                </tr>
       
       )
     }
    
</table>
    {/* {
    //similarly we use for loop in return statement 

     for( let i=0; i<array.length; i++){
      <h1>{array[i]}</h1>
     }
    } //see return does not support for loop that why map is used */}
    </div>
  )
};
