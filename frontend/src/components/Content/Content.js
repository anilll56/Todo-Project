import React, { useEffect, useState } from 'react'
import { getAllTodos ,AddTodo ,updateTodo ,deleteTodo , changeCompleted} from '../HandleApi';
import './Content.css'
import { HiOutlineX , HiPencilAlt , HiOutlineStar} from "react-icons/hi";

function Content() {

    const [todo ,setTodo]=useState([]);
    const [text ,setText]=useState('');
    const [isUpdating , setIsUpdating]=useState(false);
    const[todoİd, setTodoİd]=useState('');


    useEffect(()=>{
        getAllTodos(setTodo);
    },[])

    const updateMode = (_id, text) => {
        setIsUpdating(true)
        setText(text)
        setTodoİd(_id)
        console.log(_id);
      }

  return (
    <div className='Content'>
        <div className='AddTodoCss'>
                <input 
                className='inputCss' 
                placeholder='Add Todo ...'
                value={text}
                type='text'
                onChange={(e)=>setText(e.target.value)}
                />
            <div >
               <button 
                    className='buttonCss1' 
                    onClick={ isUpdating ? ()=>updateTodo(todoİd, text, setTodo, setText, setIsUpdating) : ()=>AddTodo(text ,setText ,setTodo)}>
                    {isUpdating ? "Update" : "Add"}
                </button>
            </div>
        </div>
        <input className='shearchİnput' placeholder='Shearch Todo'/>
        {
            todo.map((item)=>{
                return(
                <div className='İtems' key={item._id}>
                    <div className='todoİtemCss' >
                        <div className='TodoTextCss' onClick={()=>{changeCompleted(item._id , !item.completed , setTodo)}}>
                            <h3>{item.text}</h3>
                        </div>
                        <div className='TodoButtonCss'>
                            <div><HiOutlineStar className='İconCss' onClick={()=>changeCompleted(item._id , !item.completed , setTodo)} ></HiOutlineStar></div>
                            <div ><HiPencilAlt className='İconCss' onClick={()=>{updateMode(item._id , item.text)}}></HiPencilAlt></div>  
                            <div><HiOutlineX className='İconCss'  onClick={()=>deleteTodo(item._id , setTodo)} ></HiOutlineX></div>
                        </div>
                    </div>
                </div>
                )
            })
        }
    </div>
  )
}

export default Content
