import express from 'express'
import cors from 'cors'
import { connectdb } from './config/db.js'
import foodrouter from './routes/foodroute.js'
import userRouter from './routes/userroutes.js'
import 'dotenv/config'

// app config
const app = express()
const port = 5000

//middleware
app.use(express.json())
app.use(cors())

// connecting db
connectdb();


// api endpoints
app.use("/api/use",foodrouter,()=>{
    console.error('Error while saving food item:', error.message);
})
app.use("/images",express.static('uploads'))

app.use("/api/user",userRouter)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

//mongodb+srv://mamujtaba12:<db_password>@cluster0.42s7w.mongodb.net/?