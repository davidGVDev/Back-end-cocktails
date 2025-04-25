import { Injectable } from '@nestjs/common';
import { CreateGlasswareDto } from './dto/create-glassware.dto';
import { UpdateGlasswareDto } from './dto/update-glassware.dto';

@Injectable()
export class GlasswareService {
  create(createGlasswareDto: CreateGlasswareDto) {
    return 'This action adds a new glassware';
  }

  findAll() {
    return `This action returns all glassware`;
  }

  findOne(id: string) {
    return `This action returns a #${id} glassware`;
  }

  update(id: string, updateGlasswareDto: UpdateGlasswareDto) {
    return `This action updates a #${id} glassware`;
  }

  remove(id: string) {
    return `This action removes a #${id} glassware`;
  }
}
