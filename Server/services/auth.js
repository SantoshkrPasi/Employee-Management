// const jwt = require('jsonwebtoken');
import jwt from "jsonwebtoken"
const secret = 'Santosh$123@$';

export function setUser(user){
    return  jwt.sign({_id : user._id , email : user.email , type: user.type},secret);  
   }
 

export function getUser(token)
{
    if(!token) return null;
    return jwt.verify(token , secret);
}