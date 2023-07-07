import React,{useState,useEffect} from "react";

const Todolist=()=>{

  const[todos,setTodos]=useState([]);
  const[newTodo1,setNewtodo1]=useState('');
  const[newTodo2,setNewtodo2]=useState('');

  useEffect(()=>{
    const storedTodos=localStorage.getItem('todos');
    if(storedTodos){
      console.log(JSON.parse(storedTodos));
      setTodos(JSON.parse(storedTodos));

    }

  },[]);


  const updateLocalstorage=(todos)=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  }

  const handleAddtodo=()=>{
    
     

      if(newTodo1.trim()!==''&&newTodo2.trim()!==''){
        const newTodo = { todo1: newTodo1, todo2: newTodo2 };
    const todoArray=[...todos, newTodo];
    setTodos(todoArray)
    updateLocalstorage(todoArray);
    setNewtodo1("");
    setNewtodo2("");
    }
  };

  const handleDeletetodo=(index)=>{
    const updatedTodos=todos.filter((_,i)=> i!== index);
    setTodos(updatedTodos);
    updateLocalstorage(updatedTodos);
    
  }


  return(
    <div style={{ display: "flex", flexDirection: "column" }}>

      <div>
      <input
      type="text"
      value={newTodo1}
      onChange={(e)=> setNewtodo1(e.target.value)} //e.target.value (what's the dot dot)
      />
      

      {/*<br/>*/}
      <input
      type="text"
      value={newTodo2}
      onChange={(e)=> setNewtodo2(e.target.value)} //e.target.value (what's the dot dot)
      />
    </div>
    <div>
    <button onClick={handleAddtodo}>Add</button>

    <ul>
      {todos.map((todo,id)=>(
        <li key={id}>
          {todo.todo1},{todo.todo2}
          <button onClick={()=>{handleDeletetodo(id)}}>Delete</button>
          </li>
      )
      )
}
    </ul>
      
    </div>
    </div>

  )
};

export default Todolist;