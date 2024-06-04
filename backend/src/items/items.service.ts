import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './create-item.dto';

@Injectable()
export class ItemsService {
  private items = [];

  findAll() {
    return this.items;
  }

  findone(id: string) {
    return this.items.find((item) => item.id === id);
  }

  create(CreateItemDto: CreateItemDto) {
    const newItem = {
      id: Date.now().toString(),
      ...CreateItemDto,
    };
    this.items.push(newItem);
    return newItem;
  }
  update(id: string, updateItemDto: CreateItemDto) {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
      this.items[itemIndex] = { id, ...updateItemDto };
      return this.items[itemIndex];
    }
    return null;
  }
  delete(id: string) {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
      const deletedItem = this.items.splice(itemIndex, 1);
      return deletedItem[0];
    }
    return null;
  }
}
