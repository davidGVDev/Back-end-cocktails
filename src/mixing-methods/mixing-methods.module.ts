import { Module } from '@nestjs/common';
import { MixingMethodsService } from './mixing-methods.service';
import { MixingMethodsController } from './mixing-methods.controller';

@Module({
  controllers: [MixingMethodsController],
  providers: [MixingMethodsService],
})
export class MixingMethodsModule {}
