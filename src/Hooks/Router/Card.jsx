import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Card() {
    const navigate = useNavigate()
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
  return (
    <>
    <div className='card'>
        {
            Cards.map((item)=>(
                <>
                <ul>
                    <li>{item.name}</li>
                    <button onClick={()=>navigate(`/user/${item.id}`)}>Show Deatils</button>
                </ul>
                </>
            ))
        }
    </div>
    
    </>
  )
}
