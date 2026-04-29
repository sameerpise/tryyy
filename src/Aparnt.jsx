import React from 'react'

import Child from './Child';
function Aprsnt(){
let count = 0;
    const username ="abc"

    const obj ={
        username:"user1",
        email:"user@gmail.com",
    }

    function Print(){
        console.log("this is from parent function")
    }
   

    return(
        <>
        <h1>i am a Parent component</h1>
         
       <Child user={username} object={obj} fun={Print} /> 

       {/* /// sending data to this components */}
        </>
    )
}
 export default Aprsnt;