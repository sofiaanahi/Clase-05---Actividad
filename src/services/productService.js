import Product from "../models/Product.js"

class ProductService {

    constructor() {}

    async findAll() {
        return await Product.findAll();
    }

    async getById(id) {
        return await Product.FindByPk(id);
    }

    async create(product) {
        return await Product.create(product);
    }

    async update(id, product){
        await Product.update(product, {
            where: { id }
        })
    };

    async delete(id) {
        await Product.destroy({
            where: {id}
        });
    }
}


export default new ProductService()