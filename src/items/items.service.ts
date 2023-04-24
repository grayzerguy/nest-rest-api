/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';


@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "12345678",
            name: "Item 1",
            description: "Item 1 description",
            qty : 1,
        },
        {
            id: "8765431",
            name: "Item 2",
            description: "Item 2 description",
            qty : 31,
        },
    ];
 
    findAll(): Item[] {
        return this.items;
    }
}
