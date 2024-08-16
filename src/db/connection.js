import  Sequelize from 'sequelize';


const db = new Sequelize(
    DB_NAME = 'ecommerce',
    DB_USER = 'root',
    DB_PASSWORD = '',
    {
        host:'localhost',
        dialect:'mysql'
    }
);

Sequelize
    .authenticate()
    .then(()=>{
        console.log('Conexión Exitosa')
    })
    .catch((error)=>{
        console.log('No hay conexión');
    });

module.exports = db;