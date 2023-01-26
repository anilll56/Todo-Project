

const todoModel = require('../Models/TodoModels');
const groupModel = require('../Models/TodoGroupsModel');


module.exports.getTodo = async (req, res) => {
     todoModel.find({}).sort({ createdAt: -1 })
     .then((data) => res.send(data));
}

module.exports.saveTodo = async (req, res) => {
    const { text , group} = req.body;

    todoModel
        .create({ text  , group})
        .then((data) =>{ 
            console.log("Added Successfully...")
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err));
}

module.exports.updateTodo = async (req, res) => {
    const { _id ,text } = req.body;
    todoModel
    .findByIdAndUpdate(_id , {text})
    .then(() => res.set(201).send("Updated Successfully..."))
    .catch((err)=>console.log(err))


}

module.exports.deleteTodo = async (req, res) => {
    const { _id } = req.body;
    todoModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("Deleted Successfully..."))
    .catch((err)=>console.log(err))
}


module.exports.changeCompleted = async (req, res) => {
    const { _id, completed } = req.body;
    todoModel
    .findByIdAndUpdate(_id , {completed})
    .then(() => res.set(201).send("Updated Successfully..."))
    .catch((err)=>console.log(err))
    
}

module.exports.changeImportant = async (req, res) => {
    const { _id, important } = req.body;
    todoModel
    .findByIdAndUpdate(_id , {important})
    .then(() => res.set(201).send("Updated Successfully..."))
    .catch((err)=>console.log(err))

}

module.exports.deleteGroupİtems = async (req, res) => {
    const { group } = req.body;
    todoModel.deleteMany({group})
    .then(()=>res.send("Deleted Group İtems Successfully..."))
    .catch((err)=>console.log(err))

}


  // Group Controller

module.exports.AddGroup = (req, res) => {
    const { name } = req.body;

    groupModel
        .create({ name })
        .then((data) =>{ 
            console.log("Added Successfully...")
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err));
}

module.exports.getGroups = async (req, res) => {
    const groups = await groupModel.find({}).sort({ createdAt: -1 });
    res.send(groups);
}

module.exports.deleteGroup = async (req, res) => {
    const { _id } = req.body;
    groupModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("Deleted Successfully..."))
    .catch((err)=>console.log(err))
}

    
