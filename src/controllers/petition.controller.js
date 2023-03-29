
export const  getAllPetitions= async (req,res) => {
  try {
    res.send("Obteniendo peticiones");
  } catch (error) {
    console.error(error);
  }
}
