import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateGarnishTypeDto } from './dto/create-garnish-type.dto';
import { UpdateGarnishTypeDto } from './dto/update-garnish-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GarnishType } from './entities/garnish-type.entity';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';

@Injectable()
export class GarnishTypesService {
  private readonly logger = new Logger('GarnishTypesService');

  constructor(
    @InjectRepository(GarnishType)
    private readonly garnishTypeRepository: Repository<GarnishType>,
  ) {}

  async create(createGarnishTypeDto: CreateGarnishTypeDto) {
    try {
      const garnishType = this.garnishTypeRepository.create(createGarnishTypeDto);
      await this.garnishTypeRepository.save(garnishType);
      return garnishType;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.garnishTypeRepository.find();
  }

  async findOne(id: string) {
    const garnishType = await this.garnishTypeRepository.findOneBy({ id });
    if (!garnishType) {
      throw new NotFoundException(`Garnish type with id ${id} not found`);
    }
    return garnishType;
  }

  async update(id: string, updateGarnishTypeDto: UpdateGarnishTypeDto) {
    const garnishType = await this.findOne(id);
    await this.garnishTypeRepository.update(id, updateGarnishTypeDto);
    return {
      ...garnishType,
      ...updateGarnishTypeDto,
    };
  }

  async remove(id: string) {
    const garnishType = await this.findOne(id);
    await this.garnishTypeRepository.remove(garnishType);
    return {
      message: `Garnish type with id ${id} removed`,
    };
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
