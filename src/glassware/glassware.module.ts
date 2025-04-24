import { Module } from '@nestjs/common';
import { GlasswareService } from './glassware.service';
import { GlasswareController } from './glassware.controller';

@Module({
  controllers: [GlasswareController],
  providers: [GlasswareService],
})
export class GlasswareModule {}
