//importacion de dependencias
import app from './app';
import { PORT } from "./config";
import { getConnection } from './database/connection';
//asignar y escuchar al puerto
app.set('port', PORT);
app.listen(app.get('port'));
//realizar la conexion con la base de datos
getConnection();
//muestra por consola si todo va bien
console.log('Server on port',app.get('port'));