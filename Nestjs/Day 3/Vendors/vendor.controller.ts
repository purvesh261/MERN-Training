import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { VendorDTO } from './vendor.dto';

@Controller('/vendors')
export class VendorController {
    constructor(private readonly vendorService: VendorService) {}

    @Get()
    async getAllVendors() {
        return this.vendorService.getAllVendors();
    }

    @Post('/create')
    async createVendor(@Body() createVendorDTO : VendorDTO) {
        return await this.vendorService.createVendor(createVendorDTO);
    }

    @Get('/:id')
    async getVendor(@Param('id') id: string){
        return this.vendorService.getVendor(id);
    }

    @Delete('/:id/delete')
    async deleteVendor(@Param('id') id: string){
        return this.vendorService.deleteVendor(id);
    }

    @Put("/:id/:mfg")
    async addProduct(@Param('id') id: string, @Param('mfg') mfg: string){
        return this.vendorService.addProducts(id, mfg);
    }
}