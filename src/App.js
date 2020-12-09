import './App.css';
import Checkbox from './Checkbox';
import Header from './Header';
import Footer from './Footer';
import data from './data';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todo : [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleadd = this.handleadd.bind(this)
  }
  handleChange(id){
    this.setState(prevState=>{
      const uptodo=prevState.todo.map(todo =>{
        if(todo.id===id){
          todo.completed=!todo.completed
        }
        return todo
      })
      return{
        todo:uptodo
      }
    })
  }
  handleadd(){
    const name=prompt("enter the name of the activity");
    this.setState(prevState => ({
      todo: [
          ...prevState.todo, 
          {id:prevState.todo.length+1,text:name,completed:false}
      ]
  }))
    console.log("wokring")
  }
  
  
  render() { 
    const mappeddata = this.state.todo.map(item => <Checkbox key={item.id} item={item} handleChange={this.handleChange}/>)

  return (
    <div className="App">
      <Header />
      <button onClick={()=>{this.handleadd()}} className='toadd'  >
          Add New Do
        </button>

      <div className='todoList'>
        
       {mappeddata}
      </div>
      <Footer />
      
      
    </div>
  );

  }
}
 
export default App;