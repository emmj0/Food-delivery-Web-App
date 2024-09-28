import food_model from "../models/foodmodel.js";
import fs from 'fs';


// add food item

const add_food = async(req,res)=>{
    let image_name = `${req.file.filename}`;

    const food = new food_model({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_name,
    })
    try {
        await food.save();
        res.json({success:true,message:"Food Added"});
    } catch (error) {
        console.log(error);
        console.error('Error while saving food item:', error.message);
        res.json({success:false,message:"Not Added"});
    }
}

// food listing

const food_list = async(req,res)=>{
    try {
        const foods = await food_model.find({});
        res.json({success:true,data:foods});
    } catch (error) {
        console.error('Error while fetching food list:', error.message);
        res.json({success:false,message:"error while fetching"});
    }

}

// remove food items
const remove_food = async(req,res)=>{
    console.log(req.body.id)
    try {
        const food = await food_model.findById(req.body.id)
        console.log(food)
        fs.unlink(`uploads/${food.image}`,()=>{
            console.log("file deleted")
        })
        const obj = await food_model.findByIdAndDelete(req.body.id);

        if(obj) {
            res.json({success:true,message:"Food removed"})
        }
        
    } catch (error) {
        console.error('Error while removing food item:', error.message);
        res.json({success:false,message:"error while deleting"});
    }
}

export {add_food,food_list,remove_food} 
