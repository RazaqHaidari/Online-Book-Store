import express from "express"
import { config } from "dotenv"
import dbConnection from "./src/config/db.js"
import userRoutes from './src/routes/userRoutes.js';
import bookRoutes from "./src/routes/bookRoutes.js"
import cartRoutes from "./src/routes/cartRoutes.js"
import cors from "cors"
config()
const app = express()
app.use(express.json());
app.use(cors())

dbConnection()

app.use("/user", userRoutes)
app.use("/book", bookRoutes)
app.use("/cart",cartRoutes)


app.listen(process.env.PORT, ()=>{
  console.log("Server Connected")
})