const express = require('express');
const Todos = require('../../model/todos')

const router = express.Router();

//------ Endpoint Info ------//
// URL:   http://localhost:3000/api/todos
// METHOD: get
// ACTION: to get all todos from the DB..
router.get('/', (req, res) => {
    Todos.find({}).then(todos => {
        if (todos.length > 0) {
            res.status(200).json({ message: `We got all todos. (Total: ${todos.length})`, todos: todos });
        } else {
            res.status(404).json({ message: 'Oops..!! No todos found.' });
        }
    }).catch(error => {
        res.status(500).json({ message: 'Oops..!!  Error getting todos..', error: error });
    })
});



//------ Endpoint Info ------//
// URL:   http://localhost:3000/api/todos
// METHOD: post
// ACTION: to add a new todo to the DB..
router.post('/', (req, res) => {

    // Extract the incoming data from request body..
    const { title } = req.body;

    // Validate the incoming tada by checking if it is empty or undifined..
    if (title == undefined || title == '') {
        res.status(400).json({ message: 'Oops..!! Title must not be empty or undefined.' });
    } else {

        // Agrange the data as an object before saving it..
        let newTodo = new Todos({
            title: title
        });

        // Save data to the DB...
        newTodo.save().then(todo => {

            // Send a response with status code of 200 and also the todo, if the todo was saved to the DB..
            res.status(200).json({ message: 'Todo saved successfully.', todo: todo });

        }).catch(error => {

            // Send a response with status code of 500, if there was an error saving the todo or reaching the DB or any error relating to the server..
            res.status(500).json({ message: 'Oops..!! Error saving todos..', error: error });

        });

    }
});
module.exports = router