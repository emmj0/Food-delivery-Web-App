import express from 'express';
import { add_food ,food_list, remove_food } from '../controllers/foodcontroller.js';
import multer from 'multer';


const foodrouter = express.Router();

// Image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb) => {
        return cb(null,`${Date.now()}${file.originalname}`,()=>{
            console.error('Error storage', error.message);
        })
    }
})

const upload = multer({storage:storage})

foodrouter.post("/add",upload.single("image"),add_food,()=>{
    console.error('Error post', error.message);
})

foodrouter.get("/list",food_list)

foodrouter.post("/remove",remove_food,()=>{
    console.error('Error post', error.message);
})

export default foodrouter;