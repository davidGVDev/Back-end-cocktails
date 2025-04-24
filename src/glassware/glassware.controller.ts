import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GlasswareService } from './glassware.service';
import { CreateGlasswareDto } from './dto/create-glassware.dto';
import { UpdateGlasswareDto } from './dto/update-glassware.dto';

@Controller('glassware')
export class GlasswareController {
  constructor(private readonly glasswareService: GlasswareService) {}

  @Post()
  create(@Body() createGlasswareDto: CreateGlasswareDto) {
    return this.glasswareService.create(createGlasswareDto);
  }

  @Get()
  findAll() {
    return this.glasswareService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.glasswareService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGlasswareDto: UpdateGlasswareDto) {
    return this.glasswareService.update(+id, updateGlasswareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.glasswareService.remove(+id);
  }
}
