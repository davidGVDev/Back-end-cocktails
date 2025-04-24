import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MixingMethodsModule } from './mixing-methods/mixing-methods.module';
import { EquipmentsModule } from './equipments/equipments.module';
import { GlasswareModule } from './glassware/glassware.module';
import { IceTypesModule } from './ice-types/ice-types.module';
import { GarnishTypesModule } from './garnish-types/garnish-types.module';
import { DistillatesSpiritsModule } from './distillates-spirits/distillates-spirits.module';
import { CocktailsModule } from './cocktails/cocktails.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    MixingMethodsModule,
    EquipmentsModule,
    GlasswareModule,
    IceTypesModule,
    GarnishTypesModule,
    DistillatesSpiritsModule,
    CocktailsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
