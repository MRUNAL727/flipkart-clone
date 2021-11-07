import userModel from '../models/userSchema.js'

export const userSignup=  async(req, res)=>
{
    try{
        console.log(req.body);
        const exist = await userModel.findOne({username: req.body.username})

        if(exist){
           return res.status(401).json('User already exist');
        }
        else{
          const user = req.body;
          const  newUser = userModel(user);
          await newUser.save();
        }

    res.status(200).json('Registered successfully');

    }
    catch(err){
      console.log("model error" + err)
    }
} 

export const userLogin= async(req, res)=>{
    try{
        const user = await userModel.findOne({ username: req.body.username, password: req.body.password });
       if(user){
          return res.status(200).json('Login successfully');
       }else{
         return res.status(401).json('invalid login');
       }
    }
    catch(error){
      console.log(error)
    }
}

