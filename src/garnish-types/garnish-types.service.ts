import { Injectable } from '@nestjs/common';
import { CreateGarnishTypeDto } from './dto/create-garnish-type.dto';
import { UpdateGarnishTypeDto } from './dto/update-garnish-type.dto';

@Injectable()
export class GarnishTypesService {
  create(createGarnishTypeDto: CreateGarnishTypeDto) {
    return 'This action adds a new garnishType';
  }

  findAll() {
    return `This action returns all garnishTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} garnishType`;
  }

  update(id: number, updateGarnishTypeDto: UpdateGarnishTypeDto) {
    return `This action updates a #${id} garnishType`;
  }

  remove(id: number) {
    return `This action removes a #${id} garnishType`;
  }
}
