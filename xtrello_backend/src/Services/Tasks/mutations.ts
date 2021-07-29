import Task from '../../Model/Task'

export const addTask = async (parent,{data},context) => {
    console.log({data});
    
    var status = true ;
    const newTask = new Task(data);    
    await newTask.save((err,res)=>{
        if (err) {
            console.log({err});
            
            status = false
        }else status = true ;
    })

    return status ? newTask : false
}