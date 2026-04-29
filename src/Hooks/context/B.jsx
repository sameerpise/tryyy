import React, { createContext } from 'react'
import A from './A'
// import { UserContext } from './UseContext'
import FromContext from '../../Data/FromContext'

export const UserContextDemo = createContext()

export default function B() {
    const fromB = "this is send from child to parent"
  return (
    <UserContextDemo.Provider value={fromB}>
    
    <A />

    <FromContext />
  
    </UserContextDemo.Provider>
  )
}
