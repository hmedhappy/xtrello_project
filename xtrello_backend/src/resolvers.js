import { connectDb } from './Config/database.ts';

// MUTATIONS
import { Register} from './Services/Users/mutations'
import { addTask } from "./Services/Tasks/mutations";

// QUERIES
import { Login } from './Services/Users/queries'
import { getTasks } from "./Services/Tasks/queries";

// DB CONNECTION
connectDb();

const resolvers = {
    Query : {
        Login ,
        getTasks
       
    },
    Mutation : {
        Register ,
        addTask 
    }
}

export default resolvers