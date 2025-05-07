import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { CocktailsService } from './cocktails.service';
import { CreateCocktailDto } from './dto/create-cocktail.dto';
import { UpdateCocktailDto } from './dto/update-cocktail.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { imageFilter } from './helpers/imageFilter.helper';

@Controller('cocktails')
export class CocktailsController {
  constructor(private readonly cocktailsService: CocktailsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', { fileFilter: imageFilter }))
  async create(
    @Body() createCocktailDto: CreateCocktailDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const imageUrl = await this.cocktailsService.uploadImageToCloudinary(file);
    return this.cocktailsService.create({
      ...createCocktailDto,
      image: imageUrl,
    });
  }

  @Get()
  findAll() {
    return this.cocktailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.cocktailsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCocktailDto: UpdateCocktailDto,
  ) {
    return this.cocktailsService.update(id, updateCocktailDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.cocktailsService.remove(id);
  }
}
