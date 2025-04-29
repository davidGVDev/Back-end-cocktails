import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateDistillatesSpiritDto } from './dto/create-distillates-spirit.dto';
import { UpdateDistillatesSpiritDto } from './dto/update-distillates-spirit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DistillatesSpirit } from './entities/distillates-spirit.entity';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';

@Injectable()
export class DistillatesSpiritsService {
  private readonly logger = new Logger('DistillatesSpiritsService');

  constructor(
    @InjectRepository(DistillatesSpirit)
    private readonly distillatesSpiritRepository: Repository<DistillatesSpirit>,
  ) {}

  async create(createDistillatesSpiritDto: CreateDistillatesSpiritDto) {
    try {
      const distillatesSpirit = this.distillatesSpiritRepository.create(createDistillatesSpiritDto);
      await this.distillatesSpiritRepository.save(distillatesSpirit);
      return distillatesSpirit;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.distillatesSpiritRepository.find();
  }

  async findOne(id: string) {
    const distillatesSpirit = await this.distillatesSpiritRepository.findOneBy({ id });
    if (!distillatesSpirit) {
      throw new NotFoundException(`Distillates spirit with id ${id} not found`);
    }
    return distillatesSpirit;
  }

  async update(id: string, updateDistillatesSpiritDto: UpdateDistillatesSpiritDto) {
    const distillatesSpirit = await this.findOne(id);
    await this.distillatesSpiritRepository.update(id, updateDistillatesSpiritDto);
    return {
      ...distillatesSpirit,
      ...updateDistillatesSpiritDto,
    };
  }

  async remove(id: string) {
    const distillatesSpirit = await this.findOne(id);
    await this.distillatesSpiritRepository.remove(distillatesSpirit);
    return {
      message: `Distillates spirit with id ${id} removed`,
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
