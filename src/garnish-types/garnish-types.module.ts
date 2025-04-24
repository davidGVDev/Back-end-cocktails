import { Module } from '@nestjs/common';
import { GarnishTypesService } from './garnish-types.service';
import { GarnishTypesController } from './garnish-types.controller';

@Module({
  controllers: [GarnishTypesController],
  providers: [GarnishTypesService],
})
export class GarnishTypesModule {}
