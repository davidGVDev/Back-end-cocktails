import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { CommonController } from './common.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipment } from 'src/equipments/entities/equipment.entity';
import { Glassware } from 'src/glassware/entities/glassware.entity';
import { IceType } from 'src/ice-types/entities/ice-type.entity';
import { MixingMethod } from 'src/mixing-methods/entities/mixing-method.entity';
import { GarnishType } from 'src/garnish-types/entities/garnish-type.entity';
import { DistillatesSpirit } from 'src/distillates-spirits/entities/distillates-spirit.entity';


@Module({
  controllers: [CommonController],
  providers: [CommonService],
  imports: [
    TypeOrmModule.forFeature([
      Equipment,
      Glassware,
      IceType,
      MixingMethod,
      GarnishType,
      DistillatesSpirit,
    ]),
  ],
})
export class CommonModule {}
