import mongoose from "mongoose";

export const connectdb = async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017').then(() => {
        console.log("connected to database");     
    })
}

