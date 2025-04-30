import { Controller, Post, Body } from '@nestjs/common';
import { CommonService } from './common.service';
import { CreateCommonDto } from './dto/create-common.dto';

@Controller('common')
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @Post('seed')
  seed(@Body() createCommonDto: CreateCommonDto) {
    return this.commonService.seed(createCommonDto);
  }

  
}
