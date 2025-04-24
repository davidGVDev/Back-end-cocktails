import { PartialType } from '@nestjs/mapped-types';
import { CreateDistillatesSpiritDto } from './create-distillates-spirit.dto';

export class UpdateDistillatesSpiritDto extends PartialType(CreateDistillatesSpiritDto) {}
