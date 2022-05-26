const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    //only the properties that are set in the schema will be passed into the database
    name:{
        type: String,
        required : [true, "You need to enter a name for the task"],
        trim: true,
        maxlength : [20, 'name cannot be more than 20 characters']
    },
    completed:{
        type : Boolean,
        default: false

    }
})

module.exports = mongoose.model('Task', taskSchema)