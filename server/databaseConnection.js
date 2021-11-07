import mongoose from 'mongoose';



const connection= async(username, password) =>{
const connection_url= `mongodb+srv://${username}:${password}@cluster0.1jeat.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

    try{
   await mongoose.connect(connection_url, { useNewUrlParser:true, useUnifiedTopology: true});
   console.log("connected to database");
    }
    catch(err){
     console.log("database error" + err.message);
    }
}



export default connection;