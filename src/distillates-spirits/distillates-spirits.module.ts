import { Module } from '@nestjs/common';
import { DistillatesSpiritsService } from './distillates-spirits.service';
import { DistillatesSpiritsController } from './distillates-spirits.controller';

@Module({
  controllers: [DistillatesSpiritsController],
  providers: [DistillatesSpiritsService],
})
export class DistillatesSpiritsModule {}
