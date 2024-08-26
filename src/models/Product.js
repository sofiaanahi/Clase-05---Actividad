import db from "../db/connection.js";
import { DataTypes } from "sequelize";

const Product =db.define('Product',{
    
    name: {
        type:DataTypes.STRING,
        allowNull: false
    },
    price: {
        type:DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
    },
    stock: {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    
});

export default Product;




// export class Products {
//     static async getAll() {
//     const [rows] = await db.execute('SELECT * FROM products');
//     return rows;
//     }

//     static async getById(id) {
//         const [rows] = await db.execute('SELECT * FROM products WHERE id = ?', [id]);
//         return rows[0];
//     }

//     static async create(product) {
//         const { name, price, description } = product;
//         const [result] = await db.execute('INSERT INTO product (name, price, description) VALUES (?, ?, ?)', [name, price, description]);
//         return result.insertId;
//     }

//     static async update(id, product) {
//         const { name, price, description } = product;
//         await db.execute('UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?', [name, price, description, id]);
//     }
    
//     static async delete(id) {
//         await db.execute('DETELE FROM products WHERE id = ?', [id]);
//     }
// }

