import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientDTO } from './clientDTO';

@Controller('/client')
export class ClientController {
    constructor(private readonly clientService: ClientService) {}

    @Get()
    async getAllClients() {
        return this.clientService.getAllClients();
    }

    @Post('/create')
    async createClient(@Body() createClientDTO : ClientDTO) {
        return await this.clientService.createClient(createClientDTO);
    }

    @Get('/:id')
    async getClient(@Param('id') id: string){
        return this.clientService.getClient(id);
    }

    @Delete('/:id/delete')
    async deleteClient(@Param('id') id: string){
        return this.clientService.deleteClient(id);
    }
}