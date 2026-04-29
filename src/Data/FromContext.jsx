import React, { useContext } from 'react'
// import { UserContext } from '../Hooks/context/UseContext'
import { UserContextDemo } from '../Hooks/context/B'
export default function FromContext() {
    const user = useContext(UserContextDemo)
  return (
    <>
  this is from FromContext file Hook <h1> {user}</h1> 
    
    </>
  )
}
