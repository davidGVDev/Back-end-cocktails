import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { IceTypesService } from './ice-types.service';
import { CreateIceTypeDto } from './dto/create-ice-type.dto';
import { UpdateIceTypeDto } from './dto/update-ice-type.dto';

@Controller('ice-types')
export class IceTypesController {
  constructor(private readonly iceTypesService: IceTypesService) {}

  @Post()
  create(@Body() createIceTypeDto: CreateIceTypeDto) {
    return this.iceTypesService.create(createIceTypeDto);
  }

  @Get()
  findAll() {
    return this.iceTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.iceTypesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateIceTypeDto: UpdateIceTypeDto) {
    return this.iceTypesService.update(id, updateIceTypeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.iceTypesService.remove(id);
  }
}
