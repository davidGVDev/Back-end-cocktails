import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateIceTypeDto } from './dto/create-ice-type.dto';
import { UpdateIceTypeDto } from './dto/update-ice-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { IceType } from './entities/ice-type.entity';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';

@Injectable()
export class IceTypesService {
  private readonly logger = new Logger('IceTypesService');

  constructor(
    @InjectRepository(IceType)
    private readonly iceTypeRepository: Repository<IceType>,
  ) {}

  async create(createIceTypeDto: CreateIceTypeDto) {
    try {
      const iceType = this.iceTypeRepository.create(createIceTypeDto);
      await this.iceTypeRepository.save(iceType);
      return iceType;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.iceTypeRepository.find();
  }

  async findOne(id: string) {
    const iceType = await this.iceTypeRepository.findOneBy({ id });
    if (!iceType) {
      throw new NotFoundException(`Ice type with id ${id} not found`);
    }
    return iceType;
  }

  async update(id: string, updateIceTypeDto: UpdateIceTypeDto) {
    const iceType = await this.findOne(id);
    await this.iceTypeRepository.update(id, updateIceTypeDto);
    return {
      ...iceType,
      ...updateIceTypeDto,
    };
  }

  async remove(id: string) {
    const iceType = await this.findOne(id);
    await this.iceTypeRepository.remove(iceType);
    return {
      message: `Ice type with id ${id} removed`,
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
