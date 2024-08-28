import { DataTypes } from "sequelize";
import sequelize from '../db/connection.js';
import User from './User.js';
import Product from "./Product.js";

const CompraYventa = sequelize.define('CompraYventa',{
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false, // no puede ser null
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('Pendiente', 'Finalizado', 'Cancelado'),
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('compra', 'venta'),
        allowNull: false,
      },
});

CompraYventa.belongsTo(User, { as: 'User'});

CompraYventa.belongsTo(Product, { as: 'product'});