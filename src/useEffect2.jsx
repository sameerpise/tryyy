import React, { useEffect, useState } from 'react'
 
export default function UseEffect2() {
// const [login ,setlogin]=useState(false)

const [initail,setinitial]=useState(false)

    useEffect(()=>{

        if(!initail) return

        /// this line means run code when "initail" state is true
        //  then and only then run code below it

       const setinterval= setInterval(()=>{
            console.log("loading.....")
        },2000)

 /// every 2 second run above code

        setTimeout(()=>{
            clearInterval(setinterval)
            console.log("login success...")
        },8000)

   //// after completetion of 8 seconds this above code

    },[initail])

    // "initail" Run all UseEffect code when initail state valuew changes to True.
  return (
    <div>
      <button onClick={()=>setinitial(true)}>login</button>
    </div>
  )
}