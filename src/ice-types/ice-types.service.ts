import { Injectable } from '@nestjs/common';
import { CreateIceTypeDto } from './dto/create-ice-type.dto';
import { UpdateIceTypeDto } from './dto/update-ice-type.dto';

@Injectable()
export class IceTypesService {
  create(createIceTypeDto: CreateIceTypeDto) {
    return 'This action adds a new iceType';
  }

  findAll() {
    return `This action returns all iceTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} iceType`;
  }

  update(id: number, updateIceTypeDto: UpdateIceTypeDto) {
    return `This action updates a #${id} iceType`;
  }

  remove(id: number) {
    return `This action removes a #${id} iceType`;
  }
}
