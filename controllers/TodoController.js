const ToDoModel = require("../models/ToDoModal");

module.exports.getToDo = async (req, res) => {
    const todo = await ToDoModel.find();
    res.send(todo);
}

module.exports.saveToDo = (req, res) => {
    const { text } = req.body;

    ToDoModel
        .create({ text })
        .then(() => res.set(201).send("Added Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.deleteToDo = (req, res) => {
    const { _id } = req.body;

    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}