import React, { useEffect, useState } from 'react'
 
export default function LoadingEffect() {
const [login ,setlogin]=useState(true)
const [initial,setInitail]=useState(false)
    useEffect(()=>{

      if(!initial) return
       const setinterval= setInterval(()=>{
            console.log("loading.....")
        },2000)
 
        setTimeout(()=>{
            clearInterval(setinterval)
            console.log("login sucess...")
            setlogin(false)
        },8000)
    },[initial])
  return (
    <div>
      <button onClick={()=>setInitail(true)}>login</button>
      {
        login ? (
            <> 
            <h1 style={{textAlign:"center"}}>loading.....</h1>
           
            </>
        ):<h1 style={{textAlign:"center"}}>wellocme</h1>
      }
    </div>
  )
}
 
 