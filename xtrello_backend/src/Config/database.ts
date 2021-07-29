import mongoose from 'mongoose'
import { MONGO_ONLINE } from './vars';

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_ONLINE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify:false,
    })
    console.log("DB CONNECTED...");
    
  } catch (error) {
    console.log(error.message)
  }
}