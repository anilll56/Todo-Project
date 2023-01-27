import axios from 'axios';


const Url ="http://localhost:3001"


const getAllTodos = (setTodos , GroupName2 ) => {
    if(GroupName2 === "All"){
        axios.get(Url)
        .then(({data})=>{ 
            console.log(data);
            setTodos(data);
        })
        .catch((err)=>{ 
            console.log(err);
        })
    }
    else if (GroupName2 === "Search"){
        axios.get(Url)
        .then(({data})=>{
            setTodos(data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    else if(GroupName2==="Important"){
        axios.get(Url)
        .then(({data})=>{
            let filteredData = data.filter(todo => todo.important=== true);
            console.log(filteredData);
            setTodos(filteredData);
        })
    }
    else if(GroupName2==="Completed"){
        axios.get(Url)
        .then(({data})=>{
            let filteredData = data.filter(todo => todo.completed=== true);
            console.log(filteredData);
            setTodos(filteredData);
        })
    }
    else
        axios.get(Url)
        .then(({data})=>{
            let filteredData = data.filter(todo => todo.group=== GroupName2);
            console.log(filteredData);
            setTodos(filteredData);
        })
        .catch((err)=>{
            console.log(err);
        })
}
const ShearchTodo = (setTodos , text , setGroupName2) => {
    axios.get(Url)
    .then(({data})=>{
        setGroupName2("Search");
        let filteredData = data.filter(todo =>todo.text.toLowerCase().includes(text.toLowerCase()));
        setTodos(filteredData);
    
    })
    .catch((err)=>{
        console.log(err);
    })
}

const AddTodo = (todoText ,setTodoText ,setTodo , GroupName2) => {
    axios.post(`${Url}/Save`, {text :todoText , group : GroupName2})
    .then(({data})=>{
        console.log(data);
        setTodoText("");
        getAllTodos(setTodo , GroupName2);
    })
}

const updateTodo = (toDoId, todoText, setTodos, setText, setIsUpdating , GroupName2) => {

    axios.post(`${Url}/update`, { _id: toDoId, text:todoText })
        .then((data) => {
            console.log(data);
            setText("")
            setIsUpdating(false)
            getAllTodos(setTodos , GroupName2)
        })
        .catch((err) => console.log(err))

}

const deleteTodo=(id, setToDos , GroupName2)=>{
    axios.post(`${Url}/delete`, { _id : id })
        .then((data) => {
            console.log(data);
            getAllTodos(setToDos , GroupName2)
        })
        .catch((err) => console.log(err))
}

const changeCompleted = (id , completed  , setTodos ,GroupName2) => {
    axios.post(`${Url}/changeCompleted`, { _id: id , completed : completed})
        .then((data) => {
            console.log(data);
            getAllTodos(setTodos , GroupName2)
        })
        .catch((err) => console.log(err))
}

const changeImportant = (id , important , setTodos , GroupName2) => {
    axios.post(`${Url}/changeImportant`, { _id: id , important : important})
        .then((data) => {
            console.log(data);
            getAllTodos(setTodos , GroupName2)
        })
        .catch((err) => console.log(err))
}

// Group Api

const getAllGroups = (setGroup) => {
    axios.get(`${Url}/GetGroup`)
        .then(({ data }) => {
            console.log(data);
            setGroup(data);
        })
        .catch((err) => {
            console.log(err);
        })
}

const AddGroup = (name, setName, setGroup) => {
    axios.post(`${Url}/AddGroup`, { name })
        .then((data) => {
            console.log(data);
            setName("");
            getAllGroups(setGroup);
        })
        .catch((err) => console.log(err))
}

const DeleteGroup = (id, setGroup , setTodos ,   GroupName2 , setGroupName2 ) => { 
    axios.post(`${Url}/DeleteGroup`, { _id: id })
        .then((data) => {
            console.log(data);
            deleteGroupİtems(setTodos , GroupName2 ,setGroupName2)
            getAllGroups(setGroup)
        })
        .catch((err) => console.log(err))
}


const deleteGroupİtems = ( setTodos , GroupName2 ,setGroupName2) => {
    axios.post(`${Url}/deleteGroupitems`, { group:GroupName2 })
        .then((data) => {
            console.log(data);
            setGroupName2("All");
            getAllTodos(setTodos , GroupName2)
        })
        .catch((err) => console.log(err))
}

export {getAllTodos , AddTodo , updateTodo , deleteTodo , changeCompleted , AddGroup ,getAllGroups , DeleteGroup ,changeImportant , deleteGroupİtems , ShearchTodo};