import { CreateItemDto } from './dto/crete-item.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './item.model';
import { ItemStatus } from './item-status.enum';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  findAll(): Item[] {
    return this.items;
  }
  findByID(id: string): Item {
    const found = this.items.find((i) => i.id === id);
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }
  create(createItemDto: CreateItemDto): Item {
    const item: Item = {
      id: uuid(),
      ...createItemDto,
      status: ItemStatus.ON_SALE,
    };
    this.items.push(item);
    return item;
  }
  updateStatus(id: string): Item {
    const item = this.findByID(id);
    item.status = ItemStatus.SOLD_OUT;
    return item;
  }
  delete(id: string): void {
    this.items = this.items.filter((i) => i.id !== id);
  }
}
