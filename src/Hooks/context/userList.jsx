 import { useContext } from "react";
import { UserContextDemo } from "./UseContext";
import './styleee.css'
 export default function List(){
   const { filterData }= useContext(UserContextDemo)
    return(
        <>
        <div className="list-box" style={{border:"1px solid red"}}>
        
        {filterData.map((item,index)=>(
          <div className="card" key={index}>
            
            <p><b>Name:</b> {item.username}</p>
            <p><b>Email:</b> {item.email}</p>
            <p><b>Password:</b> {item.pass}</p>
            <p><b>Mobile:</b> {item.mobile}</p>
          </div>
        ))}
      </div>
        </>
    )
 }