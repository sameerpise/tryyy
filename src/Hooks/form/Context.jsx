import React, { createContext } from 'react'

export const CreateContext = createContext()
export default function Context() {


    const login=()=>{
        
    }
  return (
    <CreateContext.Provider value={login,logout}>

  


    </CreateContext.Provider>
  )
}
