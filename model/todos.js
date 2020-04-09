const mongoose = require('mongoose');

const todosSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    date_create: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Todos", todosSchema);

// Get todos
//  module.exports = getTodos = (callback,limit) => {
//      Todos.find(callback).limit(limit)
// }