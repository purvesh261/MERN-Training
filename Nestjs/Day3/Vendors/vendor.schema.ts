import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Vendor {
    @Prop()
    vendorName: string;

    @Prop()
    address: string;

    @Prop()
    phone: number;

    @Prop()
    productList: [];
}

export const VendorSchema = SchemaFactory.createForClass(Vendor);