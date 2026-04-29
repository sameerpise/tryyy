import React, { Children, useState } from "react"
import { UserContextDemo } from "./UseContext"

 export default function Dataprovider({children})
 {
 const [inputs,setinputs]=useState({
       username:"",email:"",pass:"",mobile:""
   })
   const[newinputs,setnewinputs]=useState([])

   const [seacrh,find]=useState("")
   
   const filterData = newinputs.filter((findname)=> findname.username.toLowerCase().includes(seacrh.toLowerCase()))
  
   return(
    <UserContextDemo.Provider value={{inputs,setinputs,newinputs,setnewinputs,seacrh,find,filterData}}>
        {children}
    </UserContextDemo.Provider>
   )
}