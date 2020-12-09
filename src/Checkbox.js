import React from 'react'

function Checkbox(props) {
  const completeStyle ={
    fontStyle :"italic",
    color: "#cdcdcd",
    textDecoration:"line through",
    
  }

  return (
      <div className="todoItem">
      <input 
      type="checkbox" 
      checked={props.item.completed}
      onChange={()=> props.handleChange(props.item.id)}  />
  <h1 style={props.item.completed?completeStyle:null}>{props.item.text}</h1>
      </div>
  )
}

export default Checkbox
