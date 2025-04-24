import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MixingMethodsService } from './mixing-methods.service';
import { CreateMixingMethodDto } from './dto/create-mixing-method.dto';
import { UpdateMixingMethodDto } from './dto/update-mixing-method.dto';

@Controller('mixing-methods')
export class MixingMethodsController {
  constructor(private readonly mixingMethodsService: MixingMethodsService) {}

  @Post()
  create(@Body() createMixingMethodDto: CreateMixingMethodDto) {
    return this.mixingMethodsService.create(createMixingMethodDto);
  }

  @Get()
  findAll() {
    return this.mixingMethodsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mixingMethodsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMixingMethodDto: UpdateMixingMethodDto) {
    return this.mixingMethodsService.update(+id, updateMixingMethodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mixingMethodsService.remove(+id);
  }
}
