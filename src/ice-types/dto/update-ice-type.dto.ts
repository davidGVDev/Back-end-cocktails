import { PartialType } from '@nestjs/mapped-types';
import { CreateIceTypeDto } from './create-ice-type.dto';

export class UpdateIceTypeDto extends PartialType(CreateIceTypeDto) {}
