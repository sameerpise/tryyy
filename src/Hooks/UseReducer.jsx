import React, { useReducer } from 'react'

export default function UseReducer() {
const initialState={count:0}

function mainfunction(state,action)
{
 
    switch(action.type) {
        case "inc":
            return{count:state.count+1}
            
        case "dec":
            return{count:state.count-1}
    }


}

    const[state,dispatch]=useReducer(mainfunction,initialState)

  return (
    <>
    <h3>initial state {state.count}</h3>
    <button onClick={()=>dispatch({type:"inc"})}>inc</button>
    <button onClick={()=>dispatch({type:"dec"})}>dec</button>
    <button>dec</button>
    
    </>
  )
}
