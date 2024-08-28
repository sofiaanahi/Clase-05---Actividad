import { DataTypes  } from "sequelize";
import sequelize from "../db/connection.js";


const User = sequelize.define('User',{
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('cliente', 'vendedor', 'admin'),
        allowNull: false,
    }
    
});


export default User;