import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { Repository } from 'typeorm';
import { Equipment } from './entities/equipment.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EquipmentsService {
  private readonly logger = new Logger('EquipmentsService');
  constructor(
    @InjectRepository(Equipment)
    private readonly equipmentRepository: Repository<Equipment>,
  ) {}

  async create(createEquipmentDto: CreateEquipmentDto) {
    try{
      const equipment = this.equipmentRepository.create(createEquipmentDto);
      await this.equipmentRepository.save(equipment);
      return equipment;
    } catch (error) {
      this.handleDBExceptions(error); 
    }
  }

  findAll() {
    return this.equipmentRepository.find();
  }

  async findOne(id: string) {
    const equipment = await this.equipmentRepository.findOneBy({ id });
    if (!equipment) {
      throw new NotFoundException(`Equipment with id ${id} not found`);
    }
    return equipment;
  }

  async update(id: string, updateEquipmentDto: UpdateEquipmentDto) {
    const equipment = await this.findOne(id);
    await this.equipmentRepository.update(id, updateEquipmentDto);
    return {
      ...equipment,
      ...updateEquipmentDto,
    };
  }

  async remove(id: string) {
    const equipment = await this.findOne(id);
    await this.equipmentRepository.remove(equipment);
    return {
      message: `Equipment with id ${id} removed`,
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
