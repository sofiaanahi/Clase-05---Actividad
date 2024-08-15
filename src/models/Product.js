import connection from "../db/connection";

export class Product {
    static async getAll() {
    const [rows] = await connection.execute('SELECT * FROM products');
    return rows;
    }

    static async getById(id) {
        const [rows] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
        return rows[0];
    }

    static async create(product) {
        const { name, price, description } = product;
        const [result] = await connection.execute('INSERT INTO product (name, price, description) VALUES (?, ?, ', [name, price, description]);
        return result.insertId;
    }

    static async update(id, product) {
        const { name, price, description } = product;
        await connection.execute('UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?', [name, price, description, id]);
    }
    
    static async delete(id) {
        await connection.execute('DETELE FROM products WHERE id = ?', [id]);
    }
}

