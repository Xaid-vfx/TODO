import React from 'react'

export const Todoitems = ({todos, onDelete}) => {
  return (
    <>
    <div>
      <h4>{todos.title}</h4>
      <p>{todos.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={onDelete}> Delete</button>
    </div>
    <hr/>
    </>
  )
}
