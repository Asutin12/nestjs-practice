import { Injectable } from '@nestjs/common';
import { Item } from './item.model';
import { ItemStatus } from './item-status.enum';

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  findAll(): Item[] {
    return this.items;
  }
  findByID(id: string): Item {
    return this.items.find((i) => i.id === id);
  }
  create(item: Item): Item {
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
