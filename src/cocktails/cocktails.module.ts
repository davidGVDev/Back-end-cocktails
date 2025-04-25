import { Module } from '@nestjs/common';
import { CocktailsService } from './cocktails.service';
import { CocktailsController } from './cocktails.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cocktail } from './entities/cocktail.entity';

@Module({
  controllers: [CocktailsController],
  providers: [CocktailsService],
  imports: [TypeOrmModule.forFeature([Cocktail])],
})
export class CocktailsModule {}
