import { Injectable } from '@nestjs/common';
import { MongooseModule, InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { VendorSchema } from './vendor.schema';
import { VendorDTO } from './vendor.dto';
import { ProductService } from 'src/Products/product.service';

@Injectable()
export class VendorService{
    constructor(@InjectModel('Vendor') private readonly vendorModel: Model<typeof VendorSchema>, private readonly productService: ProductService) {}

    async getAllVendors() {
        return await this.vendorModel.find().exec();
    }

    async createVendor(vendorDTO: VendorDTO) {
        return this.vendorModel.create(vendorDTO);
    }

    async getVendor(vendorId: string){
        return this.vendorModel.findOne({_id: vendorId}).exec()
    }

    async deleteVendor(vendorId: string){
        return this.vendorModel.findByIdAndDelete(vendorId).exec();
    }

    async addProducts(id:string, mfg: string){
        const products = await this.productService.getProductByMfg(mfg)
        return this.vendorModel.findByIdAndUpdate(id, {$set: { productList: products }})
    }
}