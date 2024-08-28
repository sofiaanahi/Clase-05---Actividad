


export const getProducts =  async (req, res) => {

    try {
    
        const products = await ProductService.findAll();
        if( products.length === 0 || ! products){
            throw({
                statusCode: 404,
                status: 'Not Found',
                message: 'No se han encontrado productos'
            })
        }
        return res.json(products)


    } catch (err){
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status
        })

    }

}

export const createProduct = async (req, res) => {
    
    try{
        await ProductService.create(req.body)
        return res.status(201).json({
            message:'Producto creado'
        })

    }catch(error){
        return res.status (err.statusCode || 500).json({
            message: err.message,
            status: err.status
        })
    }
}


export const updateProduct = async (req, res) => {
    try {

        const products = await ProductService.updateProduct(req.params.id, req.body);
        res.status(200).json(products);
        
    }catch(error) {

        res.status(500).json({message: error.message});

    }
};


export const deleteProduct = async (req, res) => {

    try{

        await ProductService.deleteProduct(req.params.id);
        res.status(200).json({ message: 'Product deleted'});

    }catch(error) {

        res.status(500).json({message: error.message});

    }
};