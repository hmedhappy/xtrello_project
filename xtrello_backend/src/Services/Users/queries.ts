import User from '../../Model/User'


export const Login = async (parent,{data},context) =>  await User.findOne(data) 
