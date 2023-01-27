import React, { useState } from 'react'
import './LeftSide.css'
import { BsXLg ,BsListTask} from "react-icons/bs";
import { getAllGroups  ,AddGroup ,DeleteGroup , ShearchTodo} from './HandleApi';
import { useEffect } from 'react';


function LeftSİde({setGroupName2 , GroupName2  , Todos , setTodos}) {    
  const [group , setGroup] = useState([])
  const [groupName , setGroupName] = useState("");
  const [shearchText , setShearchText] = useState("");

  useEffect(() => {
    getAllGroups(setGroup)
  }, [])


  return (
    <div className='leftSideCss'>
      <div>
        <div className='ShearchD'  onClick={()=>{setGroupName2("Search")}} >
            <input type='text' placeholder='Search Todo ...' className='AddGroupİnput' onChange={(e)=>setShearchText(e.target.value)} />
            <button className='buttonCss12' onClick={()=>{ShearchTodo(setTodos , shearchText , setGroupName2)}}>Search</button>
        </div>
        <div className='categoryCss1'>
            <div className='categoryİtems' onClick={()=>{setGroupName2("Important")}}>
                <div>Important</div>
                <div></div>
            </div>
            <div className='categoryİtems' onClick={()=>{setGroupName2("Completed")}}>
                <div>Completed</div>
                <div></div>
            </div>
            <div className='categoryİtems'onClick={()=>{setGroupName2("All")}}>
                <div>All</div>
                <div></div>
            </div>
        </div>
        <hr  className='HrCss'/>
        <div className='addGroupCss'>
            <input value={groupName} type="text" placeholder='Add Group..' className='AddGroupİnput' onChange={(e)=>setGroupName(e.target.value)}/>
            <button className='addButtonCss' onClick={()=>{AddGroup(groupName ,setGroupName ,setGroup)}}>Add</button>
        </div>
        <div className='groupsCss1'>
          {
            group.map((item ) => {
              return (
                <div className='groupİtems2' key={item._id}>
                  <div className='ss12'  onClick={()=>{setGroupName2(item.name)}}>
                  <BsListTask className='İcons11'/> 
                  <div>{item.name}</div>
                  </div>
                  <BsXLg onClick={()=>{DeleteGroup(item._id , setGroup , setTodos , GroupName2 ,setGroupName2)}}></BsXLg>
                </div>
              )
            }
            )
          }


        </div>
      </div>
    </div>
  )
}

export default LeftSİde
