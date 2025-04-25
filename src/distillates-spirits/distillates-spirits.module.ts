import { Module } from '@nestjs/common';
import { DistillatesSpiritsService } from './distillates-spirits.service';
import { DistillatesSpiritsController } from './distillates-spirits.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistillatesSpirit } from './entities/distillates-spirit.entity';

@Module({
  controllers: [DistillatesSpiritsController],
  providers: [DistillatesSpiritsService],
  imports: [TypeOrmModule.forFeature([DistillatesSpirit])],
})
export class DistillatesSpiritsModule {}
