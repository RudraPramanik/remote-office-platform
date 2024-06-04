import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll() {
    return this.itemsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.findone(id);
  }
  @Post(':id')
  update(@Param(':id') id: string, @Body() updateItemDto: CreateItemDto) {
    return this.itemsService.update(id, updateItemDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.itemsService.delete(id);
  }
}
