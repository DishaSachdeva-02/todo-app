import { useState } from "react";
import Input from "./Input";
import List from "./List";

function App() {
  let [todos, setTodos] = useState(
    [
      'Hockey',
      'Cricket',
      'Basketball',
      'Badminton'
    ]);

  const addTodo = (data) => {
    

    setTodos([...todos, data])
  }
  

  const deleteTodo = (data) => {

    let filterData = todos.filter((value, index, arr) => value !== data)

    setTodos([...filterData])
  }
  let[editData,setEditData]=useState({
    index: '',
    data: ''
  })
  const editTodo=(index,data)=>{
    setEditData({
      index,data
    })
  }
  const updateTodo=(index,data)=>{
    todos.splice(index,1,data)
    setTodos([...todos])
    setEditData({
      index: '',
      data: ''
    })
  }

  return (
    <div className="container mt-3" >
      <Input addTodo={addTodo} editData={editData} updateTodo={updateTodo} />
      <List todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
