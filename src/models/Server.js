import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import productRoutes from '../routes/productos.routes.js'
import { connectToBb } from '../db/connection.js';




class Server {

    constructor() {
 
        this.app = express();
        this.port = 4000; 

        this.dbConnect();
        
        this.middleware();
        this.routes();     
       
    }

   async dbConnect(){
        await connectToBb();
   }

    middleware(){
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());

    }

    routes(){
        this.app.use('/api',productRoutes );
        
    }


    listen(){
        this.app.listen(this.port, () => console.log(`Server on http://127.0.0.1:${this.port}`))
    }
}

export default Server;