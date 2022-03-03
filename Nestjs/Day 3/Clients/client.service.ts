import { Injectable } from '@nestjs/common';
import { MongooseModule, InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { ClientSchema } from './client.schema';
import { ClientDTO } from './clientDTO';

@Injectable()
export class ClientService{
    constructor(@InjectModel('Client') private readonly clientModel: Model<typeof ClientSchema>) {}

    async getAllClients() {
        return await this.clientModel.find().exec();
    }

    async createClient(clientDTO: ClientDTO) {
        return this.clientModel.create(clientDTO);
    }

    async getClient(clientId: string){
        return this.clientModel.findOne({_id: clientId}).exec()
    }

    async deleteClient(clientId: string){
        return this.clientModel.findByIdAndDelete(clientId).exec();
    }
}
