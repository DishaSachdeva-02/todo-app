import React, { Component } from 'react'
import List1 from './List1'
import Input1 from './Input1'
export default class App1 extends Component {
    constructor(){
        super()
        this.state={
            todos:['hockey','cricket','basketball','badminton'],
            editData: {
              index:'',
              data:''
            }
        }
    }
    addTodo=(value)=>{
        this.setState({
          todos:[...this.state.todos,value]
        })
    }
    deleteTodo=(data)=>{
        let filterdata=this.state.todos.filter((value)=>value!==data)
        this.setState({
          todos:[...filterdata]
        })
    }
    editTodo=(index,data)=>{
       this.setState({
        editData:{
          index,data
        }
       })
    }
    updateTodo=(index,data)=>{
      let updatedtodos=this.state.todos.map((value,ind)=>{
        if(ind==index)return data
        return value
      })
      this.setState({
        todos:[...updatedtodos],
        editData:{
          index:'',
          data:''
        }
      })
    }
  render() {
    return (
      <div className='container mt-3'>
        <Input1 addTodo={this.addTodo} editData={this.state.editData} updateTodo={this.updateTodo}/>
        <List1 todos={this.state.todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo}/>
      </div>
    )
  }
}
