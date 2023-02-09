import {Button, TextField ,Grid} from '@mui/material'
import React, { useState } from 'react'
import"./Todolist.css"
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';

const Todolist = () => {
    // const initialValues={
    //     todoItem: "",

    // }
    const [todoItem, settodoItem] = useState('');
    const[todos,settodos]=useState([]);
    
    const singleItem=(e)=>
    {
    settodoItem(e.target.value);
   
     }
     

    const onSubmitTodo=()=>{
      settodos([...todos,{id: Date.now() ,text:todoItem,status:false}]);
      //settodos([todos.push(todoItem)]);
      settodoItem("")
    }
    const removeTodo = (id)=> {
      alert("Are you sure to delte this from list")
      return settodos(
        todos.filter((item,i)=>{
          return i !==id;
        })
      );
      // setVisible((prev) => !prev);
    };
    
   
  return (
    // <div id='main' style={{textAlign: "center"}}>
    <div className="todo-app" >
        <br></br>

        <div  className="main">

          <h3> Todo List </h3><br></br>
        <TextField
         variant='outlined'
          label='Enter Item'
         
            value={todoItem}
            onChange={singleItem}>
          </TextField>
          
        <br></br>
        <br></br>
       
        <Button
         variant='contained'
         onClick={onSubmitTodo}>
          ADD TO LIST
          </Button><br></br>
          
        </div>
        <div className='todos' >
          {
            todos.map((obj,id)=>{
              return(
              <div className='todoItem'>
                  
                  <p>
                  
                  {obj.text} <input onChange={(e)=>{
                    console.log(e.target.checked);
                   console.log(obj);
                   settodos(todos.filter(obj2=>{
                    if(obj2.id===obj.id){
                      obj2.status=e.target.value
                     
                    }
                    return obj2
                   })) 
                  }} value={obj.status} type="checkbox"/>
                  {/* <Button variant="outline-success">✓</Button> */}
                   <Button variant="outline-danger" onClick={()=>removeTodo(id)}>✕</Button>
                  </p>
                </div>

              )
            })
          }
          {
            
            todos.map((obj)=>{
               if(obj.status){
                 return( <p>{obj.text} Done</p>)
               }
               return null
            })
          }
    </div>
                                          
    </div>
    

    
  )
}

export default Todolist