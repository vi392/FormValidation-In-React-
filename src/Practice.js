
import React, { useState } from 'react'

function Practice() {

    const[count1, setcount]= useState(0);
    const[input, setinput0]= useState("");
     

   function increment(){
     setcount(count1+1);
   }
    const decrement=()=>{
       setcount(count1-1)
  }

  function add1(){
    if(parseInt(input)%2===0){
        setcount(count1+parseInt(input))

    }else
    alert('kjkj')
  }

  
  return (
<>
     <div>
        <input type='number' value={input} onChange={(e)=>setinput0(e.target.value)} placeholder='enter your number' ></input><br></br>
       
        <button  onClick={()=>increment()}>Increment</button>
        <button  >{count1}</button>
        <button  onClick={()=>decrement()}>decrement</button>
        <button onClick={()=>add1}>Add even value</button>
     </div>
</>
  )
}

export default Practice