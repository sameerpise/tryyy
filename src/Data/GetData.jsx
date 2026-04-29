import React from "react"
import UserData from './Data'
import obj2 from "./Data"
/// geting object data"UserData" from file name "./Data"
/// and just calling object
function GetData(){

    return (
        <>
{/* <h4>{
    UserData.username
   
}
{
    UserData.email
}


</h4>

<h2>{
    UserData.email
}</h2>
<h3>{
    UserData.Phone
}</h3>
<h4>{
    UserData.address
}</h4> */}

{
    obj2.map( ( item )=>
        (
        <>

        <ul style={{
            display:"flex",justifyContent:"center"
        }}>

<li style={{listStyleType:"none"}}>{item.user}</li>
<li style={{listStyleType:"none"}}>{item.address}</li>
<li style={{listStyleType:"none"}}>{item.Phone}</li>

        </ul>
        
        </>

    )
    
    )
}
        </>
    )
}
export default GetData