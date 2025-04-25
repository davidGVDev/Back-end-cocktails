import { Module } from '@nestjs/common';
import { MixingMethodsService } from './mixing-methods.service';
import { MixingMethodsController } from './mixing-methods.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MixingMethod } from './entities/mixing-method.entity';

@Module({
  controllers: [MixingMethodsController],
  providers: [MixingMethodsService],
  imports: [TypeOrmModule.forFeature([MixingMethod])],
})
export class MixingMethodsModule {}
