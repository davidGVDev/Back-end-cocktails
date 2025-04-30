import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCommonDto } from './dto/create-common.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipment } from 'src/equipments/entities/equipment.entity';
import { Glassware } from 'src/glassware/entities/glassware.entity';
import {
  essentialEquipment,
  glassware,
  iceTypes,
  garnishTypes,
  distillates_spirits,
  mixingMethods,
} from 'data';
import { IceType } from 'src/ice-types/entities/ice-type.entity';
import { GarnishType } from 'src/garnish-types/entities/garnish-type.entity';
import { DistillatesSpirit } from 'src/distillates-spirits/entities/distillates-spirit.entity';
import { MixingMethod } from 'src/mixing-methods/entities/mixing-method.entity';

@Injectable()
export class CommonService {
  constructor(
    @InjectRepository(Equipment)
    private equipmentRepository: Repository<Equipment>,
    @InjectRepository(Glassware)
    private glasswareRepository: Repository<Glassware>,
    @InjectRepository(IceType)
    private iceTypeRepository: Repository<IceType>,
    @InjectRepository(GarnishType)
    private garnishTypeRepository: Repository<GarnishType>,
    @InjectRepository(DistillatesSpirit)
    private distillatesSpiritRepository: Repository<DistillatesSpirit>,
    @InjectRepository(MixingMethod)
    private mixingMethodRepository: Repository<MixingMethod>,
  ) {}

  seed(createCommonDto: CreateCommonDto) {
    const { table } = createCommonDto;

    switch (table) {
      case 'equipment':
        return this.seedEquipments();
      case 'glassware':
        return this.seedGlassware();
      case 'ice_type':
        return this.seedIceType();
      case 'garnish_type':
        return this.seedGarnish();
      case 'distillate_spirit':
        return this.seedDistillateSpirit();
      case 'mixing_method':
        return this.seedMixingMethod();

      default:
        throw new InternalServerErrorException(`Table ${table} not found`);
    }
  }

  private async seedEquipments() {
    await this.equipmentRepository.delete({});
    await this.equipmentRepository.save(essentialEquipment);
    return 'Equipments seeded successfully';
  }

  private async seedGlassware() {
    await this.glasswareRepository.delete({});
    await this.glasswareRepository.save(glassware);
    return 'Glassware seeded successfully';
  }

  private async seedIceType() {
    await this.iceTypeRepository.delete({});
    await this.iceTypeRepository.save(iceTypes);
    return 'IceType seeded successfully';
  }

  private async seedGarnish() {
    await this.garnishTypeRepository.delete({});
    await this.garnishTypeRepository.save(garnishTypes);
    return 'GarnishType seeded successfully';
  }

  private async seedDistillateSpirit() {
    await this.distillatesSpiritRepository.delete({});
    await this.distillatesSpiritRepository.save(distillates_spirits);
    return 'DistillateSpirit seeded successfully';
  }

  private async seedMixingMethod() {
    await this.mixingMethodRepository.delete({});
    await this.mixingMethodRepository.save(mixingMethods);
    return 'MixingMethod seeded successfully';
  }
}
