const express = require('express');
const Todos = require('../../model/todos')

const router = express.Router();

router.get('/',(req,res) =>{
    
    Todos.getTodos((err,todos) =>{
         if(err) {throw err}
         res.json(todos)
    }) 
})



module.exports = router