import { useState } from 'react';
import './App.css';
 import LeftSide from './components/LeftSide';
import MiddleContent from './components/MiddleContent';

function App() {
  const [GroupName2, setGroupName2] = useState("All")
  const [Todos , setTodos] = useState([]);
  return (
    <div className='BigAlice'>
        <LeftSide setGroupName2={setGroupName2} GroupName2={GroupName2} Todos={Todos} setTodos={setTodos} ></LeftSide>
        <MiddleContent setGroupName2={setGroupName2} GroupName2={GroupName2} Todos={Todos} setTodos={setTodos}></MiddleContent>
    </div>
  );
}

export default App;
