import React from 'react'
import './MiddleContent.css'
import { HiOutlineX , HiPencilAlt , HiOutlineStar ,HiStar , HiCheck} from "react-icons/hi";
import { AddTodo  ,getAllTodos ,updateTodo , deleteTodo , changeCompleted , changeImportant} from './HandleApi';
import { useState } from 'react';
import { useEffect } from 'react';
function MiddleContent({ GroupName2  , Todos , setTodos}) {

  const [todoText , setTodoText] = useState("");
  const [isUpdating , setIsUpdating]=useState(false);
  const[todoİd, setTodoİd]=useState('');


  useEffect (() => {
    getAllTodos(setTodos , GroupName2)
  },[GroupName2])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setTodoText(text)
    setTodoİd(_id)
    console.log(_id);
  }
  return (
    <div className='middleContentCss1'>
        <div className='content1'>
            <div className='groupTitleCss'>
                <div className='groupTitleCss1'>{GroupName2}</div>
                <div className='groupTitleCss2'>{Todos.length} item </div>
            </div>
            <div className='addİtem1'>
                <input  type='text' placeholder='Add a todo item ...'  className='addİtemİnput44'  value={todoText} onChange={(e)=>setTodoText
                  (e.target.value)}/>
                <button className='addButtonCss' onClick={ isUpdating ? ()=>updateTodo(todoİd, todoText, setTodos, setTodoText, setIsUpdating ,GroupName2) :()=>AddTodo(todoText ,setTodoText ,setTodos ,GroupName2)}>
                  {isUpdating ? "Update" : "Add"}
                </button>
            </div>
            <div className='todoİtems'>
                {
                  Todos.map((item) => {
                    return (
                      <div  className='todoİtemCss' key={item._id}>
                        <div className='HiOutlineCheckDiv' onClick={()=>{changeCompleted(item._id , !item.completed , setTodos ,GroupName2)}}>
                          {item.completed ? <HiCheck className='İconsCss112'/> : null}
                        </div>
                      <div className='ss13'>
                        <div className={item.completed ? "textCss" : "textCss1"}>{item.text}</div>
                      </div>
                      <div className='İconsDiv22'>
                         <div onClick={()=>{changeImportant(item._id ,!item.important , setTodos , GroupName2)}}>
                         {item.important ? <HiStar  className='İconsCss112'/> : <HiOutlineStar  className='İconsCss112'/>}
                        </div>
                         <HiPencilAlt onClick={()=>{updateMode(item._id , item.text)}}  className='İconsCss112'/>
                         <HiOutlineX  onClick={()=>{deleteTodo(item._id , setTodos , GroupName2)}}  className='İconsCss112'/>
                      </div>
                      </div>
                    )
                  })
                    
                }
            </div>
        </div>
    </div>
  )
}

export default MiddleContent
