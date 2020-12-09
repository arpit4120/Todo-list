import React from 'react'
import './Header.css'

function Header() {
  const date =new Date();
  const hours = date.getHours();
  const  dateday= date.getDate();
  const datemonth=date.getMonth();
  const dateyear=date.getFullYear();
  const time= date.getHours();
  const timemin=date.getMinutes();
  const timesec=date.getSeconds();
  let wish
  if(hours<12){
    wish= "morning"
  }
  else {if(hours>=12&hours<17)
    {wish = "afternoon"}
  else
  {wish =" night "}
  }
  return (
    <div>
    <div className='header'>
      <h1>Todo List</h1>
      
    </div>
    <div className='header'>
  <h2>{dateday} / {datemonth} / {dateyear} good {wish} </h2>
    </div>
    </div>
  )
}

export default Header
