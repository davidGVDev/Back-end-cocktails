import { Module } from '@nestjs/common';
import { GarnishTypesService } from './garnish-types.service';
import { GarnishTypesController } from './garnish-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GarnishType } from './entities/garnish-type.entity';

@Module({
  controllers: [GarnishTypesController],
  providers: [GarnishTypesService],
  imports: [TypeOrmModule.forFeature([GarnishType])],
  exports: [GarnishTypesService],
})
export class GarnishTypesModule {}
