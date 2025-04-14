import mongoose from "mongoose"
import { config } from "dotenv"

config()

function dbConnection(){ mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log("database connected successfully")
})
.catch((error)=>{
  console.log("error occurec while connecting to database ", error)
})}

export default dbConnection