import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from 'src/Products/product.module';
import { VendorController } from './vendor.controller';
import { VendorSchema } from './vendor.schema';
import { VendorService } from './vendor.service';


@Module({
    imports: [MongooseModule.forFeature([{name:'Vendor', schema: VendorSchema}]), ProductModule],
    controllers: [VendorController],
    providers: [VendorService]
})

export class VendorModule {};