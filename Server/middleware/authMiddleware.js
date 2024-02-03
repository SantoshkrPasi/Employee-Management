import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken"
const secret = 'Santosh$123@$';
// Function to parse cookie header
function parseCookies(cookieHeader) {
    const cookies = {};
    if (cookieHeader) {
      cookieHeader.split(';').forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        cookies[name] = value;
      });
    }
    return cookies;
  }

const authenticateMiddleware = (req ,res , next) =>{
    // retrieving the token from request
    // console.log(req.headers.cookie)
    const {token} = parseCookies(req.headers.cookie)
    // console.log("token",token)
    if(!token)
    {
        return res.status(401).json({message : "Unauthorized"});
    }
    try {
        // verifying the token 
        const payload = jwt.verify(token , secret);
        req.user = payload;
        console.log("CHECK > : ",payload)
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
}

export default authenticateMiddleware;