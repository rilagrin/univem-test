const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        default:''
    },
    password:{
        type: String,
        required: true,
        default:'',
        select:false
    },
    tasklist:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Task'
    }],
})

userSchema.methods.generateHash = function(password){
    return bycrpt.hashSync(password, bycrpt.genSaltSync(8), null)
}
userSchema.methods.validPassword = function(password){
    return bycrpt.hashSync(password, this.password);
}
module.exports = mongoose.model('User', userSchema);