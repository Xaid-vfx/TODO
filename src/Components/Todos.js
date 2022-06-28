import React from 'react'
import {Todoitems} from "../Components/Todoitems";

export const Todos = (props) => {
  let myStyle={
    minHeight:"70vh",
  }
  return (
    <div className="container my-3" style={myStyle}>
        <h3 className = "text-center my-3"> Todo List</h3>

        {props.todos.length===0? "No Todos to display":
        props.todos.map((todo)=>{
          return (<Todoitems todos={todo} key={todo.sno} onDelete={()=>props.onDelete(todo)}/>)
        })}
        
    </div>
  )
}
