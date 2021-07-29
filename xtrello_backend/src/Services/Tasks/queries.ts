import  Task  from "../../Model/Task" ;


export const getTasks = async (parent,{args},context) => {
    return await Task.find();
}
