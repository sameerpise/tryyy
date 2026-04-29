import React, { useContext } from 'react'
import { UserContextDemo }from './B'

// import { UserContext } from './UseContext'
export default function A() {
    const getfromB = useContext(UserContextDemo)
  return (
    <>
    
    { getfromB }
    </>
  )
}
