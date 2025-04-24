import { Injectable } from '@nestjs/common';
import { CreateMixingMethodDto } from './dto/create-mixing-method.dto';
import { UpdateMixingMethodDto } from './dto/update-mixing-method.dto';

@Injectable()
export class MixingMethodsService {
  create(createMixingMethodDto: CreateMixingMethodDto) {
    return 'This action adds a new mixingMethod';
  }

  findAll() {
    return `This action returns all mixingMethods`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mixingMethod`;
  }

  update(id: number, updateMixingMethodDto: UpdateMixingMethodDto) {
    return `This action updates a #${id} mixingMethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} mixingMethod`;
  }
}
