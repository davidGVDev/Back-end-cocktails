import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { GarnishTypesService } from './garnish-types.service';
import { CreateGarnishTypeDto } from './dto/create-garnish-type.dto';
import { UpdateGarnishTypeDto } from './dto/update-garnish-type.dto';

@Controller('garnish-types')
export class GarnishTypesController {
  constructor(private readonly garnishTypesService: GarnishTypesService) {}

  @Post()
  create(@Body() createGarnishTypeDto: CreateGarnishTypeDto) {
    return this.garnishTypesService.create(createGarnishTypeDto);
  }

  @Get()
  findAll() {
    return this.garnishTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.garnishTypesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateGarnishTypeDto: UpdateGarnishTypeDto) {
    return this.garnishTypesService.update(id, updateGarnishTypeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.garnishTypesService.remove(id);
  }
}
