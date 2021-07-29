const mongoose = require('mongoose');
const dayjs = require('dayjs');


const TaskSchema = new mongoose.Schema({
  title: {type: String,default: ''},
  theme: {type: String,default: ''},
  photo: {type: String,default: ''},
  contenu: {type: String,default: ''},
  status: { type: String, default: "loading" },
  date_creation: { type: String, default: Date.now },
  date_viewed :{ type: String },
  creator: { type: mongoose.Schema.ObjectId, ref: 'User' },
});


const Message = mongoose.model('tasks', TaskSchema);
/* Message.createIndexes().then(res=>{
    console.log(res)
}).catch(err=>console.log(err)) */
module.exports = Message ;
