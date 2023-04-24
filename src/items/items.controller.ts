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
    ) createItemDto: CreateItemDto): string {
        
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
       
    }

    @Delete(':id')
    delete(@Param("id") id ) : string {
        return `Delete ${id}`;
        
    }
    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
        return `Update ${id} - Name: ${updateItemDto.name}`;
    }



}
        




