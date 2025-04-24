import { PartialType } from '@nestjs/mapped-types';
import { CreateMixingMethodDto } from './create-mixing-method.dto';

export class UpdateMixingMethodDto extends PartialType(CreateMixingMethodDto) {}
