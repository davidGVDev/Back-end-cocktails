import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateCocktailDto } from './dto/create-cocktail.dto';
import { UpdateCocktailDto } from './dto/update-cocktail.dto';
import { Repository } from 'typeorm';
import { Cocktail } from './entities/cocktail.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CocktailsService {
  private readonly logger = new Logger('CocktailsService');

  constructor(
    @InjectRepository(Cocktail)
    private readonly cocktailRepository: Repository<Cocktail>,
  ) {}

  async create(createCocktailDto: CreateCocktailDto) {
    try {
      const cocktail = this.cocktailRepository.create(createCocktailDto);
      await this.cocktailRepository.save(cocktail);
      return cocktail;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.cocktailRepository.find();
  }

  async findOne(id: string) {
    const cocktail = await this.cocktailRepository.findOneBy({ id });
    if (!cocktail) {
      throw new NotFoundException(`Cocktail with id ${id} not found`);
    }
    return cocktail;
  }

  async update(id: string, updateCocktailDto: UpdateCocktailDto) {
    const cocktail = await this.findOne(id);
    await this.cocktailRepository.update(id, updateCocktailDto);
    return {
      ...cocktail,
      ...updateCocktailDto,
    };
  }

  async remove(id: string) {
    const cocktail = await this.findOne(id);
    await this.cocktailRepository.remove(cocktail);
    return {
      message: `Cocktail with id ${id} removed`,
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
