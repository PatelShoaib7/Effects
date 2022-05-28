import React from 'react'
import { useState } from 'react'

export const Stopwatch = () => {
 const [Watch , setWatch] = useState(0)
 const [timerId , setTimerId] = useState(null)
 const start =()=>{

    if(!timerId)
    {
    let id = setInterval(() => {
        setWatch((prev) => prev + 1)
    },250)
    setTimerId(id)
}
}
 const pause = () =>{
     clearInterval(timerId)
     setTimerId(null)
 }
 const reset =() =>{
     clearInterval(timerId)
     setWatch(0)
 }
    return (
    <div>
       <h1>Stopwatch</h1>
       <h1>{Watch}</h1>
       <div>
           <button onClick={start}>Start</button>
           <button onClick={pause}>Pause</button>
           <button onClick={reset}>Reset</button>
       </div>
    </div>
    
  )
}


