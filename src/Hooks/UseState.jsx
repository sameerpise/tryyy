import { useState } from "react"
import Vchild from "./Vchild"

  function Change({ username }){
    
const [data,setdata]=useState(0)
      function inc(){
        setdata(data+1)
      }
      function Dnc(){
        setdata(data-1)
      }
    return(
        <>
       <div className="container">
      <h1>UseState</h1>
     
<br></br>
   <h2> Good {data}</h2>
      <button onClick={inc}>+</button>
      <button onClick={Dnc}>-</button>
   
        </div>

<Vchild passFunction={inc} val={data} /> */}


<h1>{username}</h1>


        </>
    )
  }
  export default Change


  