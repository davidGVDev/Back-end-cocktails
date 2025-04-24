import { PartialType } from '@nestjs/mapped-types';
import { CreateGarnishTypeDto } from './create-garnish-type.dto';

export class UpdateGarnishTypeDto extends PartialType(CreateGarnishTypeDto) {}
