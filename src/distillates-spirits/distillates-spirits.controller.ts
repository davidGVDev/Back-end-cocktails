import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { DistillatesSpiritsService } from './distillates-spirits.service';
import { CreateDistillatesSpiritDto } from './dto/create-distillates-spirit.dto';
import { UpdateDistillatesSpiritDto } from './dto/update-distillates-spirit.dto';

@Controller('distillates-spirits')
export class DistillatesSpiritsController {
  constructor(private readonly distillatesSpiritsService: DistillatesSpiritsService) {}

  @Post()
  create(@Body() createDistillatesSpiritDto: CreateDistillatesSpiritDto) {
    return this.distillatesSpiritsService.create(createDistillatesSpiritDto);
  }

  @Get()
  findAll() {
    return this.distillatesSpiritsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.distillatesSpiritsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateDistillatesSpiritDto: UpdateDistillatesSpiritDto) {
    return this.distillatesSpiritsService.update(id, updateDistillatesSpiritDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.distillatesSpiritsService.remove(id);
  }
}
