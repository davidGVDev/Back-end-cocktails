import {
  Injectable,
  InternalServerErrorException,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateGlasswareDto } from './dto/create-glassware.dto';
import { UpdateGlasswareDto } from './dto/update-glassware.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Glassware } from './entities/glassware.entity';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';

@Injectable()
export class GlasswareService {
  private readonly logger = new Logger('GlasswareService');

  constructor(
    @InjectRepository(Glassware)
    private readonly glasswareRepository: Repository<Glassware>,
  ) {}

  async create(createGlasswareDto: CreateGlasswareDto) {
    try {
      const glassware = this.glasswareRepository.create(createGlasswareDto);
      await this.glasswareRepository.save(glassware);
      return glassware;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.glasswareRepository.find();
  }

  async findOne(id: string) {
    const glassware = await this.glasswareRepository.findOneBy({ id });
    if (!glassware) {
      throw new NotFoundException(`Glassware with id ${id} not found`);
    }
    return glassware;
  }

  async update(id: string, updateGlasswareDto: UpdateGlasswareDto) {
    const glassware = await this.findOne(id);
    await this.glasswareRepository.update(id, updateGlasswareDto);
    return {
      ...glassware,
      ...updateGlasswareDto,
    };
  }

  async remove(id: string) {
    const glassware = await this.findOne(id);
    await this.glasswareRepository.remove(glassware);
    return {
      message: `Glassware with id ${id} removed`,
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
