import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.model';
import { CreateItemDto } from './dto/crete-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }
  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string): Item {
    return this.itemsService.findByID(id);
  }
  @Post()
  create(@Body() createItemDto: CreateItemDto): Item {
    return this.itemsService.create(createItemDto);
  }
  @Patch(':id')
  updateStatus(@Param('id', ParseUUIDPipe) id: string): Item {
    return this.itemsService.updateStatus(id);
  }
  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): void {
    return this.itemsService.delete(id);
  }
}
