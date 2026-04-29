import React, { useEffect, useState } from 'react'

export default function UseEffecttt() {

    const [num,changenum]=useState(0)

    const [num2,changenum2]=useState(2)

    const [loading,setloading]=useState(true)

    const [store,setStore]=useState([])

    const [serach,setSearch]=useState("")
   
    useEffect(()=>
        {

          async function data() {
            
            try{
              const getData = await fetch("https://jsonplaceholder.typicode.com/users")
              const ConvertToJson = await getData.json()
              setStore(ConvertToJson)
              setloading(false)
            }
            catch(err){
                console.log(err);
                setloading(false)
            }
          }
          
         setTimeout(()=>{

          data()
         },5000)


  console.log("data fected");

    },[])

/// for filtering Data
const filterData = store.filter( (namess)=>  namess.name.toLowerCase().includes(serach.toLowerCase())   )


    if(loading) return <h1 style={{textAlign:"center"}}>Loadinng</h1>
    
  return (
    <>

<h1>{num}</h1>

<h2>{num2}</h2>

<button onClick={()=>changenum(num+1)}>inc</button>

<button onClick={()=>changenum2(num-1)}>inc2</button>
<br></br>

<input type='text' value={serach} style={{marginTop:"20px"}} onChange={(e)=>setSearch(e.target.value)} />

{
  filterData.map((item,index)=>(
    <>
    <ul key={index}>
      <li>{item.name}</li>
    </ul>
    
    </>
  ))
  
}

    </>
  )
}
