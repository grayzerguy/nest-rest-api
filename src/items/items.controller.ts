/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Post, Put , Param} from '@nestjs/common';
import CreateItemDto from './dto/create-item.dto';


@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'Get all items';
  }
  @Get(':id')
    findOne(@Param() param): string {
        return `Item ${param.id}`;
    }
  @Post()
    create(@Body(
    ) createItemDto: CreateItemDto): Promise<Item> {
      return this.itemsService.create(createItemDto);
        
               
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Item> {
        return this.itemsService.delete(id);
 
    }
    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
        return this.itemsService.update(id, updateItemDto);
    }

}
        




