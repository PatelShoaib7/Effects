import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Todos = () => {
const [newTodo, setnewTodo] = useState("")
const [toDos , setTodos] = useState([])


const saveInfo =()=>
{
    fetch("http://localhost:3000/posts",
    {
        method:"POST",
        headers:{
            "content-type":"application/json",
          },
        body:JSON.stringify({
            text:newTodo,
            isCompleted:false,
        }),
    })
    .then((res)=> res.json())
    .then((data)=>
    {
        console.log(data)
        setTodos([...toDos,data])
        setnewTodo("")
    })
    
        
}

useEffect(()=>{
    fetch("http://localhost:3000/posts")
    .then((res)=> res.json())
    .then((data)=>
    {
        console.log(data)
        setnewTodo()
    })
},[])


  return (
    <div>Todos
        <div>
            <input value={newTodo} 
            onChange={({target}) => setnewTodo(target.value)}/>
           <button onClick={saveInfo}>Addd</button>
        
           {toDos.map((todo) => (
                    <div key={todo.id} >

                          {todo.text} 
                        
                    </div>
                ))}
        </div>
    </div>
  )
  
}
