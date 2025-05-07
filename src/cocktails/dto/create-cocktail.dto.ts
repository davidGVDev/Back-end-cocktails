import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsOptional,
  ValidateNested,
  IsUrl,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { TransformArrayDto } from '../helpers/transform-array.helper';

class IngredientDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}

class InstructionDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}

export class CreateCocktailDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  distilled: string;

  @IsString()
  @IsNotEmpty()
  iceType: string;

  @IsString()
  @IsNotEmpty()
  garnish: string;

  @IsString()
  @IsNotEmpty()
  glass: string;

  @IsString()
  @IsNotEmpty()
  mixingMethod: string;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => IngredientDto)
  @Transform(TransformArrayDto(IngredientDto))
  ingredients?: IngredientDto[];

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => InstructionDto)
  @Transform(TransformArrayDto(InstructionDto))
  instructions?: InstructionDto[];

  @IsString()
  @IsOptional()
  @IsUrl()
  image?: string;
}
