import  Sequelize from 'sequelize';


const db = new Sequelize(
    'ecommerce',
    'root',
    '',
    {
        host:'localhost',
        dialect:'mysql'
    }
);

export async function connectToBb () {
    try {
        await db.authenticate();
        console.log('Conexion Exitosa');
    }catch(error){
        console.log('No hay conexion', error);
    }
}
export default db;