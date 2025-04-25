import { Injectable } from '@nestjs/common';
import { CreateDistillatesSpiritDto } from './dto/create-distillates-spirit.dto';
import { UpdateDistillatesSpiritDto } from './dto/update-distillates-spirit.dto';

@Injectable()
export class DistillatesSpiritsService {
  create(createDistillatesSpiritDto: CreateDistillatesSpiritDto) {
    return 'This action adds a new distillatesSpirit';
  }

  findAll() {
    return `This action returns all distillatesSpirits`;
  }

  findOne(id: string) {
    return `This action returns a #${id} distillatesSpirit`;
  }

  update(id: string, updateDistillatesSpiritDto: UpdateDistillatesSpiritDto) {
    return `This action updates a #${id} distillatesSpirit`;
  }

  remove(id: string) {
    return `This action removes a #${id} distillatesSpirit`;
  }
}
