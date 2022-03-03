import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDTO } from './product.dto';

@Controller('/products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async getAllproducts() {
        return this.productService.getAllProducts();
    }

    @Post('/create')
    async createProduct(@Body() createProductDTO : ProductDTO) {
        return await this.productService.createProduct(createProductDTO);
    }

    @Get('mfg/:mfg')
    async getProductByMfg(@Param('mfg') mfg: string){
        return this.productService.getProductByMfg(mfg);
    }
}