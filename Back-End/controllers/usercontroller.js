import usermodel from '../models/usermodel.js'
import jwt from 'jsonwebtoken'
import bycrpt from 'bcrypt'
import validator from 'validator'


const loginUser = async (req,res) =>{
    const {email,password} = req.body;
    const user = await usermodel.findOne({email});
    if(!user){
        return res.status(400).json({message:'User doesnt Exists'})
    }
    const isMatch = await bycrpt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({message:'Invalid password'})
    }
    const token = create_token(user._id);
    res.json({success:true,token});


}

const create_token = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}


const registerUser = async (req,res) => {
    const {name,email,password} = req.body;
    try {
        const exists = await usermodel.findOne({email});
        if (exists) {
            return res.status(400).json({success:false,message: 'Email already exists'})
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({success:false,message: 'Invalid email'}) 
        }
        if(password.length < 8){
            return res.status(400).json({success:false,message: 'Password must be at least 10 '})
        }

        const salt = await bycrpt.genSalt(10);
        const hashedPassword = await bycrpt.hash(password,salt);
        const user = new usermodel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const newuser = await user.save();

        const token = create_token(user._id);
        res.status(201).json({success:true,message:'User created successfully',token})


    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:'Internal server error'})
        
    }


}

export{loginUser,registerUser}
