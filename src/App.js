
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import TodoItem from "./MyComponents/TodoItem";
import Footer from "./MyComponents/Footer";
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import React, { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
let initTodo;
  if(localStorage.getItem("todos")===null){
initTodo=[];

}

  else{
    initTodo= JSON.parse(localStorage.getItem("todos"));
  }
  
const onDelete=(todo)=>{
  console.log('i am on delete of',todo);
  //deleting this way in react dose not Worker
  //let index= todos.indexOf(todo);
  ///todos.splice(index,1);

  setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
  localStorage.setItem("todos",JSON.stringify(todos));
}

const addTodo=(title,desc)=>{
  console.log("I am adding a new todo",title,desc);
  let sno;
  if(todos.length==0){
   sno=0;
  }
  else{
     sno=todos[todos.length-1].sno+1;
  }
 
  const myTodo={
    sno:sno,
    title:title,
    desc:desc,
  }
  setTodos([...todos,myTodo]);
  console.log(myTodo);

}

  //let todos
  const [todos, setTodos] = useState(initTodo);
  
  useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]) 


  return (
<>


<Router>
<Header title="My Todo List" searchBar={false}/>
<Routes>
        
<Route exact path="/" element={<AddTodo addTodo={addTodo} />} />
<Route exact path="/" element={<Todos todos={todos} onDelete={onDelete} />} />
<Route exact path="/about" element={<About/>} /> 
          
</Routes>
<Footer/>
</Router>

</>
  );
}

export default App;




