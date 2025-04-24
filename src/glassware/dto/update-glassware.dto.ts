import { PartialType } from '@nestjs/mapped-types';
import { CreateGlasswareDto } from './create-glassware.dto';

export class UpdateGlasswareDto extends PartialType(CreateGlasswareDto) {}
