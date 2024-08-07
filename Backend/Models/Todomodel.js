const mongoose = require ("mongoose");
const Todoschema = new mongoose.schema ({

    title:{
        type: String,
        require: true,

    },
    Description:{
        type: String,
        require: true,
    },
    complete: {
        type: Boolean,
        require: false,
    }

});

const Todo = mongoose.model("Todo", Todoschema);
module.exports = Todo;
