import User from '../../Model/User'



export const Register = async (parent,{data},context) => {    
    var status = true ;
    const { username,password , date_naissance} = data
    if ( !username || !password || !date_naissance ) return false
    
    const newUser = await new User(data);
     await newUser.save(async (err,res)=>{
        if (err) {
            console.log({err});
            status = false
            throw err 
        }
 
    });

    return status ? newUser : false
    
}