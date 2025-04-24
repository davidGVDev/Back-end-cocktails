import { Module } from '@nestjs/common';
import { IceTypesService } from './ice-types.service';
import { IceTypesController } from './ice-types.controller';

@Module({
  controllers: [IceTypesController],
  providers: [IceTypesService],
})
export class IceTypesModule {}
