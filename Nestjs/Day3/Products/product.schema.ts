import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
    @Prop()
    productName: string;

    @Prop()
    mfg: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);