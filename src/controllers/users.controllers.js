import User from '../models/Users';

export const getAllUsers = async (req,res) => {
    const allUsers= await User.find();
    return res.send(allUsers);
}

export const getUserById = async (req,res) => {
    try {
        const { id } =req.params;
        const userById = await User.findById(id);
    } catch (error) {
        return res.status(500).json({ message:error.message });
    }

}

export const addUser = async (req,res) =>{
    try {
        const { email, password, rol, name, wp } = req.body;
        const newUser = await new User({ email, password, rol, name, wp });
        await newUser.save()
        return res.send(newUser);
    } catch (error) {
        return res.status(500).json({ message:error.message });
    }
}
export const LogginUser = async (req,res) => {
    try {
        const { email, password } = req.body;
        const is_there_a_user = await User.findOne({ "email":`${email}`, "password":`${password}` });
        if(is_there_a_user){
            console.log("usuario encontrado")
            return res.send({
                is_there_a_user
            })
        }
        console.log("error")
        return res.send("correo o contraseña incorrectos")
    } catch (error) {
        return res.status(500).json({ message:error.message });
    }
}