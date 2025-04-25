import { Module } from '@nestjs/common';
import { GlasswareService } from './glassware.service';
import { GlasswareController } from './glassware.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Glassware } from './entities/glassware.entity';

@Module({
  controllers: [GlasswareController],
  providers: [GlasswareService],
  imports: [TypeOrmModule.forFeature([Glassware])],
})
export class GlasswareModule {}
