import React from 'react'

export default function Child({ fun,user,object })

 {
//  data will recive from parent component to this component as obj in key and value format
// Object.keyname

  return (
    <>
    <h1>i am a child component</h1>
    <h3>{user}</h3>
    
    <h3>{object.username}</h3>
    <h4>{ object.email}</h4>
    
    <button onClick={fun}>press me</button>

      {/* obj.keyname */}
    </>
  )
}
