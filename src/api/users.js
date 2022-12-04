import axios from "axios";
export const loginUser = async(user) => await axios.post("http://localhost:3001/api/product",user);