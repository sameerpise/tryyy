import React from 'react'
import { useParams } from 'react-router-dom'

export default function SinglePage() {
    const {id} =useParams()
   const Cards=[
        {
   id:1,
   name:"user1",
   email:"Title",
   password:1234567
    },
        {
   id:2,
   name:"User2",
   email:"Title",
   password:1234567
    },
        {
   id:3,
   name:"User3",
   email:"Title",
   password:1234567
    }


]
    const user = Cards.find((user)=>user.id===Number(id))
  return (
    <>SinglePage
 <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
</>
  )
}
