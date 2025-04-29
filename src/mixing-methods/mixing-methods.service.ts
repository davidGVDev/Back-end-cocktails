import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateMixingMethodDto } from './dto/create-mixing-method.dto';
import { UpdateMixingMethodDto } from './dto/update-mixing-method.dto';
import { Repository } from 'typeorm';
import { MixingMethod } from './entities/mixing-method.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MixingMethodsService {
  private readonly logger = new Logger('MixingMethodsService');

  constructor(
    @InjectRepository(MixingMethod)
    private readonly mixingMethodRepository: Repository<MixingMethod>,
  ) {}

  async create(createMixingMethodDto: CreateMixingMethodDto) {
    try {
      const mixingMethod = this.mixingMethodRepository.create(createMixingMethodDto);
      await this.mixingMethodRepository.save(mixingMethod);
      return mixingMethod;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.mixingMethodRepository.find();
  }

  async findOne(id: string) {
    const mixingMethod = await this.mixingMethodRepository.findOneBy({ id });
    if (!mixingMethod) {
      throw new NotFoundException(`Mixing method with id ${id} not found`);
    }
    return mixingMethod;
  }

  async update(id: string, updateMixingMethodDto: UpdateMixingMethodDto) {
    const mixingMethod = await this.findOne(id);
    await this.mixingMethodRepository.update(id, updateMixingMethodDto);
    return {
      ...mixingMethod,
      ...updateMixingMethodDto,
    };
  }

  async remove(id: string) {
    const mixingMethod = await this.findOne(id);
    await this.mixingMethodRepository.remove(mixingMethod);
    return {
      message: `Mixing method with id ${id} removed`,
    };
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
