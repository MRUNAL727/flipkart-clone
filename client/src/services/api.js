
import axios from 'axios';


export const authenticateSignup = async(user) =>{
    try{
    return await axios.post('http://localhost:8000/signup', user)
    }
    catch(error){
        console.log(error)
    }
}

export const authenticateLogin = async (user) => {
  try {
    return await axios.post('http://localhost:8000/login', user);
  } catch (error) {
    console.log(error);
  }
};