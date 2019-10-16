const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  name: String,
  username: String,
  email : {type:String, require:true},
  avatar: String,
  password:{type:String, require:true},
},
{
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;