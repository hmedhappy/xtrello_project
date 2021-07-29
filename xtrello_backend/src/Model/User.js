const mongoose = require('mongoose');
const dayjs = require('dayjs');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    default: '',
  },
  password: {
    type: String,
    default: '',
  },
  date_creation: { type: String, default: `${Date.now}` },
  imgdata: {
    type: Buffer,
  },
});


const Message = mongoose.model('users', UserSchema);
/* Message.createIndexes().then(res=>{
    console.log(res)
}).catch(err=>console.log(err)) */
module.exports = Message ;
