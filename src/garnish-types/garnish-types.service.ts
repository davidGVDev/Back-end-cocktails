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

  findOne(id: string) {
    return `This action returns a #${id} garnishType`;
  }

  update(id: string, updateGarnishTypeDto: UpdateGarnishTypeDto) {
    return `This action updates a #${id} garnishType`;
  }

  remove(id: string) {
    return `This action removes a #${id} garnishType`;
  }
}
