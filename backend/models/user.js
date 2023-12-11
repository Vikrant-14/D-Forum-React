var mongoose  = require("mongoose");
var userSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        
    },
    password: {
        type: String
    }
}
);

module.exports = mongoose.model("User", userSchema)