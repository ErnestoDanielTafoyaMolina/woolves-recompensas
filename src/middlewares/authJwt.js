import  jwt  from "jsonwebtoken";
import config from "../config";
import User from "../models/User";
import Role from "../models/Role";
export const verifyToken = async(req,res,next)=>{
    try {
        const token=req.headers["x-access-token"]

        console.log(token);
    
        if(!token)return res.status(403).json({
            message:"no token provided"
        })
    
        const decoded = jwt.verify(token, config.SECRET);
    
        req.id = decoded.id;
    
        const user = await User.findById(req.id,{password:0});
        console.log(user);
        if(!user)return res.status(403).json({
            message:"no user found"
        })
        next();
    } catch (error) {
        return res.status(401).json({message:"unauthorized"})
    }
}

export const isAdmin = async (req,res, next)=> {
    try {
        const user = await User.findById(req.id);
        const roles = await Role.find( {_id: { $in: user.roles }} );
        console.log("user: ",user);
        console.log("roles: ",roles);
        for(let i =0; i<roles.length;i++){
           if(roles[i].name==="admin"){
               next();
               return;
           }
        }
        return res.status(403).json({message:'requieres ser administrador'});
    } catch (error) {
        console.error(error);
    }
}