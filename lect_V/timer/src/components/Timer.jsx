import React, { useEffect } from 'react'
import { useState } from 'react'

export const Timer = () => {
  const [timers , setTimers] = useState(1)

useEffect (()=>{
        const id = setInterval(() => {
          if(timers >= 100 )
          {
            clearInterval(id)
          }
          else{
            setTimers(timers + 1)
    
          }
         
        },1000)
    
    return()=>{
          clearInterval(id)
    }
},[timers])
  return (
    <div>Timer
        <div>
            <h1>{timers}</h1>
        </div>
    </div>
  )
}
