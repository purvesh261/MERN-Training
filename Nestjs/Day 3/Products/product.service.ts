import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductSchema } from './product.schema';
import { ProductDTO } from './product.dto';

@Injectable()
export class ProductService{
    constructor(@InjectModel('product') private readonly productModel: Model<typeof ProductSchema>) {}

    async getAllProducts() {
        const result = await this.productModel.find().exec();
        return result;
    }

    async createProduct(productDTO: ProductDTO) {
        return this.productModel.create(productDTO);
    }
    
    async getProductByMfg(mfg: string){
        return this.productModel.find({mfg:mfg})
    }
}