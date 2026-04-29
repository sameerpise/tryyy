import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
  return (
    <>
    {/* <button onClick={()=>navigate (-1)}>
        go back
    </button> */}
    
    <button onClick={()=>navigate("/nav")}>
        go back
    </button>
 
    <h1>this is Home page</h1>
    
    
    </>
  )
}
