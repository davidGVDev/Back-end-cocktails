import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateCocktailDto } from './dto/create-cocktail.dto';
import { UpdateCocktailDto } from './dto/update-cocktail.dto';
import { Repository } from 'typeorm';
import { Cocktail } from './entities/cocktail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as cloudinary from 'cloudinary';
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

  async uploadImageToCloudinary(file: Express.Multer.File): Promise<string> {
    cloudinary.v2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const folder = 'cocktails';
    const publicId = file.originalname.split('.')[0] + '-' + Date.now();

    return new Promise((resolve, reject) => {
      const upload = cloudinary.v2.uploader.upload_stream(
        {
          folder,
          public_id: publicId,
          resource_type: 'image',
        },
        (error, result) => {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            resolve(result.secure_url);
          }
        }
      );
      upload.end(file.buffer);
    });
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
    if (Object.keys(updateCocktailDto).length === 0) {
      throw new BadRequestException('No se proporcionaron datos para actualizar');
    }

    const cocktail = await this.findOne(id);
    await this.cocktailRepository.update(id, updateCocktailDto);
    return {
      ...cocktail,
      ...updateCocktailDto,
    };
  }

  async remove(id: string) {
    const cocktail = await this.findOne(id);
    if (cocktail.image) {
      try {
        await this.deleteImageFromCloudinary(cocktail.image);
      } catch (error) {
        this.logger.error(`Error deleting image from Cloudinary: ${error.message}`);
      }
    }
    await this.cocktailRepository.remove(cocktail);
    return {
      message: `Cocktail with id ${id} removed`,
    };
  }

  private async deleteImageFromCloudinary(imageUrl: string): Promise<void> {
    cloudinary.v2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    const urlParts = imageUrl.split('/');
    const folder = 'cocktails';
    const fileName = urlParts[urlParts.length - 1].split('.')[0];
    const publicId = `${folder}/${fileName}`;
    return new Promise((resolve, reject) => {
      cloudinary.v2.uploader.destroy(publicId, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
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
