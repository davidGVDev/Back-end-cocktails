import { Module } from '@nestjs/common';
import { IceTypesService } from './ice-types.service';
import { IceTypesController } from './ice-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IceType } from './entities/ice-type.entity';

@Module({
  controllers: [IceTypesController],
  providers: [IceTypesService],
  imports: [TypeOrmModule.forFeature([IceType])],
  exports: [IceTypesService],
})
export class IceTypesModule {}
